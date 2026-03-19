import type { SiteConfig } from "@/config/types";

interface TrustBarProps {
  config: SiteConfig;
}

export function TrustBarProfessional({ config }: TrustBarProps) {
  const { trust } = config;

  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {trust.metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm text-gray-500 mt-1.5 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
