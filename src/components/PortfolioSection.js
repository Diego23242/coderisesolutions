import React, { useState } from 'react';

const ProjectCard = ({ title, category, imageUrl, isActive, onClick }) => {
  return (
    <div 
      className={`relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${isActive ? 'h-64 sm:h-80 md:h-96' : 'h-48 sm:h-60 md:h-64'}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 hover:scale-105"
      />
      <div className={`absolute bottom-0 left-0 p-4 sm:p-6 z-20 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-80'}`}>
        <span className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-wider">{category}</span>
        <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{title}</h3>
        {isActive && (
          <button className="mt-2 sm:mt-4 bg-white text-blue-900 text-xs sm:text-sm font-bold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full inline-flex items-center hover:bg-gray-100 transition-all">
            Ver proyecto
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(1);
  
  const projects = [
    {
      id: 1,
      title: 'Tienda Online de Moda',
      category: 'E-commerce',
      imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 2,
      title: 'Aplicación Financiera',
      category: 'Fintech',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-beb2314f7387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 3,
      title: 'Plataforma Educativa',
      category: 'EdTech',
      imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80'
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 uppercase">Nuestro Trabajo</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3 sm:mb-4">Portafolio de Proyectos</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las landing pages que hemos creado para nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              isActive={activeProject === project.id}
              onClick={() => setActiveProject(project.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center text-blue-600 font-bold text-sm sm:text-base group">
            Ver todos los proyectos
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;