import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMEA Coaching Services',
  description: 'Enhance your risk management with our expert FMEA coaching services. We help organizations build a culture of proactive risk mitigation and achieve operational excellence.',
  alternates: {
    canonical: '/services/fmea-coaching',
  },
  openGraph: {
    title: 'FMEA Coaching Services',
    description: 'Enhance your risk management with our expert FMEA coaching services. We help organizations build a culture of proactive risk mitigation and achieve operational excellence.',
    url: 'https://www.aa-aspect.com/services/fmea-coaching',
    type: 'website',
    images: [
      {
        url: '/images/hero-industrial-piping.jpg',
        width: 1200,
        height: 630,
        alt: 'FMEA Coaching Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FMEA Coaching Services',
    description: 'Enhance your risk management with our expert FMEA coaching services. We help organizations build a culture of proactive risk mitigation and achieve operational excellence.',
    images: ['/images/hero-industrial-piping.jpg']
  }
};

export default function FMEACoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 