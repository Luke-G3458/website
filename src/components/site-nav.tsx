"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { OrbitingGlowButton } from "@/components/orbiting-glow-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/music", label: "Music" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuState, setMenuState] = useState<"closed" | "open" | "closing">("closed");

  const menuOpen = menuState === "open";
  const menuVisible = menuState !== "closed";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuVisible) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState("closing");
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuVisible]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/7 bg-[rgba(26,22,19,0.93)] backdrop-blur-md"
            : "border-transparent bg-transparent backdrop-blur-none"
        }`}
      >
        <div
          className={`site-shell flex items-center justify-between px-5 transition-all duration-300 md:px-6 ${
            scrolled
              ? "min-h-[4rem] translate-y-[-0.1rem] py-2.5"
              : "min-h-[5rem] py-5"
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
                  className={`group relative inline-flex items-center text-sm ${
                    active
                      ? "text-[var(--text-strong)]"
                      : "text-[color:rgba(216,208,196,0.78)] hover:text-[var(--text-strong)]"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-[-0.4rem] left-0 h-px bg-[var(--accent)] transition-transform duration-300 ease-out ${
                      active
                        ? "w-full scale-x-100"
                        : "w-full scale-x-0 group-hover:scale-x-100"
                    } origin-left`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="text-[var(--accent)] hover:text-[var(--accent-strong)]"
            >
              <OrbitingGlowButton
                active={pathname === "/contact"}
                activeIndicator="inner-dash"
              >
                Contact
              </OrbitingGlowButton>
            </Link>
          </nav>

          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-full text-[var(--text-soft)] md:hidden ${
              scrolled
                ? "border border-white/7 bg-white/4"
                : "border border-transparent bg-transparent"
            }`}
            onClick={() =>
              setMenuState((state) => (state === "closed" ? "open" : "closing"))
            }
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-dialog"
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

      {menuVisible ? (
        <div className="fixed inset-0 z-30 md:hidden" aria-hidden={!menuOpen}>
          <button
            type="button"
            className={`absolute inset-0 backdrop-blur-[5px] ${
              menuState === "closing"
                ? "animate-[mobile-menu-backdrop-out_180ms_ease_forwards]"
                : "animate-[mobile-menu-backdrop-in_220ms_ease_forwards]"
            }`}
            onClick={() => setMenuState("closing")}
            aria-label="Close navigation menu"
          />

          <div className="relative z-10 flex justify-end px-5 pt-24">
            <div
              id="mobile-navigation-dialog"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              onAnimationEnd={() => {
                if (menuState === "closing") {
                  setMenuState("closed");
                }
              }}
              className={`mr-3 min-w-[15.5rem] max-w-[calc(100vw-3.5rem)] origin-top-right rounded-[24px] border border-white/7 bg-[rgba(22,21,21,0.98)] px-7 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)] ${
                menuState === "closing"
                  ? "animate-[mobile-menu-out_180ms_cubic-bezier(0.4,0,0.2,1)_forwards]"
                  : "animate-[mobile-menu-in_220ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
              }`}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuState("closing")}
                      className={`group rounded-2xl px-4 py-3.5 text-base ${
                        active
                          ? "text-[var(--text-strong)]"
                          : "text-[color:rgba(216,208,196,0.78)] hover:bg-white/4 hover:text-[var(--text-strong)]"
                      }`}
                    >
                      <span className="relative inline-flex items-center">
                        <span>{item.label}</span>
                        <span
                          aria-hidden="true"
                          className={`absolute bottom-[-0.4rem] left-0 h-px bg-[var(--accent)] transition-transform duration-300 ease-out ${
                            active
                              ? "w-full scale-x-100"
                              : "w-full scale-x-0 group-hover:scale-x-100"
                          } origin-left`}
                        />
                      </span>
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setMenuState("closing")}
                  className="mt-2 inline-flex self-start"
                >
                  <OrbitingGlowButton
                    active={pathname === "/contact"}
                    sheenMode="always"
                    activeIndicator="inner-dash"
                    className="inline-flex self-start"
                    contentClassName="px-6 py-2.5 text-[0.95rem]"
                  >
                    Contact
                  </OrbitingGlowButton>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
