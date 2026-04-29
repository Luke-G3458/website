import type { ReactNode } from "react";

type OrbitingGlowButtonProps = {
  children: ReactNode;
  active?: boolean;
  sheenMode?: "off" | "hover" | "always";
  mobileSheenAlways?: boolean;
  activeIndicator?: "none" | "inner-dash";
  className?: string;
  contentClassName?: string;
};

export function OrbitingGlowButton({
  children,
  active = false,
  sheenMode = "hover",
  mobileSheenAlways = false,
  activeIndicator = "none",
  className = "",
  contentClassName = "px-4 py-2 text-sm",
}: OrbitingGlowButtonProps) {
  const showAnimatedSheen = sheenMode !== "off" && !active;
  const showInnerDash = active && activeIndicator === "inner-dash";

  return (
    <span
      className={`group relative inline-flex items-center overflow-hidden rounded-full p-px ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[rgba(211,154,84,0.09)]"
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300 ${
          sheenMode === "always"
            ? "opacity-100"
            : sheenMode === "hover"
              ? mobileSheenAlways
                ? "opacity-100 md:opacity-0 md:group-hover:opacity-100"
                : "opacity-0 group-hover:opacity-100"
              : "opacity-0"
        }`}
      >
        {showAnimatedSheen ? (
          <span className="absolute inset-[-140%] animate-[spin_2.4s_linear_infinite] bg-[conic-gradient(from_180deg,transparent_0deg,transparent_260deg,rgba(245,195,132,1)_310deg,transparent_360deg)]" />
        ) : null}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-px rounded-full bg-[rgba(34,29,26,0.98)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
      />
      {showInnerDash ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[0.42rem] left-1/2 z-10 h-px w-6 -translate-x-1/2 rounded-full bg-[rgba(235,179,115,0.95)] shadow-[0_0_8px_rgba(235,179,115,0.22)]"
        />
      ) : null}
      <span className={`relative z-10 ${contentClassName}`}>{children}</span>
    </span>
  );
}
