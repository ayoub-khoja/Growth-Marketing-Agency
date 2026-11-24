import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80dvh] flex-col items-start justify-center pt-24">
      <p className="font-display text-8xl font-semibold text-magenta-500">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Cette page n'existe pas.</h1>
      <p className="mt-3 text-neutral-600">Elle a peut-être été déplacée. Revenez à l'accueil pour continuer.</p>
      <Button href="/" className="mt-8">Retour à l'accueil</Button>
    </section>
  );
}
