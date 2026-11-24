import { Sparkles, Package, Mic, Bot, Orbit, BriefcaseBusiness } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { extras, type ExtraIcon } from "@/content/home";

const icons: Record<ExtraIcon, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  package: Package,
  mic: Mic,
  bot: Bot,
  orbit: Orbit,
  briefcase: BriefcaseBusiness,
};

/** Services complémentaires qui font la différence */
export function Extras() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.4fr]">
        <SectionHeading
          index="05"
          eyebrow="Au-delà du digital"
          title={
            <>
              Des expertises qui <em className="text-magenta-500">font la différence</em>
            </>
          }
          text="Parce qu'une marque se vit aussi hors écran, Growth vous accompagne sur les terrains où les autres agences s'arrêtent."
        />
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-black/8 bg-black/[0.07] sm:grid-cols-2">
          {extras.map((e, i) => {
            const Icon = icons[e.icon];
            return (
              <li
                key={e.title}
                className="group bg-white p-7 transition-colors duration-500 hover:bg-blush"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 2) * 80}ms` }}
              >
                <Icon className="size-6 text-magenta-500" />
                <p className="mt-5 text-lg font-semibold">{e.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{e.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
