import { slogans } from "@/content/home";

/** Bandeau défilant avec les phrases signature de Growth */
export function Channels() {
  const list = [...slogans, ...slogans];
  return (
    <section aria-label="Notre état d'esprit" className="border-y border-black/8 bg-white py-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-10 pr-10 [animation-duration:60s]">
          {list.map((c, i) => (
            <li key={i} aria-hidden={i >= slogans.length} className="flex items-center gap-10 font-display text-3xl whitespace-nowrap text-ink/80 italic">
              {c}
              <span className="size-2 bg-magenta-500" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
