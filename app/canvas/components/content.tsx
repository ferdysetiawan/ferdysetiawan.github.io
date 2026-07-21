import Image from "next/image";
import Whois from "@/public/media/images/whois.png";
import Cekwarna from "@/public/media/images/cekwarna.png";
import Antarapi from "@/public/media/images/antarapi.png"

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
    url: "https://whois.ferdystawn.my.id/",
    github: "https://github.com/ferdysetiawan/whois",
    tags: ["Network", "Domain"],
    released: true,
  },
  {
    image: Cekwarna,
    title: "CEKWARNA",
    description: "A dead pixel checker tool using solid color screens to help users identify display defects.",
    url: "https://cekwarna.ferdystawn.my.id/",
    github: "https://github.com/ferdysetiawan/cekwarna",
    tags: ["Colors", "Tools"],
    released: true,
  },
  {
    image:  Antarapi,
    title: "ANTARAPI",
    description: "Antarapi is an efficient API testing platform for sending, verifying, and debugging HTTP requests.",
    url : "https://antarapi.ferdystawn.my.id/",
    tags: ["Web", "Tools"],
    released: true,
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
          {projects.map((project, index) => {
            const isClickable = project.released && project.url;
            
            const cardContent = (
              <>
                {project.image && (
                  <div className="relative h-44 w-full overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover transition-transform duration-500 ${!project.released ? "blur-sm brightness-50" : "group-hover:scale-105"}`}
                    />
                  </div>
                )}
                {!project.image && (
                  <div className={`h-44 w-full shrink-0 bg-[#111] transition-colors duration-500 ${!project.released ? "opacity-40" : "group-hover:bg-[#1a1a1a]"}`} />
                )}
                <div className={`p-5 flex-grow flex flex-col ${!project.released ? "blur-sm select-none" : ""}`}>
                  <div className="mb-2">
                    <h3 className={`text-base font-bold transition-colors ${project.released ? "text-white group-hover:text-[#00EC97]" : "text-white"}`}>{project.title}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400 flex-grow">{project.description}</p>
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
              </>
            );

            const cardClasses = `group relative flex flex-col h-full overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0d0d0d] transition-all duration-300 ${
              isClickable ? "cursor-pointer hover:border-[#00EC97]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00EC97]/10" : ""
            }`;

            return isClickable ? (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardContent}
              </a>
            ) : (
              <div key={index} className={cardClasses}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}