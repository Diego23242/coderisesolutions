const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Enfoque en conversión",
      description: "No solo diseñamos, sino que pensamos estratégicamente en que conviertas visitas en ventas."
    },
    {
      title: "Soporte personalizado",
      description: "Atención directa, sin bots, con asesoría a medida según el estado de tu negocio."
    },
    {
      title: "Actualizaciones incluidas",
      description: "Incluimos cambios menores sin costo durante el primer mes tras la entrega."
    },
    {
      title: "Tecnología de vanguardia",
      description: "Usamos herramientas modernas y código optimizado para asegurar rendimiento y escalabilidad."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Por qué elegir Code Rise?</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Te damos razones claras para que confíes en nuestro trabajo.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
