import type { SiteConfig } from "@/config/types";

export function FinalCTABanner({ config }: { config: SiteConfig }) {
  const { finalCTA } = config.sections;
  const { primaryCTA } = config.conversion;
  const { business } = config;

  return (
    <section id="contact" className="relative bg-navy py-20 md:py-28 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,132,92,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="rule-accent mx-auto mb-8 !bg-brass-light/60" />
        <h2 className="font-display text-3xl md:text-4xl font-light text-warm-white leading-tight mb-5">
          {finalCTA.headline}
        </h2>
        <p className="text-warm-light/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {finalCTA.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryCTA.href}
            className="inline-flex items-center px-8 py-4 bg-brass hover:bg-brass-light text-navy-deep font-medium text-sm rounded transition-colors tracking-wide"
          >
            {primaryCTA.label}
          </a>
          {business.phone && (
            <a
              href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center px-8 py-4 border border-warm-light/20 text-warm-light/80 font-medium text-sm rounded hover:border-warm-light/40 transition-colors"
            >
              Call {business.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
