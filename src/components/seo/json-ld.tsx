import { siteConfig } from "@/config/site";
import { faqs, services } from "@/content/home";

export function JsonLd() {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#agence`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo-growth.png`,
      image: `${siteConfig.url}/opengraph-image`,
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      address: { "@type": "PostalAddress", addressLocality: siteConfig.city, addressCountry: "TN" },
      areaServed: { "@type": "Country", name: "Tunisie" },
      ...(sameAs.length ? { sameAs } : {}),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services marketing",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
