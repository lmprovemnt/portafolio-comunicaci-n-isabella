import React from 'react';
import { motion } from 'framer-motion';

export function InfiniteMovingCards({items=[]}){
  const elements = items.length ? items : [{title:'Demo', src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200'}];
  return (
    <div className="w-full overflow-hidden mt-6">
      <motion.div className="flex gap-6 w-max" animate={{ x: ['0%','-50%'] }} transition={{repeat: Infinity, duration: 30, ease: 'linear'}}>
        {[...elements,...elements].map((e,i)=>(
          <div key={i} className="min-w-[240px] bg-white rounded-lg overflow-hidden border">
            <img src={e.src} alt={e.title} className="w-full h-36 object-cover"/>
            <div className="p-3">
              <h4 className="font-semibold text-slate-900">{e.title}</h4>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
