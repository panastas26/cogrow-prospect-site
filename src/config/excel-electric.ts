import { SiteConfig } from "./types";

export const excelElectricConfig: SiteConfig = {
  business: {
    name: "Excel Electric",
    vertical: "Electrical Contractor",
    businessType: "Electrical Contractor",
    geography: "Boston, MA",
    phone: "(617) 555-0319",
    email: "info@excel-electric.com",
    address: "Waltham, MA",
    targetAudience:
      "Homeowners and business owners in Greater Boston needing electrical repairs, panel upgrades, EV charger installation, or commercial electrical work",
  },

  conversion: {
    primaryCTA: {
      label: "Get a Free Quote",
      href: "#contact",
    },
    secondaryCTA: {
      label: "See Our Services",
      href: "#services",
    },
    urgentCTA: {
      label: "Same-Day Electrical Help",
      href: "#contact",
    },
  },

  trust: {
    yearsInBusiness: "18+",
    credentials: [
      "Licensed Master Electrician — Massachusetts",
      "Fully Insured",
      "NECA Member",
      "Tesla & ChargePoint Certified Installer",
    ],
    serviceArea: [
      "Boston",
      "Waltham",
      "Newton",
      "Watertown",
      "Belmont",
      "Lexington",
      "Natick",
    ],
    differentiators: [
      "18+ years serving residential and commercial clients in Greater Boston",
      "Licensed Master Electrician on every project",
      "Certified EV charger installer for all major brands",
      "Panel upgrades done right — no shortcuts, no code violations",
      "We answer every call — book online 24/7",
      "Same-day service available for urgent electrical issues",
    ],
    guarantee: "All work is code-compliant and backed by a 2-year labor warranty.",
    metrics: [
      { value: "18+", label: "Years in Business" },
      { value: "4,500+", label: "Jobs Completed" },
      { value: "4.9", label: "Google Rating" },
      { value: "500+", label: "EV Chargers Installed" },
    ],
  },

  seo: {
    title: "Excel Electric | Licensed Electrician Boston MA — Panels, EV Chargers & More",
    description:
      "Excel Electric provides residential and commercial electrical services across Greater Boston. Panel upgrades, EV charger installation, rewiring, and electrical repairs. Licensed Master Electrician. Free quotes.",
    primaryTerms: [
      "electrician Boston MA",
      "electrical contractor Boston",
      "panel upgrade Boston",
    ],
    secondaryTerms: [
      "EV charger installation Boston",
      "home electrician Waltham",
      "commercial electrician Boston",
      "electrical panel upgrade Massachusetts",
    ],
  },

  brand: {
    tone: "skilled, trustworthy, no-nonsense — we do the job right and stand behind our work",
    colors: {
      primary: "#c8960c",
      primaryDark: "#9a7309",
      accent: "#1a1a2e",
      light: "#fdf8ed",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Licensed Boston Electrician — 18+ Years",
      headline: "Electrical Work Done Right.\nNo Shortcuts. No Surprises.",
      subheadline:
        "From panel upgrades and EV charger installation to full commercial electrical, Excel Electric delivers licensed, code-compliant work on time and on budget. We answer every call.",
    },

    services: {
      label: "Our Services",
      title: "Residential & Commercial Electrical Services",
      subtitle:
        "Whether you need a single outlet replaced or a full building wired, we bring the same level of care and expertise to every project.",
      items: [
        {
          icon: "zap",
          title: "Electrical Panel Upgrades",
          description:
            "Outdated 100-amp panels, Federal Pacific breakers, and Zinsco panels are fire hazards. We upgrade to modern, code-compliant 200-amp service safely and efficiently.",
          benefit: "Protect your home and power everything you need",
        },
        {
          icon: "battery-charging",
          title: "EV Charger Installation",
          description:
            "Level 2 home charging station installation for Tesla, Ford, GM, and all major EV brands. Certified installers, permit pulled, inspection passed.",
          benefit: "Wake up every morning with a full charge",
        },
        {
          icon: "home",
          title: "Residential Electrical",
          description:
            "Outlets, switches, lighting, ceiling fans, smoke detectors, GFCI protection, and whole-home rewiring. Licensed work with permits pulled every time.",
          benefit: "A safer, more functional home",
        },
        {
          icon: "building",
          title: "Commercial Electrical",
          description:
            "Office fit-outs, retail buildouts, restaurant electrical, and multi-tenant buildings. We work on your schedule to keep your business running.",
          benefit: "Code-compliant commercial work, on your timeline",
        },
      ],
    },

    whyUs: {
      label: "Why Excel Electric",
      title: "Licensed, Certified, and Accountable",
      subtitle:
        "Electrical work isn't the place to cut corners. We bring the right credentials, pull the permits, and back our work with a warranty.",
      items: [
        {
          icon: "award",
          title: "Licensed Master Electrician",
          description:
            "Every project is supervised by a licensed Master Electrician. Massachusetts law requires it — and we'd never have it any other way.",
        },
        {
          icon: "file-check",
          title: "We Pull Permits",
          description:
            "We pull the required permits on every applicable job. This protects your home's resale value and ensures the work passes inspection.",
        },
        {
          icon: "battery-charging",
          title: "Certified EV Installer",
          description:
            "We're certified installers for Tesla Wall Connector, ChargePoint, Enel X, and other major EV charging brands. Done right, done to spec.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Real person, fast response. Book online 24/7 or call us — we confirm same-day and schedule promptly. No week-long waits.",
        },
        {
          icon: "shield-check",
          title: "2-Year Labor Warranty",
          description:
            "All labor is backed by a 2-year warranty. If something we installed isn't right, we come back and fix it. No argument, no charge.",
        },
        {
          icon: "map-pin",
          title: "18+ Years in Greater Boston",
          description:
            "We've worked in Boston-area homes and buildings of every era. We know the quirks of old knob-and-tube wiring and modern smart panels alike.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Straightforward From First Call to Final Inspection",
      subtitle:
        "We keep the process simple so you always know what's happening with your electrical project.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Reach us by phone or request a quote online anytime. We respond same-day and schedule a free estimate at your convenience.",
        },
        {
          title: "Free On-Site Assessment",
          description:
            "We visit your property, evaluate the scope, review your panel and existing wiring, and give you a clear, honest quote before any work begins.",
        },
        {
          title: "Licensed Work, Inspection Passed",
          description:
            "We pull permits, complete the work to code, and coordinate the inspection. You get documentation of everything — and a 2-year labor warranty.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston & MetroWest",
      subtitle:
        "Based in Waltham, we serve homeowners and businesses throughout Greater Boston and the MetroWest corridor.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Boston Homeowners & Business Owners Trust Excel Electric",
      items: [
        {
          quote:
            "We had a Federal Pacific panel that needed to go — Excel Electric handled the full upgrade in one day. They pulled the permit, passed inspection the first time, and left the basement cleaner than they found it. Exactly what you want from an electrician.",
          name: "Tom R.",
          role: "Homeowner, Newton",
          rating: 5,
        },
        {
          quote:
            "Just got a Tesla Model Y and wanted a Wall Connector installed properly. Excel Electric came out, assessed the panel capacity, recommended the right circuit, and had the charger running that afternoon. Every other electrician I called couldn't get to me for two weeks.",
          name: "Sarah K.",
          role: "Homeowner, Waltham",
          rating: 5,
        },
        {
          quote:
            "I manage a small office building in Watertown and have used Excel Electric for three projects now. Always on time, always under or at budget, and they actually explain what they're doing so I can make informed decisions. Won't use anyone else.",
          name: "Phil M.",
          role: "Commercial Property Manager, Watertown",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "How much does a panel upgrade cost in Massachusetts?",
          answer:
            "A standard 200-amp panel upgrade in the Boston area typically runs $1,500–$3,500 depending on the scope, existing wiring condition, and whether any service entrance work is needed. We provide a detailed quote after a free on-site assessment — no guessing.",
        },
        {
          question: "Do I need a permit for electrical work in my home?",
          answer:
            "Yes — Massachusetts requires permits for most electrical work beyond simple device replacements. We pull all required permits on your behalf. This protects your home's value and ensures the work is inspected by the city or town.",
        },
        {
          question: "What Level 2 EV chargers do you install?",
          answer:
            "We install Tesla Wall Connector, ChargePoint Home Flex, Enel X JuiceBox, Emporia, and most other Level 2 EVSE brands. We'll also assess your panel capacity and recommend the right amperage circuit for your vehicle and charging habits.",
        },
        {
          question: "My lights are flickering — is that serious?",
          answer:
            "Possibly. Flickering lights can indicate a loose connection, overloaded circuit, or a failing panel — all of which are safety hazards. Don't ignore it. Call us and we'll diagnose the issue quickly. If it's urgent, we offer same-day service.",
        },
        {
          question: "How do I know if my electrical panel needs to be replaced?",
          answer:
            "If your panel is more than 25–30 years old, has a Federal Pacific, Zinsco, or Pushmatic brand, frequently trips breakers, or can't support your home's power needs, it likely needs an upgrade. We'll give you an honest assessment — no pressure.",
        },
        {
          question: "Do you work on older homes with knob-and-tube wiring?",
          answer:
            "Yes. We have extensive experience with Boston-area homes that still have knob-and-tube or aluminum wiring. We can assess what needs to be replaced, what can stay, and give you a phased plan if a full rewire isn't in the budget right now.",
        },
      ],
    },

    finalCTA: {
      headline: "Need a Licensed Electrician in Greater Boston?",
      subheadline:
        "Call us or book online 24/7. We answer every call, respond same-day, and back all our work with a 2-year warranty.",
    },

    footer: {
      description:
        "Excel Electric — licensed Master Electrician serving homes and businesses across Greater Boston. Panel upgrades, EV chargers, residential and commercial electrical.",
      serviceLinks: [
        { label: "Panel Upgrades", href: "#services" },
        { label: "EV Charger Installation", href: "#services" },
        { label: "Residential Electrical", href: "#services" },
        { label: "Commercial Electrical", href: "#services" },
      ],
      companyLinks: [
        { label: "About Us", href: "#" },
        { label: "How It Works", href: "#process" },
        { label: "Service Area", href: "#service-area" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
};
