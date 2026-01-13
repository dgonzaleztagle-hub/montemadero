
import React from 'react';
import { NavItem } from '../types';

interface HeaderProps {
  isScrolled: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'EL ESPACIO', href: '#espacio' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'GALERÍA', href: '#galeria' },
  { label: 'UBICACIÓN', href: '#ubicacion' },
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 md:py-6 flex justify-between items-center ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent text-white'
      }`}
    >
      <div className="flex flex-col items-center group cursor-pointer">
        <span className={`text-2xl md:text-3xl font-light tracking-tighter transition-colors ${isScrolled ? 'text-brand' : 'text-brand'}`}>
          ΛMΛ
        </span>
        <span className={`text-[9px] md:text-[10px] tracking-ultra uppercase font-medium mt-0.5 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
          Monte Madero
        </span>
      </div>

      <nav className="hidden lg:flex items-center space-x-10">
        {NAV_ITEMS.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className={`text-[10px] md:text-[11px] tracking-widest font-medium transition-colors hover:text-brand ${
              isScrolled ? 'text-neutral-800' : 'text-white/90'
            }`}
          >
            {item.label}
          </a>
        ))}
        <a 
          href="#contacto"
          className={`px-7 py-2.5 text-[10px] md:text-[11px] tracking-widest font-medium border transition-all duration-300 ${
            isScrolled 
              ? 'border-brand text-brand hover:bg-brand hover:text-white' 
              : 'border-white/40 text-white hover:bg-white hover:text-black'
          }`}
        >
          CONTACTO
        </a>
      </nav>

      <button className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
