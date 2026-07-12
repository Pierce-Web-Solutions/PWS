import type { ElementType, ReactNode } from "react";
import clsx from "clsx";

export default function InspectionFrame({
  as: Tag = "div",
  label,
  children,
  className,
  focusable = false,
  href,
}: {
  as?: ElementType;
  label?: string;
  children: ReactNode;
  className?: string;
  focusable?: boolean;
  href?: string;
}) {
  return (
    <Tag
      className={clsx("inspection-frame", className)}
      tabIndex={focusable ? 0 : undefined}
      href={href}
    >
      <span className="inspection-frame__label" aria-hidden="true">
        {label}
      </span>
      <span
        className="inspection-frame__corner inspection-frame__corner--tl"
        aria-hidden="true"
      />
      <span
        className="inspection-frame__corner inspection-frame__corner--tr"
        aria-hidden="true"
      />
      <span
        className="inspection-frame__corner inspection-frame__corner--bl"
        aria-hidden="true"
      />
      <span
        className="inspection-frame__corner inspection-frame__corner--br"
        aria-hidden="true"
      />
      <span
        className="inspection-frame__guide inspection-frame__guide--left"
        aria-hidden="true"
      />
      <span
        className="inspection-frame__guide inspection-frame__guide--right"
        aria-hidden="true"
      />
      {children}
    </Tag>
  );
}
