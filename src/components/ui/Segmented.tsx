import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { springPresets } from "@/lib/motion";

export interface SegmentedOption {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface SegmentedProps {
  value: string;
  onChange: (value: string) => void;
  options: SegmentedOption[];
  className?: string;
  name?: string;
}

export function Segmented({
  value,
  onChange,
  options,
  className,
  name = "segmented-pill",
}: SegmentedProps) {
  return (
    <div
      className={cn(
        "inline-flex p-1 rounded-xl bg-[#181818] border border-[#D3D3D3]/15 relative select-none",
        className
      )}
    >
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "relative px-4 py-2 text-xs sm:text-sm font-bold transition-colors rounded-lg flex items-center justify-center gap-2 z-10",
              isSelected ? "text-[#1F1F1F]" : "text-[#D3D3D3] hover:text-[#F2F2F2]"
            )}
          >
            {isSelected && (
              <motion.div
                layoutId={name}
                className="absolute inset-0 bg-[#F2F2F2] rounded-lg shadow-sm -z-10"
                transition={springPresets.smooth}
              />
            )}
            {option.icon}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
