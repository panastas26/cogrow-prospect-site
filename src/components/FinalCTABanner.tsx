import type { SiteConfig } from "@/config/types";

interface FinalCTAProps {
  config: SiteConfig;
}

export function FinalCTABanner({ config }: FinalCTAProps) {
  const { sections, conversion } = config;
  const { finalCTA } = sections;

  return (
    <section id="contact" className="bg-[var(--color-primary)] py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
          {finalCTA.headline}
        </h2>
        <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          {finalCTA.subheadline}
        </p>
        <a
          href={conversion.primaryCTA.href}
          className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] hover:brightness-110 text-white font-bold rounded-lg transition-all text-lg"
        >
          {conversion.primaryCTA.label}
        </a>
      </div>
    </section>
  );
}
