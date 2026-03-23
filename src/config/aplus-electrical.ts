import { SiteConfig } from "./types";

export const aplusElectricalConfig: SiteConfig = {
  business: {
    name: "A+ Electrical",
    vertical: "Electrical Contractor",
    businessType: "Electrical Contractor",
    geography: "Boston, MA",
    phone: "(617) 555-0574",
    email: "info@aplus-electrical.com",
    address: "Framingham, MA",
    targetAudience:
      "Homeowners, builders, and business owners in Greater Boston needing electrical repairs, new construction wiring, code compliance work, or electrical inspections",
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
  },

  trust: {
    yearsInBusiness: "16+",
    credentials: [
      "Licensed Journeyman & Master Electrician — Massachusetts",
      "Fully Licensed & Insured",
      "IAEI Member — International Association of Electrical Inspectors",
      "BBB Accredited",
    ],
    serviceArea: [
      "Boston",
      "Framingham",
      "Natick",
      "Ashland",
      "Holliston",
      "Milford",
      "Marlborough",
    ],
    differentiators: [
      "16+ years of electrical work across Greater Boston and MetroWest",
      "Specializing in code compliance — we fix what others leave behind",
      "New construction wiring from rough-in to final inspection",
      "Electrical inspections and pre-sale assessments",
      "All work permitted, inspected, and documented",
      "We answer every call — book online anytime",
    ],
    guarantee: "Every job is code-compliant and documented. We back our work with a written workmanship warranty.",
    metrics: [
      { value: "16+", label: "Years in Business" },
      { value: "3,200+", label: "Jobs Completed" },
      { value: "4.9", label: "Google Rating" },
      { value: "98%", label: "First-Inspection Pass Rate" },
    ],
  },

  seo: {
    title: "A+ Electrical | Licensed Electrician Boston MA — Code Compliance, New Construction & Inspections",
    description:
      "A+ Electrical provides electrical repairs, new construction wiring, code compliance corrections, and pre-sale electrical inspections across Greater Boston. Licensed. Fully insured. Free quotes.",
    primaryTerms: [
      "electrician Boston MA",
      "electrical code compliance Boston",
      "new construction electrician Boston",
    ],
    secondaryTerms: [
      "electrical inspection Boston",
      "electrical contractor Framingham MA",
      "pre-sale electrical inspection Massachusetts",
      "code violation electrician Boston",
    ],
  },

  brand: {
    tone: "thorough, professional, trustworthy — we know the code and we do the job right",
    colors: {
      primary: "#003087",
      primaryDark: "#001f5c",
      accent: "#cc8400",
      light: "#f0f3fa",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Licensed Boston Electrician — Code Compliance Specialists",
      headline: "Electrical Done Right.\nPassed Inspection. Every Time.",
      subheadline:
        "From new construction wiring to code corrections and pre-sale electrical inspections, A+ Electrical brings 16 years of expertise and a 98% first-inspection pass rate. We answer every call.",
    },

    services: {
      label: "Our Services",
      title: "Electrical Expertise from Rough-In to Code Compliance",
      subtitle:
        "We specialize in the electrical work that requires real expertise — new construction, code compliance, inspections, and repairs that stand up to scrutiny.",
      items: [
        {
          icon: "tool",
          title: "Electrical Repairs",
          description:
            "Outlets, switches, breakers, wiring faults, and anything that's not working right. We diagnose accurately and fix it properly — not just make the symptom go away.",
          benefit: "Reliable electrical that works every time you flip the switch",
        },
        {
          icon: "home",
          title: "New Construction Wiring",
          description:
            "Full electrical for new builds and major renovations — rough-in, panel, service entrance, and final. We work with your GC to hit every milestone.",
          benefit: "A new build wired right from day one",
        },
        {
          icon: "check-square",
          title: "Code Compliance Corrections",
          description:
            "Failed inspection? Buying or selling a home with open electrical permits? We specialize in diagnosing and correcting code violations fast and cleanly.",
          benefit: "Close the permit, pass the inspection, move on",
        },
        {
          icon: "clipboard",
          title: "Electrical Inspections",
          description:
            "Pre-purchase and pre-sale electrical inspections that give you the full picture. Know exactly what you're buying — or what a buyer will see.",
          benefit: "No surprises at the closing table",
        },
      ],
    },

    whyUs: {
      label: "Why A+ Electrical",
      title: "We Know the Code. We Pass Inspection. Every Time.",
      subtitle:
        "A lot of contractors do electrical. Very few specialize in doing it right enough to pass inspection the first time, every time.",
      items: [
        {
          icon: "award",
          title: "98% First-Inspection Pass Rate",
          description:
            "We know the Massachusetts Electrical Code inside and out. Our work passes the first time — which saves you time, money, and headaches.",
        },
        {
          icon: "file-check",
          title: "Permits Pulled, Always",
          description:
            "Every applicable job gets a permit pulled. We handle the paperwork and coordinate the inspection. No corners cut, no liability left for you.",
        },
        {
          icon: "search",
          title: "Code Compliance Specialists",
          description:
            "We regularly fix electrical work that other contractors left behind. If you've been told you have code violations, we'll diagnose and resolve them efficiently.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Pick up the phone or book online 24/7. We respond same-day and get your estimate on the calendar fast. No runaround.",
        },
        {
          icon: "clipboard",
          title: "Full Documentation",
          description:
            "We document everything — permits, inspections, completed work. Important for resale value, insurance claims, and knowing what's inside your walls.",
        },
        {
          icon: "map-pin",
          title: "16+ Years in Greater Boston",
          description:
            "We've worked through every Boston-area permit office and know what each inspector looks for. That experience shows up in our pass rate.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "From Assessment to Approved in Three Steps",
      subtitle:
        "Whether you're repairing a single circuit or wiring a new building, the process is the same: honest assessment, quality work, inspection passed.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Contact us by phone or request a quote online anytime. We respond same-day and get you on the schedule quickly.",
        },
        {
          title: "On-Site Electrical Assessment",
          description:
            "We evaluate your electrical system, identify any code issues, and give you a clear written quote covering scope, timeline, and cost. No surprises.",
        },
        {
          title: "Licensed Work, Inspection Passed",
          description:
            "We complete the work, pull all required permits, and get inspection scheduled. You receive documentation of everything completed. Job done right.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston & MetroWest",
      subtitle:
        "Based in Framingham, we serve homeowners, builders, and businesses throughout Greater Boston and the MetroWest region.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Boston Homeowners & Builders Trust A+ Electrical",
      items: [
        {
          quote:
            "We were selling our house and the buyer's inspection turned up a list of electrical issues from a previous owner's DIY work. A+ Electrical came in, went through every item, corrected them all, and we passed re-inspection without a single callback. Saved our closing.",
          name: "Robert F.",
          role: "Homeowner, Natick",
          rating: 5,
        },
        {
          quote:
            "Used A+ Electrical for the full electrical on a new construction project — 4,200 sq ft single family. They hit every rough-in and trim-out deadline, coordinated perfectly with the GC, and passed final inspection first try. They're on our approved contractor list now.",
          name: "Steve C.",
          role: "Custom Home Builder, Framingham",
          rating: 5,
        },
        {
          quote:
            "I bought an older home and had A+ do a full electrical inspection before we moved in. They gave me a clear report of what needed immediate attention versus what could wait, and a realistic budget for each item. That's exactly what I needed to prioritize the work.",
          name: "Amanda L.",
          role: "Homeowner, Ashland",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "What does a pre-sale electrical inspection cover?",
          answer:
            "We inspect your panel, service entrance, all accessible wiring, outlets, switches, GFCI and AFCI protection, grounding, and any visible code compliance issues. You receive a written report with photos. It typically takes 2–3 hours for an average-sized home.",
        },
        {
          question: "I failed an electrical inspection — can you help?",
          answer:
            "Absolutely — this is one of our specialties. Send us the inspection report and we'll review it, visit the property, and give you a clear quote to correct every cited item. We have a 98% first-inspection pass rate on correction work.",
        },
        {
          question: "How much does new construction electrical wiring cost?",
          answer:
            "New construction electrical typically runs $8,000–$20,000+ for a single-family home depending on square footage, panel size, and finish specifications. We provide a detailed bid after reviewing plans and walking the site with your GC.",
        },
        {
          question: "What electrical code violations are most common in Boston-area homes?",
          answer:
            "The most common issues we find are missing GFCI protection in kitchens, bathrooms, and garages; outdated panels; ungrounded outlets; open junction boxes; and knob-and-tube wiring that's been improperly extended. All of these are fixable.",
        },
        {
          question: "Do you work with general contractors on new builds?",
          answer:
            "Yes — working with GCs on new construction and major renovations is a core part of what we do. We understand schedules, change orders, and coordination with other trades. We show up when we're supposed to and communicate proactively.",
        },
        {
          question: "How long does it take to correct electrical code violations?",
          answer:
            "It depends entirely on the scope. Simple corrections — adding GFCI outlets, fixing a junction box, replacing a breaker — can be done in a few hours. Larger compliance projects involving panel work or rewiring may take several days. We give you a timeline with your quote.",
        },
      ],
    },

    finalCTA: {
      headline: "Need a Licensed Electrician Who Gets It Right the First Time?",
      subheadline:
        "Call us or book online 24/7. We answer every call, respond same-day, and back every job with permits, documentation, and a written warranty.",
    },

    footer: {
      description:
        "A+ Electrical — licensed electrical contractor serving Greater Boston and MetroWest. Specializing in code compliance, new construction wiring, electrical inspections, and reliable repairs.",
      serviceLinks: [
        { label: "Electrical Repairs", href: "#services" },
        { label: "New Construction Wiring", href: "#services" },
        { label: "Code Compliance Corrections", href: "#services" },
        { label: "Electrical Inspections", href: "#services" },
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
