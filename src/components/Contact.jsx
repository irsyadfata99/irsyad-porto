import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal>
        <div className="rounded-lg border border-border bg-surface px-8 py-14 text-center sm:px-16">
          <p className="flex items-center justify-center gap-2 font-mono text-xs text-teal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            status: available
          </p>
          <h2 className="mx-auto mt-4 max-w-lg font-display text-2xl font-semibold text-ink sm:text-3xl">
            Building something that needs a solid backend? Let's talk.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-accent px-6 py-2.5 text-sm font-medium text-bg transition-all duration-200 hover:-translate-y-0.5 hover:bg-accentDim hover:shadow-lg hover:shadow-accent/20"
            >
              {profile.email}
            </a>
            <a
              href={`https://wa.me/62${profile.phone.slice(1)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border px-6 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-8 flex justify-center gap-6 text-sm text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink">
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Irsyad Fata Al Aidi.</p>
        <p className="font-mono">Bandung, Indonesia</p>
      </div>
    </footer>
  );
}
