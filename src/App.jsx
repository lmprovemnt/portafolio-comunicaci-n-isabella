import React from "react";
import { BackgroundGradientAnimation } from "./components/ui/BackgroundGradientAnimation";
import Inicio from "./components/Inicio";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { TimelineIndicator } from "./components/ui/timeline-indicator";
import { FloatingNav } from "./components/ui/floating-navbar";

function App() {
  const sections = [
    { id: "inicio", title: "INICIO" },
    { id: "experiencia", title: "EXPERIENCIA" },
    { id: "proyectos", title: "PROYECTOS" },
    { id: "contacto", title: "CONTACTO" }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background fijo */}
      <div className="fixed inset-0 -z-50">
        <BackgroundGradientAnimation 
          gradientBackgroundStart="rgb(108, 0, 162)"
          gradientBackgroundEnd="rgb(0, 17, 82)"
          interactive={true}
        />
      </div>
      
      {/* Timeline Indicator como barra lateral */}
      <TimelineIndicator sections={sections} />
      
      {/* Floating Navbar (reemplaza el Navbar original) */}
      <FloatingNav />
      
      {/* Contenido principal SIN Navbar original */}
      <div className="relative z-10">
        <Inicio />
        <Experiencia />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;