/**
 * Informations générales de l'agence.
 * ➜ Modifiez ce fichier pour mettre à jour le téléphone, l'e-mail, l'adresse et les réseaux sociaux.
 */
export const siteConfig = {
  name: "Growth Marketing Agency",
  shortName: "growth",
  url: "https://growthmarketingagency.tn",
  seoTitle: "Growth Marketing Agency | Agence de marketing digital en Tunisie",
  description:
    "Agence de marketing digital à Tunis : stratégie, social media, publicité Meta & Google, création de contenu, branding et SEO. Des campagnes pensées pour faire grandir votre chiffre d'affaires.",
  keywords: [
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
  { href: "#services", label: "Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#methode", label: "Méthode" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
] as const;
