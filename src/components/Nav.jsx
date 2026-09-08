const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-ink">
          irsyad<span className="text-accent">.</span>dev
        </a>
        <nav className="hidden gap-8 text-sm text-muted sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-border px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}
