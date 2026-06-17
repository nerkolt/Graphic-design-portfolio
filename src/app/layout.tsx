import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nour Ltaief Portfolio",
  description:
    "A graphic design and video editing portfolio showcasing branding, social campaigns, motion graphics, and edited video work.",
  icons: {
    icon: [
      { url: "/nour-ltaief-logo.png", type: "image/png" },
    ],
    shortcut: "/nour-ltaief-logo.png",
    apple: "/nour-ltaief-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} ${jetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
