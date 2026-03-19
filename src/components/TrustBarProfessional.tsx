import type { SiteConfig } from "@/config/types";

export function TrustBarProfessional({ config }: { config: SiteConfig }) {
  const { trust } = config;

  const items = [
    { label: `${trust.yearsInBusiness} Years Experience`, icon: "clock" as const },
    ...trust.credentials.map((c) => ({ label: c, icon: "shield" as const })),
    ...(trust.guarantee ? [{ label: trust.guarantee, icon: "check" as const }] : []),
  ];

  return (
    <section className="bg-navy-deep relative grain-overlay">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <TrustIcon name={item.icon} />
              <span className="text-sm text-warm-light/90 font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustIcon({ name }: { name: "clock" | "shield" | "check" }) {
  const cls = "w-4 h-4 text-brass-light flex-shrink-0";
  switch (name) {
    case "clock":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      );
    case "shield":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "check":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" />
        </svg>
      );
  }
}
