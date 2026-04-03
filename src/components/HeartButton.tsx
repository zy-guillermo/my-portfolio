"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type HeartButtonProps = {
  className?: string;
};

export default function HeartButton({ className }: HeartButtonProps) {
  const [count, setCount] = useState<number>(0);
  const [pending, setPending] = useState(false);
  const [bump, setBump] = useState(0);

  const apiBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const heartsApiUrl = `${apiBase}/api/hearts`;

  useEffect(() => {
    let cancelled = false;
    fetch(heartsApiUrl)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setCount(Number(data?.count ?? 0));
      })
      .catch(() => {
        // If the API fails, keep 0. The button still works and will update on click.
      });
    return () => {
      cancelled = true;
    };
  }, [heartsApiUrl]);

  const onClick = async () => {
    if (pending) return;
    setPending(true);
    try {
      const r = await fetch(heartsApiUrl, { method: "POST" });
      const data = await r.json();
      setCount(Number(data?.count ?? count + 1));
      setBump((n) => n + 1);
    } catch {
      // GitHub Pages can't run API routes, so best-effort increment locally.
      setCount((c) => c + 1);
      setBump((n) => n + 1);
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      aria-label="Send heart reaction"
      onClick={onClick}
      disabled={pending}
      className={[
        "relative inline-flex h-10 w-10 items-center justify-center rounded-md",
        "bg-[rgba(255,255,255,0.35)] backdrop-blur-[10px]",
        "ring-1 ring-black/10 transition-colors active:scale-[0.97]",
        "hover:bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(255,255,255,0.1)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]",
        className ?? "",
      ].join(" ")}
    >
      <motion.span
        key={bump}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 0.18 }}
        className="text-[#ff63c3]"
      >
        <Heart
          className="h-[22px] w-[22px] shrink-0"
          fill="#ff63c3"
          strokeWidth={2.1}
        />
      </motion.span>

      <span className="pointer-events-none absolute -right-1 -top-1 min-w-[18px] rounded-full bg-[#ff63c3] px-[5px] py-[1px] text-[10px] font-semibold leading-none text-white">
        {count}
      </span>
    </button>
  );
}

