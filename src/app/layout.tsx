import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WindowFrame from "@/components/WindowFrame";
import Navbar from "@/components/Navbar";

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
  title: "Pierce Web Solutions — Web Design & Automation for North Georgia",
  description:
    "Custom websites, practical systems, and reliable support for small businesses in Auburn, Barrow County, Gwinnett County, and across North Georgia. Modern technology. Local partnership.",
  keywords: [
    "web design",
    "web development",
    "automation",
    "North Georgia",
    "Auburn GA",
    "Barrow County",
    "Gwinnett County",
    "small business websites",
  ],
  openGraph: {
    title: "Pierce Web Solutions",
    description:
      "Modern technology. Local partnership. Custom websites and automation for North Georgia businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-ivory text-charcoal font-sans antialiased">
        <WindowFrame />
        <Navbar />
        {/* The window's content area — the only scroll container, so content
            stays clipped inside the browser-window chrome as you scroll. */}
        <div
          id="window-viewport"
          className="fixed bottom-2 left-2 right-2 top-12 z-10 overflow-y-auto overflow-x-hidden scroll-pt-24 rounded-b-2xl scroll-smooth sm:bottom-3 sm:left-3 sm:right-3 sm:top-[3.25rem] md:bottom-4 md:left-4 md:right-4 md:top-[3.75rem]"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
