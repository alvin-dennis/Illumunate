import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import AbstractOrbs from "@/components/ui/orbs";
import { SnowfallBackground } from "@/components/ui/snow-flakes";

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
        url: "/logo.png",
        alt: "Illumunate Christmas Festival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illumunate — µLearn Christmas Festival",
    description:
      "Celebrate the festive spirit with Illumunate, the Christmas festival conducted by µLearn. Join exciting events, explore creative zones, and enjoy fun competitions across colleges!",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
  metadataBase: new URL("https://illumunate.mulearn.org/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-muted-foreground`}
      >
        <div className="fixed inset-0 w-screen h-screen min-h-dvh min-w-dvw -z-10 overflow-hidden pointer-events-none">
          <AbstractOrbs />
          <SnowfallBackground
            count={200}
            speed={0.1}
            minSize={1}
            maxSize={40}
            minOpacity={0}
            maxOpacity={0.3}
            color="#ffffff"
            wind
          />
        </div>
        <Navbar />
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
