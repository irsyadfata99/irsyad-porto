import { stack, certificates } from "../data/content";
import Reveal from "./Reveal";

const groups = [
  { label: "Backend", items: stack.backend },
  { label: "Automation & Integration", items: stack.automation, featured: true },
  { label: "AI Tools & Prompt Engineering", items: stack.ai, featured: true },
  { label: "Languages", items: stack.languages },
  { label: "Data", items: stack.data },
  { label: "Tools", items: stack.tools },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Skills & certificates</h2>
        <p className="mt-2 text-muted">Tools I reach for, and coursework that filled the gaps.</p>
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2">
        <Reveal delay={80} className="space-y-6">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="font-mono text-xs text-teal">{g.label}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={
                      g.featured
                        ? "rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-sm text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/20"
                        : "rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={160}>
          <div className="rounded-lg border border-border bg-surface p-6">
            <h3 className="font-display text-sm font-semibold text-ink">Certificates</h3>
            <ul className="mt-4 space-y-4">
              {certificates.map((c) => (
                <li key={c.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <p className="text-sm text-ink">{c.name}</p>
                  <p className="mt-1 text-xs text-muted">{c.issuer}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{c.id}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
