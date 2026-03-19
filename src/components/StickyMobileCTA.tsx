"use client";

import { useEffect, useState } from "react";
import type { SiteConfig } from "@/config/types";

interface StickyMobileCTAProps {
  config: SiteConfig;
}

export function StickyMobileCTA({ config }: StickyMobileCTAProps) {
  const { conversion, business } = config;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={conversion.primaryCTA.href}
        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg"
      >
        {conversion.primaryCTA.label}
      </a>
      {business.phone && (
        <a
          href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-[var(--color-primary-dark)] text-sm font-semibold rounded-lg"
        >
          Call
        </a>
      )}
    </div>
  );
}
