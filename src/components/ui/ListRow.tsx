import React from "react";
import { ArrowLeft2 } from "iconsax-reactjs";
import { cn } from "@/lib/utils";

export interface ListRowProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  leading?: React.ReactNode;
  badge?: React.ReactNode;
  trailing?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ListRow({
  title,
  subtitle,
  leading,
  badge,
  trailing,
  onClick,
  className,
}: ListRowProps) {
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={cn(
        "p-4 rounded-xl border border-[#D3D3D3]/15 bg-[#181818] flex items-center justify-between gap-4 text-right transition-colors",
        isClickable && "hover:bg-[#262626] cursor-pointer hover:border-[#D3D3D3]/30",
        className
      )}
    >
      <div className="flex items-center gap-3.5 flex-1 min-w-0">
        {leading && <div className="shrink-0">{leading}</div>}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#F2F2F2] truncate">{title}</span>
            {badge && <div className="shrink-0">{badge}</div>}
          </div>
          {subtitle && (
            <p className="text-xs text-[#D3D3D3] mt-0.5 truncate">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {trailing}
        {isClickable && !trailing && (
          <ArrowLeft2 size="16" className="text-[#D3D3D3]" />
        )}
      </div>
    </div>
  );
}

export function RowList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2.5 w-full", className)}>{children}</div>;
}
