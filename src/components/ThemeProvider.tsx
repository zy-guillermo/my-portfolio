"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type PortfolioTheme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

type ThemeContextValue = {
  theme: PortfolioTheme;
  setTheme: (t: PortfolioTheme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyClass(theme: PortfolioTheme) {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<PortfolioTheme>(() => {
    // Default to dark so first paint matches the pre-interactive script.
    if (typeof window === "undefined") return "dark";
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw === "light" ? "light" : "dark";
    } catch {
      return "dark";
    }
  });

  useEffect(() => {
    try {
      applyClass(theme);
    } catch {
      applyClass("light");
    }
  }, [theme]);

  const setTheme = useCallback((t: PortfolioTheme) => {
    setThemeState(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
    applyClass(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: PortfolioTheme = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      applyClass(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("usePortfolioTheme must be used within ThemeProvider");
  }
  return ctx;
}
