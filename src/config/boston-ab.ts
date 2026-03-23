import { SiteConfig } from "./types";

export const bostonAbConfig: SiteConfig = {
  business: {
    name: "Boston AB",
    vertical: "General Contractor",
    businessType: "General Contracting & Home Improvement",
    geography: "Boston, MA",
    phone: "(617) 555-0382",
    email: "info@boston-ab.com",
    address: "Boston, MA",
    targetAudience:
      "Homeowners, landlords, and property investors in Greater Boston needing reliable general contracting and home improvement services",
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
    yearsInBusiness: "12+",
    credentials: [
      "Massachusetts Licensed General Contractor",
      "Fully Insured & Bonded",
      "OSHA Certified Crews",
    ],
    serviceArea: [
      "Boston",
      "Somerville",
      "Cambridge",
      "Brookline",
      "Malden",
      "Everett",
      "Chelsea",
    ],
    differentiators: [
      "Licensed general contractor on every project",
      "We answer every call \u2014 nights and weekends",
      "Clear contracts with no change-order surprises",
      "Book a walkthrough online 24/7",
      "12+ years building and renovating Boston homes",
      "Crews show up on time, every time",
    ],
    guarantee: "Fixed-price contracts. If it\u2019s in the scope, it\u2019s in the price.",
    metrics: [
      { value: "12+", label: "Years in Boston" },
      { value: "850+", label: "Projects Completed" },
      { value: "4.8", label: "Google Rating" },
      { value: "$0", label: "Surprise Change Orders" },
    ],
  },

  seo: {
    title: "Boston AB | Licensed General Contractor Boston MA",
    description:
      "Boston AB is a licensed general contractor serving Greater Boston. Kitchen and bathroom remodels, basement finishing, additions, and full home renovations. Free quotes, fixed-price contracts.",
    primaryTerms: [
      "general contractor Boston MA",
      "home renovation Boston",
      "licensed contractor Greater Boston",
    ],
  },

  brand: {
    tone: "straight-talking, reliable, no-nonsense",
    colors: {
      primary: "#000000",
      primaryDark: "#000000",
      accent: "#555555",
      light: "#f5f5f5",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Licensed General Contractor \u2014 Boston, MA",
      headline: "Boston Home Improvements\nDone Right the First Time",
      subheadline:
        "Kitchens, bathrooms, basements, and full renovations for Greater Boston homeowners. Fixed-price contracts, crews that show up, and a contractor you can actually reach.",
    },

    services: {
      label: "Our Services",
      title: "From Single Rooms to Full Renovations",
      subtitle:
        "We handle projects of every size with the same commitment: clear pricing, quality work, and a finished product you\u2019re proud of.",
      items: [
        {
          icon: "home",
          title: "Kitchen & Bathroom Remodels",
          description:
            "Full gut-and-rebuild or focused updates. We manage demo, plumbing, electrical, tile, and finish work under one contract.",
          benefit: "One contractor, one price, no coordination headaches",
        },
        {
          icon: "layers",
          title: "Basement Finishing",
          description:
            "Convert your unfinished basement into living space, a rental unit, or a home office. We handle permits and inspections.",
          benefit: "Add real value and usable square footage to your home",
        },
        {
          icon: "tool",
          title: "Additions & Structural Work",
          description:
            "Room additions, garage conversions, second-floor builds, and structural repairs done to code.",
          benefit: "Expand your home without moving",
        },
        {
          icon: "star",
          title: "Full Home Renovation",
          description:
            "Multi-room and whole-home renovations managed from demo day to final walkthrough. One point of contact, clear timeline.",
          benefit: "A project manager who keeps things on track and on budget",
        },
      ],
    },

    whyUs: {
      label: "Why Boston AB",
      title: "The Contractor Boston Homeowners Recommend",
      subtitle:
        "We\u2019ve built our reputation on showing up, doing the work right, and never hiding costs in the fine print.",
      items: [
        {
          icon: "file-text",
          title: "Fixed-Price Contracts",
          description:
            "We scope the job before we start and put it in writing. No surprise change orders unless you change the scope.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Your project manager is reachable by phone and text throughout the job. No going days without an update.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule a free walkthrough online anytime. We confirm same-day and come prepared with questions.",
        },
        {
          icon: "clock",
          title: "Crews That Show Up On Time",
          description:
            "We set a start date and we\u2019re there. If something changes, we tell you immediately \u2014 not the morning of.",
        },
        {
          icon: "shield-check",
          title: "Licensed & Fully Insured",
          description:
            "Massachusetts licensed general contractor with full liability and workers\u2019 comp. You\u2019re covered on every job.",
        },
        {
          icon: "map-pin",
          title: "12+ Years in Greater Boston",
          description:
            "We know Boston\u2019s housing stock, permitting requirements, and what it takes to do quality work in tight urban spaces.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Your Project, From First Call to Final Walkthrough",
      subtitle:
        "Three clear steps so you always know what to expect and what it\u2019s going to cost.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Schedule your free walkthrough online or give us a call. We confirm same-day and visit within 2\u20133 business days.",
        },
        {
          title: "Walkthrough & Written Quote",
          description:
            "We walk the project with you, ask the right questions, and deliver a detailed written quote with a fixed price and timeline.",
        },
        {
          title: "We Build It Right",
          description:
            "Our crew executes the plan on schedule. We keep you updated throughout and do a final walkthrough before calling it done.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston for 12+ Years",
      subtitle:
        "Based in Boston, we run renovation projects across the city and surrounding neighborhoods every week.",
    },

    testimonials: {
      label: "Project Stories",
      title: "Greater Boston Homeowners Trust Boston AB",
      items: [
        {
          quote:
            "We\u2019d had two contractors ghost us mid-project before we found Boston AB. They gave us a written quote, started on the date they promised, and finished our kitchen two days early. I\u2019ve already referred them to three neighbors.",
          name: "Sarah K.",
          role: "Homeowner, Somerville",
          rating: 5,
        },
        {
          quote:
            "The basement finishing project was bigger than I expected but Boston AB kept me informed every step of the way. The price matched the quote exactly. Now we have a proper home office and a guest room. Couldn\u2019t be happier.",
          name: "Andre W.",
          role: "Homeowner, Malden",
          rating: 5,
        },
        {
          quote:
            "As a landlord with three units I need a contractor I can trust to handle things without me being there. Boston AB does that. Quality work, no surprises, and they always pick up the phone.",
          name: "Christine L.",
          role: "Property Owner, East Boston",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "Do you provide a written contract and fixed price?",
          answer:
            "Yes, always. Every project gets a detailed written contract with a fixed price and timeline before any work begins. The only time the price changes is if you ask us to change the scope.",
        },
        {
          question: "Do you pull permits for renovation work?",
          answer:
            "Yes. We handle all permit applications and inspections as part of the project. Never hire a contractor who suggests skipping permits \u2014 it creates serious problems when you sell the home.",
        },
        {
          question: "How long does a kitchen remodel take?",
          answer:
            "Most kitchen remodels take 3\u20136 weeks depending on the scope, material lead times, and whether we\u2019re moving walls or plumbing. We give you a realistic timeline in your written quote, not the answer you want to hear.",
        },
        {
          question: "Can you work with a design I already have?",
          answer:
            "Absolutely. If you\u2019ve already worked with a designer or have plans, we build from them. If you need design help, we have relationships with local designers we can refer you to.",
        },
        {
          question: "What neighborhoods do you serve?",
          answer:
            "We work throughout Greater Boston including Somerville, Cambridge, Brookline, Malden, Everett, Chelsea, and all Boston neighborhoods. If you\u2019re not sure whether we cover your area, just call.",
        },
        {
          question: "How do I get started?",
          answer:
            "Book a free walkthrough online or call us directly. We\u2019ll schedule a site visit within 2\u20133 business days, assess the project, and give you a written quote with no obligation.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Start Your Project?",
      subheadline:
        "Book a free walkthrough online or call us now. We\u2019ll give you a fixed price and a start date you can count on.",
    },

    footer: {
      description:
        "Licensed general contractor serving Greater Boston. Kitchen remodels, basement finishing, additions, and full home renovations. Fixed-price contracts.",
      serviceLinks: [
        { label: "Kitchen & Bathroom Remodels", href: "#services" },
        { label: "Basement Finishing", href: "#services" },
        { label: "Additions & Structural", href: "#services" },
        { label: "Full Home Renovation", href: "#services" },
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
