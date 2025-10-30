"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-slate-900 border-t border-slate-700 py-6">
      {/* Fondo animado */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Boxes />
        {/* Overlay para suavizar */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/60" />
      </div>
      
      {/* Contenido del footer */}
      <div className="relative z-10 text-center text-white">
        <div className="container-center">
          © 2025 Santiago Valencia — Comunicación Social
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}