import Image from "next/image";
import Foto from '@/app/components/assets/foto.png';

export default function Page() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center mb-2 mt-20">ABOUT ME</h1>
          <div className="mt-1 border-b-4 border-[#00EC97] w-24 mx-auto"></div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row items-center">
          <div className="w-2/3 h-2/3 rounded-full overflow-hidden">
            <Image src={Foto} alt="About Image" layout="responsive" width={400} height={400} className="rounded-full object-cover"/>
          </div>
          <div className="lg:ml-10 mt-8 lg:mt-0 text-center lg:text-left">
            <h3 className="text-3xl font-extrabold text-white">Ferdy Setiawan</h3>
            <p className="mt-4 text-lg text-gray-300 text-justify">
            Lulusan SMK Teknik Komputer dan Jaringan yang memiliki ketertarikan untuk mengembangkan keterampilan teknis di industri manufaktur. Memiliki beberapa pengalaman kerja di bidang Produksi. Latar belakang pendidikan Teknik Komputer dan Jaringan memberi keterampilan yang dibutuhkan dalam bidang pengolahan data produksi dan proses produksi yang dibutuhkan di industri manufaktur</p>
          </div>
        </div>
      </div>
        </div>
    )
}