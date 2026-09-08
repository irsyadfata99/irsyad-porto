import { projects } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Selected work</h2>
        <p className="mt-2 text-muted">Production systems I designed and built end to end.</p>
      </Reveal>

      <div className="divide-y divide-border rounded-lg border border-border bg-surface">
        {projects.map((p, i) => (
          <Reveal key={p.path} delay={i * 80}>
            <article className="group p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface2 hover:shadow-lg hover:shadow-black/20 sm:p-7">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="rounded bg-teal/10 px-2 py-1 font-medium text-teal">{p.method}</span>
                <span className="text-muted">{p.path}</span>
                <span className="ml-auto rounded bg-accent/10 px-2 py-1 font-medium text-accent">
                  {p.status} OK
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                {p.highlightLabel && (
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">
                    {p.highlightLabel}
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-muted">{p.period}</p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{p.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-border px-2 py-1 font-mono text-xs text-muted transition-colors group-hover:border-accent/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.links && (
                  <div className="flex gap-4 text-sm">
                    {p.links.live && (
                      <a
                        href={p.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal underline-offset-4 hover:underline"
                      >
                        Live demo
                      </a>
                    )}
                    {p.links.frontend && (
                      <a
                        href={p.links.frontend}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        Frontend repo
                      </a>
                    )}
                    {p.links.backend && (
                      <a
                        href={p.links.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline-offset-4 hover:underline"
                      >
                        Backend repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
