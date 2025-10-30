"use client";
import React from "react";
import { Mail, Phone, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 min-h-screen flex items-center justify-center bg-transparent">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto o quieres colaborar? Contáctame a través de cualquiera de estas plataformas.
          </p>
        </div>

        {/* Grid de contactos estilo Bento */}
        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2">
          {/* Email */}
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Mail className="h-6 w-6 text-white" />}
            title="Email"
            description="isabelia.lopez@email.com"
            contactType="email"
          />
          
          {/* Teléfono */}
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Phone className="h-6 w-6 text-white" />}
            title="Teléfono"
            description="+34 612 345 678"
            contactType="phone"
          />
          
          {/* WhatsApp */}
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<MessageCircle className="h-6 w-6 text-white" />}
            title="WhatsApp"
            description="Chatea conmigo"
            contactType="whatsapp"
          />
          
          {/* LinkedIn */}
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<Linkedin className="h-6 w-6 text-white" />}
            title="LinkedIn"
            description="/in/isabelia-lopez"
            contactType="linkedin"
          />
          
          {/* Instagram */}
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Instagram className="h-6 w-6 text-white" />}
            title="Instagram"
            description="@isabelia.dev"
            contactType="instagram"
          />
        </ul>
      </div>
    </section>
  );
};

const GridItem = ({
  area,
  icon,
  title,
  description,
  contactType
}) => {
  const handleContactClick = () => {
    switch (contactType) {
      case 'email':
        window.open('mailto:isabelia.lopez@email.com', '_blank');
        break;
      case 'phone':
        window.open('tel:+34612345678', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/34612345678', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/isabelia-lopez', '_blank');
        break;
      case 'instagram':
        window.open('https://instagram.com/isabelia.dev', '_blank');
        break;
      default:
        break;
    }
  };

  const getGradientByType = (type) => {
    switch (type) {
      case 'email':
        return 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(162, 28, 175, 0.15) 100%)';
      case 'phone':
        return 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(21, 128, 61, 0.15) 100%)';
      case 'whatsapp':
        return 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%)';
      case 'linkedin':
        return 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)';
      case 'instagram':
        return 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(108, 0, 162, 0.15) 0%, rgba(0, 17, 82, 0.15) 100%)';
    }
  };

  const getBorderColorByType = (type) => {
    switch (type) {
      case 'email':
        return 'rgba(220, 38, 38, 0.3)';
      case 'phone':
        return 'rgba(34, 197, 94, 0.3)';
      case 'whatsapp':
        return 'rgba(34, 197, 94, 0.3)';
      case 'linkedin':
        return 'rgba(14, 165, 233, 0.3)';
      case 'instagram':
        return 'rgba(236, 72, 153, 0.3)';
      default:
        return 'rgba(255, 255, 255, 0.2)';
    }
  };

  const getGlowClass = (type) => {
    switch (type) {
      case 'email':
        return 'email-glow';
      case 'phone':
        return 'phone-glow';
      case 'whatsapp':
        return 'whatsapp-glow';
      case 'linkedin':
        return 'linkedin-glow';
      case 'instagram':
        return 'instagram-glow';
      default:
        return '';
    }
  };

  return (
    <li className={`min-h-[14rem] list-none ${area} cursor-pointer group`} onClick={handleContactClick}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        
        {/* Borde animado exterior */}
        <div className={`absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${getGlowClass(contactType)}`} />
        
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 border-0.75 z-10"
          style={{
            background: getGradientByType(contactType),
            backdropFilter: 'blur(20px)',
            border: `1px solid ${getBorderColorByType(contactType)}`,
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div 
              className="w-fit rounded-lg p-3 transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: `1px solid ${getBorderColorByType(contactType)}`,
              }}
            >
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-white/80 md:text-base/[1.375rem]">
                {description}
              </p>
            </div>
          </div>
          
          {/* Efecto de borde líquido interior */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: `linear-gradient(45deg, transparent 30%, ${getBorderColorByType(contactType)} 50%, transparent 70%)`,
              backgroundSize: '300% 300%',
              animation: 'liquidBorder 3s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </li>
  );
};

export default Contacto;