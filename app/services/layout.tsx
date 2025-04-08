import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | aa aspect Limited',
    default: 'Our Services | aa aspect Limited',
  },
  description: 'Explore our comprehensive range of professional services including quality management, FMEA coaching, and more.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Professional Services | aa aspect Limited',
    description: 'Explore our comprehensive range of professional services including quality management, FMEA coaching, and more.',
    url: 'https://aa-aspect.com/services',
    type: 'website',
    images: [
      {
        url: 'https://aa-aspect.com/images/services-og.jpg',
        width: 1200,
        height: 630,
        alt: 'aa aspect Limited Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Services | aa aspect Limited',
    description: 'Explore our comprehensive range of professional services including quality management, FMEA coaching, and more.',
    images: ['https://aa-aspect.com/images/services-twitter.jpg']
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 