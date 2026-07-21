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
    <div className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">ABOUT ME</h1>
          <div className="mt-4 h-1 w-24 rounded-full bg-[#00EC97] shadow-[0_0_10px_rgba(0,236,151,0.5)]" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ferdy Setiawan
              </h2>
              <p className="text-sm font-medium text-gray-400">Worker of Modern Industries</p>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed text-gray-300">
              <p>
                A graduate of Computer and Network Engineering with a strong interest in developing
                technical skills within the manufacturing industry. I have several years of hands-on
                work experience in the production field. My educational background has equipped me
                with the skills needed for production data processing and manufacturing workflows.
              </p>
              <p>
                I am passionate about continuous learning and always strive to deliver precise,
                efficient, and reliable results, whether in a technical, operational, or
                collaborative environment.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#080808] p-6 shadow-xl">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#00EC97]">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(({ label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-lg border border-[#1f1f1f] bg-black px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-[#00EC97]/50"
                  >
                    <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00EC97]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-2xl border border-[#1f1f1f] bg-[#080808] p-6 shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">4<span className="text-[#00EC97]">+</span></p>
                <p className="mt-1 text-xs font-medium text-gray-500 uppercase tracking-wider">Years Exp</p>
              </div>
              <div className="border-x border-[#1f1f1f] text-center">
                <p className="text-3xl font-bold text-white">3</p>
                <p className="mt-1 text-xs font-medium text-gray-500 uppercase tracking-wider">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">2<span className="text-[#00EC97]">+</span></p>
                <p className="mt-1 text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}