import React from "react";
import { SearchNormal1, CloseCircle } from "iconsax-reactjs";
import { cn } from "@/lib/utils";

export interface SearchFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  className?: string;
}

export const SearchField = React.forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ className, value, onChange, onClear, placeholder = "بحث سريع...", ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <div className="absolute right-3.5 text-[#D3D3D3] pointer-events-none flex items-center">
          <SearchNormal1 size="18" />
        </div>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-[#181818] border border-[#D3D3D3]/20 rounded-xl pr-10 pl-10 py-2.5 text-sm text-[#F2F2F2] placeholder-[#707070] transition-colors focus:outline-none focus:border-[#F2F2F2]"
          {...props}
        />
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute left-3.5 text-[#D3D3D3] hover:text-[#F2F2F2] transition-colors"
            aria-label="مسح البحث"
          >
            <CloseCircle size="16" />
          </button>
        )}
      </div>
    );
  }
);

SearchField.displayName = "SearchField";
