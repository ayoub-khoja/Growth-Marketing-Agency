import { channels } from "@/content/home";

export function Channels() {
  const list = [...channels, ...channels];
  return (
    <section aria-label="Canaux maîtrisés" className="border-y border-black/8 bg-white py-7">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12">
          {list.map((c, i) => (
            <li key={i} aria-hidden={i >= channels.length} className="flex items-center gap-12 font-display text-2xl font-medium whitespace-nowrap text-neutral-400">
              {c}
              <span className="size-2 bg-magenta-500" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
