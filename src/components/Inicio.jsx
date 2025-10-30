import React from "react";
import { CometCard } from "./ui/comet-card";

const Inicio = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center py-10">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          
          {/* Columna izquierda - Contenido sin título */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 lg:p-16 border border-white/20 shadow-2xl w-full max-w-2xl mx-auto">
              <p className="text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed font-semibold">
                <strong>
                  Desarrolladora Full Stack apasionada por crear soluciones innovadoras 
                  y experiencias digitales excepcionales. Especializada en React, Node.js 
                  y tecnologías modernas.
                </strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full transition transform hover:scale-105 text-lg">
                  <strong>Ver Proyectos</strong>
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-12 rounded-full transition text-lg">
                  <strong>Contactar</strong>
                </button>
              </div>
            </div>
          </div>

          {/* Columna derecha - Comet Card MÁS GRANDE */}
          <div className="flex items-center justify-center w-full h-full mt-8 lg:mt-0">
            <CometCard>
              <div
                className="relative flex w-96 lg:w-88 flex-col items-stretch rounded-3xl p-5 transition-all duration-500 group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(108, 0, 162, 0.15) 0%, rgba(0, 17, 82, 0.15) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(108, 0, 162, 0.3)',
                  transformStyle: 'preserve-3d',
                }}>
                
                {/* Efecto de borde líquido */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-70 group-hover:opacity-100 transition-all duration-700"
                  style={{
                    background: 'linear-gradient(45deg, transparent 40%, rgba(168, 85, 247, 0.4) 50%, transparent 60%)',
                    backgroundSize: '300% 300%',
                    animation: 'liquidBorder 3s ease-in-out infinite',
                  }}
                />
                
                {/* Contenido de la card */}
                <div className="relative z-10 mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full overflow-hidden rounded-2xl">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                      alt="Foto de Isabelia - Desarrolladora Full Stack"
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                    />
                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                </div>
                
                {/* Texto inferior */}
                <div className="relative z-10 mt-5 flex flex-shrink-0 items-center justify-between p-4">
                  <div className="text-base font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ISABELIA LÓPEZ
                  </div>
                  <div className="text-sm text-purple-300 opacity-80 font-semibold">
                    FULL STACK
                  </div>
                </div>
              </div>
            </CometCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inicio;