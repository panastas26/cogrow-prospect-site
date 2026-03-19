import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

interface ServiceCardGridProps {
  config: SiteConfig;
}

export function ServiceCardGrid({ config }: ServiceCardGridProps) {
  const { sections } = config;
  const { services } = sections;

  return (
    <section id="services" className="bg-[var(--color-light)] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
            {services.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] leading-tight mb-4">
            {services.title}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.items.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-7 hover:border-[var(--color-primary)]/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center mb-5">
                <Icon
                  name={service.icon}
                  className="w-6 h-6 text-[var(--color-primary)]"
                />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-primary-dark)] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                {service.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
