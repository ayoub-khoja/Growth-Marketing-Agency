import { Square } from "@/components/brand/mark";

export function SectionHeading({
  index,
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "left" | "center";
  /** "dark" quand le titre est posé sur un fond foncé */
  tone?: "light" | "dark";
}) {
  const centered = align === "center";
  const onDark = tone === "dark";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} data-reveal>
      <p
        className={`flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase ${
          onDark ? "text-white/60" : "text-neutral-500"
        } ${centered ? "justify-center" : ""}`}
      >
        <Square className="size-2" />
        <span className={onDark ? "text-magenta-300" : "text-magenta-500"}>{index}</span>
        <span className={`h-px w-6 ${onDark ? "bg-white/25" : "bg-black/20"}`} />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-[2.75rem] leading-[1] text-balance sm:text-6xl">{title}</h2>
      {text ? (
        <p className={`mt-5 text-lg leading-relaxed text-pretty ${onDark ? "text-white/60" : "text-neutral-600"}`}>{text}</p>
      ) : null}
    </div>
  );
}
