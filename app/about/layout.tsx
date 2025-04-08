import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | aa aspect Limited',
  description: 'Learn about aa aspect Limited - your partner in IT, product development, automotive, and logistics solutions with over 20 years of industry experience.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | aa aspect Limited',
    description: 'Learn about aa aspect Limited - your partner in IT, product development, automotive, and logistics solutions with over 20 years of industry experience.',
    url: 'https://aa-aspect.com/about',
    type: 'website',
    images: [
      {
        url: 'https://aa-aspect.com/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About aa aspect Limited'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | aa aspect Limited',
    description: 'Learn about aa aspect Limited - your partner in IT, product development, automotive, and logistics solutions with over 20 years of industry experience.',
    images: ['https://aa-aspect.com/images/about-twitter.jpg']
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 