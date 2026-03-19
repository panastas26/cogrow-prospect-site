import type { SiteConfig } from "@/config/types";

export function HeroProfessionalServicesA({ config }: { config: SiteConfig }) {
  const { hero } = config.sections;
  const { primaryCTA, secondaryCTA } = config.conversion;
  const { metrics, guarantee } = config.trust;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-warm-white overflow-hidden">
      {/* Subtle warm gradient on right */}
      <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-warm-light/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Editorial copy column */}
          <div className="md:col-span-7 space-y-8">
            <div className="animate-fade-up">
              <span className="section-label">{hero.badge}</span>
            </div>

            <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.08] text-navy-deep tracking-tight whitespace-pre-line">
              {hero.headline}
            </h1>

            <div className="animate-fade-up delay-200 rule-accent" />

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-slate leading-relaxed max-w-xl">
              {hero.subheadline}
            </p>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <a
                href={primaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-navy text-warm-white font-medium text-sm rounded hover:bg-navy-deep transition-colors tracking-wide"
              >
                {primaryCTA.label}
              </a>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 border border-navy/20 text-navy font-medium text-sm rounded hover:border-navy/40 hover:bg-navy/[0.03] transition-colors"
              >
                {secondaryCTA.label}
              </a>
            </div>

            {guarantee && (
              <p className="animate-fade-up delay-400 text-sm text-slate/80 italic font-display">
                {guarantee}
              </p>
            )}
          </div>

          {/* Trust metrics card */}
          <div className="md:col-span-5 md:pt-12">
            <div className="animate-fade-up delay-400 bg-white border border-card-border rounded-lg p-8 space-y-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <p className="section-label text-center">By the Numbers</p>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, i) => (
                  <div key={i} className="text-center space-y-1">
                    <p className="font-display text-3xl font-light text-navy">{metric.value}</p>
                    <p className="text-xs text-slate leading-snug">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-card-border">
                <div className="flex items-center justify-center gap-2 text-xs text-slate">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brass">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>CPA-Certified Team &middot; Licensed in Massachusetts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
