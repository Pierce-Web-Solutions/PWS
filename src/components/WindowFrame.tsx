/**
 * Decorative browser-window chrome that frames the whole viewport —
 * echoing the arched-window motif of the Pierce Web Solutions logo.
 * Purely presentational; never intercepts pointer events.
 */
export default function WindowFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-2 z-40 rounded-2xl border border-brass/40 sm:inset-3 md:inset-4"
    >
      {/* Title-bar divider */}
      <div className="absolute inset-x-0 top-10 h-px bg-brass/25 md:top-11" />

      {/* Traffic-light dots */}
      <div className="absolute left-4 top-[13px] flex gap-2 md:left-5 md:top-4">
        <span className="h-2.5 w-2.5 rounded-full border border-brass/70" />
        <span className="h-2.5 w-2.5 rounded-full border border-brass/70" />
        <span className="h-2.5 w-2.5 rounded-full border border-brass/70" />
      </div>
    </div>
  );
}
