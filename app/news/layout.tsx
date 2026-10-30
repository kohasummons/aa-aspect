import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'News & Insights',
    template: '%s | AA-Aspect',
  },
  description: 'Stay updated with the latest insights, industry trends, and company updates from AA-Aspect.',
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'News & Insights',
    description: 'Stay updated with the latest insights, industry trends, and company updates from AA-Aspect.',
    url: 'https://www.aa-aspect.com/news',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Insights',
    description: 'Stay updated with the latest insights, industry trends, and company updates from AA-Aspect.',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 