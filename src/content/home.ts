/**
 * Textes de la page d'accueil.
 * ⚠️ Les chiffres, les réalisations et les témoignages sont des EXEMPLES.
 *    Remplacez-les par les vrais résultats et les vrais avis de vos clients avant la mise en ligne.
 */

export const heroStats = [
  { value: "7", label: "pôles d'expertise" },
  { value: "+120", label: "campagnes lancées" },
  { value: "x3,8", label: "ROAS moyen" },
];

/** Phrases signature qui défilent sous le haut de page */
export const slogans = [
  "Growth. Beyond visibility.",
  "Think bold. Create impact. Drive growth.",
  "We build brands that move people.",
  "Creativity with a purpose. Strategy with impact.",
  "More than marketing. A growth mindset.",
  "Make your brand impossible to ignore.",
];

/** Présentation officielle de l'agence */
export const manifesto = {
  lead: "Chez Growth, nous pensons que les grandes marques ne sont pas faites pour être vues. Elles sont faites pour qu'on s'en souvienne.",
  paragraphs: [
    "Nous sommes une agence créative et stratégique qui aide les entreprises à bâtir des identités fortes, à renforcer leur présence digitale et à transformer leurs ambitions en résultats mesurables.",
    "En réunissant réflexion stratégique, direction artistique, technologies innovantes et marketing piloté par la donnée, nous créons des expériences qui relient les marques aux gens et transforment l'attention en action.",
    "De la stratégie de marque à la production artistique, de la performance digitale au développement web, nous proposons des solutions intégrées pour que les marques se démarquent, créent du lien et grandissent.",
  ],
  signature: "We don't just market brands. We build their next chapter.",
};

export type PillarIcon = "gem" | "palette" | "chart" | "cpu";

export const pillars: { icon: PillarIcon; title: string; subtitle: string; text: string }[] = [
  { icon: "gem", title: "Strategy", subtitle: "Stratégie", text: "Branding, positionnement, études de marché, conseil." },
  { icon: "palette", title: "Creativity", subtitle: "Créativité", text: "Direction artistique, photographie, vidéo, design." },
  { icon: "chart", title: "Performance", subtitle: "Performance", text: "Media buying, SEO, analytics, optimisation des conversions." },
  { icon: "cpu", title: "Technology", subtitle: "Technologie", text: "Sites web, e-commerce, CRM, automatisation." },
];

/** Les 7 pôles d'expertise */
export const services: { title: string; text: string; points: string[] }[] = [
  {
    title: "Branding & Brand Strategy",
    text: "Construire une marque avec une identité forte et une vraie personnalité.",
    points: [
      "Positionnement & étude de marché",
      "Identité visuelle & logo",
      "Storytelling & ton de marque",
      "Architecture de marque",
      "Rebranding & charte graphique",
      "Naming & création de marque",
    ],
  },
  {
    title: "Creative Production & Art Direction",
    text: "Créer du contenu visuel qui donne une signature à chaque marque.",
    points: [
      "Shootings artistiques",
      "Photographie produit & mode",
      "Direction artistique",
      "Production vidéo publicitaire",
      "Reels & formats courts",
      "Contenus UGC & influence",
      "Concepts de campagne & storytelling visuel",
      "Montage vidéo & motion design",
    ],
  },
  {
    title: "Digital Marketing & Social Media",
    text: "Développer une présence digitale cohérente et engageante.",
    points: [
      "Gestion des réseaux sociaux",
      "Stratégie & planning de contenu",
      "Community management",
      "Audit social media",
      "Marketing d'influence",
      "Stratégie de communication digitale",
      "E-réputation",
    ],
  },
  {
    title: "Performance Marketing & Data",
    text: "Transformer les données en décisions et les campagnes en résultats.",
    points: [
      "Meta Ads & Google Ads",
      "Media buying",
      "Optimisation des campagnes",
      "Suivi des conversions",
      "Pixel & API de conversion",
      "Analyse de données & reporting",
      "CRO : optimisation du taux de conversion",
      "Attribution marketing",
    ],
  },
  {
    title: "Web Development & E-commerce",
    text: "Créer des plateformes digitales pensées pour l'expérience et la conversion.",
    points: [
      "Sites vitrines & corporate",
      "Sites e-commerce",
      "WordPress & WooCommerce",
      "Landing pages",
      "Design UI/UX",
      "Optimisation de site",
      "Stratégie e-commerce",
    ],
  },
  {
    title: "SEO & Digital Visibility",
    text: "Améliorer la visibilité des marques sur les moteurs de recherche.",
    points: [
      "Stratégie SEO",
      "SEO technique",
      "SEO on-page & off-page",
      "Recherche de mots-clés",
      "SEO de contenu",
      "SEO local",
      "Optimisation Google Business Profile",
    ],
  },
  {
    title: "Consulting, CRM & Automation",
    text: "Optimiser les processus marketing et améliorer la relation client.",
    points: [
      "Conseil marketing",
      "Mise en place de CRM",
      "E-mail marketing",
      "Marketing automation",
      "Génération de leads",
      "Tunnels de vente",
      "Parcours client",
      "Stratégies de fidélisation",
    ],
  },
];

