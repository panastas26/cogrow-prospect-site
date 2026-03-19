import type { SiteConfig } from "@/config/types";

interface FooterProps {
  config: SiteConfig;
}

export function LocalBusinessFooter({ config }: FooterProps) {
  const { business, trust, sections } = config;
  const { footer } = sections;

  return (
    <footer className="bg-[var(--color-dark)] text-white/70">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="text-lg font-bold text-white mb-3">
              {business.name}
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-4">
              {footer.description}
            </p>
            {business.phone && (
              <p className="text-sm font-medium text-white/70">
                {business.phone}
              </p>
            )}
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white mb-4">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              {footer.serviceLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white mb-4">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              {footer.companyLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Service area column */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.1em] uppercase text-white mb-4">
              Service Area
            </h4>
            <div className="flex flex-col gap-2.5">
              {trust.serviceArea.map((area, i) => (
                <span key={i} className="text-sm text-white/45">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
          <span className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
