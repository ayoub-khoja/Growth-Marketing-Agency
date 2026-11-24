import { SectionHeading } from "@/components/ui/section-heading";
import { steps } from "@/content/home";

export function Process() {
  return (
    <section id="methode" className="border-y border-black/6 bg-sand/60 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="07"
          eyebrow="Méthode"
          title={<>Une méthode claire, <em className="text-magenta-500">en 4 étapes</em></>}
          text="Vous savez à chaque instant où on en est, ce qu'on fait et pourquoi."
        />
        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center bg-white font-display text-xl text-magenta-500 shadow-sm ring-1 ring-magenta-500/40">
                  {i + 1}
                </span>
                {i < steps.length - 1 ? <span aria-hidden className="hidden h-px flex-1 bg-gradient-to-r from-magenta-500/60 to-magenta-500/5 lg:block" /> : null}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
