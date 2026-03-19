import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

export function WhyUsSection({ config }: { config: SiteConfig }) {
  const { whyUs } = config.sections;

  return (
    <section id="why-us" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-4">{whyUs.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-deep leading-tight mb-5">
            {whyUs.title}
          </h2>
          <p className="text-slate leading-relaxed">
            {whyUs.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {whyUs.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded bg-navy/[0.06] flex items-center justify-center mt-0.5">
                <Icon name={item.icon} className="w-5 h-5 text-navy" />
              </div>
              <div>
                <h3 className="font-display text-lg font-normal text-navy-deep mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
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
