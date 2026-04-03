"use client";

import { useId } from "react";
import { motion } from "framer-motion";

export default function ScrollToTopRocket() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-4 md:py-0">
      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group relative flex h-32 w-24 flex-col items-center justify-end focus:outline-none focus-visible:ring-2 focus-visible:ring-[#319795] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]"
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.96 }}
      >
        <motion.span
          className="pointer-events-none absolute -top-0.5 text-lg opacity-60"
          aria-hidden
          animate={{ opacity: [0.35, 0.85, 0.35], y: [0, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          ✦
        </motion.span>
        <motion.span
          className="pointer-events-none absolute top-7 text-[10px] tracking-[0.35em] opacity-40"
          aria-hidden
          animate={{ opacity: [0.2, 0.55, 0.2], y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          ···
        </motion.span>

        <motion.span
          className="relative z-10 drop-shadow-lg"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <RocketArt />
        </motion.span>
      </motion.button>
      <span className="max-w-[10rem] text-center text-xs font-medium leading-snug text-gray-700 opacity-80 dark:text-white/70">
        Launch back to orbit
      </span>
    </div>
  );
}

/** Classic tapered rocket: nose cone, fuselage, fins, porthole, exhaust. */
function RocketArt() {
  const uid = useId();
  const bodyGrad = `rocket-body-${uid}`;
  const metalGrad = `rocket-metal-${uid}`;
  const glassGrad = `rocket-glass-${uid}`;
  const flameGrad = `rocket-flame-${uid}`;

  return (
    <svg
      width="72"
      height="100"
      viewBox="0 0 72 100"
      className="text-[#319795] transition-transform duration-200 group-hover:scale-[1.06] dark:text-[#4fd1c5]"
      aria-hidden
    >
      <defs>
        <linearGradient id={bodyGrad} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id={metalGrad} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id={glassGrad} cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#cffafe" />
          <stop offset="100%" stopColor="#0e7490" />
        </radialGradient>
        <linearGradient id={flameGrad} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Nose cone */}
      <path
        fill={`url(#${bodyGrad})`}
        d="M36 4 L46 28 L26 28 Z"
      />
      {/* Main body */}
      <path
        fill={`url(#${bodyGrad})`}
        d="M26 28 L28 68 L44 68 L46 28 Z"
      />
      {/* Mid band */}
      <rect
        x="27"
        y="44"
        width="18"
        height="6"
        rx="1"
        fill={`url(#${metalGrad})`}
      />
      {/* Porthole */}
      <circle cx="36" cy="36" r="5" fill={`url(#${glassGrad})`} stroke="#0f766e" strokeWidth="1" />
      <circle cx="34" cy="34" r="1.2" fill="white" fillOpacity="0.55" />

      {/* Left fin */}
      <path
        fill="currentColor"
        fillOpacity="0.75"
        d="M28 62 L18 88 L28 76 Z"
      />
      {/* Right fin */}
      <path
        fill="currentColor"
        fillOpacity="0.75"
        d="M44 62 L54 88 L44 76 Z"
      />
      {/* Engine housing */}
      <path
        fill={`url(#${metalGrad})`}
        d="M30 68 L32 76 L40 76 L42 68 Z"
      />

      {/* Exhaust plume */}
      <path
        fill={`url(#${flameGrad})`}
        d="M30 76 L36 98 L42 76 Z"
        style={{ animation: "flame-flicker 0.55s ease-in-out infinite" }}
      />
    </svg>
  );
}
