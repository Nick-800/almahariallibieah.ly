import React, { createContext, useContext, useEffect, useState } from "react";

export interface HomaContextValue {
  direction: "rtl" | "ltr";
  setDirection: (dir: "rtl" | "ltr") => void;
  locale: string;
  setLocale: (loc: string) => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

const HomaContext = createContext<HomaContextValue | undefined>(undefined);

export interface HomaProviderProps {
  children: React.ReactNode;
  defaultDirection?: "rtl" | "ltr";
  defaultLocale?: string;
  defaultTheme?: "dark" | "light";
}

export function HomaProvider({
  children,
  defaultDirection = "rtl",
  defaultLocale = "ar",
  defaultTheme = "dark",
}: HomaProviderProps) {
  const [direction, setDirection] = useState<"rtl" | "ltr">(defaultDirection);
  const [locale, setLocale] = useState(defaultLocale);
  const [theme, setTheme] = useState<"dark" | "light">(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", locale);
  }, [direction, locale]);

  return (
    <HomaContext.Provider
      value={{
        direction,
        setDirection,
        locale,
        setLocale,
        theme,
        setTheme,
      }}
    >
      {children}
    </HomaContext.Provider>
  );
}

export function useHoma() {
  const context = useContext(HomaContext);
  if (!context) {
    throw new Error("useHoma must be used within a HomaProvider");
  }
  return context;
}
