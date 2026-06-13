import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sky Portfolio",
  description:
    "Clay-style Web3 and AI portfolio website for a developer focused on dashboards, blockchain products, AI agents, and practical product interfaces.",
  openGraph: {
    title: "Sky Portfolio",
    description:
      "A playful clay-style portfolio for Web3 dashboards, AI agents, and digital product work.",
    type: "website",
    locale: "en_US",
    siteName: "Sky Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Portfolio",
    description:
      "A playful clay-style portfolio for Web3 dashboards, AI agents, and digital product work."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
