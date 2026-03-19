import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { simonCPAsConfig } from "@/config/simon-cpas";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: simonCPAsConfig.seo.title,
  description: simonCPAsConfig.seo.description,
  keywords: simonCPAsConfig.seo.primaryTerms.join(", "),
  openGraph: {
    title: simonCPAsConfig.seo.title,
    description: simonCPAsConfig.seo.description,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen font-body">{children}</body>
    </html>
  );
}
