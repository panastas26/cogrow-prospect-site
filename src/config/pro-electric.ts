import { SiteConfig } from "./types";

export const proElectricConfig: SiteConfig = {
  business: {
    name: "Pro Electric",
    vertical: "Electrical Contractor",
    businessType: "Electrical Contractor",
    geography: "Boston, MA",
    phone: "(617) 555-0453",
    email: "info@pro-electric.com",
    address: "Quincy, MA",
    targetAudience:
      "Homeowners and commercial clients in Greater Boston needing electrical services, home rewiring, smart home installation, or commercial electrical work",
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
      label: "Book Online 24/7",
      href: "#contact",
    },
  },

  trust: {
    yearsInBusiness: "22+",
    credentials: [
      "Licensed Master Electrician — Massachusetts",
      "Fully Licensed & Insured",
      "CEDIA Certified Smart Home Installer",
      "BBB Accredited Business",
    ],
    serviceArea: [
      "Boston",
      "Quincy",
      "Braintree",
      "Weymouth",
      "Hingham",
      "Scituate",
      "Rockland",
    ],
    differentiators: [
      "22+ years serving Greater Boston residential and commercial clients",
      "Licensed Master Electrician with CEDIA smart home certification",
      "Full-service rewiring for older Boston-area homes",
      "Smart home and automation-ready electrical systems",
      "Commercial electrical from small offices to large buildouts",
      "We answer every call — book online anytime",
    ],
    guarantee: "Every job is code-compliant, permitted, and backed by our workmanship guarantee.",
    metrics: [
      { value: "22+", label: "Years in Business" },
      { value: "6,000+", label: "Jobs Completed" },
      { value: "4.8", label: "Google Rating" },
      { value: "200+", label: "Smart Home Installs" },
    ],
  },

  seo: {
    title: "Pro Electric | Electrician Boston MA — Rewiring, Smart Home & Commercial",
    description:
      "Pro Electric serves Greater Boston with electrical rewiring, smart home installation, commercial electrical, and full-service residential electrical. Licensed Master Electrician. Free quotes.",
    primaryTerms: [
      "electrician Boston MA",
      "home rewiring Boston",
      "commercial electrician Boston",
    ],
    secondaryTerms: [
      "smart home electrician Boston",
      "whole house rewiring Massachusetts",
      "electrical contractor Quincy MA",
      "smart home installation Boston",
    ],
  },

  brand: {
    tone: "experienced, modern, dependable — we bring technical expertise without the runaround",
    colors: {
      primary: "#1565C0",
      primaryDark: "#0d47a1",
      accent: "#c62828",
      light: "#f0f4fa",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Boston's Electrical Experts — 22+ Years",
      headline: "Modern Electrical for\nBoston Homes & Businesses.",
      subheadline:
        "From full home rewiring to smart home systems and commercial electrical buildouts, Pro Electric has handled it all for over two decades. We answer every call and book online 24/7.",
    },

    services: {
      label: "Our Services",
      title: "Full-Service Electrical from Rewiring to Smart Home",
      subtitle:
        "Whether you're updating a century-old triple-decker or wiring a new commercial space, we bring the expertise and equipment to do it right.",
      items: [
        {
          icon: "refresh-cw",
          title: "Whole-Home Rewiring",
          description:
            "Complete rewiring of older homes with knob-and-tube or deteriorated wiring. We work methodically to minimize disruption while bringing your home fully up to code.",
          benefit: "A safer home with modern, reliable electrical",
        },
        {
          icon: "wifi",
          title: "Smart Home Electrical",
          description:
            "Electrical infrastructure for smart home systems — smart panels, dedicated circuits, structured wiring, EV chargers, and automation-ready setups.",
          benefit: "Future-proof your home with the right wiring from day one",
        },
        {
          icon: "building",
          title: "Commercial Electrical",
          description:
            "Office fit-outs, restaurant electrical, retail buildouts, and tenant improvements. We work on your schedule to keep your project on track.",
          benefit: "Commercial-grade work, on time and on budget",
        },
        {
          icon: "tool",
          title: "Electrical Repairs & Upgrades",
          description:
            "Circuit breakers, outlets, switches, panel upgrades, GFCI protection, surge protection, and anything in between. Same-day service often available.",
          benefit: "Fast, reliable fixes by a licensed pro",
        },
      ],
    },

    whyUs: {
      label: "Why Pro Electric",
      title: "22 Years, Thousands of Jobs, Zero Shortcuts",
      subtitle:
        "We've built our reputation on doing electrical work the right way — with the right credentials, the right permits, and the right follow-through.",
      items: [
        {
          icon: "award",
          title: "Licensed Master Electrician",
          description:
            "22 years of experience backed by a Massachusetts Master Electrician license. Every project is supervised by someone who has seen it all before.",
        },
        {
          icon: "cpu",
          title: "Smart Home Certified",
          description:
            "CEDIA certified for smart home and automation electrical systems. We speak the language of Lutron, Savant, Control4, and custom integrations.",
        },
        {
          icon: "file-check",
          title: "Permits Pulled on Every Job",
          description:
            "We handle all permits and coordinate inspections. Your work is documented, inspected, and on record — protecting your investment.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Pick up the phone or book online 24/7. We get back to you same-day and schedule fast. No ghosting, no voicemail voids.",
        },
        {
          icon: "users",
          title: "Trusted by Boston Builders",
          description:
            "Contractors and developers across Greater Boston call us for commercial buildouts and multi-family projects. Our reputation is built on repeat business.",
        },
        {
          icon: "map-pin",
          title: "22+ Years in Greater Boston",
          description:
            "We know every neighborhood, every permit office, and every vintage of Boston wiring. That experience matters when your project gets complicated.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Easy From First Call to Final Walkthrough",
      subtitle:
        "We make the process clear so there are no surprises — on scope, timeline, or price.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Contact us by phone or submit a request online anytime. We confirm same-day and get your estimate scheduled quickly.",
        },
        {
          title: "On-Site Electrical Assessment",
          description:
            "We walk your property, evaluate your panel and existing wiring, discuss your goals, and give you a clear, itemized quote before any work begins.",
        },
        {
          title: "We Get It Done Right",
          description:
            "Licensed crew, permits pulled, work completed to code. We pass inspection and walk you through everything when the job is finished.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston & South Shore",
      subtitle:
        "Based in Quincy, we serve homeowners and businesses throughout Greater Boston and down the South Shore.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Boston Homeowners & Contractors Trust Pro Electric",
      items: [
        {
          quote:
            "Pro Electric rewired our entire 1920s craftsman in Quincy. It was a major project and they managed it perfectly — minimal wall damage, clean work, and they kept us informed every step of the way. The inspector was impressed too. Absolutely recommend.",
          name: "Janet H.",
          role: "Homeowner, Quincy",
          rating: 5,
        },
        {
          quote:
            "We used Pro Electric for a full commercial buildout — new retail space, about 3,500 sq ft. They came in on budget, hit every milestone, and were easy to work with when the GC needed changes. Our go-to electrical contractor now.",
          name: "Marcus B.",
          role: "General Contractor, Boston",
          rating: 5,
        },
        {
          quote:
            "Had them install a smart panel and the wiring infrastructure for a full home automation system. These guys actually understand how it all connects — not just running wire but making sure everything was spec'd right for the integrator. Night and day versus the last electrician I used.",
          name: "Kevin L.",
          role: "Homeowner, Hingham",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "How much does it cost to rewire a house in Massachusetts?",
          answer:
            "Whole-home rewiring costs vary significantly based on house size, the extent of the existing wiring, and how accessible the walls are. Most Boston-area projects range from $8,000 to $20,000+. We provide a detailed quote after a thorough on-site assessment — no guessing.",
        },
        {
          question: "How disruptive is a whole-home rewire?",
          answer:
            "We minimize disruption as much as possible, but some drywall access is typically required. We work room by room, keep your home livable throughout, and coordinate the patching and painting with your schedule. Most homeowners can stay in the house.",
        },
        {
          question: "Can you wire my home for a smart home system?",
          answer:
            "Yes — this is one of our specialties. We install structured wiring, dedicated circuits for smart panels, pre-wire for Lutron, Savant, Control4, and other systems, and coordinate with your AV or automation integrator to ensure everything is spec'd correctly.",
        },
        {
          question: "Do you handle commercial electrical permits in Boston?",
          answer:
            "Yes. We have an established process for pulling commercial permits in Boston and surrounding municipalities. We handle the paperwork, coordinate inspections, and keep the project on schedule.",
        },
        {
          question: "My circuit breaker keeps tripping — what does that mean?",
          answer:
            "A repeatedly tripping breaker usually means the circuit is overloaded, there's a fault somewhere on the circuit, or the breaker itself is failing. Don't just keep resetting it — call us and we'll diagnose the cause. It's often a quick fix, but can be a sign of something more serious.",
        },
        {
          question: "How quickly can you start a project?",
          answer:
            "For smaller jobs and repairs, we can often schedule within a few days. Larger projects like rewiring or commercial buildouts require more planning and are typically scheduled 1–3 weeks out. Call us or book online and we'll give you an honest timeline.",
        },
      ],
    },

    finalCTA: {
      headline: "Got an Electrical Project in Greater Boston?",
      subheadline:
        "Call us or book a free estimate online 24/7. We answer every call, respond same-day, and get your project done right.",
    },

    footer: {
      description:
        "Pro Electric — licensed Master Electrician serving Greater Boston for 22+ years. Rewiring, smart home, commercial electrical, and full-service residential electrical.",
      serviceLinks: [
        { label: "Whole-Home Rewiring", href: "#services" },
        { label: "Smart Home Electrical", href: "#services" },
        { label: "Commercial Electrical", href: "#services" },
        { label: "Repairs & Upgrades", href: "#services" },
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
