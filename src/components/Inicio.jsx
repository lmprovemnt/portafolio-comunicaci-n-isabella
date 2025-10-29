import React from "react";

const Inicio = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            <strong>HOLA, SOY ISABELIA</strong>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed font-semibold">
            <strong>
              Desarrolladora Full Stack apasionada por crear soluciones innovadoras 
              y experiencias digitales excepcionales. Especializada en React, Node.js 
              y tecnologías modernas.
            </strong>
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
              <strong>Ver Proyectos</strong>
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition">
              <strong>Contactar</strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;