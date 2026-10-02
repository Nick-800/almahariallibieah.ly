import React from "react";
import { cn } from "@/lib/utils";

export interface GlowBackdropProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function GlowBackdrop({ className, size = "md" }: GlowBackdropProps) {
  const sizeClasses = {
    sm: "w-48 h-48 blur-2xl opacity-10",
    md: "w-96 h-96 blur-3xl opacity-15",
    lg: "w-[36rem] h-[36rem] blur-[100px] opacity-20",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full pointer-events-none bg-gradient-to-tr from-[#D3D3D3] to-transparent",
        sizeClasses[size],
        className
      )}
    />
  );
}
