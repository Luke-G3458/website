"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3 md:px-4 md:pt-4">
        <div
          className={`site-shell flex items-center justify-between rounded-full border border-white/7 px-5 transition-all duration-200 md:px-6 ${
            scrolled
              ? "bg-[rgba(18,17,17,0.92)] py-3 shadow-[0_12px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)]"
              : "bg-[rgba(18,17,17,0.72)] py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          }`}
        >
          <Link
            href="/"
            className="font-display text-xl tracking-[-0.03em] text-[var(--text-strong)]"
          >
            Luke Gerth
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm ${
                    active
                      ? "text-[var(--text-strong)]"
                      : "text-[var(--text-soft)] hover:text-[var(--text-strong)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`rounded-full px-4 py-2 text-sm ${
                pathname === "/contact"
                  ? "bg-[rgba(211,154,84,0.18)] text-[var(--accent-strong)]"
                  : "bg-[rgba(211,154,84,0.14)] text-[var(--accent)] hover:bg-[rgba(211,154,84,0.2)]"
              }`}
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/7 bg-white/3 text-[var(--text-soft)] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-[3px] h-[1.5px] w-4 bg-current transition-transform ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] h-[1.5px] w-4 bg-current transition-transform ${
                  menuOpen ? "-translate-y-[2px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-30 bg-[rgba(12,11,11,0.8)] px-4 pt-24 md:hidden">
          <div className="site-shell rounded-[30px] border border-white/7 bg-[rgba(22,21,21,0.98)] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base ${
                      active
                        ? "bg-white/6 text-[var(--text-strong)]"
                        : "text-[var(--text-soft)] hover:bg-white/4 hover:text-[var(--text-strong)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-2xl bg-[rgba(211,154,84,0.16)] px-4 py-3 text-base text-[var(--accent-strong)]"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
