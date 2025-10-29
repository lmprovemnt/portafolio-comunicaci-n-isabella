import React from 'react';
import { motion } from 'framer-motion';

export default function Inicio(){
  return (
    <section id="inicio" className="min-h-screen flex items-center">
      <div className="container-center text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">Hola, soy Santiago Valencia</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="text-lg text-slate-600 max-w-2xl mx-auto">
          Estudiante de Comunicación Social — creo contenidos, estrategias y piezas audiovisuales que conectan con las audiencias.
        </motion.p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#proyectos" className="px-6 py-3 bg-sky-600 text-white rounded-md shadow">Ver proyectos</a>
          <a href="#contacto" className="px-6 py-3 border border-slate-200 rounded-md text-slate-700">Contacto</a>
        </div>
      </div>
    </section>
  );
}
