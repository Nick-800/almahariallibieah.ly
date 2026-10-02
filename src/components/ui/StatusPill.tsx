import React from "react";
import { cn } from "@/lib/utils";

export type StatusTone = "success" | "warning" | "danger" | "neutral";

export interface StatusPillProps {
  label: React.ReactNode;
  tone?: StatusTone;
  pulse?: boolean;
  className?: string;
}

export function StatusPill({
  label,
  tone = "neutral",
  pulse = false,
  className,
}: StatusPillProps) {
  const toneClasses = {
    success: "bg-emerald-950/60 border-emerald-800/60 text-emerald-300",
    warning: "bg-amber-950/60 border-amber-800/60 text-amber-300",
    danger: "bg-rose-950/60 border-rose-800/60 text-rose-300",
    neutral: "bg-[#181818] border-[#D3D3D3]/20 text-[#D3D3D3]",
  };

  const dotClasses = {
    success: "bg-emerald-400",
    warning: "bg-amber-400",
    danger: "bg-rose-400",
    neutral: "bg-[#D3D3D3]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-medium",
        toneClasses[tone],
        className
      )}
    >
      <span
        className={cn(
          "w-1.5 h-1.5 rounded-full shrink-0",
          dotClasses[tone],
          pulse && "animate-pulse"
        )}
      />
      <span>{label}</span>
    </div>
  );
}
