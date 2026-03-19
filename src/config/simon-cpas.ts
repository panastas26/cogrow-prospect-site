import { SiteConfig } from "./types";

export const simonCPAsConfig: SiteConfig = {
  business: {
    name: "Simon CPAs",
    vertical: "CPA / Accounting Firm",
    businessType: "Professional Services Firm",
    geography: "Boston, MA",
    phone: "(617) 627-9995",
    email: "info@simon-cpas.com",
    address: "Braintree, MA",
    targetAudience:
      "Small business owners, self-employed professionals, and individuals in the Boston area",
  },

  conversion: {
    primaryCTA: {
      label: "Schedule a Free Consultation",
      href: "#contact",
    },
    secondaryCTA: {
      label: "See Our Services",
      href: "#services",
    },
  },

  trust: {
    yearsInBusiness: "20+",
    credentials: ["CPA-Certified Team", "Licensed in Massachusetts"],
    serviceArea: [
      "Boston",
      "Cambridge",
      "Brookline",
      "Newton",
      "Dedham",
      "Quincy",
      "Waltham",
    ],
    differentiators: [
      "20+ years of Boston expertise",
      "CPA-certified team",
      "Proactive year-round advisory, not just tax season",
    ],
    guarantee: "No surprise fees. Clear pricing upfront.",
    metrics: [
      { value: "20+", label: "Years Serving Boston" },
      { value: "500+", label: "Small Business Clients" },
      { value: "$2M+", label: "In Tax Savings Found" },
      { value: "5.0", label: "Google Rating" },
    ],
  },

  seo: {
    title: "Simon CPAs | Trusted Boston CPA Firm for Small Business",
    description:
      "Simon CPAs provides tax preparation, bookkeeping, business advisory, and payroll services to small businesses in Boston, Cambridge, Brookline, and surrounding areas. 20+ years of local expertise.",
    primaryTerms: [
      "CPA firm Boston",
      "small business accountant Boston",
      "tax preparation Boston MA",
    ],
  },

  brand: {
    tone: "calm, authoritative, credible",
    colors: {
      primary: "#1e3a5f",
      primaryDark: "#0f2440",
      accent: "#c9a96e",
      light: "#f7f8fa",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Trusted Boston CPA Firm \u2014 20+ Years",
      headline: "Your Business Deserves an Accountant\nWho Actually Knows Boston",
      subheadline:
        "Tax strategy, clean books, and proactive advisory for small businesses across Greater Boston. Not just at tax season \u2014 year-round.",
    },

    services: {
      label: "Our Services",
      title: "Everything Your Business Needs to Stay Ahead",
      subtitle:
        "From daily bookkeeping to long-term tax strategy, we handle the numbers so you can focus on running your business.",
      items: [
        {
          icon: "calculator",
          title: "Tax Preparation & Planning",
          description:
            "Proactive tax strategy that reduces your burden \u2014 not just filing at the deadline.",
          benefit: "Keep more of what you earn with year-round planning",
        },
        {
          icon: "book-open",
          title: "Bookkeeping & Accounting",
          description:
            "Clean, accurate books updated monthly so you always know where you stand.",
          benefit: "Make decisions with real numbers, not guesses",
        },
        {
          icon: "chart-bar",
          title: "Business Advisory",
          description:
            "Strategic guidance on cash flow, growth decisions, and financial planning.",
          benefit: "A trusted advisor for every big decision",
        },
        {
          icon: "users",
          title: "Payroll Services",
          description:
            "W-2s, payroll taxes, direct deposit, and compliance handled end-to-end.",
          benefit: "Never worry about payroll deadlines again",
        },
      ],
    },

    whyUs: {
      label: "Why Simon CPAs",
      title: "Not All CPA Firms Are the Same",
      subtitle:
        "We\u2019ve built our reputation on being responsive, proactive, and genuinely invested in our clients\u2019 success.",
      items: [
        {
          icon: "map-pin",
          title: "20+ Years in Greater Boston",
          description:
            "We know the local tax landscape, the business community, and the challenges that Boston-area owners face.",
        },
        {
          icon: "shield-check",
          title: "CPA-Certified Team",
          description:
            "Every member of our team holds active CPA credentials. Your finances are in qualified hands.",
        },
        {
          icon: "calendar",
          title: "Year-Round Advisory",
          description:
            "We don\u2019t disappear after April 15th. We\u2019re your financial partner every month, every quarter.",
        },
        {
          icon: "phone",
          title: "We Actually Pick Up the Phone",
          description:
            "Same-day responses. A real person when you call. No waiting days for a callback.",
        },
        {
          icon: "dollar-sign",
          title: "No Surprise Fees",
          description:
            "Clear, upfront pricing before we start. You\u2019ll always know exactly what you\u2019re paying.",
        },
        {
          icon: "trending-up",
          title: "Proactive, Not Reactive",
          description:
            "We find opportunities and flag risks before they become problems \u2014 not after.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Getting Started Is Simple",
      subtitle:
        "Three steps to clear books, a real tax strategy, and an accountant you can actually reach.",
      steps: [
        {
          title: "Book a Free Consultation",
          description:
            "Schedule online or call us. We\u2019ll confirm same-day and learn about your situation before we meet.",
        },
        {
          title: "We Learn Your Business",
          description:
            "A 30-minute conversation about your numbers, your goals, and where things feel unclear. No pressure.",
        },
        {
          title: "Get a Clear Plan",
          description:
            "We\u2019ll build a plan around your specific business \u2014 clean books, a real tax strategy, and a team you can reach.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston for Over 20 Years",
      subtitle:
        "Our office is in Braintree, and we work with businesses across the Greater Boston area.",
    },

    testimonials: {
      label: "Client Stories",
      title: "Boston Business Owners Trust Simon CPAs",
      items: [
        {
          quote:
            "I\u2019d been with my previous accountant for 6 years and never felt like they actually knew my business. Simon CPAs understood my situation on the first call. My tax bill dropped significantly the first year.",
          name: "Mike D.",
          role: "Residential Contractor, Quincy",
          rating: 5,
        },
        {
          quote:
            "I opened a second location last year and was terrified about the financial side. Simon CPAs helped me structure it right and manage cash flow through the build-out. I actually knew where I stood every month.",
          name: "Priya R.",
          role: "Restaurant Owner, South Boston",
          rating: 5,
        },
        {
          quote:
            "What got me was the follow-up. I booked online, got a personalized email right away, and they already knew what I needed when I showed up. That\u2019s not something you get from most CPA firms.",
          name: "Tom B.",
          role: "Real Estate Investor, Braintree",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "How much does it cost to work with Simon CPAs?",
          answer:
            "It depends on the scope of work, but we always provide a clear quote upfront before starting. No surprise invoices, no hidden fees. Most small business clients pay a fixed monthly fee for bookkeeping and tax work.",
        },
        {
          question: "Do you only work with small businesses?",
          answer:
            "Small businesses are our specialty, but we also serve self-employed professionals and individuals with complex tax situations. If your finances have outgrown TurboTax, we\u2019re a good fit.",
        },
        {
          question: "What\u2019s included in the free consultation?",
          answer:
            "A 30-minute conversation where we learn about your business, review your current setup, and identify opportunities. There\u2019s no pitch and no obligation \u2014 just a practical conversation.",
        },
        {
          question: "Can you work with my existing bookkeeping software?",
          answer:
            "Yes. We work with QuickBooks, Xero, FreshBooks, and most major platforms. If you need to switch, we\u2019ll handle the migration for you.",
        },
        {
          question: "How is Simon CPAs different from other Boston CPA firms?",
          answer:
            "We\u2019re proactive, not reactive. We don\u2019t wait for tax season to start planning. We respond same-day, we pick up the phone, and we treat your business like it matters \u2014 because it does.",
        },
        {
          question: "Do I need to come to your office?",
          answer:
            "No. We work with clients in-person and remotely. Most of our clients handle everything over phone, email, and video calls. If you prefer to meet face-to-face, our Braintree office is always open.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Get Your Numbers Under Control?",
      subheadline:
        "Book a free 30-minute consultation. No pressure, no pitch \u2014 just an honest conversation about your business.",
    },

    footer: {
      description:
        "Boston\u2019s trusted CPA firm for small businesses. Tax preparation, bookkeeping, advisory, and payroll for businesses across Greater Boston.",
      serviceLinks: [
        { label: "Tax Preparation", href: "#services" },
        { label: "Bookkeeping", href: "#services" },
        { label: "Business Advisory", href: "#services" },
        { label: "Payroll Services", href: "#services" },
      ],
      companyLinks: [
        { label: "About Us", href: "#" },
        { label: "Our Process", href: "#process" },
        { label: "Service Area", href: "#service-area" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
};
