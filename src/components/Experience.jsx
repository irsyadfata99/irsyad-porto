import { experience, education } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <Reveal className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Experience</h2>
        <p className="mt-2 text-muted">Where I've worked, in order.</p>
      </Reveal>

      <ol className="relative border-l border-border pl-8">
        {experience.map((e, i) => (
          <Reveal key={e.role + e.org} delay={i * 80} className="mb-10 last:mb-0">
            <li className="relative list-none">
              <span className="absolute -left-[35px] mt-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent" />
              <p className="font-mono text-xs text-muted">{e.period}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">{e.role}</h3>
              <p className="text-sm text-teal">{e.org}</p>
              <ul className="mt-3 space-y-1.5">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}

        <Reveal delay={experience.length * 80}>
          <li className="relative list-none">
            <span className="absolute -left-[35px] mt-1.5 h-3 w-3 rounded-full border-2 border-bg bg-teal" />
            <p className="font-mono text-xs text-muted">{education.period}</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">{education.degree}</h3>
            <p className="text-sm text-teal">{education.school}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{education.note}</p>
          </li>
        </Reveal>
      </ol>
    </section>
  );
}
