import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TickCircle, Warning2, Danger, InfoCircle } from "iconsax-reactjs";
import { springPresets } from "@/lib/motion";

export type ToastVariant = "success" | "warning" | "danger" | "neutral";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextValue {
  toast: (options: Omit<ToastItem, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, variant = "neutral", duration = 4000 }: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, variant, duration }]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon =
              t.variant === "success"
                ? TickCircle
                : t.variant === "warning"
                ? Warning2
                : t.variant === "danger"
                ? Danger
                : InfoCircle;

            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                transition={springPresets.gentle}
                className="pointer-events-auto p-4 rounded-xl border border-[#D3D3D3]/20 bg-[#181818]/95 backdrop-blur-md shadow-2xl text-right flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#262626] border border-[#D3D3D3]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#F2F2F2]">
                  <Icon size="18" variant="Bold" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-[#F2F2F2]">{t.title}</div>
                  {t.description && (
                    <div className="text-xs text-[#D3D3D3] mt-0.5">{t.description}</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
