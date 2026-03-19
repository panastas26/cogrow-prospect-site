import type { SiteConfig } from "@/config/types";

export function FAQAccordionLocal({ config }: { config: SiteConfig }) {
  const { faq } = config.sections;

  return (
    <section id="faq" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-4">{faq.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-deep leading-tight">
            {faq.title}
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-card-border border-t border-b border-card-border">
          {faq.items.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between py-5 text-left cursor-pointer">
                <span className="font-display text-base text-navy-deep pr-6">
                  {item.question}
                </span>
                <svg
                  className="faq-chevron w-5 h-5 text-slate/50 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <div className="pb-5 pr-12">
                <p className="text-sm text-slate leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
