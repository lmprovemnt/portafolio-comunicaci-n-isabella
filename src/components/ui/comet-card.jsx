import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export function CometCard({ children }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    const handleGlobalMouseMove = ({ clientX, clientY }) => {
      if (cardRef.current) {
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);
        
        if (distance < 500) {
          mouseX.set(clientX - left);
          mouseY.set(clientY - top);
        }
      }
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    return () => document.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cardRef}
      className="group relative flex justify-center"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 transition-all duration-700 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.3) 0%,
              rgba(147, 51, 234, 0.2) 20%,
              rgba(126, 34, 206, 0.1) 40%,
              transparent 80%
            )
          `,
          filter: 'blur(20px)',
        }}
      />
      {children}
    </motion.div>
  );
}