"use client";

import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import { track } from "@vercel/analytics";

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
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Who is ${planName} for?`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() =>
          setOpen((value) => {
            if (!value)
              track("Plan Fit Opened", {
                plan: planName,
                path: window.location.pathname,
              });
            return !value;
          })
        }
        className="flex min-h-11 w-full items-center justify-between gap-4 text-left text-sm font-semibold text-foothill-deep"
      >
        Who&apos;s this for?
        <span
          aria-hidden="true"
          className="text-lg font-normal text-brass-deep"
        >
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <div
        id={id}
        aria-hidden={!open}
        className={clsx("plan-fit-panel", open && "is-open")}
      >
        <div>
          <div className="grid gap-3 pb-1 pt-3 text-sm text-charcoal-soft">
            <p className="font-medium text-charcoal">{bestFor}</p>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
