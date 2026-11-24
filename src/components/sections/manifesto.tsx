import { Gem, Palette, ChartNoAxesCombined, Cpu } from "lucide-react";
import { Square } from "@/components/brand/mark";
import { manifesto, pillars, type PillarIcon } from "@/content/home";

const icons: Record<PillarIcon, React.ComponentType<{ className?: string }>> = {
  gem: Gem,
  palette: Palette,
  chart: ChartNoAxesCombined,
  cpu: Cpu,
};

/** Présentation officielle de l'agence + les 4 piliers */
export function Manifesto() {
  return (
    <section id="agence" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase">
              <Square className="size-2" />
              <span className="text-magenta-500">01</span>
              <span className="h-px w-6 bg-black/20" />
              L&apos;agence
            </p>
            <p className="mt-6 text-sm leading-relaxed text-neutral-500">
              Growth
              <br />
              Creative &amp; Strategic Growth Agency
              <br />
              Tunis · Tunisie &amp; international
            </p>
          </div>
          <div>
            <h2 className="text-[2.4rem] leading-[1.05] text-balance sm:text-5xl lg:text-[3.6rem]" data-reveal>
              {manifesto.lead}
            </h2>
            <div className="mt-10 grid gap-6 text-lg leading-relaxed text-neutral-600 sm:grid-cols-2" data-reveal>
              {manifesto.paragraphs.map((p, i) => (
                <p key={i} className={i === 2 ? "sm:col-span-2" : ""}>
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-10 border-l-2 border-magenta-500 pl-5 font-display text-2xl text-ink italic sm:text-3xl" data-reveal>
              {manifesto.signature}
            </p>
          </div>
        </div>

        <div className="mt-24" data-reveal>
          <div className="flex flex-col items-start justify-between gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end">
            <h3 className="font-display text-4xl font-normal sm:text-5xl">
              Quatre piliers. <em className="text-magenta-500">Une vision.</em>
            </h3>
            <p className="max-w-sm text-neutral-600">
              Nous vendons une vision globale de la croissance, pas une simple liste de prestations.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = icons[p.icon];
              return (
                <li
                  key={p.title}
                  className="group border-b border-black/10 py-8 sm:px-6 sm:first:pl-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-white text-magenta-500 shadow-sm ring-1 ring-black/5 transition-colors duration-500 group-hover:bg-magenta-500 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-neutral-500 uppercase">{p.subtitle}</p>
                  <p className="mt-1 font-display text-3xl">{p.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">{p.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
