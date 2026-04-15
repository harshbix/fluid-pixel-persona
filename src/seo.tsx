// Central SEO component for meta, OG, Twitter, JSON-LD
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const defaultImage = '/assets/projects/bixxdictionary.webp';
const defaultUrl = 'https://jeconiajunior.vercel.app';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Junior Jeconia, Bixx, Bixx Tech, Farols, Harshbix, Tech Guy, Mapengo, Farols Company',
  image = defaultImage,
  url = defaultUrl,
}) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Junior Jeconia" />
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    {/* JSON-LD Structured Data */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Junior Jeconia',
        alternateName: ['Bixx', 'Harshbix', 'Bixx Tech'],
        url,
        sameAs: [
          'https://github.com/jeconiajunior',
          'https://instagram.com/harshbix',
          'https://linkedin.com/in/jeconiajunior',
        ],
        jobTitle: 'Full Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Farols Digital Solutions',
        },
      }),
    }} />
  </>
);
