import React from "react";
import { GlassPanel } from "../common/GlassPanel";
import { Numeral } from "../common/Numeral";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  title: string;
  value: number | string;
  format?: "standard" | "currency" | "percent" | "phone" | "vin";
  comparisonText?: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  format = "standard",
  comparisonText,
  trend = "neutral",
  icon,
  className,
}: StatCardProps) {
  return (
    <GlassPanel className={cn("p-6 text-right relative overflow-hidden flex flex-col justify-between", className)}>
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center text-[#F2F2F2]">
            {icon}
          </div>
        )}
        <span className="text-xs font-semibold text-[#D3D3D3]">{title}</span>
      </div>

      <div>
        <div className="text-3xl font-extrabold text-[#F2F2F2] tracking-tight">
          <Numeral value={value} format={format} />
        </div>

        {comparisonText && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-[#D3D3D3]">
            <span
              className={cn(
                "inline-block font-mono font-bold",
                trend === "up" && "text-emerald-400",
                trend === "down" && "text-red-400",
                trend === "neutral" && "text-[#D3D3D3]"
              )}
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "•"}
            </span>
            <span>{comparisonText}</span>
          </div>
        )}
      </div>
    </GlassPanel>
  );
}
