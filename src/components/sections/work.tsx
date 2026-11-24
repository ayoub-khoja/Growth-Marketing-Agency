import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/content/home";

export function Work() {
  return (
    <section id="realisations" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="Réalisations"
          title="Des résultats concrets, pas des promesses"
          text="Quelques campagnes récentes et l'impact mesuré sur l'activité de nos clients."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-3xl border border-black/8 bg-white p-8 shadow-[0_20px_60px_-35px_rgb(12_12_13/0.2)] transition-colors duration-500 hover:border-magenta-500/50 sm:p-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 2) * 100}ms` }}
            >
              <div aria-hidden className="absolute -top-24 -right-24 size-64 rounded-full bg-magenta-500/0 blur-3xl transition-colors duration-700 group-hover:bg-magenta-400/20" />
              <div className="relative flex items-center justify-between gap-4">
                <span className="rounded-full bg-black/[0.05] px-3 py-1 text-xs font-medium text-neutral-700">{c.sector}</span>
                <span className="text-xs text-neutral-500">{c.client}</span>
              </div>

              <div className="relative mt-10 flex items-end justify-between gap-6">
                <div>
                  <p className="font-display text-6xl font-semibold tracking-tight text-ink sm:text-7xl">{c.metric}</p>
                  <p className="mt-2 text-sm font-medium text-magenta-500">{c.metricLabel}</p>
                </div>
                <div aria-hidden className="flex h-24 items-end gap-1.5">
                  {c.bars.map((h, j) => (
                    <span
                      key={j}
                      className={`w-2.5 rounded-t-sm transition-all duration-700 ${
                        j === c.bars.length - 1 ? "bg-magenta-500" : "bg-black/10 group-hover:bg-black/20"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <h3 className="relative mt-10 text-xl font-semibold text-balance sm:text-2xl">{c.title}</h3>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <li key={t} className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
