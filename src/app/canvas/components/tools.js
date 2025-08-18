import Image from "next/image";
import Whois from "@/app/components/assets/whois.png";
import Cekwarna from "@/app/components/assets/cekwarna.png";

export default function Workshop() {
    return(
        <section id="project" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

                    <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full border rounded-xl">
                        <Image src={Whois} alt="Whois" className="w-full h-50 object-cover"/>
                        <div className="p-6">
                            <a href="https://github.com/ferdysetiawan/whois"></a>
                            <h3 className="text-2xl font-semibold text-white">WHOIS</h3>
                            <a href="https://whois-ferdysetiawan.vercel.app/" className="text-[#00EC97]">https://whois-ferdysetiawan.vercel.app/</a>
                            <p className="mt-4 text-gray-400 text-justify">WHOIS Lookup adalah alat untuk memudahkan pengguna dalam mengakses informasi penting terkait nama domain atau alamat IP. Dengan antarmuka yang sederhana dan ramah pengguna, tool ini memungkinkan siapa saja untuk mendapatkan data pendaftaran domain secara cepat dan efisien.</p>        
                        </div>
                        <div className="flex justify-left space-x-2 py-2 rounded-b-lg ml-5 mb-2">
                            <span className="bg-[#005253] text-[#abf8f3] px-2 py-1 rounded-lg text-xs">Network</span>
                            <span className="bg-[#005253] text-[#abf8f3] px-2 py-1 rounded-lg text-xs">Domain</span>
                        </div>
                    </div>

                    <div className="bg-[#11141B] rounded-lg overflow-hidden shadow-lg w-full sm:w-4/5 md:w-full border rounded-xl">
                        <Image src={Cekwarna} alt="Cekwarna" className="w-full h-50 object-cover"/>
                        <div className="p-6">
                            <a href="https://github.com/ferdysetiawan/cekwarna">
                            <h3 className="text-2xl font-semibold text-white">CEKWARNA</h3></a>
                            <a href="https://cekwarna.vercel.app/" className="text-[#00EC97]">https://cekwarna.vercel.app/</a>
                            <p className="mt-4 text-gray-400 text-justify">Cek Warna adalah alat yang dirancang untuk membantu pengguna mengidentifikasi adanya dead pixel pada layar perangkat mereka. Dengan menggunakan warna-warna solid yang bervariasi, pengguna dapat dengan mudah memeriksa setiap bagian layar dan mendeteksi piksel yang tidak berfungsi.</p>       
                        </div>
                        <div className="flex justify-left space-x-2 py-2 rounded-b-lg ml-5 mb-2">
                            <span className="bg-[#005253] text-[#abf8f3] px-2 py-1 rounded-lg text-xs">Colors</span>
                            <span className="bg-[#005253] text-[#abf8f3] px-2 py-1 rounded-lg text-xs">Tools</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}