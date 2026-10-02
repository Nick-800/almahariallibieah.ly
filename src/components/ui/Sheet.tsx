import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CloseCircle } from "iconsax-reactjs";
import { springPresets } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface SheetProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  side?: "right" | "left";
  className?: string;
}

export function Sheet({
  open,
  onClose,
  title,
  description,
  children,
  side = "right",
  className,
}: SheetProps) {
  const initialOffset = side === "right" ? "100%" : "-100%";

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 overflow-hidden text-right">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000]/70 backdrop-blur-sm"
          />

          <div className="fixed inset-y-0 flex max-w-full" style={{ [side]: 0 }}>
            <motion.div
              initial={{ x: initialOffset }}
              animate={{ x: 0 }}
              exit={{ x: initialOffset }}
              transition={springPresets.gentle}
              className={cn(
                "w-screen max-w-md bg-[#181818] border-l border-[#D3D3D3]/20 p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-y-auto",
                side === "left" && "border-r border-l-0",
                className
              )}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D3D3D3]/15 mb-6">
                  <div>
                    {title && <h3 className="text-xl font-bold text-[#F2F2F2]">{title}</h3>}
                    {description && (
                      <p className="text-xs text-[#D3D3D3] mt-1">{description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors p-1"
                    aria-label="إغلاق اللوحة"
                  >
                    <CloseCircle size="22" />
                  </button>
                </div>

                <div>{children}</div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
