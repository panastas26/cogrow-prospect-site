import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

interface WhyUsProps {
  config: SiteConfig;
}

export function WhyUsSection({ config }: WhyUsProps) {
  const { sections } = config;
  const { whyUs } = sections;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
            {whyUs.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] leading-tight mb-4">
            {whyUs.title}
          </h2>
          <p className="text-gray-500 leading-relaxed">
            {whyUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 flex items-center justify-center mt-0.5">
                <Icon
                  name={item.icon}
                  className="w-5 h-5 text-[var(--color-primary)]"
                />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-primary-dark)] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
