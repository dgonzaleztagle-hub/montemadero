
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" 
          loading="eager"
          alt="Luxury event venue night view"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="font-serif text-5xl md:text-8xl text-white mb-8 leading-[1.1] animate-[fadeInUp_1s_ease-out]">
          Donde la elegancia <br className="hidden md:block"/> encuentra su lugar
        </h1>
        <p className="text-white/80 text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto animate-[fadeInUp_1.2s_ease-out]">
          Exclusividad y diseño arquitectónico en el corazón de Hacienda Lampa.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-[fadeInUp_1.4s_ease-out]">
          <a 
            href="#contacto"
            className="bg-brand text-white px-12 py-5 text-[11px] uppercase tracking-widest font-medium hover:bg-brand-dark transition-all transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Reservar Visita
          </a>
          <a 
            href="#espacio"
            className="text-white border border-white/30 px-12 py-5 text-[11px] uppercase tracking-widest font-medium backdrop-blur-sm hover:bg-white hover:text-black transition-all w-full sm:w-auto"
          >
            Explorar Espacios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.5em] mb-3">Deslizar</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
