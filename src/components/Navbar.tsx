"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import type { SiteConfig } from "@/config/types";

interface NavbarProps {
  config: SiteConfig;
}

export function Navbar({ config }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { business, conversion } = config;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-[68px]">
        <a href="#" className="text-xl font-bold tracking-tight text-[var(--color-primary-dark)]">
          {business.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors">
            FAQ
          </a>
          <a
            href={conversion.primaryCTA.href}
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-lg transition-colors"
          >
            {conversion.primaryCTA.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
        >
          <Icon name={open ? "x" : "menu"} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          <a href="#services" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 py-2">
            Services
          </a>
          <a href="#process" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 py-2">
            How It Works
          </a>
          <a href="#testimonials" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 py-2">
            Testimonials
          </a>
          <a href="#faq" onClick={() => setOpen(false)} className="text-sm font-medium text-gray-700 py-2">
            FAQ
          </a>
          <a
            href={conversion.primaryCTA.href}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[var(--color-primary)] rounded-lg mt-1"
          >
            {conversion.primaryCTA.label}
          </a>
        </div>
      )}
    </nav>
  );
}
