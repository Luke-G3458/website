"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { OrbitingGlowButton } from "@/components/orbiting-glow-button";

const inquiryTypes = ["Engineering", "Software", "Music", "Lessons", "Other"];

type ContactFormStatus = "idle" | "success" | "error";

const fieldShellClass = "relative block";

const fieldControlClass =
  "w-full bg-transparent py-2.5 text-[0.98rem] leading-7 text-[var(--text-primary)] outline-none placeholder:text-[rgba(148,137,125,0.66)]";

const fieldBarClass =
  "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/8 transition-colors duration-200 group-hover:bg-[rgba(211,154,84,0.24)]";

const activeFieldBarClass =
  "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-focus-within:scale-x-100";

function InquiryTypeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selectedLabel = inquiryTypes.find(
    (type) => type.toLowerCase() === value,
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!selectRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={selectRef} className="relative">
      <input type="hidden" name="domain" value={value} />
      <button
        type="button"
        className={`${fieldControlClass} flex items-center justify-between gap-4 text-left`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={selectedLabel ? "" : "text-[rgba(148,137,125,0.66)]"}>
          {selectedLabel ?? "Select a topic (optional)"}
        </span>
        <span
          aria-hidden="true"
          className={`mr-1 size-2 shrink-0 rotate-45 border-b border-r border-current text-[var(--accent)] transition-transform duration-200 ${
            open ? "-translate-y-0.5 rotate-[225deg]" : ""
          }`}
        />
      </button>

      {open ? (
        <div
          id={listboxId}
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+0.55rem)] z-20 overflow-hidden rounded-[24px] border border-white/7 bg-[rgba(22,21,21,0.98)] px-3 py-3 shadow-[0_24px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <button
            type="button"
            role="option"
            aria-selected={value === ""}
            className={`group/option block w-full px-2 py-2.5 text-left text-[0.9rem] transition-colors ${
              value === ""
                ? "text-[var(--accent-strong)]"
                : "text-[var(--text-muted)] hover:text-[var(--text-soft)]"
            }`}
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            <span className="relative inline-flex">
              Select a topic (optional)
              <span
                aria-hidden="true"
                className={`absolute bottom-[-0.28rem] left-0 h-px w-full origin-left bg-[var(--accent)] transition-transform duration-300 ease-out ${
                  value === ""
                    ? "scale-x-100"
                    : "scale-x-0 group-hover/option:scale-x-100"
                }`}
              />
            </span>
          </button>
          {inquiryTypes.map((type) => {
            const optionValue = type.toLowerCase();
            const selected = value === optionValue;

            return (
              <button
                key={type}
                type="button"
                role="option"
                aria-selected={selected}
                className={`group/option block w-full px-2 py-2.5 text-left text-[0.9rem] transition-colors ${
                  selected
                    ? "text-[var(--accent-strong)]"
                    : "text-[var(--text-soft)] hover:text-[var(--text-strong)]"
                }`}
                onClick={() => {
                  onChange(optionValue);
                  setOpen(false);
                }}
              >
                <span className="relative inline-flex">
                  {type}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-[-0.28rem] left-0 h-px w-full origin-left bg-[var(--accent)] transition-transform duration-300 ease-out ${
                      selected
                        ? "scale-x-100"
                        : "scale-x-0 group-hover/option:scale-x-100"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      className="inline-flex text-[var(--accent)] hover:text-[var(--accent-strong)] disabled:cursor-wait disabled:opacity-70 disabled:transform-none"
      disabled={pending}
    >
      <OrbitingGlowButton contentClassName="flex min-w-[7.2rem] items-center justify-center px-5 py-2.5 text-[0.9rem] font-medium">
        {pending ? (
          <span className="inline-flex items-baseline" aria-live="polite">
            <span>Sending</span>
            <span className="ml-0.5 inline-flex translate-y-[0.08em] items-baseline gap-[2px]">
              {[0, 160, 320].map((delay) => (
                <span
                  key={delay}
                  aria-hidden="true"
                  className="size-[3px] rounded-full bg-[var(--accent)] opacity-25 animate-[pulse_1.2s_ease-in-out_infinite]"
                  style={{ animationDelay: `${delay}ms` }}
                />
              ))}
            </span>
          </span>
        ) : (
          "Send message"
        )}
      </OrbitingGlowButton>
    </button>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const [responseVisible, setResponseVisible] = useState(false);
  const [responseId, setResponseId] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const showResponseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (showResponseTimerRef.current !== null) {
        window.clearTimeout(showResponseTimerRef.current);
      }
    };
  }, []);

  function showResponse(
    nextStatus: Exclude<ContactFormStatus, "idle">,
    message: string,
  ) {
    if (showResponseTimerRef.current !== null) {
      window.clearTimeout(showResponseTimerRef.current);
    }

    setStatus(nextStatus);
    setStatusMessage(message);
    setResponseVisible(false);
    setResponseId((current) => current + 1);

    showResponseTimerRef.current = window.setTimeout(() => {
      setResponseVisible(true);
    }, 40);
  }

  function resetFormState() {
    if (showResponseTimerRef.current !== null) {
      window.clearTimeout(showResponseTimerRef.current);
    }

    setStatus("idle");
    setStatusMessage("");
    setResponseVisible(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    setPending(true);
    setStatus("idle");
    setStatusMessage("");
    setResponseVisible(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        showResponse(
          "error",
          data?.message ?? "The message could not be sent.",
        );
        return;
      }

      formRef.current?.reset();
      setInquiryType("");
      showResponse("success", "I'll get back to you soon.");
    } catch {
      showResponse("error", "Please try again in a moment.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[34rem] rounded-[30px] bg-[linear-gradient(180deg,rgba(33,30,30,0.98),rgba(24,22,23,1))] p-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-6"
    >
      {status === "success" ? (
        <div
          key={responseId}
          className={`flex min-h-[22rem] flex-col items-center justify-center text-center transition-all duration-700 ease-out ${
            responseVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-2 opacity-0"
          }`}
          role="status"
          aria-live="polite"
        >
          <p className="text-[1rem] leading-7 text-[var(--text-soft)]">
            Thanks for reaching out!
          </p>
          <p className="mt-1 text-[0.86rem] leading-6 text-[var(--text-muted)]">
            {statusMessage}
          </p>
          <span
            aria-hidden="true"
            className={`mt-4 block h-px w-36 origin-left bg-[var(--accent)] transition-transform delay-200 duration-700 ease-out ${
              responseVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <button
            type="button"
            className="group mt-7 text-[0.78rem] text-[rgba(216,208,196,0.48)] transition-colors hover:text-[var(--text-soft)]"
            onClick={resetFormState}
          >
            <span className="relative inline-flex">
              Send another message
              <span
                aria-hidden="true"
                className="absolute bottom-[-0.3rem] left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </span>
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            <label className="group block">
              <span className="block text-[0.8rem] text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-soft)] group-focus-within:text-[var(--accent-strong)]">
                Name
              </span>
              <span className={fieldShellClass}>
                <input
                  className={fieldControlClass}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <span className={fieldBarClass} aria-hidden="true" />
                <span className={activeFieldBarClass} aria-hidden="true" />
              </span>
            </label>

            <label className="group block">
              <span className="block text-[0.8rem] text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-soft)] group-focus-within:text-[var(--accent-strong)]">
                Email
              </span>
              <span className={fieldShellClass}>
                <input
                  className={fieldControlClass}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
                <span className={fieldBarClass} aria-hidden="true" />
                <span className={activeFieldBarClass} aria-hidden="true" />
              </span>
            </label>

            <label className="group block">
              <span className="block text-[0.8rem] text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-soft)] group-focus-within:text-[var(--accent-strong)]">
                What is this about?
              </span>
              <span className={fieldShellClass}>
                <InquiryTypeSelect
                  value={inquiryType}
                  onChange={setInquiryType}
                />
                <span className={fieldBarClass} aria-hidden="true" />
                <span className={activeFieldBarClass} aria-hidden="true" />
              </span>
            </label>

            <label className="group block">
              <span className="block text-[0.8rem] text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--text-soft)] group-focus-within:text-[var(--accent-strong)]">
                Note
              </span>
              <span className={fieldShellClass}>
                <textarea
                  className={`${fieldControlClass} min-h-36 resize-y`}
                  name="message"
                  placeholder="Write your message here."
                  required
                />
                <span className={fieldBarClass} aria-hidden="true" />
                <span className={activeFieldBarClass} aria-hidden="true" />
              </span>
            </label>

            <input
              className="hidden"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          <div className="mt-5 flex min-h-[2.65rem] items-center">
            {status === "idle" ? (
              <SubmitButton pending={pending} />
            ) : (
              <div
                key={responseId}
                className={`min-w-0 max-w-[18rem] transition-all duration-700 ease-out ${
                  responseVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1.5 opacity-0"
                }`}
                role="status"
                aria-live="polite"
              >
                <p className="text-[0.86rem] leading-5 text-[var(--text-soft)]">
                  Something went wrong.
                </p>
                <p className="mt-0.5 text-[0.78rem] leading-5 text-[var(--text-muted)]">
                  {statusMessage}
                </p>
                <span
                  aria-hidden="true"
                  className={`mt-2 block h-px w-full origin-left bg-[#e9a08f] transition-transform delay-200 duration-700 ease-out ${
                    responseVisible ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            )}
          </div>
        </>
      )}
    </form>
  );
}
