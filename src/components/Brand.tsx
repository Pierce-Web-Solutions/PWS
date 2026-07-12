import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export default function Brand({
  light = false,
  compact = false,
  className,
}: {
  light?: boolean;
  compact?: boolean;
  className?: string;
}) {
  // Dark backgrounds (e.g. the footer): the color lockup wouldn't read, so
  // pair the color icon with a light wordmark instead.
  if (light) {
    return (
      <Link
        href="/"
        className={clsx(
          "group flex items-center gap-3 no-underline",
          className,
        )}
      >
        <Image
          src="/logos/pws-icon-color.png"
          alt="Pierce Web Solutions logo"
          width={44}
          height={54}
          className="h-11 w-auto transition-transform duration-500 group-hover:-translate-y-0.5"
          priority
        />
        <span className="leading-none">
          <span className="block font-serif text-2xl font-semibold tracking-tight text-ivory">
            Pierce
          </span>
          <span className="mt-1 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-ivory/70">
            Web Solutions
          </span>
        </span>
      </Link>
    );
  }

  // Light backgrounds (the navbar): the full brand lockup.
  return (
    <Link
      href="/"
      className={clsx("group inline-flex no-underline", className)}
    >
      <Image
        src="/logos/pws-half-lockup.png"
        alt="Pierce Web Solutions: Modern technology. Local partnership."
        width={1287}
        height={613}
        priority
        className={clsx(
          "w-auto transition-[height,transform] duration-300 group-hover:-translate-y-0.5",
          compact ? "h-10 md:h-11" : "h-12 md:h-14",
        )}
      />
    </Link>
  );
}
