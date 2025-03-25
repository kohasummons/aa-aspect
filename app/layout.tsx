import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { RootProvider } from "./components/providers/RootProvider";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Load local fonts
const abadiExtraLight = localFont({
  src: "./fonts/AbadiMT-ExtraLight.ttf",
  variable: "--font-abadi-extralight",
});

const abadiProBold = localFont({
  src: "./fonts/AbadiMTPro-Bold.ttf",
  variable: "--font-abadi-pro-bold",
});

const candaraBoldItalic = localFont({
  src: "./fonts/Candara_Bold_Italic.ttf",
  variable: "--font-candara-bold-italic",
});

const candaraBold = localFont({
  src: "./fonts/Candara_Bold.ttf",
  variable: "--font-candara-bold",
});

const candaraItalic = localFont({
  src: "./fonts/Candara_Italic.ttf",
  variable: "--font-candara-italic",
});

const candara = localFont({
  src: "./fonts/Candara.ttf",
  variable: "--font-candara",
});

export const metadata: Metadata = {
  title: "aa aspect Limited | Your Innovative Solution Partner",
  description:
    "Dedicated to delivering innovative solutions that streamline processes, enhance productivity, and drive sustainable growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${inter.variable} ${abadiExtraLight.variable} ${abadiProBold.variable} ${candaraBoldItalic.variable} ${candaraBold.variable} ${candaraItalic.variable} ${candara.variable} antialiased relative`}
      >
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="beforeInteractive" />
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
