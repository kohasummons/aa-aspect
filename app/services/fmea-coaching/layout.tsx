import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMEA Coaching Services | aa aspect Limited',
  description: 'Enhance your risk management with our expert FMEA coaching services. We help organizations build a culture of proactive risk mitigation and achieve operational excellence.',
  alternates: {
    canonical: '/services/fmea-coaching',
  },
  openGraph: {
    title: 'FMEA Coaching Services | aa aspect Limited',
    description: 'Enhance your risk management with our expert FMEA coaching services. We help organizations build a culture of proactive risk mitigation and achieve operational excellence.',
    url: 'https://aa-aspect.com/services/fmea-coaching',
    type: 'website',
    images: [
      {
        url: 'https://aa-aspect.com/images/fmea-coaching-og.jpg',
        width: 1200,
        height: 630,
        alt: 'FMEA Coaching Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FMEA Coaching Services | aa aspect Limited',
    description: 'Enhance your risk management with our expert FMEA coaching services. We help organizations build a culture of proactive risk mitigation and achieve operational excellence.',
    images: ['https://aa-aspect.com/images/fmea-coaching-twitter.jpg']
  }
};

export default function FMEACoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 