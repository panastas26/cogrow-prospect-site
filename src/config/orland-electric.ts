import { SiteConfig } from "./types";

export const orlandElectricConfig: SiteConfig = {
  business: {
    name: "Orland Electric",
    vertical: "Electrical Contractor",
    businessType: "Residential & Commercial Electrical Services",
    geography: "Boston, MA",
    phone: "(617) 555-0174",
    email: "info@orland-electric.com",
    address: "Boston, MA",
    targetAudience:
      "Homeowners, landlords, and small business owners in the Greater Boston area needing licensed electrical work",
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
    yearsInBusiness: "15+",
    credentials: [
      "Licensed Master Electrician",
      "Fully Insured & Bonded",
      "MA Electrical License",
    ],
    serviceArea: [
      "Boston",
      "Cambridge",
      "Somerville",
      "Quincy",
      "Waltham",
      "Newton",
      "Medford",
    ],
    differentiators: [
      "Licensed master electrician on every job",
      "Same-day and emergency service available",
      "Upfront pricing before any work begins",
      "We answer every call — no voicemail black holes",
      "15+ years serving Greater Boston",
      "Book online 24/7",
    ],
    guarantee: "Upfront pricing, always. No surprise charges on your final bill.",
    metrics: [
      { value: "15+", label: "Years in Boston" },
      { value: "2,400+", label: "Jobs Completed" },
      { value: "4.9", label: "Google Rating" },
      { value: "100%", label: "Licensed & Insured" },
    ],
  },

  seo: {
    title: "Orland Electric | Licensed Electrician Boston MA",
    description:
      "Orland Electric provides residential and commercial electrical services across Greater Boston. Panel upgrades, rewiring, EV charger installation, and 24/7 emergency service. Licensed master electrician. Free quotes.",
    primaryTerms: [
      "electrician Boston MA",
      "licensed electrician Boston",
      "electrical contractor Greater Boston",
    ],
  },

  brand: {
    tone: "confident, direct, safety-focused",
    colors: {
      primary: "#F96D00",
      primaryDark: "#c45500",
      accent: "#1a1a2e",
      light: "#fff8f0",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Licensed Master Electrician \u2014 Boston, MA",
      headline: "Boston\u2019s Electrician\nWho Answers the Phone",
      subheadline:
        "Residential and commercial electrical work done right, on time, and at a price you know before we start. We answer every call and book online 24/7.",
    },

    services: {
      label: "Our Services",
      title: "Electrical Work You Can Count On",
      subtitle:
        "From panel upgrades to full rewires, we handle every electrical need for Boston homeowners and businesses.",
      items: [
        {
          icon: "zap",
          title: "Panel Upgrades & Rewiring",
          description:
            "Outdated panels are a fire hazard. We upgrade to modern 200-amp service and rewire older homes to current code.",
          benefit: "Protect your home and pass every inspection",
        },
        {
          icon: "home",
          title: "Residential Electrical",
          description:
            "Outlets, switches, fixtures, ceiling fans, whole-home surge protection, and everything in between.",
          benefit: "One call handles every electrical need in your home",
        },
        {
          icon: "battery-charging",
          title: "EV Charger Installation",
          description:
            "Level 2 home EV charger installation with proper permitting. We work with all major vehicle brands.",
          benefit: "Charge overnight, wake up to a full battery every morning",
        },
        {
          icon: "building",
          title: "Commercial Electrical",
          description:
            "Tenant fit-outs, lighting upgrades, code compliance work, and service upgrades for Boston businesses.",
          benefit: "Minimize downtime with experienced commercial crews",
        },
      ],
    },

    whyUs: {
      label: "Why Orland Electric",
      title: "Not All Electricians Are the Same",
      subtitle:
        "We built our reputation on clean work, honest pricing, and showing up when we say we will.",
      items: [
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Call us at 7am or 7pm \u2014 a real person picks up. No voicemail loops, no waiting days for a callback.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule a service call or quote request any time of day. We confirm within the hour during business hours.",
        },
        {
          icon: "shield-check",
          title: "Licensed Master Electrician",
          description:
            "Every job is overseen by a licensed master electrician. We pull permits and do it by the book.",
        },
        {
          icon: "dollar-sign",
          title: "Upfront Pricing",
          description:
            "You get a clear quote before we touch anything. What we quote is what you pay \u2014 no exceptions.",
        },
        {
          icon: "clock",
          title: "Same-Day Service Available",
          description:
            "Electrical problems don\u2019t wait. We offer same-day and emergency service across Greater Boston.",
        },
        {
          icon: "map-pin",
          title: "15+ Years in Greater Boston",
          description:
            "We know Boston\u2019s older housing stock, the local inspectors, and what it takes to get the job done right.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Electrical Service Without the Runaround",
      subtitle:
        "Three steps from first call to finished work. No surprises, no delays.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Call us directly or schedule online anytime. We respond same-day and confirm your appointment within the hour.",
        },
        {
          title: "On-Site Assessment & Quote",
          description:
            "A licensed electrician visits, assesses the work, and gives you a clear written quote before anything starts.",
        },
        {
          title: "Work Done Right",
          description:
            "We complete the job on schedule, clean up after ourselves, and make sure everything passes inspection.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston for 15+ Years",
      subtitle:
        "Based in Boston, we run crews across the city and into the surrounding towns every day.",
    },

    testimonials: {
      label: "Customer Stories",
      title: "Boston Homeowners Trust Orland Electric",
      items: [
        {
          quote:
            "I called three electricians before Orland. The other two never called back. Orland picked up the first ring, came out the next morning, and had my panel upgraded by end of day. Clean work, fair price.",
          name: "Dan F.",
          role: "Homeowner, Somerville",
          rating: 5,
        },
        {
          quote:
            "We had an electrical issue at our restaurant on a Saturday night. Called Orland and they had someone there within two hours. Kept us from losing a full night of business. These guys are the real deal.",
          name: "Maria C.",
          role: "Restaurant Owner, Cambridge",
          rating: 5,
        },
        {
          quote:
            "Needed an EV charger installed at my condo. Orland handled the permit, ran the line, and had it done in one afternoon. Priced exactly what they quoted. I\u2019ll use them for everything going forward.",
          name: "James O.",
          role: "Condo Owner, Newton",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "Do I need a permit for electrical work in Boston?",
          answer:
            "Most electrical work requires a permit in Massachusetts, including panel upgrades, new circuits, and EV charger installations. We handle all permitting as part of our service \u2014 you don\u2019t need to deal with the city.",
        },
        {
          question: "How much does an electrical panel upgrade cost?",
          answer:
            "Most residential panel upgrades in the Boston area run between $1,500 and $3,500 depending on the service size and existing wiring. We give you a firm quote after seeing the work in person \u2014 no surprises.",
        },
        {
          question: "Do you offer emergency electrical service?",
          answer:
            "Yes. We answer every call and offer emergency service across Greater Boston. If you\u2019ve lost power, have a burning smell, or a sparking outlet, call us immediately.",
        },
        {
          question: "Can you work on older Boston homes with knob-and-tube wiring?",
          answer:
            "Absolutely. We specialize in older New England housing stock. We\u2019ll assess your knob-and-tube wiring, explain your options clearly, and give you a plan that fits your budget.",
        },
        {
          question: "Are you licensed and insured in Massachusetts?",
          answer:
            "Yes. We hold a Massachusetts Master Electrician license and carry full liability insurance and workers\u2019 comp. We\u2019ll provide proof of insurance before any work begins.",
        },
        {
          question: "How quickly can you get to me?",
          answer:
            "For standard jobs, we typically schedule within 1\u20133 business days. For emergencies, we aim to be on-site within 2 hours anywhere in Greater Boston.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Get the Job Done Right?",
      subheadline:
        "Call us now or book online 24/7. We answer every call and give you a clear quote before any work starts.",
    },

    footer: {
      description:
        "Licensed electrical contractor serving Greater Boston. Residential and commercial electrical, panel upgrades, EV chargers, and emergency service.",
      serviceLinks: [
        { label: "Panel Upgrades", href: "#services" },
        { label: "Residential Electrical", href: "#services" },
        { label: "EV Charger Installation", href: "#services" },
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
