/**
 * Textes de la page d'accueil.
 * ⚠️ Les chiffres, les réalisations et les témoignages ci-dessous sont des EXEMPLES.
 *    Remplacez-les par les vrais résultats et les vrais avis de vos clients avant la mise en ligne.
 */

export const heroStats = [
  { value: "+120", label: "campagnes lancées" },
  { value: "x3,8", label: "ROAS moyen" },
  { value: "45+", label: "marques accompagnées" },
];

export const channels = [
  "Instagram",
  "Facebook",
  "TikTok",
  "Google Ads",
  "LinkedIn",
  "YouTube",
  "Snapchat",
  "SEO",
  "E-mailing",
  "Influence",
];

export type ServiceIcon =
  | "target"
  | "megaphone"
  | "camera"
  | "sparkles"
  | "search"
  | "users";

export const services: {
  icon: ServiceIcon;
  title: string;
  text: string;
  points: string[];
}[] = [
  {
    icon: "target",
    title: "Stratégie digitale",
    text: "Audit, positionnement et plan d'action clair pour savoir où investir chaque dinar.",
    points: ["Audit de marque", "Personas & offre", "Plan média"],
  },
  {
    icon: "megaphone",
    title: "Publicité en ligne",
    text: "Campagnes Meta, Google et TikTok Ads pilotées au résultat : leads, ventes, réservations.",
    points: ["Meta & Google Ads", "Tracking & pixel", "Optimisation continue"],
  },
  {
    icon: "users",
    title: "Social media",
    text: "Une présence régulière et cohérente qui fait grandir une vraie communauté autour de votre marque.",
    points: ["Ligne éditoriale", "Calendrier & publication", "Modération"],
  },
  {
    icon: "camera",
    title: "Création de contenu",
    text: "Photos, vidéos et reels produits pour arrêter le scroll et donner envie d'acheter.",
    points: ["Shooting photo", "Reels & UGC", "Motion design"],
  },
  {
    icon: "sparkles",
    title: "Branding",
    text: "Une identité visuelle forte et premium, déclinée sur tous vos supports.",
    points: ["Logo & charte", "Direction artistique", "Supports print"],
  },
  {
    icon: "search",
    title: "Site web & SEO",
    text: "Des sites rapides qui convertissent et remontent sur Google quand vos clients vous cherchent.",
    points: ["Landing pages", "Référencement local", "Google Business"],
  },
];

export const reasons = [
  {
    title: "Orientés résultats",
    text: "On mesure ce qui compte : leads, ventes et coût d'acquisition. Pas seulement des likes.",
  },
  {
    title: "Créa + média sous un même toit",
    text: "Stratèges, créatifs et media buyers travaillent ensemble sur vos campagnes.",
  },
  {
    title: "Transparence totale",
    text: "Un reporting clair chaque mois et un accès direct à vos comptes publicitaires.",
  },
  {
    title: "Connaissance du marché tunisien",
    text: "Des messages, des formats et des budgets adaptés à votre audience locale.",
  },
];

export const caseStudies = [
  {
    sector: "Restauration",
    client: "Restaurant gastronomique · Tunis",
    title: "Des réservations qui affichent complet le week-end",
    metric: "+180 %",
    metricLabel: "de réservations en 3 mois",
    tags: ["Meta Ads", "Reels", "Google Business"],
    bars: [28, 34, 31, 46, 52, 61, 74, 88],
  },
  {
    sector: "E-commerce",
    client: "Marque de cosmétiques",
    title: "Une boutique en ligne rentable dès le 2e mois",
    metric: "x4,2",
    metricLabel: "retour sur dépenses publicitaires",
    tags: ["Meta Ads", "UGC", "Tracking"],
    bars: [18, 22, 35, 41, 49, 63, 70, 92],
  },
  {
    sector: "Santé & beauté",
    client: "Clinique esthétique · Sousse",
    title: "Un flux régulier de demandes de rendez-vous",
    metric: "320",
    metricLabel: "leads qualifiés par mois",
    tags: ["Lead ads", "Landing page", "WhatsApp"],
    bars: [22, 30, 38, 36, 52, 58, 71, 80],
  },
  {
    sector: "Immobilier",
    client: "Promoteur immobilier · Les Berges du Lac",
    title: "Des prospects moins chers et mieux ciblés",
    metric: "−45 %",
    metricLabel: "de coût par prospect",
    tags: ["Google Ads", "Vidéo", "CRM"],
    bars: [90, 82, 76, 70, 61, 55, 52, 48],
  },
];

export const steps = [
  {
    title: "Diagnostic",
    text: "On analyse votre marque, vos concurrents et vos chiffres pour repérer les vrais leviers de croissance.",
  },
  {
    title: "Stratégie",
    text: "Objectifs, cibles, canaux, messages et budget : un plan précis validé ensemble.",
  },
  {
    title: "Création & lancement",
    text: "Contenus, visuels et campagnes produits par notre équipe, puis mis en ligne rapidement.",
  },
  {
    title: "Optimisation",
    text: "On teste, on mesure et on ajuste chaque semaine pour faire grimper vos résultats.",
  },
];

export const testimonials = [
  {
    quote:
      "En trois mois, notre page est passée d'une vitrine silencieuse à notre premier canal de réservations. L'équipe est réactive et vraiment créative.",
    name: "Sami B.",
    role: "Gérant de restaurant, Tunis",
  },
  {
    quote:
      "Enfin une agence qui parle chiffres. Chaque mois on sait exactement ce que rapporte chaque dinar investi en publicité.",
    name: "Ines K.",
    role: "Fondatrice d'une marque e-commerce",
  },
  {
    quote:
      "Le nouveau branding et les vidéos ont complètement changé l'image de notre clinique. Les patients nous le disent directement.",
    name: "Dr Mehdi T.",
    role: "Directeur de clinique, Sousse",
  },
];

export const faqs = [
  {
    q: "Avec quel budget peut-on commencer ?",
    a: "Nous adaptons l'accompagnement à votre taille. On commence souvent par un pack social media ou une première campagne publicitaire, puis on fait évoluer le budget en fonction des résultats.",
  },
  {
    q: "En combien de temps voit-on des résultats ?",
    a: "Les campagnes publicitaires produisent des premiers résultats en quelques jours. Une stratégie de contenu et de référencement se construit sur 2 à 3 mois.",
  },
  {
    q: "Travaillez-vous avec des entreprises hors de Tunis ?",
    a: "Oui. Nous accompagnons des marques partout en Tunisie et à l'étranger. Les échanges se font en visio, par téléphone ou sur WhatsApp.",
  },
  {
    q: "Est-ce que je garde l'accès à mes comptes ?",
    a: "Toujours. Vos pages, vos comptes publicitaires et vos contenus vous appartiennent. Vous gardez un accès complet à tout moment.",
  },
  {
    q: "Comment se passe le premier rendez-vous ?",
    a: "Un échange gratuit de 30 minutes pour comprendre vos objectifs. Vous repartez avec un premier diagnostic et des recommandations concrètes, sans engagement.",
  },
];
