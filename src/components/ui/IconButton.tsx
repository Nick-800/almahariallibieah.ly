import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { springPresets } from "@/lib/motion";

export interface IconButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "solid" | "subtle" | "ghost";
  shape?: "square" | "circle";
  size?: "sm" | "md" | "lg";
  className?: string;
  "aria-label": string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      variant = "subtle",
      shape = "square",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
    };

    const variantClasses = {
      solid: "bg-[#F2F2F2] text-[#1F1F1F] hover:bg-white shadow-light-glow",
      subtle: "bg-[#262626] text-[#D3D3D3] hover:text-[#F2F2F2] border border-[#D3D3D3]/20 hover:border-[#D3D3D3]/40",
      ghost: "bg-transparent text-[#D3D3D3] hover:text-[#F2F2F2] hover:bg-[#262626]/50",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.94 }}
        whileHover={{ scale: 1.05 }}
        transition={springPresets.snappy}
        className={cn(
          "inline-flex items-center justify-center shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3D3D3]",
          shape === "circle" ? "rounded-full" : "rounded-xl",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

IconButton.displayName = "IconButton";
