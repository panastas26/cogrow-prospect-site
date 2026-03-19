"use client";

import { useEffect, useState } from "react";
import type { SiteConfig } from "@/config/types";

export function StickyMobileCTA({ config }: { config: SiteConfig }) {
  const { conversion, business } = config;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-md border-t border-rule px-4 py-3 flex gap-3 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
      <a
        href={conversion.primaryCTA.href}
        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-navy text-warm-white text-sm font-medium rounded"
      >
        {conversion.primaryCTA.label}
      </a>
      {business.phone && (
        <a
          href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center justify-center px-4 py-3 border border-navy/20 text-navy text-sm font-medium rounded"
        >
          Call
        </a>
      )}
    </div>
  );
}
