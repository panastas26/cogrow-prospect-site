import { SiteConfig } from "./types";

export const retireMaxConfig: SiteConfig = {
  business: {
    name: "RetireMax Insurance",
    vertical: "Insurance Agency",
    businessType: "Independent Insurance & Retirement Planning Agency",
    geography: "Boston, MA",
    phone: "(617) 555-0291",
    email: "info@retiremax-insurance.com",
    address: "Boston, MA",
    targetAudience:
      "Pre-retirees, retirees, and small business owners in Greater Boston seeking life insurance, Medicare, and retirement income planning",
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
    yearsInBusiness: "18+",
    credentials: [
      "Licensed Insurance Agent \u2014 Massachusetts",
      "Independent Broker \u2014 Multiple Carriers",
      "AHIP Medicare Certified",
    ],
    serviceArea: [
      "Boston",
      "Brookline",
      "Newton",
      "Dedham",
      "Quincy",
      "Needham",
      "Braintree",
    ],
    differentiators: [
      "Independent broker \u2014 we work for you, not the insurance company",
      "18+ years helping Boston families retire with confidence",
      "We answer every call and explain every option in plain English",
      "Medicare enrollment and annual reviews at no cost to you",
      "Book a consultation online 24/7",
      "No pressure, no sales scripts \u2014 just honest advice",
    ],
    guarantee: "Independent advice, always. We\u2019re not tied to any one carrier.",
    metrics: [
      { value: "18+", label: "Years in Boston" },
      { value: "1,200+", label: "Families Protected" },
      { value: "4.9", label: "Google Rating" },
      { value: "30+", label: "Carriers Compared" },
    ],
  },

  seo: {
    title: "RetireMax Insurance | Medicare & Life Insurance Boston MA",
    description:
      "RetireMax Insurance is an independent insurance agency in Boston helping families and retirees navigate Medicare, life insurance, and retirement income planning. Free consultations. 18+ years of local expertise.",
    primaryTerms: [
      "Medicare insurance agent Boston",
      "life insurance Boston MA",
      "retirement planning insurance Boston",
    ],
  },

  brand: {
    tone: "warm, trustworthy, reassuring",
    colors: {
      primary: "#911215",
      primaryDark: "#6e0d0f",
      accent: "#1b2a4a",
      light: "#faf5f5",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Independent Insurance Broker \u2014 Boston, MA",
      headline: "Retirement Shouldn\u2019t Be\nComplicated",
      subheadline:
        "We help Greater Boston families navigate Medicare, protect their income, and retire with confidence. Independent advice, real answers, and someone who actually picks up the phone.",
    },

    services: {
      label: "Our Services",
      title: "Insurance That Works for Your Retirement",
      subtitle:
        "As an independent broker, we shop across 30+ carriers to find the coverage that fits your life and your budget.",
      items: [
        {
          icon: "heart",
          title: "Medicare Plans",
          description:
            "Medicare Advantage, Supplement (Medigap), and Part D drug plans explained clearly. We handle enrollment and review your plan every year at no cost.",
          benefit: "Never pay more for Medicare than you have to",
        },
        {
          icon: "shield",
          title: "Life Insurance",
          description:
            "Term, whole, and universal life insurance from top-rated carriers. We match you to the right policy at the right price.",
          benefit: "Protect your family without overpaying",
        },
        {
          icon: "trending-up",
          title: "Annuities & Retirement Income",
          description:
            "Fixed and indexed annuities that guarantee income you can\u2019t outlive. We explain every option with no pressure.",
          benefit: "A paycheck in retirement, guaranteed for life",
        },
        {
          icon: "briefcase",
          title: "Business Owner Insurance",
          description:
            "Key person life insurance, buy-sell agreements, and group health coverage for small business owners.",
          benefit: "Protect your business and your partners",
        },
      ],
    },

    whyUs: {
      label: "Why RetireMax",
      title: "We Work for You \u2014 Not the Insurance Company",
      subtitle:
        "As an independent agency, our loyalty is to you. We compare every option so you get the best coverage at the best price.",
      items: [
        {
          icon: "shield-check",
          title: "Truly Independent Advice",
          description:
            "We\u2019re not captive to any single carrier. We compare 30+ companies to find what\u2019s actually best for your situation.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "A real person picks up when you call \u2014 before enrollment season and after. No 800 number runaround.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule a consultation any time. We confirm same-day and come prepared with options tailored to your situation.",
        },
        {
          icon: "users",
          title: "18+ Years in Greater Boston",
          description:
            "We\u2019ve guided over 1,200 Boston-area families through Medicare, retirement income, and life insurance decisions.",
        },
        {
          icon: "dollar-sign",
          title: "No Fees to You",
          description:
            "Our services are free to you. We\u2019re paid by the carriers \u2014 which means you get expert guidance at zero cost.",
        },
        {
          icon: "refresh-cw",
          title: "Annual Plan Reviews",
          description:
            "We review your coverage every year to make sure you\u2019re still on the best plan. Most clients save money at their first review.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Getting the Right Coverage Is Simple",
      subtitle:
        "Three steps to coverage you understand and can afford \u2014 with no pressure along the way.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Schedule a free consultation online anytime or call us directly. We\u2019ll confirm same-day and prepare options before we talk.",
        },
        {
          title: "We Review Your Situation",
          description:
            "We listen to your goals, explain your options in plain English, and compare plans across 30+ carriers \u2014 no sales pressure.",
        },
        {
          title: "Get Covered with Confidence",
          description:
            "We handle all the paperwork and enrollment. Then we check in every year to make sure you\u2019re still on the best plan.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston Families for 18+ Years",
      subtitle:
        "Based in Boston, we meet clients in-person or by phone and video across the entire Greater Boston area.",
    },

    testimonials: {
      label: "Client Stories",
      title: "Boston Families Trust RetireMax",
      items: [
        {
          quote:
            "I was completely overwhelmed trying to pick a Medicare plan on my own. RetireMax walked me through every option, explained the tradeoffs clearly, and helped me save $140 a month compared to what I was going to sign up for on my own. I can\u2019t believe this service is free.",
          name: "Carol M.",
          role: "Retired Teacher, Newton",
          rating: 5,
        },
        {
          quote:
            "My husband passed last year and I had no idea what insurance I had or what I needed. RetireMax sat with me for two hours, sorted out my existing policies, and put together a plan that actually makes sense. They treated me like family.",
          name: "Linda P.",
          role: "Retired Nurse, Quincy",
          rating: 5,
        },
        {
          quote:
            "As a small business owner I needed key person insurance and had no idea where to start. RetireMax compared a dozen carriers and had me covered in under a week. Best part: they actually answer the phone when I have questions.",
          name: "Rob T.",
          role: "Business Owner, Dedham",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "What does it cost to work with RetireMax?",
          answer:
            "Nothing. Our services are completely free to you. We\u2019re compensated by the insurance carriers when you enroll in a plan. There is no charge for consultations, plan comparisons, or annual reviews.",
        },
        {
          question: "When can I enroll in Medicare?",
          answer:
            "You\u2019re first eligible at 65. The Initial Enrollment Period runs for 7 months around your 65th birthday. If you miss it, there are Special Enrollment Periods and the Annual Enrollment Period (Oct 15 \u2013 Dec 7). We help you understand your specific window so you don\u2019t miss it.",
        },
        {
          question: "What\u2019s the difference between Medicare Advantage and Medigap?",
          answer:
            "Medicare Advantage replaces Original Medicare through a private plan (often with networks and copays). Medigap supplements Original Medicare and covers many out-of-pocket costs. Which is right for you depends on your health, doctors, and finances \u2014 we walk through both options with you in detail.",
        },
        {
          question: "Can you help me if I already have Medicare?",
          answer:
            "Absolutely. We review your current plan every year during Annual Enrollment. Most clients save money when we do a plan comparison \u2014 even if they\u2019ve been on the same plan for years.",
        },
        {
          question: "Do I need to be near retirement to talk to you?",
          answer:
            "No. Life insurance conversations are best had earlier, and many clients come to us in their 50s to start retirement income planning. The earlier we talk, the more options you have.",
        },
        {
          question: "Can you meet with me in person?",
          answer:
            "Yes. We meet clients in our Boston office, at their home, or by phone and video \u2014 whatever is most comfortable. Many clients prefer a kitchen table conversation, and we\u2019re happy to come to you.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Stop Guessing and Start Planning?",
      subheadline:
        "Book a free, no-pressure consultation. We\u2019ll compare your options and give you a clear picture of where you stand.",
    },

    footer: {
      description:
        "Independent insurance agency serving Greater Boston. Medicare, life insurance, annuities, and retirement income planning \u2014 free consultations, honest advice.",
      serviceLinks: [
        { label: "Medicare Plans", href: "#services" },
        { label: "Life Insurance", href: "#services" },
        { label: "Annuities", href: "#services" },
        { label: "Business Insurance", href: "#services" },
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
