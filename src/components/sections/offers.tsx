import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { offers } from "@/content/home";

export function Offers() {
  return (
    <section id="offres" className="border-y border-black/6 bg-sand/60 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Offres"
          title={
            <>
              Des offres complètes, <em className="text-magenta-500">pensées pour un objectif</em>
            </>
          }
          text="Plutôt que d'acheter des prestations séparées, choisissez un accompagnement construit autour de votre besoin."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <a
              key={o.name}
              href="#contact"
              className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${
                o.featured
                  ? "bg-magenta-500 text-white shadow-[0_30px_60px_-25px_rgb(166_46_134/0.6)]"
                  : "border border-black/8 bg-white hover:shadow-[0_30px_60px_-35px_rgb(12_12_13/0.3)]"
              }`}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className={`pr-4 text-xs leading-relaxed tracking-[0.2em] uppercase ${o.featured ? "text-white/70" : "text-neutral-500"}`}>
                  {o.for}
                </span>
                <ArrowUpRight
                  className={`size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    o.featured ? "text-white" : "text-magenta-500"
                  }`}
                />
              </div>
              <p className="mt-10 font-display text-4xl">{o.name}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {o.content.map((c) => (
                  <li
                    key={c}
                    className={`rounded-full px-3 py-1 text-xs ${
                      o.featured ? "bg-white/15 text-white" : "border border-black/10 text-neutral-600"
                    }`}
                  >
                    {c}
                  </li>
                ))}
              </ul>
              {o.featured ? (
                <span className="mt-6 self-start rounded-full bg-white px-3 py-1 text-xs font-semibold text-magenta-600">
                  La plus demandée
                </span>
              ) : null}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-neutral-600" data-reveal>
          Vous avez déjà une équipe marketing ? Toutes nos prestations sont aussi disponibles{" "}
          <a href="#contact" className="font-semibold text-magenta-600 underline-offset-4 hover:underline">
            à la carte
          </a>
          .
        </p>
      </div>
    </section>
  );
}
