
import React from 'react';
import { ServiceCardProps } from '../types';

const SERVICES: ServiceCardProps[] = [
  {
    title: 'Capilla Propia',
    description: 'Espacio sagrado diseñado para ceremonias íntimas y solemnes en el corazón de nuestras instalaciones.',
    image: 'https://montemadero.cl/wp-content/uploads/2019/02/C.jpg'
  },
  {
    title: 'Jardines & Espacios Verdes',
    description: 'Gran variedad de espacios incluyendo jardines, espejo de agua y zonas diseñadas para cócteles y celebraciones.',
    image: 'https://montemadero.cl/wp-content/uploads/2019/02/11.jpg'
  },
  {
    title: 'Personal Especializado',
    description: 'Equipo de profesionales con vasta experiencia en todo tipo de eventos, coordinación y catering.',
    image: 'https://montemadero.cl/wp-content/uploads/2019/02/B.jpg'
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
