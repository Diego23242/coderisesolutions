import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Code Rise Solutions
            </h3>
            <p className="text-gray-400">
              Soluciones digitales diseñadas para impulsar tu negocio y alcanzar tus objetivos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Landing Pages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Diseño Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Desarrollo a Medida</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Optimización SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto y Redes</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">coderisesolutionss@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(52) 327-109-04-36</span>
              </li>
              <li className="flex space-x-4 mt-2">
                <a href="https://www.tiktok.com/@tuusuario" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.26 2c1.13 0 2.18.35 3.05 1.02v3.05c.9.53 1.93.82 2.98.82v2.22a6.27 6.27 0 01-3.4-1.07v7.44a5.65 5.65 0 11-5.65-5.65c.37 0 .72.04 1.07.12v2.27a2.54 2.54 0 102.27 2.52V2h.68z" />
                  </svg>
                </a>
                <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
                <a href="https://wa.me/523271090436" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.002 2.004c5.513 0 9.995 4.482 9.995 9.995 0 5.513-4.482 9.995-9.995 9.995a9.93 9.93 0 01-5.03-1.357l-3.682.963.982-3.587a9.93 9.93 0 01-1.273-5.014c0-5.513 4.482-9.995 9.995-9.995zm0-2C5.375.004 0 5.38 0 12.004c0 2.05.552 4.034 1.6 5.777L0 24l6.402-1.672a11.964 11.964 0 005.6 1.428c6.627 0 12-5.373 12-12.002 0-6.625-5.373-11.998-12-11.998zm5.657 15.455c-.246.693-1.448 1.281-1.988 1.366-.509.077-1.166.11-1.89-.118-1.122-.352-2.371-1.082-3.285-1.994-1.019-1.015-2.006-2.531-2.23-3.117-.224-.586-.237-1.086-.042-1.455.195-.368.548-.556.931-.622.11-.018.208-.033.304-.046.178-.024.337-.042.507.345.169.387.57 1.334.62 1.428.05.094.084.205.017.33-.067.125-.1.204-.198.316-.099.112-.208.25-.297.337-.099.097-.203.203-.087.41.117.206.519.855 1.115 1.387.77.694 1.419.913 1.626 1.015.208.101.328.084.45-.05.122-.133.515-.6.652-.803.137-.202.273-.167.46-.1.186.067 1.17.552 1.371.652.202.1.337.15.387.234.05.085.05.491-.196 1.184z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Code Rise. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
