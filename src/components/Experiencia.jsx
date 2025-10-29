import React from 'react';
import { motion } from 'framer-motion';

export default function Experiencia(){
  const items = [
    {role:'Practicante de Comunicación Interna', org:'Universidad del Valle', year:'2024', desc:'Campañas institucionales, redacción y gestión de redes.'},
    {role:'Voluntariado Audiovisual', org:'Fundación Comunicación Viva', year:'2023', desc:'Producción de piezas para proyectos sociales.'},
  ];
  return (
    <section id="experiencia" className="py-20 bg-slate-50">
      <div className="container-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Experiencia</h2>
        <div className="space-y-4">
          {items.map((it,i)=>(
            <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{it.role}</h3>
                  <p className="text-sm text-slate-600">{it.org} • {it.year}</p>
                </div>
              </div>
              <p className="text-slate-700 mt-3">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
