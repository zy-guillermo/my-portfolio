import type { SVGProps } from "react";

type CatIconProps = SVGProps<SVGSVGElement>;

/**
 * Cat head silhouette beside the logo text (reference: craftz uses a 20×20 paw print).
 */
export function CatIcon({ className, ...props }: CatIconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 40 40"
      className={className}
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path d="M11 8 L7 20 L15 20 Z" />
      <path d="M29 8 L33 20 L25 20 Z" />
      <ellipse cx="20" cy="23" rx="12" ry="10" />
    </svg>
  );
}
