const experiences = [
  {
    year: "2020",
    title: "COMPUTER AND NETWORK ENGINEERING",
    subtitle: "SMK YADIKA 13",
    description:
      "Gained knowledge in computer assembly and maintenance, network installation and configuration, hardware and software troubleshooting, and the fundamentals of network security. The program also covered operating systems, network management, and troubleshooting techniques to ensure devices run optimally.",
  },
  {
    year: "2020",
    title: "COMPUTER TECHNICIAN",
    subtitle: "FREELANCE",
    description:
      "Performed network installation, computer repairs, and conducted routine computer maintenance within scheduled intervals.",
  },
  {
    year: "2021",
    title: "SORTING STAFF",
    subtitle: "SICEPAT EXPRESS",
    description:
      "Responsible for sorting packages by destination area to ensure accuracy and efficiency in the distribution process. Tasks included barcode scanning, verifying shipment data, and placing packages onto the correct delivery lanes to support smooth logistics flow.",
  },
  {
    year: "2022",
    title: "PRODUCTION OPERATOR",
    subtitle: "YAMAHA MUSIC MANUFACTURING ASIA",
    description:
      "Performed Setting and Sanding processes on materials in accordance with established SOPs, and carried out the separation of non-conforming (NG) materials to prevent them from proceeding to the next production stage.",
  },
  {
    year: "Present",
    title: "COMPUTER MAINTENANCE & OPERATIONAL TECHNICIAN",
    subtitle: "FREELANCE",
    description:
      "Handling installation, maintenance, and repair services for computer devices and network systems, including: performing hardware and software installation, maintenance, and repair; diagnosing and resolving operating system and LAN network issues; managing LAN/Wi-Fi network troubleshooting and optimizing inter-device connectivity; and providing consultation and recommendations for system performance improvements based on client needs.",
  },
];

export default function Timeline() {
  return (
    <div className="px-4 pb-32 pt-12 text-white sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">EXPERIENCE</h2>
        <div className="mt-4 h-1 w-24 rounded-full bg-[#00EC97] shadow-[0_0_10px_rgba(0,236,151,0.5)]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute bottom-0 left-[21px] top-0 w-[2px] bg-[#00EC97] sm:left-[105px]" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 sm:pl-[160px]">
              <div className="absolute left-[17px] sm:left-[101px] top-1.5 h-3 w-3 rounded-full bg-black border-2 border-[#00EC97]" />

              <div className="absolute left-0 top-0 hidden w-[80px] text-right sm:block">
                <span className="text-base font-bold text-[#00EC97]">{exp.year}</span>
              </div>

              <div>
                <div className="mb-1 sm:hidden">
                  <span className="text-base font-bold text-[#00EC97]">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-base font-bold leading-snug text-white">{exp.title}</h4>
                {exp.subtitle && (
                  <p className="mt-0.5 text-sm font-medium text-gray-400">
                    {exp.subtitle}
                  </p>
                )}
                <p className="mt-3 text-justify text-sm leading-relaxed text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}