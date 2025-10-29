import React from "react";

const Experiencia = () => {
  const experiencias = [
    {
      titulo: "Desarrollador Full Stack",
      empresa: "Tech Solutions Inc.",
      periodo: "2022 - Presente",
      descripcion: "Desarrollo de aplicaciones web con React, Node.js y MongoDB."
    },
    {
      titulo: "Frontend Developer",
      empresa: "Digital Agency",
      periodo: "2020 - 2022",
      descripcion: "Creación de interfaces de usuario responsive y modernas."
    }
  ];

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          <strong>EXPERIENCIA PROFESIONAL</strong>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {experiencias.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 w-full max-w-md">
              <h3 className="text-2xl font-bold text-white mb-2">
                <strong>{exp.titulo}</strong>
              </h3>
              <p className="text-purple-300 font-bold mb-2">
                <strong>{exp.empresa}</strong>
              </p>
              <p className="text-white/80 font-bold mb-4">
                <strong>{exp.periodo}</strong>
              </p>
              <p className="text-white/90 leading-relaxed font-semibold">
                <strong>{exp.descripcion}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;