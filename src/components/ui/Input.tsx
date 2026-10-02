import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, leftSlot, rightSlot, id, ...props }, ref) => {
    const inputId = id || (label ? label.replace(/\s+/g, "-").toLowerCase() : undefined);

    return (
      <div className="w-full text-right">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-semibold text-[#D3D3D3] mb-1.5">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftSlot && (
            <div className="absolute left-3.5 text-[#D3D3D3] pointer-events-none flex items-center">
              {leftSlot}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full bg-[#181818] border border-[#D3D3D3]/20 rounded-xl px-4 py-3 text-sm text-[#F2F2F2] placeholder-[#707070] transition-colors focus:outline-none focus:border-[#F2F2F2] focus:ring-1 focus:ring-[#F2F2F2]/50",
              leftSlot && "pl-11",
              rightSlot && "pr-11",
              error && "border-red-500/80 focus:border-red-500",
              className
            )}
            {...props}
          />
          {rightSlot && (
            <div className="absolute right-3.5 text-[#D3D3D3] flex items-center">
              {rightSlot}
            </div>
          )}
        </div>
        {error ? (
          <p className="text-xs text-red-400 mt-1">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-[#D3D3D3]/70 mt-1">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
