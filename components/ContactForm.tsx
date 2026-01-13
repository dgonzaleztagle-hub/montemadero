
import React, { useState } from 'react';
import { EventType } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: EventType.MATRIMONIO,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud enviada correctamente. Nuestro equipo te contactará pronto.');
  };

  return (
    <section id="contacto" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Contacto</span>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">Comienza a planificar</h2>
          <p className="text-neutral-500 font-light max-w-xl mx-auto">
            Nuestro equipo de wedding planners te contactará en menos de 24 horas para agendar tu visita.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Nombre Completo *</label>
              <input 
                required
                id="name"
                type="text" 
                placeholder="Ej: Marcela Larraín"
                className="w-full bg-white border-none px-6 py-5 focus:ring-1 focus:ring-brand transition-all text-sm font-light placeholder:text-neutral-300 shadow-sm"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Correo Electrónico *</label>
              <input 
                required
                id="email"
                type="email" 
                placeholder="marcela@ejemplo.cl"
                className="w-full bg-white border-none px-6 py-5 focus:ring-1 focus:ring-brand transition-all text-sm font-light placeholder:text-neutral-300 shadow-sm"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Teléfono</label>
              <input 
                id="phone"
                type="tel" 
                placeholder="+56 9 1234 5678"
                className="w-full bg-white border-none px-6 py-5 focus:ring-1 focus:ring-brand transition-all text-sm font-light placeholder:text-neutral-300 shadow-sm"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="eventType" className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Tipo de Evento</label>
              <select 
                id="eventType"
                className="w-full bg-white border-none px-6 py-5 focus:ring-1 focus:ring-brand transition-all text-sm font-light text-neutral-500 shadow-sm"
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value as EventType})}
              >
                {Object.values(EventType).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">Mensaje o Requerimientos Especiales</label>
            <textarea 
              id="message"
              rows={5}
              placeholder="Cuéntanos más sobre tu evento ideal..."
              className="w-full bg-white border-none px-6 py-5 focus:ring-1 focus:ring-brand transition-all text-sm font-light placeholder:text-neutral-300 shadow-sm resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          <div className="flex flex-col items-center">
            <button 
              type="submit"
              className="bg-brand text-white px-16 py-6 text-[11px] uppercase tracking-widest font-bold hover:bg-brand-dark transition-all transform hover:-translate-y-1 w-full md:w-auto"
            >
              Enviar Solicitud
            </button>
            <p className="mt-5 text-[9px] text-neutral-400 uppercase tracking-widest">(*) Campos obligatorios para agendamiento</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
