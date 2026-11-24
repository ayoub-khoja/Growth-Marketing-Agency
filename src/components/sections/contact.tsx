import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Square } from "@/components/brand/mark";
import { ContactForm } from "./contact-form";

export function Contact() {
  const items = [
    { icon: Phone, label: "Téléphone", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
    { icon: Mail, label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Adresse", value: siteConfig.address },
    { icon: Clock, label: "Horaires", value: siteConfig.hours },
  ];
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute -bottom-40 left-1/2 -z-10 size-[50rem] -translate-x-1/2 rounded-full bg-magenta-300/25 blur-[160px]" />
      <div className="container-x">
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_40px_100px_-40px_rgb(12_12_13/0.25)]">
          <div className="grid lg:grid-cols-[1fr_1.25fr]">
            <div className="relative bg-magenta-500 p-8 text-white sm:p-12 ">
              <div aria-hidden className="absolute inset-0 bg-grid-light" />
              <div className="relative">
                <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
                  <Square className="size-2 !bg-white" /> Contact
                </p>
                <h2 className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-5xl">
                  Prêt à faire grandir votre marque ?
                </h2>
                <p className="mt-5 text-lg text-white/85">
                  Réservez votre audit gratuit de 30 minutes. Sans engagement, avec des recommandations concrètes.
                </p>
                <ul className="mt-10 space-y-5">
                  {items.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                        <Icon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-white/70">{label}</span>
                        {href ? (
                          <a href={href} className="font-semibold underline-offset-4 hover:underline">
                            {value}
                          </a>
                        ) : (
                          <span className="font-semibold">{value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl font-semibold">Parlez-nous de votre projet</h3>
              <p className="mt-2 mb-8 text-neutral-500">Réponse sous 24 h ouvrées.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
