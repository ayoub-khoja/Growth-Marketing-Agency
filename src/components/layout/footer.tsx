import { Logo } from "@/components/brand/logo";
import { navLinks, siteConfig } from "@/config/site";
import { services } from "@/content/home";

export function Footer() {
  const socials = Object.entries(siteConfig.socials).filter(([, url]) => url);
  const labels: Record<string, string> = { instagram: "Instagram", facebook: "Facebook", linkedin: "LinkedIn", tiktok: "TikTok" };
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.3fr]">
        <div>
          <Logo tone="light" className="h-11 w-[134px]" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
            Agence de marketing digital basée à {siteConfig.city}. Stratégie, contenus et publicité pour les marques
            qui veulent grandir.
          </p>
        </div>
        <FooterCol title="Navigation">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white">{l.label}</a>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Services">
          {services.map((s) => (
            <li key={s.title}>
              <a href="#services" className="hover:text-white">{s.title}</a>
            </li>
          ))}
        </FooterCol>
        <FooterCol title="Contact">
          <li><a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phoneDisplay}</a></li>
          <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white [overflow-wrap:anywhere]">{siteConfig.email}</a></li>
          <li>{siteConfig.address}</li>
          {socials.map(([k, url]) => (
            <li key={k}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white">{labels[k]}</a>
            </li>
          ))}
        </FooterCol>
      </div>
      <div className="border-t border-white/8">
        <div className="container-x flex flex-col justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <p>Fait avec soin en Tunisie.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-5 space-y-3 text-sm text-white/50">{children}</ul>
    </div>
  );
}
