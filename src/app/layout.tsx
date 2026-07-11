import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WindowFrame from "@/components/WindowFrame";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";

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
  keywords: [
    "North Georgia web design",
    "Auburn GA web developer",
    "small business website",
    "business automation",
    "website care",
  ],
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: site.name,
  url: site.url,
  email: site.email,
  areaServed: [
    "Auburn, Georgia",
    "Barrow County, Georgia",
    "Gwinnett County, Georgia",
    "North Georgia",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auburn",
    addressRegion: "GA",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ivory font-sans text-charcoal antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <WindowFrame />
        <Navbar />
        <div
          id="window-viewport"
          className="fixed bottom-2 left-2 right-2 top-12 z-10 overflow-y-auto overflow-x-hidden scroll-pt-28 rounded-b-2xl scroll-smooth sm:bottom-3 sm:left-3 sm:right-3 sm:top-[3.25rem] md:bottom-4 md:left-4 md:right-4 md:top-[3.75rem]"
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
