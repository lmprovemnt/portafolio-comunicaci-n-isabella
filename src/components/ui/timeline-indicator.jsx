"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useScroll, useMotionValueEvent } from "motion/react";

export const TimelineIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionHeight = 1 / sections.length;
    const currentSection = Math.floor(latest / sectionHeight);
    setActiveSection(Math.min(currentSection, sections.length - 1));
  });

  const scrollToSection = (index) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {/* Línea vertical */}
        <div className="w-0.5 h-64 bg-purple-500/30 rounded-full relative">
          <motion.div
            className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
            style={{
              height: `${(activeSection / (sections.length - 1)) * 100}%`
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Puntos de navegación */}
        <div className="flex flex-col items-center space-y-8">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              className={`relative flex flex-col items-center group cursor-pointer ${
                index === activeSection ? 'text-purple-300' : 'text-purple-300/50'
              }`}
              onClick={() => scrollToSection(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Punto */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  index === activeSection
                    ? 'bg-purple-500 border-purple-400 scale-125'
                    : 'bg-transparent border-purple-300/50 group-hover:border-purple-400'
                }`}
              />
              
              {/* Línea conectiva */}
              {index < sections.length - 1 && (
                <div
                  className={`w-0.5 h-8 mt-2 transition-all duration-300 ${
                    index === activeSection
                      ? 'bg-gradient-to-b from-purple-500 to-purple-300/30'
                      : 'bg-purple-300/30 group-hover:bg-purple-400/50'
                  }`}
                />
              )}
              
              {/* Tooltip con título */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <div className="bg-black/80 backdrop-blur-sm text-white text-sm font-semibold px-3 py-2 rounded-lg border border-purple-500/30 shadow-lg">
                  {section.title}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-black/80 rotate-45 border-l border-t border-purple-500/30" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};