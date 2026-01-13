
import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2">
          <span className="text-brand font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Ubicación Estratégica</span>
          <h2 className="font-serif text-4xl md:text-6xl text-neutral-900 mb-8 leading-tight">Hacienda Lampa</h2>
          <p className="text-neutral-500 font-light text-lg leading-relaxed mb-10">
            Monte Madero está ubicado en Santiago, en el sector Hacienda Lampa, de fácil acceso por las autopistas Vespucio Norte o Ruta 5 Norte. Un escenario privilegiado para hacer de tu evento algo inolvidable.
          </p>
          
          <div className="bg-neutral-50 p-10 flex gap-8 items-center border border-neutral-100">
            <div className="w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-sm">
              <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-widest mb-1.5 text-neutral-400">Dirección</h4>
              <p className="text-neutral-800 text-lg font-medium italic">Los Aromos 1626, Hacienda Lampa, Chile.</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[500px] relative group overflow-hidden shadow-2xl">
          {/* Placeholder for real map */}
          <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
               className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 transition-all duration-1000"
               alt="Map placeholder"
             />
             <div className="relative z-10 text-center p-12 glass-card">
               <svg className="w-12 h-12 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
               <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-600">Interactive Map Preview</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
