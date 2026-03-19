import type { SiteConfig } from "@/config/types";

export function LocalBusinessFooter({ config }: { config: SiteConfig }) {
  const { business, trust, sections } = config;
  const { footer } = sections;

  return (
    <footer className="bg-navy-deep text-warm-light/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-display text-lg text-warm-white mb-3">{business.name}</p>
            <p className="text-sm leading-relaxed text-warm-light/40 mb-4">
              {footer.description}
            </p>
            {business.phone && (
              <a href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`} className="text-sm font-medium text-warm-light/70 hover:text-warm-white transition-colors">
                {business.phone}
              </a>
            )}
            {business.email && (
              <p className="text-sm text-warm-light/40 mt-1">{business.email}</p>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-warm-light/50 mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {footer.serviceLinks.map((link, i) => (
                <a key={i} href={link.href} className="text-sm text-warm-light/40 hover:text-warm-light/80 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-warm-light/50 mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {footer.companyLinks.map((link, i) => (
                <a key={i} href={link.href} className="text-sm text-warm-light/40 hover:text-warm-light/80 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-warm-light/50 mb-4">
              Service Area
            </h4>
            <div className="flex flex-col gap-2.5">
              {trust.serviceArea.map((area, i) => (
                <span key={i} className="text-sm text-warm-light/40">{area}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-light/10 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
          <span className="text-xs text-warm-light/25">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-warm-light/25 hover:text-warm-light/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-warm-light/25 hover:text-warm-light/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
