import React, { useEffect, useState, useRef } from "react";
import { cn } from "../../utils";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  // Animación del carrusel
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
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
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
            key={proyecto.titulo + idx}
            className="w-[400px] h-[520px] max-w-full flex-shrink-0" // Altura fija añadida
          >
            <CardContainer className="inter-var h-full">
              <CardBody className="bg-white/10 backdrop-blur-md relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] border-white/[0.2] w-full h-full rounded-2xl p-6 border flex flex-col">
                
                {/* Título con efecto 3D - altura fija */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-white mb-3 h-16 flex items-start" // Altura fija para título
                >
                  <strong className="line-clamp-2">{proyecto.titulo}</strong>
                </CardItem>
                
                {/* Descripción con efecto 3D - altura fija */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white/90 leading-relaxed font-semibold text-base mb-4 h-20 flex items-start" // Altura fija para descripción
                >
                  <strong className="line-clamp-3">{proyecto.descripcion}</strong>
                </CardItem>
                
                {/* Imagen con efecto 3D - altura fija */}
                <CardItem 
                  translateZ="100" 
                  className="w-full mb-4 flex-shrink-0"
                >
                  <img
                    src={proyecto.imagen}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={proyecto.titulo}
                  />
                </CardItem>
                
                {/* Tecnologías con efecto 3D - altura fija y scroll si es necesario */}
                <CardItem
                  translateZ="30"
                  className="w-full flex-1 min-h-0"
                >
                  <div className="flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0"
                      >
                        <strong>{tech}</strong>
                      </span>
                    ))}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};