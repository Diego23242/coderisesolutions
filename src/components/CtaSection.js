import React from 'react';

const CtaSection = () => {
  const whatsappLink = "https://wa.me/523271090436?text=Hola,%20quiero%20una%20cotización%20para%20una%20landing%20page%20profesional.";

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu presencia digital?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Contáctanos hoy mismo y lleva tu negocio al siguiente nivel con una landing page profesional.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
