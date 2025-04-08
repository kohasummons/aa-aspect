import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { RootProvider } from "./components/providers/RootProvider";
import { ApolloProvider } from "./providers/ApolloProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Load local fonts
const abadiExtraLight = localFont({
  src: "./fonts/AbadiMT-ExtraLight.ttf",
  variable: "--font-abadi-extralight",
});

const candaraBold = localFont({
  src: "./fonts/Candara_Bold.ttf",
  variable: "--font-candara-bold",
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
        className={`${inter.variable} ${abadiExtraLight.variable} ${candaraBold.variable} antialiased relative`}
      >
        <ApolloProvider>
          <RootProvider>
            {children}
          </RootProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
