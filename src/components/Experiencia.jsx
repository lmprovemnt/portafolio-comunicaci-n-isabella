import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

const Experiencia = () => {
  // Contenido para el Sticky Scroll
  const experienciaContent = [
    {
      title: "Desarrollador Full Stack Senior",
      description:
        "Lideré el desarrollo de aplicaciones web escalables con React, Node.js y MongoDB. Implementé arquitecturas microservicios y optimicé el rendimiento de aplicaciones en producción. Colaboré estrechamente con equipos de diseño y producto para entregar soluciones innovadoras.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Tech Solutions Inc.</h3>
            <p className="text-lg">2022 - Presente</p>
            <p className="mt-4">React • Node.js • MongoDB • AWS</p>
          </div>
        </div>
      ),
    },
    {
      title: "Frontend Developer",
      description:
        "Diseñé y desarrollé interfaces de usuario modernas y responsive utilizando las mejores prácticas de UX/UI. Implementé componentes reutilizables y optimicé el rendimiento frontend. Trabajé en proyectos para clientes internacionales manteniendo altos estándares de calidad.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">Digital Agency</h3>
            <p className="text-lg">2020 - 2022</p>
            <p className="mt-4">Vue.js • TypeScript • Sass • Figma</p>
          </div>
        </div>
      ),
    },
    {
      title: "Desarrollador Junior",
      description:
        "Participé en el desarrollo de features y mantenimiento de aplicaciones existentes. Aprendí metodologías ágiles y mejores prácticas de desarrollo. Colaboré en el debugging y testing de aplicaciones, ganando experiencia en el ciclo completo de desarrollo.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold mb-4">StartUp Innovadora</h3>
            <p className="text-lg">2019 - 2020</p>
            <p className="mt-4">JavaScript • React • Git • Agile</p>
          </div>
        </div>
      ),
    },
  ];

  const tecnologias = [
    {
      title: "React & Next.js",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Node.js",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "TypeScript",
      thumbnail: "https://images.unsplash.com/photo-1566837942615-893bdbdacdef?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "MongoDB",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "PostgreSQL", 
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Tailwind CSS",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "AWS Cloud",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Docker",
      thumbnail: "https://images.unsplash.com/photo-1626717259959-6cef3b6d59ae?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Git & GitHub",
      thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "REST APIs",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "GraphQL",
      thumbnail: "https://images.unsplash.com/photo-1633355443674-6e73ec0f9cfe?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Jest Testing",
      thumbnail: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "CI/CD",
      thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "Mobile Dev",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60",
    },
    {
      title: "UI/UX Design",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60",
    }
  ];

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          <strong>EXPERIENCIA PROFESIONAL</strong>
        </h2>
        
        {/* Sección Sticky Scroll para experiencias */}
        <div className="mb-20 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-6">
          <StickyScroll content={experienciaContent} />
        </div>

        {/* Sección Parallax SOLO con imágenes - sin textos */}
        <div className="mb-20">
          <HeroParallaxSection products={tecnologias} />
        </div>
      </div>
    </section>
  );
};

// Componente Hero Parallax simplificado - solo imágenes
const HeroParallaxSection = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[120vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto"
    >
      <motion.div className="">
        {/* Primera fila */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 mb-8">
          {firstRow.map((product) => (
            <TechCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Segunda fila */}
        <motion.div className="flex flex-row space-x-8 mb-8">
          {secondRow.map((product) => (
            <TechCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Tercera fila */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8">
          {thirdRow.map((product) => (
            <TechCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Componente de tarjeta de tecnología - solo imagen
const TechCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      key={product.title}
      className="group/product h-56 w-56 relative flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
    >
      <img
        src={product.thumbnail}
        className="object-cover absolute h-full w-full inset-0"
        alt={product.title}
      />
    </motion.div>
  );
};

export default Experiencia;