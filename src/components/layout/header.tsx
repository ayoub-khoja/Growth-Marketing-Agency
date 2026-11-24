"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { navLinks } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-black/8 bg-paper/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <a href="#top" aria-label="growth Marketing Agency, retour en haut" onClick={() => setOpen(false)}>
          <Logo tone="dark" className="h-8 w-[98px] sm:h-9 sm:w-[110px]" />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-black/[0.04] hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-magenta-500 sm:inline-flex"
          >
            Nous contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-black/15 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] border-t border-black/8 bg-paper lg:hidden"
      >
        <nav aria-label="Navigation mobile" className="container-x flex flex-col py-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/8 py-5 font-display text-3xl"
            >
              {l.label}
              <span className="size-2 bg-magenta-500" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex justify-center rounded-full bg-magenta-500 px-6 py-4 font-semibold text-white"
          >
            Parlons de votre marque
          </a>
        </nav>
      </div>
    </header>
  );
}
