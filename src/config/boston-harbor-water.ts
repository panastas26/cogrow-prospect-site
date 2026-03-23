import { SiteConfig } from "./types";

export const bostonHarborWaterConfig: SiteConfig = {
  business: {
    name: "Boston Harbor Water",
    vertical: "Water Treatment & Plumbing",
    businessType: "Water Treatment & Plumbing Services",
    geography: "Boston, MA",
    phone: "(617) 555-0463",
    email: "info@boston-harbor-water.com",
    address: "Boston, MA",
    targetAudience:
      "Homeowners and small businesses in Greater Boston concerned about water quality or in need of plumbing and water filtration services",
  },

  conversion: {
    primaryCTA: {
      label: "Get a Free Water Test",
      href: "#contact",
    },
    secondaryCTA: {
      label: "See Our Services",
      href: "#services",
    },
  },

  trust: {
    yearsInBusiness: "10+",
    credentials: [
      "Licensed Massachusetts Plumber",
      "WQA Certified Water Treatment Specialist",
      "Fully Insured & Bonded",
    ],
    serviceArea: [
      "Boston",
      "Cambridge",
      "Waltham",
      "Woburn",
      "Medford",
      "Malden",
      "Lynn",
    ],
    differentiators: [
      "Free in-home water quality testing",
      "Licensed plumber on every installation",
      "We answer every call \u2014 same-day service available",
      "WQA-certified water treatment specialists",
      "Book online 24/7",
      "10+ years improving Greater Boston water quality",
    ],
    guarantee: "If your water isn\u2019t better, we make it right \u2014 guaranteed.",
    metrics: [
      { value: "10+", label: "Years in Boston" },
      { value: "1,600+", label: "Systems Installed" },
      { value: "4.9", label: "Google Rating" },
      { value: "99%", label: "Customer Satisfaction" },
    ],
  },

  seo: {
    title: "Boston Harbor Water | Water Filtration & Treatment Boston MA",
    description:
      "Boston Harbor Water provides water filtration, softener installation, reverse osmosis systems, and plumbing services across Greater Boston. Free water testing. Licensed plumbers. Same-day service available.",
    primaryTerms: [
      "water filtration Boston MA",
      "water softener installation Boston",
      "water treatment Greater Boston",
    ],
  },

  brand: {
    tone: "clean, trustworthy, health-focused",
    colors: {
      primary: "#0074e4",
      primaryDark: "#005bb5",
      accent: "#00b4d8",
      light: "#f0f7ff",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "WQA-Certified Water Treatment \u2014 Boston, MA",
      headline: "Clean Water for\nEvery Boston Home",
      subheadline:
        "Free water testing, expert filtration systems, and licensed plumbing installations. We answer every call and make sure your water is safe, clean, and great-tasting.",
    },

    services: {
      label: "Our Services",
      title: "Better Water Starts Here",
      subtitle:
        "From whole-home filtration to targeted drinking water systems, we solve every water quality problem in Greater Boston.",
      items: [
        {
          icon: "droplet",
          title: "Water Softener Installation",
          description:
            "Hard water damages pipes, appliances, and your skin. We install and maintain whole-home softeners that protect your investment.",
          benefit: "Extend appliance life and eliminate hard water scale",
        },
        {
          icon: "filter",
          title: "Whole-Home Filtration",
          description:
            "Remove chlorine, sediment, heavy metals, and contaminants at the point of entry. Clean water at every tap, every time.",
          benefit: "Better water everywhere in your home, not just the kitchen",
        },
        {
          icon: "circle",
          title: "Reverse Osmosis Drinking Water",
          description:
            "Under-sink RO systems that deliver pure drinking water directly from your tap. Better than bottled, better for the environment.",
          benefit: "Eliminate bottled water and drink with confidence",
        },
        {
          icon: "tool",
          title: "Plumbing & System Maintenance",
          description:
            "Leak repair, pipe work, and annual filter maintenance by licensed Massachusetts plumbers. We keep your system running right.",
          benefit: "One call for water treatment and plumbing needs",
        },
      ],
    },

    whyUs: {
      label: "Why Boston Harbor Water",
      title: "Water Quality Experts Who Are Also Licensed Plumbers",
      subtitle:
        "Most water treatment companies aren\u2019t plumbers. We are. That means a better installation, done right, with one team.",
      items: [
        {
          icon: "search",
          title: "Free In-Home Water Testing",
          description:
            "We test your water before we recommend anything. You\u2019ll know exactly what\u2019s in it and what actually needs to be addressed.",
        },
        {
          icon: "shield-check",
          title: "Licensed Plumbers on Every Install",
          description:
            "Our water treatment installers are licensed Massachusetts plumbers. No subcontractors, no shortcuts.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Water issues don\u2019t keep business hours. We answer every call and offer same-day service across Greater Boston.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule a free water test or service call online anytime. We confirm within the hour and come prepared.",
        },
        {
          icon: "award",
          title: "WQA-Certified Specialists",
          description:
            "Our team holds Water Quality Association certifications \u2014 the gold standard in the water treatment industry.",
        },
        {
          icon: "refresh-cw",
          title: "Annual Maintenance Programs",
          description:
            "We remind you when filters are due, service your system annually, and keep it performing at peak efficiency.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Clean Water in Three Simple Steps",
      subtitle:
        "We test first, recommend second, and install third. No hard sell, just the solution your water actually needs.",
      steps: [
        {
          title: "Book a Free Water Test",
          description:
            "Schedule online or call us. We come to your home, test your water on the spot, and show you exactly what\u2019s in it.",
        },
        {
          title: "We Review the Results with You",
          description:
            "We explain what we found in plain language and recommend only the solutions your water quality actually requires.",
        },
        {
          title: "Professional Installation",
          description:
            "Our licensed plumbers install your system cleanly and correctly. We test everything before we leave and walk you through maintenance.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston for 10+ Years",
      subtitle:
        "Based in Boston, we test and treat water in homes and businesses across the metro area and northern suburbs.",
    },

    testimonials: {
      label: "Customer Stories",
      title: "Boston Homeowners Trust Boston Harbor Water",
      items: [
        {
          quote:
            "Our water had a terrible smell and left stains on everything. Boston Harbor Water came out, tested it, and explained the problem clearly. Within a week we had a whole-home system installed. The difference is night and day.",
          name: "Paul R.",
          role: "Homeowner, Woburn",
          rating: 5,
        },
        {
          quote:
            "I was buying bottled water for years. The reverse osmosis system they installed under my sink produces better water than anything I was buying, and I\u2019ve already saved more than the system cost. The install was clean and fast.",
          name: "Tanya H.",
          role: "Homeowner, Cambridge",
          rating: 5,
        },
        {
          quote:
            "Called them on a Friday afternoon about a water heater connection issue after a softener install. They had someone at my house by 6pm. They genuinely answer every call and they actually show up. Hard to find that anymore.",
          name: "Kevin S.",
          role: "Homeowner, Malden",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "Is the water quality test really free?",
          answer:
            "Yes, completely free. We come to your home, run a comprehensive water test, and review the results with you \u2014 no charge, no obligation. We only recommend a system if your water actually needs one.",
        },
        {
          question: "How do I know if I need a water softener or a filtration system?",
          answer:
            "That\u2019s exactly what the free water test determines. Hard water and contaminated water require different solutions. We test first and recommend based on what we find, not what we want to sell.",
        },
        {
          question: "Does Boston have hard water?",
          answer:
            "Greater Boston municipal water is generally low in hardness, but private wells and some suburban communities can have hard water. Chlorine levels and older pipe sediment are more common concerns for Boston homeowners.",
        },
        {
          question: "How long does a whole-home filter installation take?",
          answer:
            "Most whole-home systems are installed in 2\u20133 hours. Under-sink reverse osmosis systems take about 1\u20132 hours. We minimize disruption and leave the work area clean.",
        },
        {
          question: "Do you service systems installed by other companies?",
          answer:
            "Yes. We service and maintain water softeners and filtration systems regardless of brand or who installed them. We can also evaluate whether your existing system is still performing correctly.",
        },
        {
          question: "How often do filters need to be replaced?",
          answer:
            "It depends on the system and your water quality, but most whole-home filters need replacement once a year. RO membrane cartridges typically last 2\u20133 years. We offer an annual maintenance program so you never have to track it yourself.",
        },
      ],
    },

    finalCTA: {
      headline: "Find Out What\u2019s in Your Water \u2014 For Free",
      subheadline:
        "Book a free in-home water test online or call us now. No sales pressure \u2014 just real answers about your water quality.",
    },

    footer: {
      description:
        "Water treatment and plumbing services serving Greater Boston. Water softeners, whole-home filtration, reverse osmosis, and licensed plumbing installations.",
      serviceLinks: [
        { label: "Water Softeners", href: "#services" },
        { label: "Whole-Home Filtration", href: "#services" },
        { label: "Reverse Osmosis Systems", href: "#services" },
        { label: "Plumbing & Maintenance", href: "#services" },
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
