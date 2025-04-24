import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Code Rise transformó completamente nuestra tasa de conversión. Su landing page aumentó nuestras ventas en un 300%.",
      author: "María González",
      position: "CEO, Tienda Online"
    },
    {
      quote: "El diseño y funcionalidad de nuestra nueva landing page superó todas nuestras expectativas. ¡Increíble trabajo!",
      author: "Carlos Mendoza",
      position: "Director de Marketing"
    },
    {
      quote: "Trabajar con Code Rise fue una experiencia excepcional. Profesionales, creativos y muy orientados a resultados.",
      author: "Ana Torres",
      position: "Emprendedora"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Historias de éxito que nos inspiran
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 relative">
            <div className="absolute -top-6 -left-6 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
              "
            </div>
            <p className="text-lg text-gray-700 italic mb-6">
              {testimonials[activeIndex].quote}
            </p>
            <div className="flex items-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex-shrink-0"></div>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-600">{testimonials[activeIndex].position}</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;