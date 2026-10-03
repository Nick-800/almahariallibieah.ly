import React from "react";
import { motion } from "motion/react";
import { Home2, Setting2, CallCalling, Car, Box, ShieldTick, Gallery } from "iconsax-reactjs";
import { cn } from "@/lib/utils";
import { springPresets } from "@/lib/motion";

export interface NavRailItem {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
}

export interface NavRailProps {
  activeId: string;
  onSelect?: (id: string) => void;
  className?: string;
}

export function NavRail({ activeId, onSelect, className }: NavRailProps) {
  const items: NavRailItem[] = [
    { id: "home", label: "الرئيسية", href: "#hero", icon: Home2 },
    { id: "services", label: "الخدمات", href: "#services", icon: Car },
    { id: "logistics", label: "مسار التوريد", href: "#logistics", icon: Box },
    { id: "gallery", label: "المعرض", href: "#gallery", icon: Gallery },
    { id: "workflow", label: "المعايير", href: "#workflow", icon: ShieldTick },
    { id: "inquiry", label: "طلب استيراد", href: "#inquiry", icon: Setting2 },
    { id: "contact", label: "تواصل معنا", href: "#contact", icon: CallCalling },
  ];

  return (
    <nav
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#181818]/90 backdrop-blur-xl border border-[#D3D3D3]/20 rounded-2xl p-1.5 shadow-2xl flex items-center gap-1",
        className
      )}
      aria-label="شريط التنقل السريع"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeId === item.id;

        return (
          <a
            key={item.id}
            href={item.href}
            onClick={() => onSelect?.(item.id)}
            className={cn(
              "relative px-3.5 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold transition-colors select-none group",
              isActive ? "text-[#1F1F1F]" : "text-[#D3D3D3] hover:text-[#F2F2F2]"
            )}
            title={item.label}
          >
            {isActive && (
              <motion.div
                layoutId="navrail-active-pill"
                className="absolute inset-0 bg-[#F2F2F2] rounded-xl shadow-light-glow -z-10"
                transition={springPresets.smooth}
              />
            )}
            <Icon size="18" variant={isActive ? "Bold" : "Linear"} />
            <span className={cn("hidden sm:inline-block", !isActive && "opacity-80")}>
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
