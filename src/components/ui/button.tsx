import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark" | "light";
  className?: string;
  external?: boolean;
};

const styles = {
  primary:
    "bg-magenta-500 text-white shadow-[0_12px_32px_-12px_rgb(166_46_134/0.7)] hover:bg-magenta-600",
  ghost: "border border-black/15 bg-white text-ink hover:border-black/40",
  dark: "bg-ink text-white hover:bg-magenta-600",
  light: "bg-white text-ink hover:bg-blush",
};

export function Button({ href, children, variant = "primary", className = "", external }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-magenta-500 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
