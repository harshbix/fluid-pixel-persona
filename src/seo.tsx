import React from "react";
import { Helmet } from "react-helmet-async";
import { PERSONAL_INFO, resolveText } from "./data/portfolioData";
import { useLanguage } from "./context/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "Junior Jeconia, harshbix, frontend developer, full-stack developer, React, TypeScript, Node.js, UI/UX, Tanzania, web developer, portfolio",
  image = "https://jeconiajunior.vercel.app/profile.jpg",
  url = "https://jeconiajunior.vercel.app",
}) => {
  const { language } = useLanguage();

  const defaultTitle =
    language === "sw"
      ? "Junior Jeconia | Msanidi Programu za Wavuti na Mifumo"
      : "Junior Jeconia | Frontend-leaning Full-Stack Developer";

  const defaultDescription =
    language === "sw"
      ? "Tovuti ya Junior Jeconia (harshbix). Kusanifu na kujenga programu za kisasa za wavuti, miingiliano laini, na mifumo thabiti ya kidijitali."
      : "Portfolio of Junior Jeconia (harshbix). Designing and engineering high-performance web applications, interactive interfaces, and reliable digital systems with React, TypeScript, and Node.js.";

  const activeTitle = title || defaultTitle;
  const activeDescription = description || defaultDescription;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    alternateName: ["harshbix", "Bixx", "Junior Jeconia Bixx"],
    jobTitle: resolveText(PERSONAL_INFO.role, language),
    description: resolveText(PERSONAL_INFO.bioSummary, language),
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
      <html lang={language} />
      <title>{activeTitle}</title>
      <meta name="title" content={activeTitle} />
      <meta name="description" content={activeDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={PERSONAL_INFO.name} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={activeTitle} />
      <meta property="og:description" content={activeDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === "sw" ? "sw_TZ" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={activeTitle} />
      <meta name="twitter:description" content={activeDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@b1xson" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};
