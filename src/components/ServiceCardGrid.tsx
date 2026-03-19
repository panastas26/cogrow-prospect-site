import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

export function ServiceCardGrid({ config }: { config: SiteConfig }) {
  const { services } = config.sections;

  return (
    <section id="services" className="bg-warm-light py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-4">{services.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-deep leading-tight mb-5">
            {services.title}
          </h2>
          <p className="text-slate leading-relaxed">
            {services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.items.map((service, i) => (
            <div
              key={i}
              className="group bg-white border border-card-border rounded-lg p-8 hover:border-brass/40 transition-all duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="w-11 h-11 rounded bg-navy/[0.06] flex items-center justify-center mb-6">
                <Icon name={service.icon} className="w-5 h-5 text-navy" />
              </div>
              <h3 className="font-display text-xl font-normal text-navy-deep mb-2.5">
                {service.title}
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-xs font-semibold text-brass uppercase tracking-wider">
                {service.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
