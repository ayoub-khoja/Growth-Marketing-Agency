/** Le « g » de growth, redessiné en vectoriel (net à toutes les tailles). */
export function GrowthMark({
  className,
  title,
  muted = false,
}: {
  className?: string;
  title?: string;
  /** true : tout le logo prend la couleur du texte (utile en décor discret) */
  muted?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 150 212"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <path
        d="M75 12.5A62.5 62.5 0 1 0 135.64 90.12"
        fill="none"
        stroke="currentColor"
        strokeWidth="25"
      />
      <path d="M4.29 162A75 75 0 0 0 145.71 162H118.3A50 50 0 0 1 31.7 162Z" fill="currentColor" />
      <path d="M97 0H150V62H124V37H97Z" fill={muted ? "currentColor" : "#A62E86"} />
    </svg>
  );
}

/** Petit carré magenta, signature graphique de la marque. */
export function Square({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`inline-block bg-magenta-500 ${className}`} />;
}
