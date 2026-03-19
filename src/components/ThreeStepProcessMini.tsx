import type { SiteConfig } from "@/config/types";

interface ProcessProps {
  config: SiteConfig;
}

export function ThreeStepProcessMini({ config }: ProcessProps) {
  const { sections, conversion } = config;
  const { process } = sections;

  return (
    <section id="process" className="bg-[var(--color-primary-dark)] text-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
            {process.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            {process.title}
          </h2>
          <p className="text-white/60 leading-relaxed">
            {process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {process.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-bold text-white/10 mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a
            href={conversion.primaryCTA.href}
            className="inline-flex items-center px-7 py-3.5 bg-[var(--color-accent)] hover:brightness-110 text-white font-semibold rounded-lg transition-all text-base"
          >
            {conversion.primaryCTA.label}
          </a>
        </div>
      </div>
    </section>
  );
}
