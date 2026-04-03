"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { CatIcon } from "@/components/icons/CatIcon";
import ThemeToggleButton from "./ThemeToggleButton";
import HeartButton from "./HeartButton";

const nav = [
  { href: "#sdet-projects", label: "SDET Projects" },
  { href: "#web-projects", label: "Web Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function clearHashFromUrl() {
  const { pathname, search, hash } = window.location;
  if (!hash) return;
  window.history.replaceState({}, "", `${pathname}${search}`);
}

function goHome() {
  clearHashFromUrl();
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    clearHashFromUrl();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 0);
  }, []);

  return (
    <header
      className="craftz-nav-blur fixed top-0 z-50 w-full"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="mx-auto flex max-w-[768px] flex-wrap items-center justify-between p-2">
        <div className="mr-5 flex items-center">
          <h1 className="text-lg font-bold leading-tight tracking-tighter">
            <button
              type="button"
              onClick={goHome}
              className="group text-left text-gray-800 dark:text-white/90"
            >
              <span className="inline-flex h-[30px] items-center px-[10px] leading-[20px]">
                <CatIcon className="h-5 w-5 shrink-0 transition-transform duration-200 ease-out group-hover:rotate-[20deg]" />
                <span className="ml-3 text-[18px] font-bold leading-[20px] tracking-tight">
                  Zy Guillermo
                </span>
              </span>
            </button>
          </h1>
        </div>

        <nav
          className="mt-0 hidden flex-grow flex-row flex-wrap items-center md:flex"
          aria-label="Primary"
        >
          {nav.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative rounded p-2 text-base font-medium text-gray-800 dark:text-white/90 after:absolute after:bottom-1 after:left-2 after:right-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--craftz-teal-500)] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-0">
          <HeartButton className="mr-2" />
          <ThemeToggleButton />

          <div className="ml-2 md:hidden">
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Options"
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-gray-800 dark:border-white/30 dark:text-white/90"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-gray-200/50 px-2 pb-3 dark:border-white/10 md:hidden"
        >
          <div className="flex flex-col">
            {nav.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative rounded p-2 text-base font-medium text-gray-800 dark:text-white/90 after:absolute after:bottom-1 after:left-2 after:right-2 after:h-[2px] after:origin-left after:scale-x-0 after:bg-[var(--craftz-teal-500)] after:transition-transform after:duration-200 hover:after:scale-x-100"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
