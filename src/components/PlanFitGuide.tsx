"use client";

import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";

export default function PlanFitGuide({
  planName,
  bestFor,
  children,
  className,
}: {
  planName: string;
  bestFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className={clsx("mt-6 border-t border-charcoal/15 pt-5", className)}>
      <p className="text-sm font-medium text-charcoal">{bestFor}</p>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Who is ${planName} for?`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foothill-deep underline decoration-brass/60 underline-offset-4"
      >
        Who&apos;s this for?
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        id={id}
        aria-hidden={!open}
        className={clsx("plan-fit-panel", open && "is-open")}
      >
        <div>
          <p className="pb-1 pt-3 text-sm text-charcoal-soft">{children}</p>
        </div>
      </div>
    </div>
  );
}
