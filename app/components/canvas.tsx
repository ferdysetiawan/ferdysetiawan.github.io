import Image from "next/image";
import Whois from "@/public/whois.png";
import Cekwarna from "@/public/cekwarna.png";

const projects = [
  {
    image: Whois,
    title: "WHOIS",
    githubUrl: "https://github.com/ferdysetiawan/whois",
    liveUrl: "https://whois-ferdysetiawan.vercel.app/",
    description: "A domain and IP lookup tool for quickly retrieving registration and ownership data with a clean, simple interface.",
    tags: ["Network", "Domain"],
  },
  {
    image: Cekwarna,
    title: "CEKWARNA",
    githubUrl: "https://github.com/ferdysetiawan/cekwarna",
    liveUrl: "https://cekwarna.vercel.app/",
    description: "A dead pixel detection tool that uses solid color screens to help users identify display defects on any device.",
    tags: ["Colors", "Tools"],
  },
];

export default function Canvas() {
  return (
    <section id="canvas" className="bg-black py-24">
      <style>{`
        @keyframes shine-border {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .shine-card {
          padding: 1.5px;
          border-radius: 0.75rem;
          background: linear-gradient(270deg, #A07CFE, #FE8FB5, #FFBE7B, #FE8FB5, #A07CFE);
          background-size: 300% 300%;
          animation: shine-border 4s ease infinite;
        }
        .card-inner {
          background: #11141B;
          border-radius: 0.65rem;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold text-white">Canvas</h2>
          <div className="mt-3 h-1 w-28 rounded-full bg-[#00EC97]" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map(({ image, title, githubUrl, liveUrl, description, tags }) => (
            <div key={title} className="shine-card">
              <div className="card-inner">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block shrink-0">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                </a>
                <div className="flex flex-grow flex-col gap-2 p-5">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    {title}
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-sm text-[#00EC97] transition-opacity hover:opacity-80"
                  >
                    {liveUrl}
                  </a>
                  <p className="mt-1 flex-grow text-sm leading-relaxed text-gray-400">
                    {description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#005253] px-2 py-1 text-xs text-[#abf8f3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}