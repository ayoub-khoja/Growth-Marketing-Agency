import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/home";

export function Testimonials() {
  return (
    <section id="avis" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="08"
          eyebrow="Avis clients"
          title={<>Ils nous confient <em className="text-magenta-500">leur croissance</em></>}
          align="center"
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const featured = i === 1;
            return (
              <figure
                key={t.name}
                className={`flex flex-col rounded-3xl p-8 ${
                  featured
                    ? "bg-magenta-500 text-white shadow-[0_30px_60px_-25px_rgb(166_46_134/0.6)]"
                    : "border border-black/8 bg-white"
                }`}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className={`flex gap-1 ${featured ? "text-white" : "text-magenta-500"}`} aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="size-4 fill-current" />
                    ))}
                  </div>
                  <Quote className={`size-8 ${featured ? "text-white/30" : "text-black/10"}`} />
                </div>
                <blockquote className={`mt-6 flex-1 text-lg leading-relaxed ${featured ? "text-white" : "text-neutral-700"}`}>
                  « {t.quote} »
                </blockquote>
                <figcaption className={`mt-8 flex items-center gap-3 border-t pt-6 ${featured ? "border-white/25" : "border-black/8"}`}>
                  <span
                    className={`flex size-11 items-center justify-center rounded-full font-display text-lg ${
                      featured ? "bg-white text-magenta-600" : "bg-blush text-magenta-600"
                    }`}
                  >
                    {t.name.replace("Dr ", "").charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className={`block text-sm ${featured ? "text-white/75" : "text-neutral-500"}`}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
