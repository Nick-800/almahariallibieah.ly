import React from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-9 h-9 rounded-lg border border-[#D3D3D3]/20 bg-[#181818] flex items-center justify-center text-[#D3D3D3] hover:text-[#F2F2F2] hover:border-[#D3D3D3]/50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        aria-label="الصفحة السابقة"
      >
        <ArrowRight2 size="16" />
      </button>

      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            className={cn(
              "w-9 h-9 rounded-lg text-xs font-mono font-bold transition-all",
              isActive
                ? "bg-[#F2F2F2] text-[#1F1F1F] shadow-sm"
                : "bg-[#181818] border border-[#D3D3D3]/20 text-[#D3D3D3] hover:text-[#F2F2F2]"
            )}
          >
            {p}
          </button>
        );
      })}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-9 h-9 rounded-lg border border-[#D3D3D3]/20 bg-[#181818] flex items-center justify-center text-[#D3D3D3] hover:text-[#F2F2F2] hover:border-[#D3D3D3]/50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
        aria-label="الصفحة التالية"
      >
        <ArrowLeft2 size="16" />
      </button>
    </div>
  );
}
