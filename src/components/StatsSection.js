import React from 'react';

const StatItem = ({ number, label }) => {
  return (
    <div className="text-center px-4 py-6 sm:px-6 sm:py-8 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {number}+
      </span>
      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <StatItem number="120" label="Proyectos Completados" />
          <StatItem number="95" label="Clientes Satisfechos" />
          <StatItem number="300" label="Tasas de Conversión Mejoradas" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;