import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-[fadeUp_0.6s_ease-out]">
          <p className="font-mono text-sm text-teal">Bandung, Indonesia</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl text-muted">{profile.role}, 5+ years</p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accentDim"
            >
              View work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="animate-[fadeUp_0.6s_ease-out_0.15s_both] rounded-lg border border-border bg-surface p-5 font-mono text-[13px] shadow-2xl shadow-black/40 transition-transform duration-300 hover:-translate-y-1">
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 text-muted">profile.json</span>
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed text-muted">
            <span className="text-teal">GET</span> /developer/irsyad
            {"\n"}
            <span className="text-accent">200 OK</span>
            {"\n\n"}
            {"{\n"}
            {"  "}"role"<span className="text-ink">:</span> "backend, full-stack",
            {"\n"}
            {"  "}"stack"<span className="text-ink">:</span> ["Node.js", "Express", "PostgreSQL"],
            {"\n"}
            {"  "}"experience_years"<span className="text-ink">:</span> 5,
            {"\n"}
            {"  "}"open_to"<span className="text-ink">:</span> "backend & full-stack roles",
            {"\n"}
            {"  "}"status"<span className="text-ink">:</span> <span className="text-teal">"available"</span>
            {"\n"}
            {"}"}
          </pre>
        </div>
      </div>
    </section>
  );
}
