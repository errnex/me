import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  icons: { icon: "/avatar.png" },
  title: "Sky | Web3 Community Leader & IT Support",
  description:
    "Sky is an Informatics student from Indonesia: Web3 regional moderator, community manager, affiliate ambassador, community support, and IT Support.",
  openGraph: {
    title: "Sky | Web3 Community Leader & IT Support",
    description:
    "Sky is an Informatics student from Indonesia: Web3 regional moderator, community manager, affiliate ambassador, community support, and IT Support.",
    type: "website",
    locale: "en_US",
    siteName: "Sky | Web3 Community Leader & IT Support",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky | Web3 Community Leader & IT Support",
    description:
    "Sky is an Informatics student from Indonesia: Web3 regional moderator, community manager, affiliate ambassador, community support, and IT Support."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