/** Les 3 entités signature de l'agence */
export const divisions = [
  {
    name: "Growth Lab",
    role: "Innovation, stratégie, data et expérimentation.",
    text: "Le laboratoire où naissent les stratégies : études, tests, analyse et nouvelles approches pour garder une longueur d'avance.",
  },
  {
    name: "Growth Studio",
    role: "Shootings, vidéos, branding et production.",
    text: "Le studio créatif qui donne une signature visuelle aux marques, de l'identité à la dernière image de campagne.",
  },
  {
    name: "Growth Performance",
    role: "Acquisition, SEO, media buying et conversion.",
    text: "L'équipe qui transforme l'attention en chiffre d'affaires, avec des campagnes pilotées et mesurées en continu.",
  },
];

/** Offres packagées */
export const offers = [
  { name: "Brand Launch", content: ["Branding", "Identité visuelle", "Stratégie de lancement"], for: "Lancer une nouvelle marque" },
  { name: "Digital Presence", content: ["Social media", "Création de contenu", "Community management"], for: "Exister et engager en ligne" },
  { name: "Growth Performance", content: ["Meta Ads", "Google Ads", "Tracking", "Reporting"], for: "Générer des ventes et des leads", featured: true },
  { name: "E-commerce Growth", content: ["Site web", "SEO", "Publicité", "Optimisation des conversions"], for: "Faire décoller une boutique en ligne" },
  { name: "Creative Campaign", content: ["Concept", "Shooting", "Vidéos", "Campagne publicitaire"], for: "Marquer les esprits" },
  { name: "Brand Transformation", content: ["Audit", "Repositionnement", "Branding", "Stratégie digitale"], for: "Réinventer une marque existante" },
];

export type ExtraIcon = "sparkles" | "package" | "mic" | "bot" | "orbit" | "briefcase";

/** Services complémentaires qui différencient Growth */
export const extras: { icon: ExtraIcon; title: string; text: string }[] = [
  { icon: "sparkles", title: "Brand Experiences", text: "Événements, lancements de produits, activations de marque et expériences immersives." },
  { icon: "package", title: "Packaging Design", text: "Packaging, étiquettes, supports imprimés et expérience unboxing." },
  { icon: "mic", title: "Podcast & Personal Branding", text: "Production de podcasts, stratégie de personal branding et contenus pour dirigeants." },
  { icon: "bot", title: "IA & Innovation marketing", text: "L'intelligence artificielle au service de la création, de l'analyse et de l'automatisation." },
  { icon: "orbit", title: "Campagnes 360°", text: "Des campagnes intégrées : digital, influence, publicité et communication offline." },
  { icon: "briefcase", title: "Communication corporate", text: "Présentations, profils d'entreprise, catalogues, brochures et communication B2B." },
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
  { title: "Diagnostic", text: "Audit de la marque, du marché et de vos chiffres pour identifier les vrais leviers de croissance." },
  { title: "Stratégie", text: "Positionnement, cibles, messages, canaux et budget : une feuille de route claire, validée ensemble." },
  { title: "Création", text: "Identité, contenus, campagnes et plateformes produits par nos équipes Studio et Performance." },
  { title: "Croissance", text: "Lancement, mesure et optimisation continue, avec un reporting transparent chaque mois." },
];

export const testimonials = [
  {
    quote:
      "Growth a repensé notre image de A à Z. Le nouveau branding et les campagnes ont changé la perception de notre restaurant, et les réservations ont suivi.",
    name: "Sami B.",
    role: "Gérant de restaurant, Tunis",
  },
  {
    quote:
      "Une agence qui allie vraie créativité et rigueur des chiffres. Chaque mois, nous savons exactement ce que rapporte chaque dinar investi.",
    name: "Ines K.",
    role: "Fondatrice d'une marque e-commerce",
  },
  {
    quote:
      "Les shootings et les vidéos réalisés par le studio ont donné à notre clinique une image haut de gamme. Nos patients nous le disent directement.",
    name: "Dr Mehdi T.",
    role: "Directeur de clinique, Sousse",
  },
];

export const faqs = [
  {
    q: "Quel type d'entreprises accompagnez-vous ?",
    a: "Des marques ambitieuses de toutes tailles : startups, PME, enseignes et groupes, dans la mode, la beauté, la restauration, la santé, l'immobilier ou le B2B. Ce qui compte : la volonté de grandir.",
  },
  {
    q: "Travaillez-vous uniquement en Tunisie ?",
    a: "Non. Nous sommes basés à Tunis et accompagnons des marques en Tunisie comme à l'international. Les échanges se font sur place, en visio ou sur WhatsApp.",
  },
  {
    q: "Peut-on choisir un seul service plutôt qu'une offre complète ?",
    a: "Oui. Nos offres packagées couvrent les besoins les plus courants, mais toutes nos prestations sont aussi disponibles à la carte, notamment pour les entreprises qui ont déjà une équipe marketing.",
  },
  {
    q: "En combien de temps voit-on des résultats ?",
    a: "Les campagnes publicitaires produisent leurs premiers résultats en quelques jours. Un travail de marque, de contenu ou de référencement se construit sur deux à trois mois.",
  },
  {
    q: "Est-ce que je garde la propriété de mes comptes et contenus ?",
    a: "Toujours. Vos pages, vos comptes publicitaires, vos fichiers et vos contenus vous appartiennent. Vous y gardez un accès complet à tout moment.",
  },
  {
    q: "Comment se passe le premier rendez-vous ?",
    a: "Un échange de 30 minutes, gratuit et sans engagement, pour comprendre vos objectifs. Vous repartez avec un premier diagnostic et des pistes concrètes.",
  },
];
