"use client";

import { useState } from "react";
import type { SiteConfig } from "@/config/types";

export function Navbar({ config }: { config: SiteConfig }) {
  const [open, setOpen] = useState(false);
  const { business, conversion } = config;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/92 backdrop-blur-md border-b border-rule/60">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-semibold text-navy tracking-tight">
          {business.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-[13px] text-slate hover:text-navy transition-colors">Services</a>
          <a href="#why-us" className="text-[13px] text-slate hover:text-navy transition-colors">Why Us</a>
          <a href="#process" className="text-[13px] text-slate hover:text-navy transition-colors">Process</a>
          <a href="#testimonials" className="text-[13px] text-slate hover:text-navy transition-colors">Clients</a>
          <a href="#faq" className="text-[13px] text-slate hover:text-navy transition-colors">FAQ</a>
          {business.phone && (
            <a
              href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
              className="text-[13px] font-medium text-navy"
            >
              {business.phone}
            </a>
          )}
          <a
            href={conversion.primaryCTA.href}
            className="inline-flex items-center px-5 py-2.5 bg-navy text-warm-white text-[13px] font-medium rounded hover:bg-navy-deep transition-colors"
          >
            {conversion.primaryCTA.label}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-warm-white border-t border-rule/60 px-6 py-6 space-y-4">
          <a href="#services" onClick={() => setOpen(false)} className="block text-sm text-charcoal">Services</a>
          <a href="#why-us" onClick={() => setOpen(false)} className="block text-sm text-charcoal">Why Us</a>
          <a href="#process" onClick={() => setOpen(false)} className="block text-sm text-charcoal">Process</a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="block text-sm text-charcoal">Clients</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-sm text-charcoal">FAQ</a>
          {business.phone && (
            <a href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`} className="block text-sm font-medium text-navy">
              {business.phone}
            </a>
          )}
          <a
            href={conversion.primaryCTA.href}
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-3 bg-navy text-warm-white text-sm font-medium rounded"
          >
            {conversion.primaryCTA.label}
          </a>
        </div>
      )}
    </nav>
  );
}
