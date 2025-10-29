import React from "react";
import { BackgroundGradientAnimation } from "./components/ui/BackgroundGradientAnimation";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Experiencia from "./components/Experiencia";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      {/* Background fijo que queda detrás de todo */}
      <div className="fixed inset-0 -z-50">
        <BackgroundGradientAnimation 
          gradientBackgroundStart="rgb(108, 0, 162)"
          gradientBackgroundEnd="rgb(0, 17, 82)"
          interactive={true}
        />
      </div>
      
      {/* Contenido principal con scroll */}
      <div className="relative z-10">
        <Navbar />
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