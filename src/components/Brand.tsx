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
  return (
    <Link
      href="/"
      aria-label="Pierce Web Solutions home"
      className={clsx(
        "group relative inline-flex h-12 w-[9.75rem] shrink-0 items-center no-underline md:h-14 md:w-[10.75rem]",
        className,
      )}
    >
      <Image
        src={
          light
            ? "/logos/pws-half-lockup-dark.png"
            : "/logos/pws-half-lockup.png"
        }
        alt=""
        aria-hidden="true"
        width={344}
        height={107}
        className={clsx(
          "absolute left-0 top-1/2 w-auto -translate-y-1/2 transition-[height,transform] duration-500 ease-out group-hover:-translate-y-[52%]",
          compact ? "h-10 md:h-11" : "h-11 md:h-12",
        )}
      />
    </Link>
  );
}
