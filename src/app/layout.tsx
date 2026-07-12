import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WindowFrame from "@/components/WindowFrame";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";
import AttributionCapture from "@/components/AttributionCapture";
import { Analytics } from "@vercel/analytics/next";

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
    "Georgia web developer",
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
  areaServed: ["North Georgia", "Georgia", "United States"],
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
