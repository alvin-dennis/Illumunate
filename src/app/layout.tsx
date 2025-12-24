import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";
import Providers from "@/app/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Background from "@/components/Background";


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

const circe = localFont({
  src: "../components/fonts/circe-std.ttf",
  variable: "--font-display",
  display: "swap",
});

const helvetica = localFont({
  src: "../components/fonts/helvetica.otf",
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${circe.variable} ${helvetica.variable} font-body bg-background antialiased text-muted-foreground`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <Background />
        </div>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Providers>
            {children}
          </Providers>
        </Suspense>
        <Footer />
      </body>
    </html>

  );
}
