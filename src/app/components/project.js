import Image from "next/image";
import Nearai from './assets/nearai.png';
import Rayso from './assets/rayso.png';

export default function Project() {
  return (
    <section id="project" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title "Project" */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-extrabold text-white">Project Canvas</h2>
          <div className="mt-2 border-b-4 border-[#00EC97] w-28 mx-auto"></div>
        </div>
        {/* Project Catalog */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Example Project Card */}
          <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full relative">
            {/* Blurred Content */}
            <div className="relative w-full h-full">
              <Image src={Rayso} alt="NEAR AI" className="w-full h-50 object-cover blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Coming Soon...</span>
              </div>
            </div>
          </div>
          {/* Duplicate the above card for additional projects */}
          <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full relative">
            <div className="relative w-full h-full">
              <Image src={Rayso} alt="NEAR AI" className="w-full h-50 object-cover blur-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Coming Soon...</span>
              </div>
            </div>
          </div>
          <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full relative">
            <div className="relative w-full h-full">
              <Image src={Rayso} alt="NEAR AI" className="w-full h-50 object-cover blur-lg" />
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
