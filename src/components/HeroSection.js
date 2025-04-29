import React from 'react';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/523271090436?text=Hola,%20quiero%20una%20cotización%20para%20una%20landing%20page%20profesional.";

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      
      <div className="z-10 text-center px-4 sm:px-6 max-w-4xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            Landing Pages
          </span>{' '}
          que venden
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-10 px-2 sm:px-0">
          Diseñamos experiencias digitales que convierten visitantes en clientes leales
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
          <button className="bg-white text-blue-900 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-lg">
            Ver portafolio
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:bg-white/10 transition-all transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48a11.81 11.81 0 00-16.69 0 11.81 11.81 0 00-2.31 13.09L.5 23.5l7-1.84a11.84 11.84 0 005.27 1.34h.06A11.78 11.78 0 0020.52 3.48zm-8.52 17a9.36 9.36 0 01-4.77-1.31l-.34-.2-4.14 1.08 1.11-4.03-.22-.35a9.41 9.41 0 1116.76-7.85 9.41 9.41 0 01-8.4 13.66zm5.15-7.06c-.28-.14-1.66-.82-1.91-.91s-.44-.14-.62.14-.71.91-.87 1.1-.32.21-.6.07a7.69 7.69 0 01-2.27-1.4 8.55 8.55 0 01-1.58-2 .67.67 0 01.09-.63c.09-.14.21-.32.31-.48s.14-.27.21-.45a.55.55 0 00-.03-.52c-.07-.14-.61-1.46-.84-2s-.45-.44-.62-.45h-.53a1 1 0 00-.71.33 3 3 0 00-.94 2.2 5.29 5.29 0 001.12 2.46 11.56 11.56 0 004.5 3.89 15.35 15.35 0 001.59.59 3.8 3.8 0 001.69.11 3 3 0 001.91-1.32 2.45 2.45 0 00.17-1.32c-.07-.11-.25-.17-.53-.31z" />
            </svg>
            Contactar ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
