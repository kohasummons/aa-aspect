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
  description: 'Specialist piping QA/QC and documentation support for EPC, MEP, and mechanical contractors. Data centres, life sciences, and industrial projects. On-site or remote.',
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
    description: 'Specialist piping QA/QC and documentation support for EPC, MEP, and mechanical contractors. Data centres, life sciences, and industrial projects. On-site or remote.',
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
    description: 'Specialist piping QA/QC and documentation support for EPC, MEP, and mechanical contractors. Data centres, life sciences, and industrial projects. On-site or remote.',
    images: ['https://aa-aspect.com/twitter-image.jpg']
  },
  verification: {
    google: 'your-google-verification-code',
  },
  keywords: ['piping QA/QC', 'data centre commissioning', 'test pack management', 'turnover documentation', 'mechanical completion', 'document control', 'commissioning support', 'piping documentation', 'QA/QC specialist'],
  authors: [{ name: 'AA-Aspect' }],
  category: 'Engineering Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'AA-Aspect',
    alternateName: 'AA-Aspect Limited',
    url: 'https://aa-aspect.com',
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AA-Aspect',
    alternateName: 'AA-Aspect Limited',
    url: 'https://aa-aspect.com',
    logo: 'https://aa-aspect.com/logo.png',
    description: 'QA/QC and documentation support for piping and mechanical utility systems.',
    sameAs: [
      'https://www.linkedin.com/company/aa-aspect-limited',
      'https://www.instagram.com/aa_aspect',
      'https://www.facebook.com/AaAspectLimited',
      'https://twitter.com/aa_aspectltd'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '50 Princess St.',
      addressLocality: 'Ipswich',
      postalCode: 'IP1 1RJ',
      addressCountry: 'GB'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-7349-351041',
      contactType: 'customer service',
      email: 'office@aa-aspect.com'
    }
  };

  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <head>
        <meta name="color-scheme" content="light" />
        <Script id="website-jsonld" type="application/ld+json">
          {JSON.stringify(websiteJsonLd)}
        </Script>
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
