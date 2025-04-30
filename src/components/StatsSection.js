const PricingSection = () => {
  const plans = [
    {
      title: "Básico",
      price: "$2,500 MXN",
      description: "Ideal para emprendedores que comienzan.",
      features: [
        "Landing page 100% personalizada",
        "Diseño responsive",
        "Formulario de contacto",
        "Entrega en 5 días hábiles",
      ],
    },
    {
      title: "Profesional",
      price: "$4,800 MXN",
      description: "Perfecto para negocios que quieren escalar.",
      features: [
        "Todo lo del plan Básico",
        "Optimización SEO inicial",
        "Integración con WhatsApp o CRM",
        "Analytics + pruebas de velocidad",
        "Soporte 15 días post-lanzamiento",
      ],
    },
    {
      title: "Premium",
      price: "$7,500 MXN",
      description: "Para empresas que quieren resultados medibles.",
      features: [
        "Todo lo del plan Profesional",
        "Texto publicitario optimizado (copywriting)",
        "Hasta 3 secciones adicionales (servicios, proceso, etc.)",
        "A/B Testing inicial",
        "Consultoría personalizada 1 a 1",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Planes y Precios</h2>
        <p className="text-lg text-gray-600 mb-12">Escoge el plan que mejor se adapta a tus necesidades y objetivos.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="border rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-gray-800 mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="text-gray-700 text-left mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
