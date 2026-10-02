import React, { Fragment } from "react";
import { Dialog as HeadlessDialog, Transition, TransitionChild } from "@headlessui/react";
import { CloseCircle } from "iconsax-reactjs";
import { cn } from "@/lib/utils";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = "md",
  className,
}: DialogProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <Transition show={open} as={Fragment}>
      <HeadlessDialog as="div" className="relative z-50 text-right" onClose={onClose}>
        {/* Backdrop */}
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000000]/70 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <HeadlessDialog.Panel
                className={cn(
                  "relative transform overflow-hidden rounded-2xl bg-[#181818] border border-[#D3D3D3]/20 p-6 sm:p-8 text-right shadow-2xl transition-all w-full",
                  maxWidthClasses[maxWidth],
                  className
                )}
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 left-4 text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors"
                  aria-label="إغلاق"
                >
                  <CloseCircle size="22" />
                </button>

                {title && (
                  <HeadlessDialog.Title as="h3" className="text-xl font-bold text-[#F2F2F2]">
                    {title}
                  </HeadlessDialog.Title>
                )}

                {description && (
                  <HeadlessDialog.Description className="mt-2 text-sm text-[#D3D3D3]">
                    {description}
                  </HeadlessDialog.Description>
                )}

                <div className="mt-5">{children}</div>

                {footer && (
                  <div className="mt-6 pt-4 border-t border-[#D3D3D3]/15 flex items-center justify-end gap-3">
                    {footer}
                  </div>
                )}
              </HeadlessDialog.Panel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
}
