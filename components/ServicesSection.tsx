
import React from 'react';
import { ServiceCardProps } from '../types';

const SERVICES: ServiceCardProps[] = [
  {
    title: 'Banquetería Premium',
    description: 'Gastronomía de autor diseñada para deleitar los paladares más exigentes.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Diseño & Decoración',
    description: 'Curatoría estética que transforma espacios en atmósferas mágicas.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'Logística & Traslado',
    description: 'Coordinación total para que tú solo te preocupes de disfrutar.',
    image: 'https://images.unsplash.com/photo-1522673607200-164883eecd0c?auto=format&fit=crop&q=80&w=1000'
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => (
  <div className="group relative h-[500px] overflow-hidden cursor-pointer">
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
    <div className="absolute inset-0 p-10 flex flex-col justify-end">
      <h3 className="text-white font-serif text-3xl mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">{title}</h3>
      <p className="text-white/70 text-sm font-light leading-relaxed max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100">
        {description}
      </p>
      <div className="mt-6 w-12 h-[1px] bg-brand transform transition-all duration-500 group-hover:w-full"></div>
    </div>
  </div>
);

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="bg-neutral-50 py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Excelencia Operativa</span>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900">Servicios Todo-Incluido</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
