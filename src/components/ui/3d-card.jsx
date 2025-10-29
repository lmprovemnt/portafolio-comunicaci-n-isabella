import React from "react";
import { cn } from "../../utils";

export const CardContainer = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn(
      "flex items-center justify-center",
      className
    )}>
      {children}
    </div>
  );
};

export const CardBody = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn(
      "relative group/card",
      className
    )}>
      {children}
    </div>
  );
};

export const CardItem = ({ 
  as: Tag = "div",
  translateZ = 0,
  translateX = 0,
  translateY = 0,
  rotateX = 0,
  rotateY = 0,
  className,
  children,
  ...props 
}) => {
  return (
    <Tag
      className={cn(
        "transition duration-200 ease-out",
        className
      )}
      style={{
        transform: `
          translateZ(${translateZ}px)
          translateX(${translateX}px)
          translateY(${translateY}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};