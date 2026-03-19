"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

interface FAQProps {
  config: SiteConfig;
}

export function FAQAccordionLocal({ config }: FAQProps) {
  const { sections } = config;
  const { faq } = sections;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[var(--color-light)] py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
            {faq.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary-dark)] leading-tight">
            {faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--color-primary-dark)] text-sm md:text-base pr-4">
                    {item.question}
                  </span>
                  <Icon
                    name="chevron-down"
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
