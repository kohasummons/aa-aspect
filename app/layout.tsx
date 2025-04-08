import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { RootProvider } from "./components/providers/RootProvider";
import { ApolloProvider } from "./providers/ApolloProvider";
import Script from 'next/script';

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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#003840',
};

export const metadata: Metadata = {
  title: {
    default: 'aa aspect Limited | Your Innovative Solution Partner',
    template: '%s | aa aspect Limited'
  },
  description: 'Dedicated to delivering innovative solutions that streamline processes, enhance productivity, and drive sustainable growth',
  metadataBase: new URL('https://aa-aspect.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'aa aspect Limited | Your Innovative Solution Partner',
    description: 'Dedicated to delivering innovative solutions that streamline processes, enhance productivity, and drive sustainable growth',
    url: 'https://aa-aspect.com',
    siteName: 'aa aspect Limited',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aa-aspect.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'aa aspect Limited'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'aa aspect Limited | Your Innovative Solution Partner',
    description: 'Dedicated to delivering innovative solutions that streamline processes, enhance productivity, and drive sustainable growth',
    images: ['https://aa-aspect.com/twitter-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code',
  },
  keywords: ['consulting', 'project management', 'process management', 'quality management', 'FMEA coaching'],
  authors: [{ name: 'aa aspect Limited' }],
  category: 'Business Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'aa aspect Limited',
    url: 'https://aa-aspect.com',
    logo: 'https://aa-aspect.com/logo.png',
    sameAs: [
      'https://linkedin.com/company/aa-aspect',
      'https://twitter.com/aa_aspect'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      contactType: 'customer service',
      email: 'contact@aa-aspect.com'
    }
  };

  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify(organizationJsonLd)}
        </Script>
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
