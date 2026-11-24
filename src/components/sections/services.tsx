import { Target, Megaphone, Camera, Sparkles, Search, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, type ServiceIcon } from "@/content/home";

const icons: Record<ServiceIcon, React.ComponentType<{ className?: string }>> = {
  target: Target,
  megaphone: Megaphone,
  camera: Camera,
  sparkles: Sparkles,
  search: Search,
  users: Users,
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="Services"
            title={<>Tout ce qu'il faut pour faire décoller votre marque</>}
          />
          <p className="max-w-sm text-neutral-600 lg:text-right" data-reveal>
            Une équipe, un interlocuteur, et des actions qui travaillent ensemble pour un même objectif : votre
            croissance.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-black/8 bg-black/[0.07] shadow-[0_20px_60px_-30px_rgb(12_12_13/0.15)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <article
                key={s.title}
                className="group relative flex flex-col bg-white p-8 transition-colors duration-500 hover:bg-blush sm:p-10"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-black/8 bg-blush text-magenta-500 transition-colors duration-500 group-hover:border-magenta-500 group-hover:bg-magenta-500 group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-sm text-neutral-300">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600">{s.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-full border border-black/10 px-3 py-1 text-xs text-neutral-600">
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
