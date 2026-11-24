/**
 * Informations générales de l'agence.
 * ➜ Modifiez ce fichier pour mettre à jour le téléphone, l'e-mail, l'adresse et les réseaux sociaux.
 */
export const siteConfig = {
  name: "Growth Marketing Agency",
  shortName: "growth",
  url: "https://growthmarketingagency.tn",
  seoTitle: "Growth | Agence créative & stratégique à Tunis : branding, contenu, performance",
  tagline: "Creative minds. Measurable growth.",
  description:
    "Growth est une agence créative et stratégique basée à Tunis. Branding, production créative, social media, performance marketing, sites web et SEO pour les marques ambitieuses, en Tunisie et à l'international.",
  keywords: [
    "agence créative Tunisie",
    "agence de branding Tunis",
    "agence marketing digital Tunisie",
    "agence marketing Tunis",
    "community manager Tunisie",
    "publicité Facebook Instagram Tunisie",
    "Google Ads Tunisie",
    "création de contenu Tunisie",
    "branding Tunisie",
    "SEO Tunisie",
    "growth marketing",
  ],

  // À REMPLACER par les vraies coordonnées de l'agence
  email: "contact@growthmarketingagency.tn",
  phoneDisplay: "+216 00 000 000",
  phoneHref: "tel:+21600000000",
  // Numéro WhatsApp au format international, sans + ni espaces (ex. 21612345678)
  whatsapp: "21600000000",
  address: "Tunis, Tunisie",
  city: "Tunis",
  hours: "Lun – Ven · 9h – 18h",

  // Laissez vide ("") un réseau que vous n'utilisez pas : il sera masqué automatiquement.
  socials: {
    instagram: "",
    facebook: "",
    linkedin: "",
    tiktok: "",
  },
} as const;

export const navLinks = [
  { href: "#agence", label: "L'agence" },
  { href: "#expertises", label: "Expertises" },
  { href: "#offres", label: "Offres" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
] as const;
