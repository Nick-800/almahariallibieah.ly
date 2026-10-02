import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { springPresets } from "@/lib/motion";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D3D3D3] disabled:opacity-50 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        primary: "bg-[#F2F2F2] text-[#1F1F1F] hover:bg-white shadow-light-glow",
        subtle: "bg-[#262626] text-[#F2F2F2] hover:bg-[#303030] border border-[#D3D3D3]/20",
        ghost: "bg-transparent text-[#D3D3D3] hover:text-[#F2F2F2] hover:bg-[#262626]/50",
        danger: "bg-red-950/80 text-red-200 border border-red-800/60 hover:bg-red-900",
      },
      size: {
        sm: "h-9 px-3.5 text-xs gap-1.5",
        md: "h-11 px-5 text-sm gap-2",
        lg: "h-13 px-7 text-base gap-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        transition={springPresets.snappy}
        disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
