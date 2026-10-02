import React from "react";
import { motion } from "motion/react";
import { TickCircle } from "iconsax-reactjs";
import { cn } from "@/lib/utils";
import { springPresets } from "@/lib/motion";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({ checked, onChange, label, disabled = false, className }: CheckboxProps) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-2.5 cursor-pointer select-none text-right",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          "w-5 h-5 rounded-md border flex items-center justify-center transition-colors",
          checked
            ? "bg-[#F2F2F2] border-[#F2F2F2] text-[#1F1F1F]"
            : "bg-[#181818] border-[#D3D3D3]/30 hover:border-[#D3D3D3]/60"
        )}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={springPresets.snappy}
          >
            <TickCircle size="14" variant="Bold" />
          </motion.div>
        )}
      </div>
      {label && <span className="text-sm font-medium text-[#F2F2F2]">{label}</span>}
    </label>
  );
}

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function Switch({ checked, onChange, label, disabled = false, className }: SwitchProps) {
  return (
    <label
      className={cn(
        "inline-flex items-center gap-3 cursor-pointer select-none text-right",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div
        onClick={() => !disabled && onChange(!checked)}
        className={cn(
          "w-11 h-6 rounded-full p-1 transition-colors relative flex items-center",
          checked ? "bg-[#F2F2F2]" : "bg-[#262626] border border-[#D3D3D3]/20"
        )}
      >
        <motion.div
          animate={{ x: checked ? (document.dir === "rtl" ? -20 : 20) : 0 }}
          transition={springPresets.snappy}
          className={cn(
            "w-4 h-4 rounded-full shadow-md",
            checked ? "bg-[#1F1F1F]" : "bg-[#D3D3D3]"
          )}
        />
      </div>
      {label && <span className="text-sm font-medium text-[#F2F2F2]">{label}</span>}
    </label>
  );
}
