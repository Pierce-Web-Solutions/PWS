import Image from "next/image";
import clsx from "clsx";

export default function Brand({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  // Dark backgrounds (e.g. the footer): the color lockup wouldn't read, so
  // pair the color icon with a light wordmark instead.
  if (light) {
    return (
      <a
        href="#top"
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
      </a>
    );
  }

  // Light backgrounds (the navbar): the full brand lockup.
  return (
    <a
      href="#top"
      className={clsx("group inline-flex no-underline", className)}
    >
      <Image
        src="/logos/pws-half-lockup.png"
        alt="Pierce Web Solutions — Modern technology. Local partnership."
        width={1287}
        height={613}
        priority
        className="h-12 w-auto transition-transform duration-500 group-hover:-translate-y-0.5 md:h-14"
      />
    </a>
  );
}
