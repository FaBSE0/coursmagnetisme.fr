import Link from 'next/link';

export const Logo = () => (
  <Link
    href="/"
    className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
    aria-label="Retour à l’accueil coursmagnetisme.fr"
  >
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
      CM
    </span>
    <div className="leading-tight">
      <span>Cours Magnétisme</span>
      <p className="text-xs font-normal text-muted-foreground">Guides & formations</p>
    </div>
  </Link>
);

