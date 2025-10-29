import React from 'react';
import { motion } from 'framer-motion';

export function FocusCards({cards}){
  return (
    <div className="flex justify-center gap-4 mt-6">
      {cards.map((c,i)=>(
        <motion.div key={i} whileHover={{scale:1.03}} className="w-40 h-52 rounded-lg overflow-hidden border">
          <img src={c.src} alt={c.title} className="w-full h-full object-cover"/>
        </motion.div>
      ))}
    </div>
  );
}
