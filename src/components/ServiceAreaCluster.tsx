import type { SiteConfig } from "@/config/types";

export function ServiceAreaCluster({ config }: { config: SiteConfig }) {
  const { serviceArea } = config.sections;
  const { trust, business } = config;
  const state = business.geography.split(",")[1]?.trim() || "MA";

  return (
    <section id="service-area" className="bg-warm-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="section-label mb-4">{serviceArea.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-deep leading-tight mb-5">
            {serviceArea.title}
          </h2>
          <p className="text-slate leading-relaxed">
            {serviceArea.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {trust.serviceArea.map((area, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-card-border rounded text-sm text-navy-deep font-medium"
            >
              <svg className="w-3.5 h-3.5 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {area}, {state}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
