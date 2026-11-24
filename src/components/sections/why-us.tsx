import { GrowthMark } from "@/components/brand/mark";
import { SectionHeading } from "@/components/ui/section-heading";
import { divisions } from "@/content/home";

/** Growth Lab, Growth Studio, Growth Performance : la signature de l'agence (seul grand bloc foncé). */
export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_top_right,#000_15%,transparent_70%)]" />
          <div aria-hidden className="absolute -top-32 -right-32 size-[28rem] rounded-full bg-magenta-500/35 blur-[120px]" />
          <GrowthMark muted className="pointer-events-none absolute -bottom-28 -left-16 h-[30rem] text-white/[0.04]" />

          <div className="relative">
            <SectionHeading
              index="03"
              eyebrow="Notre signature"
              tone="dark"
              title={
                <>
                  Une marque, <em className="text-magenta-300">trois expertises.</em>
                </>
              }
              text="Growth est organisée en trois entités complémentaires. Vous profitez de spécialistes pointus, coordonnés par une seule équipe."
            />
            <ul className="mt-14 grid gap-4 lg:grid-cols-3">
              {divisions.map((d, i) => (
                <li
                  key={d.name}
                  className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-colors duration-500 hover:border-magenta-400/60 hover:bg-white/[0.07]"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                >
                  <span className="text-xs tracking-[0.22em] text-white/40 uppercase">0{i + 1}</span>
                  <p className="mt-10 font-display text-4xl">
                    Growth <em className="text-magenta-300">{d.name.replace("Growth ", "")}</em>
                  </p>
                  <p className="mt-3 text-sm font-semibold text-white/85">{d.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
