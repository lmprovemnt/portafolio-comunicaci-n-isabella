"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../utils";
import { IconHome, IconUser, IconBriefcase, IconMail } from "@tabler/icons-react";

export const FloatingNav = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  const navItems = [
    {
      name: "Inicio",
      link: "inicio",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Experiencia",
      link: "experiencia", 
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Proyectos",
      link: "proyectos",
      icon: <IconBriefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Contacto",
      link: "contacto",
      icon: <IconMail className="h-4 w-4 text-white" />,
    },
  ];

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() || 0;
      const direction = current - previous;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full bg-white/10 backdrop-blur-md shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link-${idx}`}
            onClick={() => scrollToSection(navItem.link)}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-purple-300 transition-colors duration-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">
              {navItem.name}
            </span>
          </button>
        ))}
        <button 
          className="border text-sm font-medium relative border-white/20 bg-gradient-to-b from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
          onClick={() => scrollToSection("contacto")}
        >
          <span>Contactar</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple-400 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};