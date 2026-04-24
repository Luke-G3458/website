const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Luke-G3458",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .08 1.52 1.05 1.52 1.05.88 1.56 2.31 1.11 2.87.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84a9.3 9.3 0 0 1 2.5.35c1.9-1.34 2.74-1.06 2.74-1.06.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.82-4.58 5.08.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/luke-benjamin-gerth",
    icon: (
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.14 3.87 6.4 3 5.27 3 4.14 3 3.4 3.87 3.4 4.94c0 1.04.72 1.94 1.83 1.94h.02c1.15 0 1.9-.9 1.9-1.94ZM20.6 13.18c0-3.45-1.84-5.06-4.3-5.06-1.98 0-2.87 1.12-3.37 1.91V8.5H9.56c.04 1 .01 11.5.01 11.5h3.37v-6.42c0-.34.02-.68.12-.92.26-.68.86-1.39 1.86-1.39 1.31 0 1.84 1.04 1.84 2.56V20h3.37v-6.82Z" />
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: (
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.1-.5 6.9 5.33L18.9 5H5.1Zm13.9 1.27-6.39 4.93a1 1 0 0 1-1.22 0L5 6.27V18.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V6.27Z" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-4 md:px-4 md:pb-5">
      <div className="site-shell flex items-center justify-start">
        <div className="pointer-events-auto flex items-center gap-4 rounded-full border border-white/7 bg-[rgba(18,17,17,0.78)] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.04)]">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/6 bg-white/3 text-[var(--text-muted)] hover:border-[rgba(211,154,84,0.18)] hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--accent-strong)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
                aria-hidden="true"
              >
                {link.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
