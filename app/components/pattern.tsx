export default function Pattern() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="currency-stripe"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <rect width="40" height="40" fill="transparent" />
            <rect x="0"  y="0" width="1.5" height="40" fill="rgba(160,124,254,0.18)" />
            <rect x="6"  y="0" width="0.7" height="40" fill="rgba(254,143,181,0.14)" />
            <rect x="10" y="0" width="2.5" height="40" fill="rgba(255,190,123,0.12)" />
            <rect x="16" y="0" width="0.7" height="40" fill="rgba(160,124,254,0.14)" />
            <rect x="20" y="0" width="1.5" height="40" fill="rgba(254,143,181,0.18)" />
            <rect x="26" y="0" width="0.7" height="40" fill="rgba(255,190,123,0.14)" />
            <rect x="30" y="0" width="2.5" height="40" fill="rgba(160,124,254,0.12)" />
            <rect x="36" y="0" width="0.7" height="40" fill="rgba(254,143,181,0.14)" />
          </pattern>

          <pattern
            id="currency-fine"
            x="0"
            y="0"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <rect width="5" height="5" fill="transparent" />
            <rect x="0" y="0" width="0.4" height="5" fill="rgba(255,255,255,0.04)" />
          </pattern>

          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%"   stopColor="black" stopOpacity="0" />
            <stop offset="100%" stopColor="black" stopOpacity="0.75" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#currency-fine)" />
        <rect width="100%" height="100%" fill="url(#currency-stripe)" />
        <rect width="100%" height="100%" fill="url(#vignette)" />
      </svg>
    </div>
  );
}