import Link from "next/link";
import { site } from "@/lib/site";

export default function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const schemaItems = [
    { label: "Home", href: "/" },
    ...items.filter((item): item is { label: string; href: string } =>
      Boolean(item.href),
    ),
  ];
  const hasCurrentUrl = Boolean(items.at(-1)?.href);
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-taupe">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-charcoal">
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {item.href && !isCurrent ? (
                  <Link href={item.href} className="hover:text-charcoal">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isCurrent ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {hasCurrentUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: schemaItems.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.label,
                item: new URL(item.href, site.url).toString(),
              })),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  );
}
