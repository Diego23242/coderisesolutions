import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-8 h-full">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 ml-4">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="mt-6">
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Landing Pages Profesionales',
      description: 'Diseñamos landing pages optimizadas para conversión con las últimas tendencias en UX/UI y resultados medibles.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Diseño Responsivo Avanzado',
      description: 'Experiencias perfectamente adaptadas a todos los dispositivos, con testing en más de 50 tamaños de pantalla.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Optimización SEO & Performance',
      description: 'Posicionamiento en motores de búsqueda y velocidad de carga ultrasónica para mejorar tu visibilidad.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">Lo que ofrecemos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Nuestros Servicios Premium</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones digitales diseñadas para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
