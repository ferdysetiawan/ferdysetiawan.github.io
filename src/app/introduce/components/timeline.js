export default function Experience() {
  const experiences = [
    {
      year: "2020",
      title: "TEKNIK KOMPUTER DAN JARINGAN",
      subtitle: "SMK YADIKA 13",
      description: "Memahami perakitan dan pemeliharaan komputer, instalasi dan konfigurasi jaringan, pemecahan masalah perangkat keras dan perangkat lunak, serta dasar-dasar keamanan jaringan. Program ini juga mencakup pemahaman tentang sistem operasi, manajemen jaringan, dan teknik troubleshooting untuk memastikan perangkat berjalan dengan optimal."
    },
    {
      year: "2020",
      title: "TEKNISI KOMPUTER",
      subtitle: "FREELANCE",
      description: "Melaksanakan Instalasi jaringan serta perbaikan Komputer, dan Melakukan Maintenance Komputer sesuai ketentuan rentang waktu."
    },
    {
      year: "2021",
      title: "SORTIR",
      subtitle: "SICEPAT EXPRESS",
      description: "bertanggung jawab dalam mengelompokkan paket sesuai wilayah tujuan untuk memastikan akurasi dan efisiensi proses distribusi. Pekerjaan ini mencakup pemindaian barcode, pengecekan data pengiriman, serta penempatan paket ke jalur pengiriman yang tepat. Dengan memperhatikan standar operasional dan ketelitian tinggi, saya berkontribusi pada kelancaran alur logistik dan optimalisasi pengiriman agar paket sampai kepada penerima tepat waktu dan sesuai tujuan."
    },
    {
      year: "2022",
      title: "OPERATOR PRODUKSI",
      subtitle: "YAMAHA MUSIC MANUFACTURING ASIA",
      description: "Melakukan proses Setting dan Sanding pada material sesuai dengan SOP yang telah ditentukan, dan serta melakukan pemisahan Material NG agar tidak masuk kedalam proses selanjutnya."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center">EXPERIENCE</h1>
      <div className="mt-1 border-b-4 border-[#00EC97] w-24 mx-auto"></div>
      <div className="relative max-w-4xl mx-auto mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00ec97]" />
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 mb-16">
            <div className="absolute left-0 top-1.4 w-4 h-4 bg-gray-500 rounded-full -translate-x-1.5" />
            <div className="grid grid-cols-[auto,1fr] gap-x-4 items-start">
              <h3 className="text-2xl font-bold">{exp.year}</h3>
              <div>
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                {exp.subtitle && <h5 className="text-lg mt-1">{exp.subtitle}</h5>}
                <p className="text-gray-300 mt-2 text-justify">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}