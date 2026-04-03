"use client";

import { Moon, Sun } from "lucide-react";
import { usePortfolioTheme } from "./ThemeProvider";
export default function ThemeToggleButton() {
  const { toggleTheme } = usePortfolioTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className={[
        "inline-flex h-10 min-h-10 w-10 min-w-10 items-center justify-center rounded-md",
        "text-white ring-1 ring-black/10 transition-colors active:scale-[0.97]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]",
        "focus-visible:ring-[var(--craftz-purple-600)] dark:focus-visible:ring-[var(--craftz-orange-500)]",
        "bg-[var(--craftz-purple-500)] hover:bg-[var(--craftz-purple-600)]",
        "dark:bg-[var(--craftz-orange-400)] dark:hover:bg-[var(--craftz-orange-500)]",
        "shadow-[0_1px_2px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.15)]",
        "dark:shadow-[0_1px_2px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.12)]",
      ].join(" ")}
    >
      <Moon className="h-[22px] w-[22px] shrink-0 text-white dark:hidden" strokeWidth={2.35} />
      <Sun className="hidden h-[22px] w-[22px] shrink-0 text-black/90 dark:block" strokeWidth={2.08} />
    </button>
  );
}
