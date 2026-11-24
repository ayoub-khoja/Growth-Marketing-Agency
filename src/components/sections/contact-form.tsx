"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

const needs = [
  "Branding",
  "Production créative",
  "Social media",
  "Performance & Ads",
  "Site web & e-commerce",
  "SEO",
  "CRM & automation",
  "Offre complète",
];
const budgets = ["Moins de 1 000 DT / mois", "1 000 – 3 000 DT / mois", "3 000 – 10 000 DT / mois", "Plus de 10 000 DT / mois"];

/**
 * Le formulaire prépare un message et l'ouvre dans WhatsApp (ou dans la messagerie e-mail).
 * Aucun serveur n'est nécessaire.
 */
export function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  function buildMessage(form: HTMLFormElement) {
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const phone = String(d.get("phone") || "").trim();
    if (!name || !phone) {
      setError("Merci d'indiquer au moins votre nom et votre téléphone.");
      return null;
    }
    setError("");
    return [
      `Bonjour growth, je m'appelle ${name}.`,
      d.get("company") ? `Entreprise : ${d.get("company")}` : "",
      `Téléphone : ${phone}`,
      selected.length ? `Besoins : ${selected.join(", ")}` : "",
      d.get("budget") ? `Budget : ${d.get("budget")}` : "",
      d.get("message") ? `\n${d.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function sendWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = buildMessage(e.currentTarget);
    if (msg) window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }

  function sendEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const msg = buildMessage(form);
    if (msg)
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        "Nouveau projet avec Growth"
      )}&body=${encodeURIComponent(msg)}`;
  }

  const field =
    "w-full rounded-2xl border border-black/10 bg-paper px-4 py-3.5 text-ink placeholder:text-neutral-400 transition-colors focus:border-magenta-500 focus:bg-white focus:ring-4 focus:ring-magenta-500/10 focus:outline-none";

  return (
    <form onSubmit={sendWhatsApp} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-neutral-600">Nom complet *</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Votre nom" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm text-neutral-600">Téléphone *</span>
          <input name="phone" required type="tel" autoComplete="tel" className={field} placeholder="+216 …" />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm text-neutral-600">Entreprise</span>
        <input name="company" autoComplete="organization" className={field} placeholder="Nom de votre marque" />
      </label>

      <fieldset>
        <legend className="mb-3 text-sm text-neutral-600">Vos besoins</legend>
        <div className="flex flex-wrap gap-2">
          {needs.map((n) => {
            const on = selected.includes(n);
            return (
              <button
                key={n}
                type="button"
                aria-pressed={on}
                onClick={() => setSelected((s) => (on ? s.filter((x) => x !== n) : [...s, n]))}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  on ? "border-magenta-500 bg-magenta-500 text-white" : "border-black/12 text-neutral-600 hover:border-black/35"
                }`}
              >
                {n}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-sm text-neutral-600">Budget marketing</span>
        <select name="budget" defaultValue="" className={`${field} appearance-none`}>
          <option value="" >Choisir une fourchette</option>
          {budgets.map((b) => (
            <option key={b}>
              {b}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-2 block text-sm text-neutral-600">Votre projet</span>
        <textarea name="message" rows={4} className={field} placeholder="Parlez-nous de vos objectifs…" />
      </label>

      {error ? (
        <p role="alert" className="text-sm text-magenta-600">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-magenta-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-magenta-600"
        >
          <Send className="size-4" /> Envoyer sur WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-4 font-semibold transition-colors hover:bg-black/[0.04]"
        >
          Par e-mail
        </button>
      </div>
    </form>
  );
}
