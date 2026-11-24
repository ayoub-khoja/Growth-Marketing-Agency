import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GrowthMark } from "@/components/brand/mark";
import { reasons } from "@/content/home";

/** Seule grande section foncée de la page : elle crée le contraste « premium ». */
export function WhyUs() {
  return (
    <section className="py-6 sm:py-10">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-white sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_at_top_right,#000_20%,transparent_70%)]" />
          <div aria-hidden className="absolute -top-32 -right-32 size-[28rem] rounded-full bg-magenta-500/30 blur-[120px]" />
          <GrowthMark muted className="pointer-events-none absolute -bottom-24 -left-16 h-[30rem] text-white/[0.04]" />
          <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              index="02"
              eyebrow="Pourquoi growth"
              tone="dark"
              title={
                <>
                  Moins de bruit.
                  <br />
                  <span className="text-magenta-300">Plus de croissance.</span>
                </>
              }
              text="Nous ne vendons pas des publications. Nous construisons un système marketing qui vous apporte des clients, mois après mois."
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <li
                  key={r.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                >
                  <span className="flex size-8 items-center justify-center bg-magenta-500">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
