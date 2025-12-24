import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Illumunate — µLearn Christmas Festival",
  description:
    "Celebrate the festive spirit with Illumunate, the Christmas festival conducted by µLearn. Join exciting events, explore creative zones, and enjoy fun competitions across colleges!",
  authors: [{ name: "µLearn", url: "https://illumunate.mulearn.org/" }],
  openGraph: {
    title: "Illumunate — µLearn Christmas Festival",
    description:
      "Celebrate the festive spirit with Illumunate, the Christmas festival conducted by µLearn. Join exciting events, explore creative zones, and enjoy fun competitions across colleges!",
    siteName: "Illumunate — µLearn Christmas Festival",
    url: "https://illumunate.mulearn.org/",
    type: "website",
    images: [
      {
        url: "/assets/og.webp",
        width: 1200,
        height: 630,
        alt: "Illumunate Christmas Festival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illumunate — µLearn Christmas Festival",
    description:
      "Celebrate the festive spirit with Illumunate, the Christmas festival conducted by µLearn. Join exciting events, explore creative zones, and enjoy fun competitions across colleges!",
    images: ["/assets/logo.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://illumunate.mulearn.org/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
