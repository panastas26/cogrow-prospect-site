import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { simonCPAsConfig } from "@/config/simon-cpas";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: simonCPAsConfig.seo.title,
  description: simonCPAsConfig.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
