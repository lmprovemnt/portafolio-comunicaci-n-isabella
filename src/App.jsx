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
    <div className="relative min-h-screen">
      {/* Background fijo */}
      <div className="fixed inset-0 -z-50">
        <BackgroundGradientAnimation 
          gradientBackgroundStart="rgb(108, 0, 162)"
          gradientBackgroundEnd="rgb(0, 17, 82)"
          interactive={true}
        />
      </div>
      
      {/* Contenido principal */}
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