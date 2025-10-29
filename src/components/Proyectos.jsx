import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Proyectos = () => {
  const proyectos = [
    {
      titulo: "E-commerce Platform",
      descripcion: "Plataforma de comercio electrónico con carrito de compras y pasarela de pago.",
      tecnologias: ["React", "Node.js", "MongoDB", "Stripe"],
      imagen: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop&q=60",
      demoLink: "#",
      githubLink: "#"
    },
    {
      titulo: "Task Management App",
      descripcion: "Aplicación para gestión de tareas con drag & drop y notificaciones.",
      tecnologias: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      imagen: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60",
      demoLink: "#",
      githubLink: "#"
    },
    {
      titulo: "Social Media Dashboard",
      descripcion: "Dashboard para análisis de redes sociales con gráficos interactivos.",
      tecnologias: ["React", "TypeScript", "Chart.js", "D3.js"],
      imagen: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=500&auto=format&fit=crop&q=60",
      demoLink: "#",
      githubLink: "#"
    },
    {
      titulo: "Mobile Fitness App",
      descripcion: "Aplicación móvil para seguimiento de ejercicios y rutinas de fitness.",
      tecnologias: ["React Native", "Firebase", "Redux", "Google Fit API"],
      imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60",
      demoLink: "#",
      githubLink: "#"
    },
    {
      titulo: "Real Estate Platform",
      descripcion: "Plataforma inmobiliaria con búsqueda avanzada y sistema de citas.",
      tecnologias: ["Next.js", "PostgreSQL", "Tailwind", "Mapbox"],
      imagen: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          <strong>PROYECTOS DESTACADOS</strong>
        </h2>
        
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