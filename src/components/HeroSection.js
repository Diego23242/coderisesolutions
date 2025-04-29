import React from 'react';

const HeroSection = () => {
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
          <button className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:bg-white/10 transition-all transform hover:scale-105">
            Contactar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;