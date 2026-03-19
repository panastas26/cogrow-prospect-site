import type { SiteConfig } from "@/config/types";

export function TestimonialGrid({ config }: { config: SiteConfig }) {
  const { testimonials } = config.sections;

  return (
    <section id="testimonials" className="bg-warm-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="section-label mb-4">{testimonials.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy-deep leading-tight">
            {testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <div
              key={i}
              className="bg-warm-light border border-card-border rounded-lg p-7"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-brass" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-[15px] text-charcoal leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-card-border pt-4">
                <p className="text-sm font-medium text-navy-deep">{t.name}</p>
                <p className="text-xs text-slate mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
