import React from "react";
import { ArrowLeft2 } from "iconsax-reactjs";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#D3D3D3]/15 text-right w-full",
        className
      )}
    >
      <div className="space-y-1.5">
        {eyebrow && (
          <div className="text-xs font-mono uppercase tracking-widest text-[#D3D3D3]">
            {eyebrow}
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F2F2F2] tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-[#D3D3D3] max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
    </div>
  );
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="مسار التنقل" className={cn("flex items-center gap-2 text-xs", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className={cn(isLast ? "font-bold text-[#F2F2F2]" : "text-[#D3D3D3]")}>
                {item.label}
              </span>
            )}
            {!isLast && <ArrowLeft2 size="12" className="text-[#D3D3D3]/40" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
