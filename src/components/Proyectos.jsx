import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "E-commerce Platform",
      descripcion: "Plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
      tecnologias: ["React", "Node.js", "MongoDB"]
    },
    {
      titulo: "Task Management App",
      descripcion: "Aplicación para gestión de tareas con drag & drop y notificaciones.",
      tecnologias: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      titulo: "Social Media Dashboard",
      descripcion: "Dashboard para análisis de redes sociales con gráficos interactivos.",
      tecnologias: ["React", "TypeScript", "Chart.js"]
    },
    {
      titulo: "Mobile Fitness App",
      descripcion: "Aplicación móvil para seguimiento de ejercicios y rutinas de fitness.",
      tecnologias: ["React Native", "Firebase", "Redux"]
    },
    {
      titulo: "Real Estate Platform",
      descripcion: "Plataforma inmobiliaria con búsqueda avanzada y sistema de citas.",
      tecnologias: ["Next.js", "PostgreSQL", "Tailwind"]
    }
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          <strong>PROYECTOS DESTACADOS</strong>
        </h2>
        
        {/* Sección de proyectos con Infinite Moving Cards */}
        <div className="mb-20">
          <InfiniteMovingCards 
            items={proyectos} 
            direction="right" 
            speed="slow" 
          />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;