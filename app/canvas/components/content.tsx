import Image from "next/image";
import Whois from "@/public/whois.png";
import Cekwarna from "@/public/cekwarna.png";

type Project = {
  image?: Parameters<typeof Image>[0]["src"];
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags?: string[];
  released: boolean;
};

const projects: Project[] = [
  {
    image: Whois,
    title: "WHOIS",
    description: "A domain and IP lookup tool that provides instant access to registration and ownership data.",
    url: "https://whois-ferdysetiawan.vercel.app/",
    github: "https://github.com/ferdysetiawan/whois",
    tags: ["Network", "Domain"],
    released: true,
  },
  {
    image: Cekwarna,
    title: "CEKWARNA",
    description: "A dead pixel checker tool using solid color screens to help users identify display defects.",
    url: "https://cekwarna.vercel.app/",
    github: "https://github.com/ferdysetiawan/cekwarna",
    tags: ["Colors", "Tools"],
    released: true,
  },
  {
    title: "PROJECT THREE",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Tag1", "Tag2"],
    released: false,
  },
  {
    title: "PROJECT FOUR",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Tag1", "Tag2"],
    released: false,
  },
  {
    title: "PROJECT FIVE",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Tag1", "Tag2"],
    released: false,
  },
  {
    title: "PROJECT SIX",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Tag1", "Tag2"],
    released: false,
  },
];

export default function Content() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-extrabold text-white">Canvas</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#00EC97]" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] transition-all duration-300 ${
                project.released ? "hover:border-[#2f2f2f] hover:-translate-y-1" : ""
              }`}
            >
              {project.image && (
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-300 ${!project.released ? "blur-sm brightness-50" : ""}`}
                  />
                </div>
              )}
              {!project.image && (
                <div className={`h-44 w-full bg-[#111] ${!project.released ? "opacity-40" : ""}`} />
              )}
              <div className={`p-5 ${!project.released ? "blur-sm select-none" : ""}`}>
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  {project.released && project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-[#00EC97] transition-opacity hover:opacity-70"
                      aria-label="Visit project"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#001a12] px-2 py-0.5 text-xs text-[#00EC97]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {!project.released && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border border-[#2f2f2f] bg-black/80 px-4 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-semibold tracking-widest text-gray-400">
                      RELEASE SOON
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}