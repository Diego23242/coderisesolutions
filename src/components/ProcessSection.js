import React from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Consulta',
      description: 'Analizamos tus necesidades y objetivos para crear la estrategia perfecta.'
    },
    {
      number: '2',
      title: 'Diseño',
      description: 'Creamos prototipos y diseños personalizados para tu aprobación.'
    },
    {
      number: '3',
      title: 'Desarrollo',
      description: 'Implementamos todas las funcionalidades con código limpio y eficiente.'
    },
    {
      number: '4',
      title: 'Lanzamiento',
      description: 'Publicamos y optimizamos tu landing page para obtener los mejores resultados.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nuestro Proceso</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparente y enfocado en resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;