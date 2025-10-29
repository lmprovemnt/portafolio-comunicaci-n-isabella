import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Experiencia from "./components/Experiencia";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Inicio />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
