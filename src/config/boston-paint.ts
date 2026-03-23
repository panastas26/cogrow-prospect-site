import { SiteConfig } from "./types";

export const bostonPaintConfig: SiteConfig = {
  business: {
    name: "Boston Paint",
    vertical: "Painting Contractor",
    businessType: "Painting Contractor",
    geography: "Boston, MA",
    phone: "(617) 555-0247",
    email: "info@boston-paint.com",
    address: "Somerville, MA",
    targetAudience:
      "Homeowners and business owners in Greater Boston looking for professional interior and exterior painting services",
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
      "Licensed Painting Contractor — Massachusetts",
      "Fully Insured",
      "Lead-Safe Certified (EPA RRP)",
    ],
    serviceArea: [
      "Boston",
      "Somerville",
      "Cambridge",
      "Medford",
      "Malden",
      "Everett",
      "Arlington",
    ],
  differentiators: [
      "12+ years painting homes and businesses across Greater Boston",
      "Lead-safe certified for older Boston triple-deckers and Victorians",
      "Detailed prep work — we don't cut corners before we pick up a brush",
      "On-time crews, clean jobsites, no-damage guarantee",
      "We answer every call and book online 24/7",
      "Interior and exterior, residential and commercial — one crew for it all",
    ],
    guarantee: "We protect every surface we don't paint. No drips, no damage, no exceptions.",
    metrics: [
      { value: "12+", label: "Years in Business" },
      { value: "1,800+", label: "Projects Completed" },
      { value: "4.9", label: "Google Rating" },
      { value: "100%", label: "Lead-Safe Certified" },
    ],
  },

  seo: {
    title: "Boston Paint | Interior & Exterior Painting Contractor Boston MA",
    description:
      "Boston Paint delivers professional interior and exterior painting for homes and businesses across Greater Boston. Licensed, insured, lead-safe certified. Free estimates.",
    primaryTerms: [
      "painting contractor Boston MA",
      "interior painter Boston",
      "exterior painting Boston",
    ],
    secondaryTerms: [
      "house painting Boston",
      "commercial painting Boston",
      "residential painter Cambridge MA",
      "lead safe painter Boston",
    ],
  },

  brand: {
    tone: "professional, meticulous, local — we treat your home like our own",
    colors: {
      primary: "#428bca",
      primaryDark: "#2d6ca2",
      accent: "#e8a838",
      light: "#f0f5fa",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Boston's Trusted Painting Contractor — 12+ Years",
      headline: "A Fresh Coat Changes Everything.\nWe Make It Last.",
      subheadline:
        "Interior and exterior painting done right — on time, on budget, and with the prep work that makes the difference. We answer every call and book online 24/7.",
    },

    services: {
      label: "Our Services",
      title: "Interior & Exterior Painting for Every Property",
      subtitle:
        "From single rooms to full commercial buildings, Boston Paint handles projects of every size with the same attention to detail.",
      items: [
        {
          icon: "home",
          title: "Interior Painting",
          description:
            "Walls, ceilings, trim, and cabinetry painted with precision. We prep thoroughly, protect your floors and furniture, and deliver a flawless finish.",
          benefit: "Rooms that look professionally transformed, not just repainted",
        },
        {
          icon: "sun",
          title: "Exterior Painting",
          description:
            "Full exterior painting including siding, trim, doors, and porches. We prep, prime, and apply quality coatings built to survive New England winters.",
          benefit: "Curb appeal that holds up through Boston weather",
        },
        {
          icon: "building",
          title: "Commercial Painting",
          description:
            "Office buildings, retail spaces, restaurants, and multi-family properties painted on your schedule — nights and weekends available.",
          benefit: "Minimal disruption, maximum professionalism",
        },
        {
          icon: "layers",
          title: "Deck & Fence Staining",
          description:
            "Power washing, wood repair, and premium stain application for decks, fences, and exterior woodwork that faces the elements year-round.",
          benefit: "Protect your investment for years to come",
        },
      ],
    },

    whyUs: {
      label: "Why Boston Paint",
      title: "The Difference Is in the Prep",
      subtitle:
        "Most painting problems start before the first brushstroke. We do the prep work other crews skip — that's why our jobs look better and last longer.",
      items: [
        {
          icon: "check-circle",
          title: "Thorough Prep, Every Time",
          description:
            "We fill cracks, sand surfaces, prime bare wood, and mask everything carefully. The prep is what separates a paint job that lasts from one that peels.",
        },
        {
          icon: "shield-check",
          title: "Lead-Safe Certified",
          description:
            "Boston is full of older homes. We're EPA RRP lead-safe certified — required for any pre-1978 property. Don't risk it with a crew that isn't.",
        },
        {
          icon: "clock",
          title: "On Time, Every Job",
          description:
            "We show up when we say we will. Your project timeline is respected, and we work efficiently to minimize disruption to your home or business.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "No chasing down your contractor. Call or text us and get a real response, fast. Book online anytime — we confirm the same day.",
        },
        {
          icon: "star",
          title: "Spotless Jobsites",
          description:
            "We protect everything we don't paint and leave your space cleaner than we found it. No paint on your floors, no tape left behind.",
        },
        {
          icon: "map-pin",
          title: "12+ Years in Greater Boston",
          description:
            "We know Boston's housing stock — triple-deckers, Victorians, brownstones, and modern condos. We've painted them all.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Simple Process, Beautiful Results",
      subtitle:
        "Getting your home or business painted with Boston Paint is straightforward from first call to final walkthrough.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Reach us by phone or submit a quote request online anytime. We respond same-day and schedule your free estimate at a time that works for you.",
        },
        {
          title: "Free On-Site Estimate",
          description:
            "We walk your property, take measurements, discuss colors and finishes, and give you a clear, itemized quote. No surprises on the invoice.",
        },
        {
          title: "We Paint — You Love It",
          description:
            "Our crew arrives on time, preps meticulously, and delivers a finish worth showing off. We do a final walkthrough together before we call it done.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Painting Greater Boston, Inside and Out",
      subtitle:
        "Based in Somerville, we serve homeowners and businesses throughout Boston and the surrounding communities.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Boston Homeowners & Business Owners Trust Boston Paint",
      items: [
        {
          quote:
            "We had the entire exterior of our triple-decker painted and it looks incredible. The crew was on time every day, they took care of our landscaping, and the prep work they did on the old wood was impressive. Neighbors keep asking who we used.",
          name: "Maria C.",
          role: "Homeowner, Somerville",
          rating: 5,
        },
        {
          quote:
            "I manage a small office building and have been burned by painting contractors before — no-shows, sloppy work, going over budget. Boston Paint quoted me straight, showed up exactly when they said, and the building looked great. First time I've been actually impressed.",
          name: "Greg T.",
          role: "Property Manager, Cambridge",
          rating: 5,
        },
        {
          quote:
            "They repainted our entire first floor and the results are stunning. What stood out was how careful they were — everything was covered and taped, there wasn't a single paint drip anywhere it shouldn't be. Booking was easy online. Will absolutely use again.",
          name: "Jess W.",
          role: "Homeowner, Arlington",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "How much does it cost to paint a house in Boston?",
          answer:
            "Interior painting for an average Boston home typically runs $2,000–$5,000 depending on room count, condition, and finish quality. Exterior painting ranges from $3,000–$8,000+ depending on the size and condition of the siding. We provide a free, detailed quote so you know exactly what to expect.",
        },
        {
          question: "My house was built before 1978 — is that an issue?",
          answer:
            "We're EPA RRP lead-safe certified, which is specifically required for work on pre-1978 properties. We follow all safe work practices to protect your family and our crew. Many contractors aren't certified — make sure yours is.",
        },
        {
          question: "How long does exterior painting take?",
          answer:
            "A typical single-family exterior takes 3–5 days depending on size and condition. Multi-family buildings or properties with extensive prep needs may take longer. We give you a projected timeline with your quote and keep you updated throughout the job.",
        },
        {
          question: "Do I need to move furniture before you start?",
          answer:
            "We handle light furniture moving and protect everything in place with drop cloths and plastic sheeting. For large items or valuables, we'll coordinate with you beforehand. Most homeowners don't need to do much to prepare.",
        },
        {
          question: "Do you help with color selection?",
          answer:
            "Yes. We can bring sample chips, show you fan decks from major brands, and advise on what works well with your home's architecture and lighting. If you want more hands-on help, we can recommend a color consultant.",
        },
        {
          question: "What paint brands do you use?",
          answer:
            "We work with Benjamin Moore, Sherwin-Williams, and Behr — all premium-grade products with strong coverage and long-lasting finishes. We'll recommend the right product for each surface and can discuss options based on your budget.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Transform Your Space? Get a Free Quote Today.",
      subheadline:
        "Call us or book online 24/7. We'll have an estimate to you fast and a crew ready to get started.",
    },

    footer: {
      description:
        "Boston Paint — professional interior and exterior painting for homes and businesses across Greater Boston. Licensed, insured, and lead-safe certified.",
      serviceLinks: [
        { label: "Interior Painting", href: "#services" },
        { label: "Exterior Painting", href: "#services" },
        { label: "Commercial Painting", href: "#services" },
        { label: "Deck & Fence Staining", href: "#services" },
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
