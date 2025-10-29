import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((proyecto, idx) => (
          <li
            className="w-[400px] max-w-full relative rounded-2xl border flex-shrink-0 border-white/20 px-8 py-8 bg-white/10 backdrop-blur-md"
            key={proyecto.titulo + idx}
          >
            <div className="relative z-20">
              <h3 className="text-2xl font-bold text-white mb-4">
                <strong>{proyecto.titulo}</strong>
              </h3>
              
              <p className="text-white/90 mb-6 leading-relaxed font-semibold text-base">
                <strong>{proyecto.descripcion}</strong>
              </p>
              
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    <strong>{tech}</strong>
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};