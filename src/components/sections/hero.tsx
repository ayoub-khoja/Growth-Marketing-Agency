import { TrendingUp, MousePointerClick, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrowthMark, Square } from "@/components/brand/mark";
import { heroStats } from "@/content/home";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 lg:pb-32">
      {/* Décor */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_35%,transparent_100%)]" />
      <div aria-hidden className="absolute top-[-15%] right-[-10%] -z-10 size-[44rem] rounded-full bg-magenta-400/20 blur-[140px]" />
      <div aria-hidden className="absolute bottom-[-30%] left-[-15%] -z-10 size-[30rem] rounded-full bg-magenta-200/40 blur-[120px]" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm" data-reveal>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-magenta-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-magenta-500" />
            </span>
            Agence de marketing digital · Tunis
          </p>

          <h1
            className="mt-7 text-[2.9rem] leading-[0.98] font-semibold text-balance sm:text-6xl lg:text-[5.2rem]"
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            Votre marque mérite de <span className="text-gradient">grandir</span>
            <Square className="ml-2 size-3.5 align-baseline sm:size-5" />
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-neutral-600 sm:text-xl"
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
          >
            Stratégie, contenus et publicité pilotés par la donnée. Nous transformons votre présence en ligne en
            clients, en ventes et en notoriété durable.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            <Button href="#contact">Demander un audit gratuit</Button>
            <Button href="#realisations" variant="ghost">
              Voir nos réalisations
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-black/10 pt-8" data-reveal style={{ ["--reveal-delay" as string]: "320ms" }}>
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-neutral-500 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
      <GrowthMark className="pointer-events-none absolute -top-20 -right-4 h-[27rem] text-black/[0.04] [&>path:last-child]:fill-magenta-500/15" />

      <div className="relative rounded-3xl border border-black/8 bg-white p-6 shadow-[0_30px_80px_-30px_rgb(12_12_13/0.25)] sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-neutral-500">Chiffre d'affaires généré</p>
            <p className="mt-1 font-display text-3xl font-semibold">
              248 600 <span className="text-lg text-neutral-400">DT</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-blush px-3 py-1 text-xs font-semibold text-magenta-600">
            <TrendingUp className="size-3.5" /> +62 %
          </span>
        </div>

        <svg viewBox="0 0 320 140" className="mt-6 w-full" aria-hidden>
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#A62E86" stopOpacity="0.28" />
              <stop offset="1" stopColor="#A62E86" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 65, 100].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="black" strokeOpacity="0.06" />
          ))}
          <path
            d="M0 118 C30 112 45 104 70 106 S115 88 140 84 S185 78 205 60 S250 44 275 30 S305 14 320 10 V140 H0Z"
            fill="url(#area)"
          />
          <path
            d="M0 118 C30 112 45 104 70 106 S115 88 140 84 S185 78 205 60 S250 44 275 30 S305 14 320 10"
            fill="none"
            stroke="#A62E86"
            strokeWidth="2.5"
          />
          <rect x="311" y="3" width="13" height="13" fill="#0c0c0d" />
        </svg>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Kpi icon={<MousePointerClick className="size-4" />} label="Taux de clic" value="4,8 %" />
          <Kpi icon={<Users className="size-4" />} label="Nouveaux prospects" value="1 284" />
        </div>
      </div>

      <div className="absolute -bottom-12 -left-6 hidden animate-float items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl shadow-black/20 sm:flex">
        <span className="flex size-9 items-center justify-center rounded-xl bg-magenta-500 font-display text-sm font-bold">x4</span>
        <div>
          <p className="text-sm font-semibold">ROAS campagne Meta</p>
          <p className="text-xs text-white/55">30 derniers jours</p>
        </div>
      </div>
    </div>
  );
}

function Kpi({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-black/6 bg-paper p-4">
      <p className="flex items-center gap-2 text-xs text-neutral-500">
        <span className="text-magenta-500">{icon}</span>
        {label}
      </p>
      <p className="mt-2 font-display text-xl font-semibold">{value}</p>
    </div>
  );
}
