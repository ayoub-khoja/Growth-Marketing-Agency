import { Button } from "@/components/ui/button";
import { GrowthMark, Square } from "@/components/brand/mark";
import { heroStats, pillars } from "@/content/home";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_100%)]" />
      <div aria-hidden className="absolute top-[-20%] right-[-10%] -z-10 size-[44rem] rounded-full bg-magenta-300/25 blur-[150px]" />
      <div aria-hidden className="absolute bottom-[-35%] left-[-15%] -z-10 size-[34rem] rounded-full bg-sand blur-[110px]" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.24em] text-neutral-500 uppercase" data-reveal>
            <Square className="size-2" />
            Creative &amp; Strategic Growth Agency
          </p>

          <h1
            className="mt-7 text-[3.3rem] leading-[0.95] text-balance sm:text-7xl lg:text-[6.2rem]"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Des marques qu&apos;on <em className="text-magenta-500">remarque</em>. Une croissance qu&apos;on mesure.
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-pretty text-neutral-600 sm:text-xl"
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            Branding, création, performance et technologie réunis sous un même toit, pour bâtir des marques fortes et
            transformer leur visibilité en résultats commerciaux.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            <Button href="#contact">Parlons de votre marque</Button>
            <Button href="#expertises" variant="ghost">
              Découvrir nos expertises
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-black/10 pt-8" data-reveal style={{ ["--reveal-delay" as string]: "320ms" }}>
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl sm:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-neutral-500 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

/** Carte « Four pillars. One vision. » */
function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-[0_40px_90px_-40px_rgb(12_12_13/0.55)] sm:p-10">
        <div aria-hidden className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_top_right,#000_10%,transparent_65%)]" />
        <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-magenta-500/40 blur-[90px]" />
        <GrowthMark className="relative h-16 text-white" title="growth" />
        <p className="relative mt-8 text-xs tracking-[0.24em] text-white/50 uppercase">Four pillars. One vision.</p>
        <p className="relative mt-3 font-display text-4xl leading-[1.05] sm:text-[2.7rem]">
          Branding + Creativity + Technology + <em className="text-magenta-300">Performance</em>
        </p>
        <ul className="relative mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
          {pillars.map((p) => (
            <li key={p.title} className="bg-ink/90 p-4">
              <p className="text-sm font-semibold">{p.title}</p>
              <p className="mt-1 text-xs leading-snug text-white/50">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 text-center font-display text-xl text-neutral-500 italic">{siteConfig.tagline}</p>
    </div>
  );
}
