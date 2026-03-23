import { SiteConfig } from "./types";

export const stephcoCleaningConfig: SiteConfig = {
  business: {
    name: "Stephco Cleaning",
    vertical: "Commercial & Residential Cleaning",
    businessType: "Cleaning Services Company",
    geography: "Boston, MA",
    phone: "(617) 555-0231",
    email: "info@stephco-cleaning.com",
    address: "Somerville, MA",
    targetAudience:
      "Office managers, property managers, and business owners in Greater Boston who need reliable commercial or residential cleaning on a recurring basis",
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
      "Licensed & Insured in Massachusetts",
      "OSHA Compliant",
      "Background-Checked Team",
    ],
    serviceArea: [
      "Boston",
      "Cambridge",
      "Somerville",
      "Medford",
      "Everett",
      "Waltham",
      "Watertown",
    ],
    differentiators: [
      "We answer every call and respond to quotes same-day",
      "Book online 24/7 — no back-and-forth needed",
      "Background-checked, uniformed cleaning crews",
      "12+ years serving Boston businesses",
      "Eco-friendly cleaning products available",
      "Consistent crews — same team every visit",
    ],
    guarantee:
      "If you're not satisfied, we'll come back and make it right — no charge.",
    metrics: [
      { value: "12+", label: "Years in Business" },
      { value: "300+", label: "Commercial Accounts" },
      { value: "4.8", label: "Google Rating" },
      { value: "100%", label: "Background-Checked Staff" },
    ],
  },

  seo: {
    title: "Stephco Cleaning | Boston Commercial & Office Cleaning Services",
    description:
      "Stephco Cleaning provides commercial cleaning, janitorial services, office cleaning, and post-construction cleanup across Greater Boston. Reliable, consistent, and always responsive. Get a free quote today.",
    primaryTerms: [
      "commercial cleaning Boston",
      "office cleaning Boston MA",
      "janitorial services Boston",
    ],
    secondaryTerms: [
      "post-construction cleaning Boston",
      "recurring office cleaning Boston",
      "building cleaning services Greater Boston",
    ],
  },

  brand: {
    tone: "professional, reliable, warm, results-focused",
    colors: {
      primary: "#ff6900",
      primaryDark: "#cc5400",
      accent: "#ffd700",
      light: "#fff8f0",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Boston's Reliable Cleaning Company — 12+ Years",
      headline: "A Cleaner Workspace.\nA Team You Can Count On.",
      subheadline:
        "Stephco Cleaning delivers consistent, professional cleaning for offices, commercial properties, and homes across Greater Boston. Same crew, every visit. We answer every call.",
    },

    services: {
      label: "Our Services",
      title: "Cleaning Services Built Around Your Schedule",
      subtitle:
        "From daily office maintenance to one-time deep cleans, we customize every service plan to fit your space and your budget.",
      items: [
        {
          icon: "briefcase",
          title: "Commercial Cleaning",
          description:
            "Recurring cleaning for retail spaces, medical offices, gyms, and commercial properties of all sizes. We work around your hours.",
          benefit: "A spotless space that reflects well on your business",
        },
        {
          icon: "monitor",
          title: "Office & Janitorial",
          description:
            "Daily, weekly, or monthly janitorial service including restrooms, common areas, kitchens, and workstations. Consistent crew, consistent results.",
          benefit: "Your team walks in to a clean office every single day",
        },
        {
          icon: "home",
          title: "Residential Cleaning",
          description:
            "One-time deep cleans and recurring residential service for apartments, condos, and single-family homes throughout Greater Boston.",
          benefit: "More time for what matters — we handle the clean",
        },
        {
          icon: "hard-hat",
          title: "Post-Construction Cleanup",
          description:
            "Final cleans after renovations, build-outs, and new construction. We remove dust, debris, and construction residue so the space is move-in ready.",
          benefit: "Ready to open on day one, not day five",
        },
      ],
    },

    whyUs: {
      label: "Why Stephco Cleaning",
      title: "The Same Crew. Every Time. On Time.",
      subtitle:
        "Boston businesses stay with us because we're reliable, responsive, and we actually pick up the phone.",
      items: [
        {
          icon: "users",
          title: "Consistent, Familiar Crews",
          description:
            "We assign dedicated teams to your account. You'll recognize the faces, they'll know your space, and the quality stays consistent week after week.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Scheduling change? Extra service needed? Issue to report? Call us and a real person picks up. No phone trees, no waiting days for a response.",
        },
        {
          icon: "shield-check",
          title: "Fully Vetted, Background-Checked",
          description:
            "Every Stephco employee undergoes a full background check before they ever enter a client's building. Your property and your people are in safe hands.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Request a quote or schedule service any time through our website. No need to play phone tag — we'll confirm and follow up within the hour during business hours.",
        },
        {
          icon: "leaf",
          title: "Eco-Friendly Options",
          description:
            "We offer green cleaning programs using non-toxic, EPA-approved products — ideal for medical offices, schools, and businesses with sustainability goals.",
        },
        {
          icon: "map-pin",
          title: "12+ Years Serving Boston",
          description:
            "We've built lasting relationships with hundreds of Boston businesses. Our reputation for showing up, doing the work, and making it right is what keeps clients coming back year after year.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Clean Space in Three Simple Steps",
      subtitle:
        "From your first call to your first clean, we make the process as easy as possible.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Tell us about your space and what you need. Call us directly or fill out the online form — we'll get back to you the same day with a clear quote.",
        },
        {
          title: "Walkthrough & Custom Plan",
          description:
            "We schedule a quick walkthrough of your space to assess the scope, understand your priorities, and put together a cleaning plan tailored to your needs.",
        },
        {
          title: "We Get to Work",
          description:
            "Your assigned crew shows up on schedule, fully equipped, and gets the job done. We check in after every visit to make sure you're satisfied.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Boston, Cambridge, and the Inner Metro",
      subtitle:
        "Our home base is Somerville, and our crews cover Boston, Cambridge, Medford, Everett, Waltham, Watertown, and the surrounding metro area.",
    },

    testimonials: {
      label: "What Our Clients Say",
      title: "Boston Businesses Trust Stephco",
      items: [
        {
          quote:
            "We've had Stephco cleaning our office for three years. Same crew, every week, never a missed visit. Our office has never looked better and when we've had special requests they've always come through without a hassle.",
          name: "Rachel T.",
          role: "Office Manager, Cambridge",
          rating: 5,
        },
        {
          quote:
            "After our renovation we needed a serious post-construction clean before the grand reopening. Stephco sent a crew the very next day and the place looked brand new. I was genuinely shocked at how thorough they were.",
          name: "Marco V.",
          role: "Restaurant Owner, Somerville",
          rating: 5,
        },
        {
          quote:
            "I've tried two other cleaning companies and both were unreliable. Stephco has been different from day one — responsive, professional, and consistent. The same people show up and they actually care about the work.",
          name: "Janet H.",
          role: "Property Manager, Waltham",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "What to Know Before You Book",
      items: [
        {
          question: "How do you price your cleaning services?",
          answer:
            "Pricing depends on the size of the space, frequency, and scope of service. We provide a detailed written quote after a walkthrough or a brief phone/email assessment. No vague estimates — you'll know exactly what you're paying before we start.",
        },
        {
          question: "Do you provide the cleaning supplies and equipment?",
          answer:
            "Yes. Our crews arrive fully equipped with all tools, cleaning agents, and equipment needed for the job. If you have specific products you prefer or require us to use, just let us know and we'll accommodate.",
        },
        {
          question: "Can we request the same cleaning crew each visit?",
          answer:
            "Absolutely — and that's our default. We assign a dedicated team to every recurring account. Consistency means your crew knows your space, your preferences, and your standards.",
        },
        {
          question: "What happens if I'm not happy with the clean?",
          answer:
            "We'll come back and fix it at no charge. Our satisfaction guarantee is straightforward: if something wasn't done right, we'll make it right. No arguments, no runaround.",
        },
        {
          question: "Do you offer cleaning outside of business hours?",
          answer:
            "Yes. Most of our commercial clients prefer evening or early morning cleaning so it doesn't disrupt the workday. We work around your schedule, not the other way around.",
        },
        {
          question: "Are your cleaners background-checked and insured?",
          answer:
            "Every Stephco employee is background-checked before their first day, and we carry full general liability and workers' compensation insurance. We'll provide certificates of insurance upon request.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready for a Cleaning Company You Can Actually Rely On?",
      subheadline:
        "Get a free quote today. We respond the same day, and we'll have a plan ready for you within 24 hours.",
    },

    footer: {
      description:
        "Greater Boston's trusted commercial and residential cleaning company. Office cleaning, janitorial services, post-construction cleanup, and more across Boston, Cambridge, Somerville, and the metro area.",
      serviceLinks: [
        { label: "Commercial Cleaning", href: "#services" },
        { label: "Office & Janitorial", href: "#services" },
        { label: "Residential Cleaning", href: "#services" },
        { label: "Post-Construction Cleanup", href: "#services" },
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
