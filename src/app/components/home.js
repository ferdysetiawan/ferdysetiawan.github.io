import Image from "next/image";
import PFP from '@/app/components/assets/foto.png';

export default function Landing() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black py-20">
        <Image src={PFP} alt="lunairefine" className="rounded-full w-40 h-40 object-cover mb-4 shadow-lg"/>
        <h1 className="text-2xl font-bold text-white mb-2">Ferdy Setiawan</h1>
        <p className="text-lg text-gray-300 text-center">それでも, 僕だけは忘れない 物語</p>
        
        <div className="mt-10 flex space-x-4">
          <a href="/introduce" className="bg-black text-white border border-white px-5 py-1.5 rounded-3xl shadow-md hover:bg-gray-800 transition-colors">
            Identify Me!
          </a>
          <a href="/canvas" className="bg-[#00EC97] font-medium text-black px-5 py-1.5 rounded-3xl shadow-md hover:bg-[#00c87a] transition-colors">
            Canvas
          </a>
        </div>
      </section>
      
    );
  }
  