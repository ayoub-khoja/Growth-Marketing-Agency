import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/content/home";

export function Faq() {
  return (
    <section id="faq" className="border-t border-black/6 bg-white py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          index="06"
          eyebrow="FAQ"
          title="Vos questions, nos réponses"
          text="Vous ne trouvez pas votre réponse ? Écrivez-nous, on vous répond dans la journée."
        />
        <div className="divide-y divide-black/8 border-y border-black/8" data-reveal>
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-open:rotate-45 group-open:border-magenta-500 group-open:bg-magenta-500 group-open:text-white">
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="pr-14 pb-6 leading-relaxed text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
