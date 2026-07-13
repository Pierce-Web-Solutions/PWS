import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WindowFrame from "@/components/WindowFrame";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";
import AttributionCapture from "@/components/AttributionCapture";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsClickTracker from "@/components/AnalyticsClickTracker";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pierce Web Solutions | North Georgia Web Design & Technology",
    template: "%s | Pierce Web Solutions",
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      description: site.description,
      email: site.email,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logos/pws-icon.png`,
      },
      areaServed: [
        "North Georgia",
        "Gwinnett County, Georgia",
        "Hall County, Georgia",
        "Barrow County, Georgia",
        "Forsyth County, Georgia",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: site.email,
        contactType: "sales and customer support",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        <AttributionCapture />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <WindowFrame />
        <Navbar />
        <Analytics />
        <AnalyticsClickTracker />
        <div
          id="window-viewport"
          className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden scroll-pt-28 scroll-smooth lg:bottom-4 lg:left-4 lg:right-4 lg:top-[3.75rem] lg:rounded-b-2xl"
        >
          <main id="main-content">{children}</main>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
