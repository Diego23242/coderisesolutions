import React from 'react';

const StatItem = ({ number, label, duration }) => {
  return (
    <div className="text-center px-6 py-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
      <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {number}+
      </span>
      <p className="mt-3 text-gray-600 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem number="120" label="Proyectos Completados" duration="700" />
          <StatItem number="95" label="Clientes Satisfechos" duration="900" />
          <StatItem number="300" label="Tasas de Conversión Mejoradas" duration="1100" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;