import React from "react";
import { CometCard } from "../ui/comet-card";

export function CometCardDemo() {
  return (
    <CometCard>
      <button
        type="button"
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4 transition-all duration-300 hover:saturate-100 hover:scale-105"
        aria-label="Mi foto de perfil"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}>
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75 transition-all duration-300 hover:contrast-100"
              alt="Foto de Isabelia - Desarrolladora Full Stack"
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }} />
          </div>
        </div>
        <div
          className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Isabelia López</div>
          <div className="text-xs text-gray-300 opacity-50">Full Stack Dev</div>
        </div>
      </button>
    </CometCard>
  );
}