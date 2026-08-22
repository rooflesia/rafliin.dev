import type { Metadata } from 'next';
import HomePage from '@/components/templates/home-page';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Head of IT`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  jobTitle: 'Head of IT',
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bandung',
    addressCountry: 'ID',
  },
  worksFor: [
    {
      '@type': 'Organization',
      name: 'Duluin Group',
      url: 'https://duluin.com',
    },
    {
      '@type': 'Organization',
      name: 'SATU Digital Creative',
      url: 'https://satu.duluin.com',
    },
  ],
  sameAs: [siteConfig.links.linkedin, siteConfig.links.instagram, siteConfig.url],
  knowsAbout: [
    'Technical Leadership',
    'Fullstack Architecture',
    'B2B SaaS',
    'Next.js',
    'React',
    'Laravel',
    'SEO',
    'DevOps',
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
