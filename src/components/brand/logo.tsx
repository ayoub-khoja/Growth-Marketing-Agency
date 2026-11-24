import Image from "next/image";
import logoLight from "../../../public/logo-growth.png";
import logoDark from "../../../public/logo-growth-dark.png";

/** tone="dark" : logo foncé pour les fonds clairs. tone="light" : logo blanc pour les fonds foncés. */
export function Logo({ className = "h-9 w-[110px]", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <Image
      src={tone === "dark" ? logoDark : logoLight}
      alt="growth Marketing Agency"
      className={className}
      priority
      sizes="200px"
    />
  );
}
