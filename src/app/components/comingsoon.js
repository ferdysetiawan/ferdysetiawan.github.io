import Image from "next/image";
import Rayso from './assets/rayso.png';

export default function Project() {
  return (
    <section id="project" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <a href="/roomlab" className="text-2xl font-extrabold text-white">Canvas</a>
          <div className="mt-2 border-b-4 border-[#00EC97] w-28 mx-auto"></div>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full relative">
            <div className="relative w-full h-full">
              <Image src={Rayso} alt="Rayso" className="w-full h-50 object-cover blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Coming Soon...</span>
              </div>
            </div>
          </div>
          <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full relative">
            <div className="relative w-full h-full">
              <Image src={Rayso} alt="Rayso" className="w-full h-50 object-cover blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Coming Soon...</span>
              </div>
            </div>
          </div>
          <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full relative">
            <div className="relative w-full h-full">
              <Image src={Rayso} alt="Rayso" className="w-full h-50 object-cover blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Coming Soon...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
