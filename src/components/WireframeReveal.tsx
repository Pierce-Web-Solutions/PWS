"use client";

import {
  useRef,
  type CSSProperties,
  type FormEvent,
  type PointerEvent,
} from "react";
import TopographicContours from "./TopographicContours";

export default function WireframeReveal() {
  const comparisonRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef(0);

  function applyPosition(position: number, input: HTMLInputElement) {
    comparisonRef.current?.style.setProperty(
      "--reveal-position",
      `${position}%`,
    );
    input.value = String(position);
    input.setAttribute(
      "aria-valuetext",
      `${Math.round(100 - position)}% finished experience visible`,
    );
  }

  function handleInput(event: FormEvent<HTMLInputElement>) {
    applyPosition(event.currentTarget.valueAsNumber, event.currentTarget);
  }

  function updateFromPointer(event: PointerEvent<HTMLInputElement>) {
    const bounds = comparisonRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const position = Math.min(
      100,
      Math.max(
        0,
        ((event.clientX - dragOffsetRef.current - bounds.left) / bounds.width) *
          100,
      ),
    );
    applyPosition(position, event.currentTarget);
  }

  function handlePointerDown(event: PointerEvent<HTMLInputElement>) {
    event.preventDefault();
    event.currentTarget.focus();
    const handleBounds = event.currentTarget.getBoundingClientRect();
    dragOffsetRef.current =
      event.clientX - (handleBounds.left + handleBounds.width / 2);
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLInputElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    event.preventDefault();
    updateFromPointer(event);
  }

  return (
    <div>
      <div
        ref={comparisonRef}
        className="relative h-[50rem] w-full min-w-0 max-w-full overflow-hidden border border-charcoal/20 bg-ivory shadow-panel sm:h-[42rem] lg:h-auto lg:aspect-[16/10]"
        style={{ "--reveal-position": "54%" } as CSSProperties}
      >
        <StructureView />
        <div
          className="absolute inset-0"
          style={{
            clipPath: "inset(0 0 0 var(--reveal-position))",
            willChange: "clip-path",
          }}
          aria-hidden="true"
        >
          <ExperienceView />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-14 z-20 flex justify-between px-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] sm:px-7">
          <span className="bg-ivory-deep/90 px-2 py-1 text-taupe">
            Structure
          </span>
          <span className="bg-ivory/90 px-2 py-1 text-foothill-deep">
            Experience
          </span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step="1"
          defaultValue="54"
          onInput={handleInput}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          className="peer absolute top-1/2 z-30 h-11 w-11 -translate-x-1/2 -translate-y-1/2 touch-none cursor-ew-resize opacity-0"
          style={{
            left: "clamp(1.375rem, var(--reveal-position), calc(100% - 1.375rem))",
            willChange: "left",
          }}
          aria-label="Compare the structural wireframe with the finished interface"
          aria-describedby="comparison-instructions"
          aria-valuetext="46% finished experience visible"
        />
        <div
          className="pointer-events-none absolute inset-y-0 z-20 w-px bg-brass shadow-[0_0_0_1px_rgba(247,243,237,0.55)]"
          style={{ left: "var(--reveal-position)", willChange: "left" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute top-1/2 z-20 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-brass bg-ivory text-[0.65rem] tracking-[-0.2em] text-brass-deep shadow-soft peer-focus-visible:ring-2 peer-focus-visible:ring-foothill peer-focus-visible:ring-offset-4"
          style={{
            left: "clamp(1.125rem, var(--reveal-position), calc(100% - 1.125rem))",
            willChange: "left",
          }}
          aria-hidden="true"
        >
          ‹›
        </span>
      </div>
      <p
        id="comparison-instructions"
        className="mt-4 text-center text-sm text-taupe"
      >
        Drag the circular handle or use the left and right arrow keys to compare
        structure and experience.
      </p>
    </div>
  );
}

function BrowserBar({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`flex h-10 items-center gap-2 border-b px-4 ${dark ? "border-ivory/15" : "border-charcoal/10"}`}
    >
      <span className="h-2 w-2 rounded-full border border-brass/70" />
      <span className="h-2 w-2 rounded-full border border-brass/70" />
      <span className="h-2 w-2 rounded-full border border-brass/70" />
      <span
        className={`ml-3 h-px flex-1 ${dark ? "bg-ivory/10" : "bg-charcoal/10"}`}
      />
    </div>
  );
}

