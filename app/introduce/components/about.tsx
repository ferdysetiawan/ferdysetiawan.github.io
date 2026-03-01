const skills = [
  { label: "Computer & Network Engineering" },
  { label: "Hardware & Software Troubleshooting" },
  { label: "Network Installation (LAN/Wi-Fi)" },
  { label: "Production Operations" },
  { label: "Data Processing" },
  { label: "System Maintenance" },
];

export default function About() {
  return (
    <div className="bg-black py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">ABOUT ME</h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#00EC97]" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#00EC97]">Who I Am</p>
              <h2 className="mt-2 text-2xl font-extrabold text-white">Ferdy Setiawan</h2>
              <p className="mt-1 text-sm text-gray-400">Worker of Modern Industries</p>
            </div>
            <p className="text-justify text-sm leading-relaxed text-gray-300">
              A graduate of Computer and Network Engineering with a strong interest in developing
              technical skills within the manufacturing industry. I have several years of hands-on
              work experience in the production field. My educational background has equipped me
              with the skills needed for production data processing and manufacturing workflows.
            </p>
            <p className="text-justify text-sm leading-relaxed text-gray-300">
              I am passionate about continuous learning and always strive to deliver precise,
              efficient, and reliable results, whether in a technical, operational, or
              collaborative environment.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#00EC97]">Core Skills</p>
              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {skills.map(({ label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-md border border-[#1f1f1f] bg-[#0a0a0a] px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#00EC97]" />
                    <span className="text-sm text-gray-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-4 border-t border-[#1f1f1f] pt-6">
              <div>
                <p className="text-2xl font-bold text-white">4+</p>
                <p className="mt-0.5 text-xs text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="mt-0.5 text-xs text-gray-500">Companies</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2+</p>
                <p className="mt-0.5 text-xs text-gray-500">Freelance Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}