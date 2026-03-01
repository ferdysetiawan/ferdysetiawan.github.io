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
    <div className="bg-black px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold">EXPERIENCE</h1>
        <div className="mx-auto h-1 w-24 rounded-full bg-[#00EC97]" />
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#00EC97]" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12 pl-10 last:mb-0">
            <div className="absolute -left-[5px] top-1.5 h-3 w-3 rounded-full border-2 border-[#00EC97] bg-black" />

            <div className="grid grid-cols-[80px_1fr] gap-x-5 items-start">
              <span className={`text-base font-bold ${exp.year === "Present" ? "text-[#00EC97]" : "text-[#00EC97]"}`}>
                {exp.year}
              </span>
              <div>
                <h4 className="text-base font-bold leading-snug text-white">{exp.title}</h4>
                {exp.subtitle && (
                  <p className="mt-0.5 text-sm font-medium text-gray-400">{exp.subtitle}</p>
                )}
                <p className="mt-3 text-justify text-sm leading-relaxed text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}