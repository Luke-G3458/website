"use client";

import {
  CheckIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const emailAddress = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
const githubLink = process.env.NEXT_PUBLIC_GITHUB_LINK ?? "";
const linkedInLink = process.env.NEXT_PUBLIC_LINKEDIN_LINK ?? "";

const footerLinks = [
  {
    label: "GitHub",
    href: githubLink,
    Icon: GitHubLogoIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: linkedInLink,
    Icon: LinkedInLogoIcon,
    external: true,
  },
] satisfies {
  label: string;
  href: string;
  Icon: typeof GitHubLogoIcon;
  external?: boolean;
}[];

const linkClassName =
  "group relative flex h-11 w-11 items-center justify-center text-[color:rgba(216,208,196,0.66)] outline-none hover:text-[var(--accent-strong)] focus-visible:text-[var(--accent-strong)] disabled:pointer-events-none disabled:opacity-45 md:h-9 md:w-9";
const iconClassName =
  "h-[18px] w-[18px] transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-focus-visible:-translate-y-0.5";
const underlineClassName =
  "absolute bottom-1 left-2 right-2 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 md:bottom-0";

async function copyEmailAddress() {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(emailAddress);
    return;
  }

  window.location.href = `mailto:${emailAddress}`;
}

export function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    if (!emailCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setEmailCopied(false), 1800);

    return () => window.clearTimeout(timeoutId);
  }, [emailCopied]);

  const handleEmailCopy = async () => {
    if (!emailAddress) {
      return;
    }

    try {
      await copyEmailAddress();
      setEmailCopied(true);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  return (
    <footer className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-3 pb-4 md:px-4 md:pb-5">
      <div className="site-shell flex items-center justify-end">
        <nav
          aria-label="Social links"
          className="pointer-events-auto flex items-center gap-2 md:gap-3"
        >
          {footerLinks.map(({ Icon, ...link }) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={link.label}
              className={linkClassName}
            >
              <Icon className={iconClassName} aria-hidden="true" />
              <span aria-hidden="true" className={underlineClassName} />
            </a>
          ))}
          <button
            type="button"
            aria-label={emailCopied ? "Email copied" : "Copy email address"}
            title={emailCopied ? "Copied" : "Copy email address"}
            onClick={handleEmailCopy}
            disabled={!emailAddress}
            className={linkClassName}
          >
            <span className="relative grid h-[18px] w-[18px] place-items-center">
              <EnvelopeClosedIcon
                className={`${iconClassName} absolute ${
                  emailCopied ? "scale-75 opacity-0" : "scale-100 opacity-100"
                }`}
                aria-hidden="true"
              />
              <CheckIcon
                className={`${iconClassName} absolute text-[var(--accent-strong)] ${
                  emailCopied ? "scale-100 opacity-100" : "scale-75 opacity-0"
                }`}
                aria-hidden="true"
              />
            </span>
            <span
              aria-hidden="true"
              className={`${underlineClassName} ${
                emailCopied ? "scale-x-100" : ""
              }`}
            />
          </button>
        </nav>
      </div>
    </footer>
  );
}
