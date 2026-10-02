import { Fragment } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { ArrowDown2, TickCircle } from "iconsax-reactjs";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export function Select({
  label,
  value,
  onChange,
  options,
  placeholder = "اختر...",
  className,
}: SelectProps) {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={cn("w-full text-right", className)}>
      {label && (
        <label className="block text-xs font-semibold text-[#D3D3D3] mb-1.5">
          {label}
        </label>
      )}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="relative w-full cursor-pointer bg-[#181818] border border-[#D3D3D3]/20 rounded-xl px-4 py-3 text-right text-sm text-[#F2F2F2] focus:outline-none focus:border-[#F2F2F2] transition-colors flex items-center justify-between">
            <span className="block truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <ArrowDown2 size="16" className="text-[#D3D3D3] shrink-0" />
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <ListboxOptions className="absolute z-50 mt-1.5 max-h-60 w-full overflow-auto rounded-xl bg-[#181818] border border-[#D3D3D3]/20 p-1.5 text-sm shadow-2xl focus:outline-none backdrop-blur-xl">
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className={({ active, selected }) =>
                    cn(
                      "relative cursor-pointer select-none rounded-lg px-3 py-2.5 text-right flex items-center justify-between transition-colors",
                      active ? "bg-[#262626] text-[#F2F2F2]" : "text-[#D3D3D3]",
                      selected && "font-bold text-[#F2F2F2] bg-[#262626]/60"
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className="block truncate">{option.label}</span>
                      {selected && <TickCircle size="16" className="text-[#F2F2F2]" variant="Bold" />}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
