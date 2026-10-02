import React from "react";

export interface NumeralProps {
  value: number | string;
  format?: "standard" | "currency" | "percent" | "phone" | "vin";
  locale?: "ar-LY" | "en-US";
  className?: string;
}

export function Numeral({
  value,
  format = "standard",
  locale = "ar-LY",
  className = "",
}: NumeralProps) {
  let formatted = String(value);

  if (typeof value === "number") {
    if (format === "percent") {
      formatted = `${value}%`;
    } else if (format === "currency") {
      formatted = `${new Intl.NumberFormat(locale).format(value)} د.ل`;
    } else {
      formatted = new Intl.NumberFormat(locale).format(value);
    }
  }

  return (
    <span
      className={`font-mono inline-block tracking-tight ${className}`}
      dir={format === "phone" || format === "vin" ? "ltr" : undefined}
    >
      {formatted}
    </span>
  );
}
