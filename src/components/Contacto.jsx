import React from 'react';

export default function Contacto(){
  return (
    <section id="contacto" className="py-20">
      <div className="container-center max-w-xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Contacto</h2>
        <p className="text-slate-600 mb-6">¿Tienes un proyecto o quieres colaborar? Escríbeme.</p>
        <form className="space-y-4">
          <input className="w-full p-3 border border-slate-200 rounded" placeholder="Nombre"/>
          <input className="w-full p-3 border border-slate-200 rounded" placeholder="Correo"/>
          <textarea className="w-full p-3 border border-slate-200 rounded" rows="5" placeholder="Mensaje"></textarea>
          <button className="px-6 py-3 bg-sky-600 text-white rounded">Enviar</button>
        </form>
      </div>
    </section>
  );
}
