
import React from 'react';

const ArchitectureSection: React.FC = () => {
  return (
    <section id="espacio" className="py-24 md:py-40 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left: Imagery and Stats */}
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1200" 
              alt="Architecture details" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          
          {/* Stats Box */}
          <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-10 md:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 w-64 md:w-80">
            <span className="font-serif text-5xl md:text-6xl text-brand block mb-3 leading-none">400+</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Capacidad de invitados</span>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <span className="text-brand font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Arquitectura & Entorno</span>
          <h2 className="font-serif text-4xl md:text-6xl text-neutral-900 mb-10 leading-tight">
            Un escenario diseñado para lo extraordinario
          </h2>
          <div className="space-y-6 text-neutral-500 font-light text-lg leading-relaxed">
            <p>
              Monte Madero es lo nuevo en centros de eventos en Chile, ubicado en el corazón de Hacienda Lampa. Nuestro moderno diseño y completo equipamiento permiten el óptimo desarrollo de diversas actividades, desde matrimonios hasta eventos corporativos.
            </p>
            <p>
              Contamos con una capilla propia, jardines amplios, espejo de agua, zona cóctel, zona de asados, y todo lo que necesitas para hacer tu evento memorable. Nuestro personal especializado tiene vasta experiencia en todo tipo de celebraciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 border-t border-neutral-100 pt-10">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex-shrink-0 bg-neutral-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1.5">Capilla Propia</h4>
                <p className="text-sm text-neutral-400 font-light">Ambiente íntimo y sagrado</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex-shrink-0 bg-neutral-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1.5">Parking Privado</h4>
                <p className="text-sm text-neutral-400 font-light">Seguridad integral las 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
