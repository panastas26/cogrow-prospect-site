import type { SiteConfig } from "@/config/types";

export function ThreeStepProcessMini({ config }: { config: SiteConfig }) {
  const { process } = config.sections;
  const { primaryCTA } = config.conversion;

  return (
    <section id="process" className="bg-navy-deep text-warm-white py-20 md:py-28 relative grain-overlay">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-label !text-brass-light mb-4">{process.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-light leading-tight mb-5">
            {process.title}
          </h2>
          <p className="text-warm-light/60 leading-relaxed">
            {process.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {process.steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Step number */}
              <div className="font-display text-6xl font-light text-warm-light/[0.07] mb-4 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              {/* Brass accent line */}
              <div className="w-8 h-px bg-brass-light/50 mb-5" />
              <h3 className="font-display text-xl font-normal text-warm-white mb-3">
                {step.title}
              </h3>
              <p className="text-warm-light/55 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href={primaryCTA.href}
            className="inline-flex items-center px-8 py-4 bg-brass hover:bg-brass-light text-navy-deep font-medium text-sm rounded transition-colors tracking-wide"
          >
            {primaryCTA.label}
          </a>
        </div>
      </div>
    </section>
  );
}
