import React from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
}

export function GlassPanel({
  children,
  interactive = false,
  className,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#D3D3D3]/15 bg-gradient-to-br from-[#F2F2F2]/[0.04] to-[#D3D3D3]/[0.01] backdrop-blur-md shadow-liquid-glass",
        interactive && "glass-panel-interactive cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
