import React from "react";
import { Helmet } from "react-helmet-async";
import { PERSONAL_INFO } from "./data/portfolioData";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const defaultTitle = "Junior Jeconia | Frontend-leaning Full-Stack Developer";
const defaultDescription =
  "Portfolio of Junior Jeconia (harshbix). Designing and engineering high-performance web applications, interactive interfaces, and reliable digital systems with React, TypeScript, and Node.js.";
const defaultImage = "https://jeconiajunior.vercel.app/profile.jpg";
const defaultUrl = "https://jeconiajunior.vercel.app";

export const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = "Junior Jeconia, harshbix, frontend developer, full-stack developer, React, TypeScript, Node.js, UI/UX, Tanzania, web developer, portfolio",
  image = defaultImage,
  url = defaultUrl,
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    alternateName: ["harshbix", "Bixx", "Junior Jeconia Bixx"],
    jobTitle: PERSONAL_INFO.role,
    description: PERSONAL_INFO.bioSummary,
    url: "https://jeconiajunior.vercel.app",
    image: "https://jeconiajunior.vercel.app/profile.jpg",
    email: `mailto:${PERSONAL_INFO.email}`,
    telephone: PERSONAL_INFO.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    sameAs: [
      PERSONAL_INFO.socials.github,
      PERSONAL_INFO.socials.linkedin,
      PERSONAL_INFO.socials.twitter,
      PERSONAL_INFO.socials.instagram,
    ],
    knowsAbout: [
      "Web Development",
      "Frontend Engineering",
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "UI/UX Design Systems",
      "PostgreSQL",
      "Performance Optimization",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={PERSONAL_INFO.name} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@b1xson" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};
