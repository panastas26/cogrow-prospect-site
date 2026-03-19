import type { SiteConfig } from "@/config/types";

interface HeroProps {
  config: SiteConfig;
}

export function HeroProfessionalServicesA({ config }: HeroProps) {
  const { sections, conversion, trust } = config;
  const { hero } = sections;

  return (
    <section className="relative bg-[var(--color-primary-dark)] text-white overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary-dark)] opacity-90" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-semibold tracking-wide uppercase text-[var(--color-accent)] mb-8">
            {hero.badge}
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight mb-6 whitespace-pre-line">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
            {hero.subheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href={conversion.primaryCTA.href}
              className="inline-flex items-center px-7 py-3.5 bg-[var(--color-accent)] hover:brightness-110 text-white font-semibold rounded-lg transition-all text-base"
            >
              {conversion.primaryCTA.label}
            </a>
            <a
              href={conversion.secondaryCTA.href}
              className="inline-flex items-center px-7 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-all text-base"
            >
              {conversion.secondaryCTA.label}
            </a>
          </div>

          {/* Trust strip */}
          {trust.guarantee && (
            <p className="text-sm text-white/50 font-medium tracking-wide">
              {trust.guarantee}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