function StructureView() {
  return (
    <div className="absolute inset-0 bg-ivory-deep text-taupe">
      <BrowserBar />
      <div className="grid-texture absolute inset-x-0 bottom-0 top-10 opacity-70" />
      <div className="relative p-5 sm:p-8">
        <div className="flex items-center justify-between border-b border-charcoal/15 pb-4">
          <div className="h-7 w-24 border border-charcoal/25" />
          <div className="flex gap-3">
            <span className="h-2 w-9 bg-charcoal/15" />
            <span className="h-2 w-9 bg-charcoal/15" />
            <span className="hidden h-2 w-9 bg-charcoal/15 sm:block" />
          </div>
        </div>
        <div className="mt-8 grid gap-7 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
          <div>
            <div className="h-3 w-24 bg-foothill/25" />
            <div className="mt-5 h-5 w-[88%] border border-charcoal/25" />
            <div className="mt-2 h-5 w-[70%] border border-charcoal/25" />
            <div className="mt-6 space-y-2">
              <div className="h-2 w-full bg-charcoal/15" />
              <div className="h-2 w-[92%] bg-charcoal/15" />
              <div className="h-2 w-[74%] bg-charcoal/15" />
            </div>
            <div className="mt-7 flex gap-3">
              <div className="h-10 w-28 border border-charcoal/30" />
              <div className="h-10 w-24 border border-charcoal/20" />
            </div>
          </div>
          <div className="relative h-44 border border-charcoal/25 sm:h-60">
            <div className="absolute inset-3 border border-dashed border-charcoal/20" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-charcoal/10" />
            <div className="absolute left-0 top-1/2 h-px w-full bg-charcoal/10" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="h-20 border border-charcoal/20" />
          <div className="h-20 border border-charcoal/20" />
          <div className="h-20 border border-charcoal/20" />
        </div>
      </div>
    </div>
  );
}

function ExperienceView() {
  return (
    <div className="absolute inset-0 bg-ivory text-charcoal">
      <BrowserBar />
      <div className="relative p-5 sm:p-8">
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
          <div>
            <p className="font-serif text-lg font-semibold leading-none">
              North Georgia
            </p>
            <p className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-foothill">
              Home Services
            </p>
          </div>
          <div className="flex gap-4 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-charcoal-soft">
            <span>Services</span>
            <span>About</span>
            <span className="hidden sm:inline">Contact</span>
          </div>
        </div>
        <div className="mt-8 grid gap-7 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-foothill">
              Dependable · Local · Skilled
            </p>
            <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[0.98]">
              Dependable work.
              <br />
              <span className="italic text-brass-deep">Close to home.</span>
            </h3>
            <p className="mt-5 max-w-md text-sm text-charcoal-soft">
              Clear communication and careful service for homes across North
              Georgia.
            </p>
            <div className="mt-6 inline-flex border border-foothill bg-foothill px-5 py-2 text-xs font-medium text-ivory">
              Request an Estimate
            </div>
          </div>
          <div className="relative h-44 overflow-hidden bg-foothill-deep sm:h-60">
            <TopographicContours className="absolute -bottom-12 -right-20 w-[28rem] text-foothill-light opacity-25" />
            <div className="absolute bottom-5 left-5 right-5 border-t border-ivory/40 pt-3 text-xs text-ivory/80">
              Clear service. Thoughtful follow-through.
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <div className="border-t-2 border-foothill bg-ivory-deep p-3">
            <span className="text-[0.55rem] uppercase tracking-wider text-taupe">
              01
            </span>
            <p className="mt-2 font-serif text-sm">Clear scope</p>
          </div>
          <div className="border-t-2 border-brass bg-ivory-deep p-3">
            <span className="text-[0.55rem] uppercase tracking-wider text-taupe">
              02
            </span>
            <p className="mt-2 font-serif text-sm">Careful work</p>
          </div>
          <div className="border-t-2 border-foothill bg-ivory-deep p-3">
            <span className="text-[0.55rem] uppercase tracking-wider text-taupe">
              03
            </span>
            <p className="mt-2 font-serif text-sm">Direct support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
