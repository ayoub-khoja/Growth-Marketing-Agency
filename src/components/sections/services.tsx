import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/home";

/** Les 7 pôles d'expertise, présentés en liste éditoriale dépliable */
export function Services() {
  return (
    <section id="expertises" className="border-y border-black/6 bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="02"
            eyebrow="Expertises"
            title={
              <>
                7 pôles d&apos;expertise, <em className="text-magenta-500">une seule équipe</em>
              </>
            }
          />
          <p className="max-w-sm text-neutral-600 lg:text-right" data-reveal>
            De la stratégie de marque à la conversion, chaque pôle travaille avec les autres pour servir un même
            objectif : votre croissance.
          </p>
        </div>

        <div className="mt-16 border-t border-black/10">
          {services.map((s, i) => (
            <details
              key={s.title}
              open={i === 0}
              className="group border-b border-black/10"
              data-reveal
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 py-7 sm:gap-10 sm:py-9 [&::-webkit-details-marker]:hidden">
                <span className="w-10 shrink-0 font-display text-xl text-magenta-500 sm:w-16 sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-[1.7rem] leading-tight transition-colors group-hover:text-magenta-600 sm:text-[2.6rem]">
                    {s.title}
                  </span>
                  <span className="mt-1 hidden text-neutral-500 sm:block">{s.text}</span>
                </span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-open:rotate-45 group-open:border-magenta-500 group-open:bg-magenta-500 group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <div className="pb-10 sm:pl-26">
                <p className="mb-6 text-neutral-600 sm:hidden">{s.text}</p>
                <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-neutral-700">
                      <span className="size-1.5 shrink-0 bg-magenta-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
