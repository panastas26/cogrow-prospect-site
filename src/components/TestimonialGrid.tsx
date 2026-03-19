import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

interface TestimonialGridProps {
  config: SiteConfig;
}

export function TestimonialGrid({ config }: TestimonialGridProps) {
  const { sections } = config;
  const { testimonials } = sections;

  return (
    <section id="testimonials" className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
            {testimonials.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] leading-tight">
            {testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[var(--color-light)] rounded-xl p-7 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Icon
                    key={j}
                    name="star"
                    className="w-4 h-4 text-[var(--color-accent)]"
                  />
                ))}
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div>
                <div className="font-bold text-[var(--color-primary-dark)] text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
