"use client";
import React from "react";

export const Boxes = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-slate-900">
      {/* Grid de cajas animadas */}
      <div className="absolute inset-0 flex flex-wrap">
        {Array.from({ length: 64 }).map((_, i) => {
          const row = Math.floor(i / 8);
          const col = i % 8;
          
          return (
            <div
              key={i}
              className="w-1/8 h-1/8 border border-slate-700/40 relative animate-pulse"
              style={{
                animationDelay: `${(row + col) * 0.2}s`,
                animationDuration: `${4 + (i % 3)}s`
              }}
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent rounded-sm" />
            </div>
          );
        })}
      </div>
    </div>
  );
};