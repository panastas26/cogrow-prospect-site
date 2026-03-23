import { SiteConfig } from "./types";

export const cjTreeServicesConfig: SiteConfig = {
  business: {
    name: "CJ Tree Services",
    vertical: "Tree Care / Arborist",
    businessType: "Tree Care Company",
    geography: "Boston, MA",
    phone: "(617) 555-0182",
    email: "info@cj-tree-services.com",
    address: "Dedham, MA",
    targetAudience:
      "Homeowners and property managers in the Greater Boston area dealing with tree removal, storm damage, overgrown trees, or lot clearing",
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
      label: "Emergency Storm Response",
      href: "#contact",
    },
  },

  trust: {
    yearsInBusiness: "15+",
    credentials: [
      "ISA Certified Arborist",
      "Fully Licensed & Insured in Massachusetts",
      "OSHA Safety Certified",
    ],
    serviceArea: [
      "Boston",
      "Dedham",
      "Needham",
      "Westwood",
      "Canton",
      "Milton",
      "Norwood",
    ],
    differentiators: [
      "15+ years of tree care across Greater Boston",
      "ISA Certified Arborist on every job",
      "24/7 emergency storm response",
      "Full cleanup — we leave your yard spotless",
      "Free, no-obligation estimates",
      "Fully insured for your peace of mind",
    ],
    guarantee: "We leave your property cleaner than we found it. Guaranteed.",
    metrics: [
      { value: "15+", label: "Years in Business" },
      { value: "3,000+", label: "Trees Removed" },
      { value: "4.9", label: "Google Rating" },
      { value: "24/7", label: "Emergency Response" },
    ],
  },

  seo: {
    title: "CJ Tree Services | Tree Removal & Pruning in Boston, MA",
    description:
      "CJ Tree Services provides expert tree removal, pruning, lot clearing, and emergency storm damage response across Greater Boston. ISA Certified Arborist. Free quotes.",
    primaryTerms: [
      "tree removal Boston MA",
      "tree service Boston",
      "emergency tree removal Boston",
    ],
    secondaryTerms: [
      "tree pruning Boston",
      "lot clearing Boston",
      "storm damage tree removal",
      "arborist Boston MA",
    ],
  },

  brand: {
    tone: "confident, direct, reliable — the crew that shows up and handles it",
    colors: {
      primary: "#da0131",
      primaryDark: "#a80126",
      accent: "#2d5a27",
      light: "#fff5f5",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Boston's Tree Removal Experts — 15+ Years",
      headline: "We Handle the Trees.\nYou Enjoy the Yard.",
      subheadline:
        "From single-tree removal to full lot clearing and emergency storm response, CJ Tree Services gets the job done safely, cleanly, and on your schedule. We answer every call.",
    },

    services: {
      label: "Our Services",
      title: "Tree Care You Can Count On",
      subtitle:
        "Whether it's a hazardous tree leaning over your roof or a lot that needs clearing, we have the equipment and expertise to handle it right.",
      items: [
        {
          icon: "axe",
          title: "Tree Removal",
          description:
            "Safe, efficient removal of trees of any size — from tight residential yards to large properties. We handle everything from cut to cleanup.",
          benefit: "Dangerous trees gone before they become a problem",
        },
        {
          icon: "scissors",
          title: "Tree Pruning & Trimming",
          description:
            "Precision pruning that improves tree health, clears sightlines, and keeps branches away from your home and power lines.",
          benefit: "Healthier trees, safer property",
        },
        {
          icon: "truck",
          title: "Lot Clearing",
          description:
            "Full lot clearing for new construction, land development, or reclaiming overgrown property. We handle trees, stumps, and brush.",
          benefit: "Ready-to-build land, cleared fast",
        },
        {
          icon: "alert-triangle",
          title: "Emergency Storm Damage",
          description:
            "24/7 emergency response for fallen trees, storm damage, and hazardous limbs. We show up fast and secure your property.",
          benefit: "Fast response when every hour counts",
        },
      ],
    },

    whyUs: {
      label: "Why CJ Tree Services",
      title: "Not All Tree Crews Are the Same",
      subtitle:
        "We're licensed, insured, certified, and obsessive about leaving your property better than we found it.",
      items: [
        {
          icon: "award",
          title: "ISA Certified Arborist",
          description:
            "Every job is overseen by an ISA Certified Arborist. You're not getting a fly-by-night crew — you're getting trained professionals.",
        },
        {
          icon: "shield-check",
          title: "Fully Licensed & Insured",
          description:
            "We carry full liability and workers' comp insurance. If anything goes wrong on your property, you're protected. Period.",
        },
        {
          icon: "clock",
          title: "24/7 Emergency Response",
          description:
            "Storm doesn't wait for business hours, and neither do we. Call us any time — nights, weekends, holidays. We answer.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Real person, same-day callback guaranteed. We know your tree problem can't wait three days for a voicemail response.",
        },
        {
          icon: "star",
          title: "Full Cleanup Included",
          description:
            "We haul away every branch, log, and wood chip. Your yard will be cleaner when we leave than when we arrived.",
        },
        {
          icon: "map-pin",
          title: "15+ Years Serving Boston",
          description:
            "We know the neighborhoods, the town permit requirements, and the trees that give Boston homeowners the most trouble.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "From Call to Clean Yard in Three Steps",
      subtitle:
        "No runaround, no mystery pricing. Here's exactly what to expect when you call CJ Tree Services.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Reach us by phone or request a quote online anytime. We confirm same-day and schedule your free estimate at your convenience.",
        },
        {
          title: "Free On-Site Assessment",
          description:
            "One of our certified arborists walks your property, evaluates the trees, and gives you a clear, honest quote. No pressure, no surprises.",
        },
        {
          title: "We Get It Done",
          description:
            "Our crew arrives on time, works safely and efficiently, and leaves your yard completely clean. Most jobs are finished same-day.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston & South Shore",
      subtitle:
        "Based in Dedham, we serve homeowners and property managers throughout Greater Boston and the surrounding communities.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Boston Homeowners Trust CJ Tree Services",
      items: [
        {
          quote:
            "A massive oak came down in our backyard during a nor'easter. I called CJ at 7am and they had a crew here by noon. The tree was gone, the yard was clean, and the damage to our fence was minimal thanks to how carefully they worked. Couldn't ask for more.",
          name: "Karen M.",
          role: "Homeowner, Milton",
          rating: 5,
        },
        {
          quote:
            "We had three large trees that needed to come down before we could build our addition. CJ gave us the most competitive quote, showed up exactly when they said, and finished the whole job in one day. Zero mess left behind.",
          name: "Dave S.",
          role: "Homeowner, Needham",
          rating: 5,
        },
        {
          quote:
            "I've used two other tree services in the area. CJ Tree Services is on a different level. The crew was professional, the quote was honest, and they actually cleaned up. That last part seems obvious but trust me — it's not with everyone.",
          name: "Lisa P.",
          role: "Property Manager, Dedham",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "How much does tree removal cost in Boston?",
          answer:
            "Tree removal pricing depends on the size of the tree, its location, and how difficult it is to access. Most residential removals in the Boston area range from $400 to $1,500. We provide a free on-site estimate so you know the exact price before we start — no surprises.",
        },
        {
          question: "Do I need a permit to remove a tree in my town?",
          answer:
            "It depends on your municipality. Many Boston-area towns require permits for trees above a certain diameter or located in protected zones. We handle the permit research for you and can advise on your specific situation during the estimate.",
        },
        {
          question: "How fast can you respond to storm damage?",
          answer:
            "We offer 24/7 emergency response. For true emergencies — a tree on your house or blocking access — we aim to be on-site within a few hours. Call us directly at any hour and we'll get someone dispatched.",
        },
        {
          question: "Is stump grinding included in tree removal?",
          answer:
            "Stump grinding is typically quoted separately since it depends on the stump size and root system. We always include it as an add-on option when we give your estimate, and it's usually very affordable to include while the crew is already on-site.",
        },
        {
          question: "Are you insured to work near my house?",
          answer:
            "Yes. We carry full general liability insurance and workers' compensation coverage. We're happy to provide a certificate of insurance before any work begins. Never let an uninsured crew work near your home.",
        },
        {
          question: "What happens to the wood and debris after removal?",
          answer:
            "We haul everything away — logs, branches, brush, and wood chips. If you'd like to keep the firewood or wood chips for your garden, just let us know and we'll leave them for you. Either way, your yard will be clean when we leave.",
        },
      ],
    },

    finalCTA: {
      headline: "Hazardous Tree? Storm Damage? Get a Free Quote Today.",
      subheadline:
        "Call us or book online 24/7. We'll have an arborist at your property fast — and your yard looking great before we leave.",
    },

    footer: {
      description:
        "CJ Tree Services — Greater Boston's trusted tree removal, pruning, and lot clearing specialists. ISA Certified. Fully insured. 24/7 emergency response.",
      serviceLinks: [
        { label: "Tree Removal", href: "#services" },
        { label: "Tree Pruning & Trimming", href: "#services" },
        { label: "Lot Clearing", href: "#services" },
        { label: "Emergency Storm Damage", href: "#services" },
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
