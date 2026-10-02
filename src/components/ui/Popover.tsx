import React, { Fragment } from "react";
import { Popover as HeadlessPopover, Transition, Menu as HeadlessMenu } from "@headlessui/react";
import { cn } from "@/lib/utils";

export interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Popover({ trigger, children, className }: PopoverProps) {
  return (
    <HeadlessPopover className="relative inline-block text-right">
      <HeadlessPopover.Button as={Fragment}>{trigger}</HeadlessPopover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 translate-y-1 scale-95"
        enterTo="opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 translate-y-0 scale-100"
        leaveTo="opacity-0 translate-y-1 scale-95"
      >
        <HeadlessPopover.Panel
          className={cn(
            "absolute z-40 mt-2 rounded-xl bg-[#181818] border border-[#D3D3D3]/20 p-4 shadow-2xl backdrop-blur-xl text-right focus:outline-none",
            className
          )}
        >
          {children}
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  );
}

export interface MenuItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
}

export interface MenuProps {
  trigger: React.ReactNode;
  items: MenuItem[];
  className?: string;
}

export function Menu({ trigger, items, className }: MenuProps) {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-right">
      <HeadlessMenu.Button as={Fragment}>{trigger}</HeadlessMenu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-120"
        enterFrom="opacity-0 scale-95 translate-y-1"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 translate-y-1"
      >
        <HeadlessMenu.Items
          className={cn(
            "absolute left-0 z-40 mt-1.5 w-48 origin-top-left rounded-xl bg-[#181818] border border-[#D3D3D3]/20 p-1.5 shadow-2xl focus:outline-none backdrop-blur-xl",
            className
          )}
        >
          {items.map((item) => (
            <HeadlessMenu.Item key={item.id}>
              {({ active }) => (
                <button
                  type="button"
                  onClick={item.onClick}
                  className={cn(
                    "w-full text-right px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-2.5 transition-colors",
                    active ? "bg-[#262626] text-[#F2F2F2]" : "text-[#D3D3D3]",
                    item.danger && "text-red-400 hover:text-red-300 hover:bg-red-950/40"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              )}
            </HeadlessMenu.Item>
          ))}
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
}
