import React from 'react';

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu presencia digital?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Contáctanos hoy mismo y lleva tu negocio al siguiente nivel con una landing page profesional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105">
            Solicitar cotización
          </button>
          <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-10 transition-all transform hover:scale-105">
            Hablar con un experto
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;