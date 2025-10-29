import React from 'react';

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container-center flex items-center justify-between h-16">
        <div className="text-xl font-bold text-sky-600">Portafolio</div>
        <nav className="hidden md:flex gap-6 text-slate-700">
          <a href="#inicio" className="hover:text-sky-600">Inicio</a>
          <a href="#proyectos" className="hover:text-sky-600">Proyectos</a>
          <a href="#experiencia" className="hover:text-sky-600">Experiencia</a>
          <a href="#contacto" className="hover:text-sky-600">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
