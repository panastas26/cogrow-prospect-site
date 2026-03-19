import type { SiteConfig } from "@/config/types";

interface ServiceAreaProps {
  config: SiteConfig;
}

export function ServiceAreaCluster({ config }: ServiceAreaProps) {
  const { sections, trust, business } = config;
  const { serviceArea } = sections;

  return (
    <section id="service-area" className="bg-[var(--color-light)] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
            {serviceArea.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] leading-tight mb-4">
            {serviceArea.title}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {serviceArea.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {trust.serviceArea.map((area, i) => (
            <span
              key={i}
              className="inline-flex items-center px-5 py-2.5 bg-white rounded-lg border border-gray-200 text-sm font-medium text-[var(--color-primary-dark)] shadow-sm"
            >
              {area}, {business.geography.split(",")[1]?.trim() || "MA"}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
