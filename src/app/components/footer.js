import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="border-t border-[#2f2f2f] mb-8"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold mb-2">Ferdy Setiawan</h2>
            <p className="text-gray-400">Worker of Modern Industries</p>
            <p className="text-gray-400">a masterpiece is not made overnight.</p>
          </div>

          <div className="flex flex-row space-x-8">
            <div>
              <h3 className="text-base text-gray-400 font-normal mb-1">Navigation</h3>
              <ul>
                <li>
                  <Link href="/" className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link href="/introduce" className="hover:text-gray-300">Introduce</Link>
                </li>
                <li>
                  <Link href="/canvas" className="hover:text-gray-300">Canvas</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base text-gray-400 font-normal mb-1">Social Media</h3>
              <ul>
                <li>
                  <a href="https://twitter.com/ferstawn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
                </li>
                <li>
                  <a href="https://github.com/ferdysetiawan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
                </li>
                <li>
                  <a href="https://linkedin.com/ferdysetiawan" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
                </li>
                <li>
                  <a href="https://instagram.com/ferstawn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
                </li>
                <li>
                  <a href="mailto:ferdysetiawan09@outlook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center lg:text-right text-gray-400">
          &copy; 2024 Ferdy Setiawan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
