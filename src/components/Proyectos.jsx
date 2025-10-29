import React from 'react';
import { motion } from 'framer-motion';

export default function Proyectos(){
  const projects = [
    {title: 'Proyecto audiovisual', desc: 'Cortometraje sobre memoria colectiva', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200'},
    {title: 'Campaña digital', desc: 'Estrategia para ONG ambiental', img: 'https://images.unsplash.com/photo-1520975913760-9b4c7b0d2d5a?w=1200'},
  ];
  return (
    <section id="proyectos" className="py-20">
      <div className="container-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p,i)=>(
            <motion.article key={i} whileHover={{scale:1.02}} className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-slate-600 mt-2">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
