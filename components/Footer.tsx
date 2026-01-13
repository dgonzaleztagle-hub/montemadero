
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20 border-b border-white/5">
          
          <div className="space-y-8">
            <div className="flex flex-col items-start group">
              <span className="text-brand text-4xl font-light tracking-tighter leading-none">ΛMΛ</span>
              <span className="text-[10px] tracking-ultra uppercase font-medium mt-1">Monte Madero</span>
            </div>
            <p className="text-white/40 font-light text-sm leading-relaxed">
              Haciendo de cada evento una experiencia inolvidable con el más alto estándar de exclusividad y diseño.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-brand">Navegación</h4>
            <ul className="space-y-4 text-xs tracking-widest text-white/60 font-medium">
              <li><a href="#espacio" className="hover:text-white transition-colors">EL ESPACIO</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">SERVICIOS</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">GALERÍA</a></li>
              <li><a href="#ubicacion" className="hover:text-white transition-colors">UBICACIÓN</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-brand">Legal</h4>
            <ul className="space-y-4 text-xs tracking-widest text-white/60 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">PRIVACIDAD</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TÉRMINOS & CONDICIONES</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PROTOCOLOS SANITARIOS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-brand">Síguenos</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <span className="text-xs">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <span className="text-xs">IG</span>
              </a>
            </div>
            <p className="text-xs text-white/40 font-light">contacto@montemadero.cl</p>
            <p className="text-xs text-white/40 font-light mt-1">+56 9 7853 2173</p>
          </div>

        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-white/20">
          <p>© 2024 Monte Madero Centro de Eventos. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span className="italic">Designed by Premium Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
