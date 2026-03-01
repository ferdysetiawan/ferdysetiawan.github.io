"use client";
import { useEffect, useRef } from "react";

export default function Efek() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { alpha: true });
    if (!gl) return;

    const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

    const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1  = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m * m * m * m;
  vec3 x2 = 2.0 * fract(p * C.www) - 1.0;
  vec3 h  = abs(x2) - 0.5;
  vec3 ox = floor(x2 + 0.5);
  vec3 a0 = x2 - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x   + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  // WebGL: y=0 bottom, y=1 top
  // We want aurora near the top ~0.75-0.95

  vec3 green  = vec3(0.0, 0.925, 0.592);
  vec3 purple = vec3(0.55, 0.02, 0.85);
  vec3 violet = vec3(0.70, 0.10, 0.90);

  // curtain rays: vertical streaks driven by x-varying noise
  float ray1 = snoise(vec2(uv.x * 4.0 + uTime * 0.04, uTime * 0.06)) * 0.5 + 0.5;
  float ray2 = snoise(vec2(uv.x * 3.5 - uTime * 0.05, uTime * 0.07 + 1.5)) * 0.5 + 0.5;
  float ray3 = snoise(vec2(uv.x * 5.0 + uTime * 0.03, uTime * 0.05 + 3.0)) * 0.5 + 0.5;

  // top edge of aurora — sits just below top
  float topEdge = 0.92 + snoise(vec2(uv.x * 1.5 + uTime * 0.04, uTime * 0.08)) * 0.04;

  // aurora fades from topEdge downward, height varies by ray noise
  float curtainHeight = 0.52 + ray1 * 0.18;
  float bottomEdge = topEdge - curtainHeight;

  // vertical gradient within curtain: bright at top, fade at bottom
  float vertFade = smoothstep(bottomEdge, topEdge, uv.y) *
                   smoothstep(topEdge + 0.02, topEdge - 0.05, uv.y);

  // curtain is only visible in this band
  float inCurtain = step(bottomEdge, uv.y) * step(uv.y, topEdge + 0.02);

  // ray striping along x — simulates vertical curtain filaments
  float stripes = 0.5
    + 0.25 * sin(uv.x * 28.0 + snoise(vec2(uv.x * 3.0, uTime * 0.1)) * 3.0 + uTime * 0.3)
    + 0.15 * sin(uv.x * 45.0 + snoise(vec2(uv.x * 5.0, uTime * 0.12)) * 2.0 - uTime * 0.2)
    + 0.10 * sin(uv.x * 18.0 + uTime * 0.15);
  stripes = clamp(stripes, 0.0, 1.0);

  // color: purple dominant, green accent on edges
  float colorShift = snoise(vec2(uv.x * 2.0 + uTime * 0.03, uv.y * 1.5 + uTime * 0.05)) * 0.5 + 0.5;
  float greenShift = snoise(vec2(uv.x * 2.8 - uTime * 0.04, uv.y * 2.0 + uTime * 0.06 + 8.0)) * 0.5 + 0.5;

  vec3 auroraColor = mix(purple, violet, colorShift * 0.5);
  auroraColor = mix(auroraColor, green, clamp(greenShift - 0.28, 0.0, 1.0) * 1.6);

  float intensity = vertFade * stripes * inCurtain * 0.55;
  intensity = clamp(intensity, 0.0, 1.0);

  vec3 col = auroraColor * intensity;
  fragColor = vec4(col, intensity);
}`;

    const glCtx = gl;

    function compileShader(type: number, src: string) {
      const s = glCtx.createShader(type)!;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    }

    const prog = glCtx.createProgram()!;
    glCtx.attachShader(prog, compileShader(glCtx.VERTEX_SHADER, VERT));
    glCtx.attachShader(prog, compileShader(glCtx.FRAGMENT_SHADER, FRAG));
    glCtx.linkProgram(prog);
    glCtx.useProgram(prog);

    const verts = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buf = glCtx.createBuffer();
    glCtx.bindBuffer(glCtx.ARRAY_BUFFER, buf);
    glCtx.bufferData(glCtx.ARRAY_BUFFER, verts, glCtx.STATIC_DRAW);

    const loc = glCtx.getAttribLocation(prog, "position");
    glCtx.enableVertexAttribArray(loc);
    glCtx.vertexAttribPointer(loc, 2, glCtx.FLOAT, false, 0, 0);

    const uTime = glCtx.getUniformLocation(prog, "uTime");
    const uRes  = glCtx.getUniformLocation(prog, "uResolution");

    glCtx.enable(glCtx.BLEND);
    glCtx.blendFunc(glCtx.ONE, glCtx.ONE_MINUS_SRC_ALPHA);
    glCtx.clearColor(0, 0, 0, 0);

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      glCtx.viewport(0, 0, canvas.width, canvas.height);
      glCtx.uniform2f(uRes, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const start = performance.now();

    function frame() {
      raf = requestAnimationFrame(frame);
      const t = (performance.now() - start) * 0.001;
      glCtx.clear(glCtx.COLOR_BUFFER_BIT);
      glCtx.uniform1f(uTime, t);
      glCtx.drawArrays(glCtx.TRIANGLES, 0, 3);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      style={{ mixBlendMode: "screen" }}
    />
  );
}