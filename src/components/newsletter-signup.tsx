"use client";

import { FormEvent, useEffect, useState } from "react";
import { Bell, Check, LoaderCircle, Mail, X } from "lucide-react";

type NewsletterSignupProps = {
  compact?: boolean;
  source: "footer" | "modal";
  onSuccess?: () => void;
};

type SignupState = "idle" | "loading" | "success" | "error";

const modalStorageKey = "nour-newsletter-modal-seen";

export function FirstVisitNewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasSeenModal = window.localStorage.getItem(modalStorageKey);

    if (!hasSeenModal) {
      const timer = window.setTimeout(() => setIsOpen(true), 1400);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function closeModal() {
    window.localStorage.setItem(modalStorageKey, "true");
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 px-5 backdrop-blur-md">
      <div className="scanner-panel motion-pop relative w-full max-w-xl overflow-hidden p-6 sm:p-8">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 grid size-10 place-items-center border border-[#849495]/40 text-[#e5e2e1] transition hover:border-[#ff525c] hover:text-[#ff525c]"
          aria-label="Close newsletter modal"
        >
          <X size={18} />
        </button>
        <div className="mb-5 inline-grid size-12 place-items-center border border-[#00f0ff]/60 text-[#00f0ff] shadow-[0_0_22px_rgba(0,240,255,0.2)]">
          <Bell size={20} />
        </div>
        <p className="font-tech text-xs font-bold uppercase text-[#00f0ff]">Portfolio dispatch</p>
        <h2 className="font-display mt-3 max-w-md text-4xl font-extrabold leading-tight text-[#e5e2e1]">
          Get the newest design drops when they go live.
        </h2>
        <p className="mt-4 text-base leading-7 text-[#b9cacb]">
          A small update list for new case studies, posted videos, interface captures, and visual experiments.
        </p>
        <div className="mt-6">
          <NewsletterSignup source="modal" onSuccess={closeModal} />
        </div>
      </div>
    </div>
  );
}

export function NewsletterSignup({ compact = false, source, onSuccess }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SignupState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, source }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "Could not subscribe right now.");
      }

      setStatus("success");
      setMessage(result.message ?? "You are subscribed.");
      setEmail("");
      window.localStorage.setItem(modalStorageKey, "true");
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not subscribe right now.");
    }
  }

  return (
    <form className={`grid gap-3 ${compact ? "" : "sm:grid-cols-[1fr_auto]"}`} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
        Email address
      </label>
      <div className="relative">
        <Mail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#849495]" size={16} />
        <input
          id={`newsletter-email-${source}`}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email@example.com"
          className="font-tech w-full border border-[#849495]/40 bg-[#0a0a0a] px-11 py-3 text-sm text-[#e5e2e1] outline-none transition placeholder:text-[#849495] focus:border-[#00f0ff] focus:shadow-[0_0_18px_rgba(0,240,255,0.16)]"
        />
      </div>
      <button type="submit" className="button-primary" disabled={status === "loading"}>
        {status === "loading" ? <LoaderCircle className="animate-spin" size={16} /> : <Check size={16} />}
        Subscribe
      </button>
      {message && (
        <p
          className={`font-tech text-xs uppercase ${
            status === "error" ? "text-[#ff9aa0]" : "text-[#00f0ff]"
          } ${compact ? "" : "sm:col-span-2"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
