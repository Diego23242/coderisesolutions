import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/523271090436?text=Hola,%20quiero%20saber%20más%20sobre%20los%20servicios%20de%20Code%20Rise%20Solutions.";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 overflow-x-hidden ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 sm:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Code Rise Solutions
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['Inicio', 'servicios', 'portafolio', 'contacto'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-2 sm:px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-800 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-sm font-medium hover:opacity-90 transition ${scrolled ? 'shadow-md' : 'shadow-lg'}`}
            >
              Cotizar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={scrolled ? 'currentColor' : 'white'}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl px-2 pt-2 pb-4 space-y-1">
          {['inicio', 'servicios', 'portafolio', 'contacto'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-md text-base font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Cotizar proyecto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
