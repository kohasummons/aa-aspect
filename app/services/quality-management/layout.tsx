import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Management Services',
  description: 'Enhance your operational efficiency with our comprehensive quality management services. We help organizations optimize workflows and maintain consistent quality across all business processes.',
  alternates: {
    canonical: '/services/quality-management',
  },
  openGraph: {
    title: 'Quality Management Services',
    description: 'Enhance your operational efficiency with our comprehensive quality management services. We help organizations optimize workflows and maintain consistent quality across all business processes.',
    url: 'https://www.aa-aspect.com/services/quality-management',
    type: 'website',
    images: [
      {
        url: '/images/hero-industrial-piping.jpg',
        width: 1200,
        height: 630,
        alt: 'Quality Management Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quality Management Services',
    description: 'Enhance your operational efficiency with our comprehensive quality management services. We help organizations optimize workflows and maintain consistent quality across all business processes.',
    images: ['/images/hero-industrial-piping.jpg']
  }
};

export default function QualityManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 