import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <strong>MI PORTAFOLIO</strong>
        </div>
        
        <div className="flex space-x-8">
          <a href="#inicio" className="text-white hover:text-purple-300 transition font-bold">
            <strong>Inicio</strong>
          </a>
          <a href="#experiencia" className="text-white hover:text-purple-300 transition font-bold">
            <strong>Experiencia</strong>
          </a>
          <a href="#proyectos" className="text-white hover:text-purple-300 transition font-bold">
            <strong>Proyectos</strong>
          </a>
          <a href="#contacto" className="text-white hover:text-purple-300 transition font-bold">
            <strong>Contacto</strong>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;