"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu on item click
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <a href="#landing" className="flex items-center space-x-2">
              <Image src={Logo} width={40} height={40} alt="Logo" className="rounded-lg"/>
              <span className="font-bold text-xl text-white">FRDYSTAWN.</span>
            </a>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>

          <nav className="hidden md:flex flex-grow justify-center space-x-10">
            <a href="/" className="hover:text-gray-400" onClick={() => handleScrollTo('home')}>Home</a>
            <a href="/introduce" className="hover:text-gray-400" onClick={() => handleScrollTo('about')}>Introduce</a>
            <a href="/roomlab" className="hover:text-gray-400" onClick={() => handleScrollTo('project')}>Roomlab</a>
          </nav>

          <div className="hidden md:flex items-center ml-20">
            <a href="https://t.me/frdystawn" className="bg-black text-white border border-white px-4 py-1.5 rounded-3xl shadow-md hover:bg-gray-800">
              Contact
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black absolute top-16 left-0 w-full py-4">
          <div className="flex flex-col items-center space-y-6">
            <a href="#landing" className="text-white text-xl hover:text-gray-300" onClick={() => handleScrollTo('landing')}>Home</a>
            <a href="#about" className="text-white text-xl hover:text-gray-300" onClick={() => handleScrollTo('about')}>Introduce</a>
            <a href="#project" className="text-white text-xl hover:text-gray-300" onClick={() => handleScrollTo('project')}>Project</a>
            <a href="https://t.me/frdystawn" className="bg-black text-white border border-white px-4 py-2 rounded-3xl shadow-md hover:bg-gray-800">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
