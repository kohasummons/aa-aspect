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
    default: 'AA-Aspect | Piping QA/QC & Documentation Support',
    template: '%s | AA-Aspect'
  },
  description: 'QA/QC and documentation support for piping and mechanical utility systems. Serving EPC, MEP, and mechanical contractors across the UK and Europe.',
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
    title: 'AA-Aspect | Piping QA/QC & Documentation Support',
    description: 'QA/QC and documentation support for piping and mechanical utility systems. Serving EPC, MEP, and mechanical contractors across the UK and Europe.',
    url: 'https://aa-aspect.com',
    siteName: 'AA-Aspect',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://aa-aspect.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AA-Aspect'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AA-Aspect | Piping QA/QC & Documentation Support',
    description: 'QA/QC and documentation support for piping and mechanical utility systems. Serving EPC, MEP, and mechanical contractors across the UK and Europe.',
    images: ['https://aa-aspect.com/twitter-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code',
  },
  keywords: ['piping QA/QC', 'test pack management', 'mechanical completion', 'commissioning support', 'turnover documentation', 'document control', 'EPC support', 'piping inspection'],
  authors: [{ name: 'AA-Aspect' }],
  category: 'Engineering Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AA-Aspect',
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
