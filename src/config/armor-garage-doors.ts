import { SiteConfig } from "./types";

export const armorGarageDoorsConfig: SiteConfig = {
  business: {
    name: "Armor Garage Doors",
    vertical: "Garage Door Repair & Installation",
    businessType: "Residential & Commercial Service Company",
    geography: "Boston, MA",
    phone: "(617) 555-0147",
    email: "info@armor-garage-doors.com",
    address: "Dedham, MA",
    targetAudience:
      "Homeowners and property managers in Greater Boston who need garage door repair, replacement, or emergency service",
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
      label: "24/7 Emergency Service",
      href: "#contact",
    },
  },

  trust: {
    yearsInBusiness: "15+",
    credentials: [
      "Licensed & Insured in Massachusetts",
      "LiftMaster Certified Dealer",
      "Clopay Master Authorized Dealer",
    ],
    serviceArea: [
      "Boston",
      "Dedham",
      "Quincy",
      "Newton",
      "Needham",
      "Milton",
      "Westwood",
    ],
    differentiators: [
      "We answer every call — day or night",
      "Same-day service for most repairs",
      "Upfront pricing with no surprise charges",
      "15+ years serving Greater Boston",
      "Certified on all major brands",
      "Book online 24/7",
    ],
    guarantee: "Satisfaction guaranteed — we stand behind every job.",
    metrics: [
      { value: "15+", label: "Years in Business" },
      { value: "8,000+", label: "Doors Repaired & Installed" },
      { value: "4.9", label: "Google Rating" },
      { value: "24/7", label: "Emergency Response" },
    ],
  },

  seo: {
    title: "Armor Garage Doors | Boston Garage Door Repair & Installation",
    description:
      "Armor Garage Doors provides same-day garage door repair, installation, and emergency service across Greater Boston. Serving Dedham, Quincy, Newton, Needham, and surrounding areas. Call anytime — we answer.",
    primaryTerms: [
      "garage door repair Boston",
      "garage door installation Boston MA",
      "emergency garage door service Boston",
    ],
    secondaryTerms: [
      "garage door opener replacement",
      "broken spring repair Boston",
      "commercial garage door Boston",
    ],
  },

  brand: {
    tone: "confident, reliable, direct, local",
    colors: {
      primary: "#051972",
      primaryDark: "#030f4a",
      accent: "#e63946",
      light: "#f0f2fa",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Boston's Garage Door Experts — Same-Day Service",
      headline: "Your Garage Door Fixed Fast.\nWe Answer Every Call.",
      subheadline:
        "From broken springs to full door replacements, Armor Garage Doors gets your home and business moving again. Same-day service. Upfront pricing. Available 24/7.",
    },

    services: {
      label: "Our Services",
      title: "Garage Door Solutions for Every Situation",
      subtitle:
        "Whether it's an emergency at 11pm or a planned upgrade, we show up on time and get the job done right the first time.",
      items: [
        {
          icon: "tool",
          title: "Garage Door Repair",
          description:
            "Broken springs, snapped cables, bent tracks, damaged panels — we diagnose and fix it fast, usually same day.",
          benefit: "Back to working order before the day is over",
        },
        {
          icon: "home",
          title: "Door Installation & Replacement",
          description:
            "New garage door installs for homes and commercial properties. We carry steel, carriage-house, and insulated door options.",
          benefit: "A door that looks great and lasts for decades",
        },
        {
          icon: "zap",
          title: "Opener Replacement & Repair",
          description:
            "LiftMaster, Chamberlain, Genie — we sell, install, and repair all major opener brands, including smart Wi-Fi openers.",
          benefit: "Open and close from your phone, anywhere",
        },
        {
          icon: "alert-triangle",
          title: "Emergency Service",
          description:
            "Stuck open overnight? Door off the tracks after impact? We offer true 24/7 emergency response — call and we'll pick up.",
          benefit: "Your home secured, no matter the hour",
        },
      ],
    },

    whyUs: {
      label: "Why Armor Garage Doors",
      title: "We Show Up. We Fix It. We Back It Up.",
      subtitle:
        "Boston homeowners trust us because we treat every job like it's our own home on the line.",
      items: [
        {
          icon: "clock",
          title: "Same-Day Service",
          description:
            "We keep trucks stocked and schedules open. Call before noon and we'll be there today — most of the time within hours.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "No voicemail, no call centers. A real person picks up when you call Armor — nights, weekends, and holidays included.",
        },
        {
          icon: "dollar-sign",
          title: "Upfront, Honest Pricing",
          description:
            "We quote the job before we start. What we say it costs is what you pay. No hidden fees, no upsells at the door.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule your appointment any time on our website. Pick a time that works for you and we'll confirm within the hour.",
        },
        {
          icon: "shield-check",
          title: "Licensed, Insured & Certified",
          description:
            "We're fully licensed in Massachusetts and certified dealers for LiftMaster and Clopay. Your home is in good hands.",
        },
        {
          icon: "map-pin",
          title: "15+ Years Serving Greater Boston",
          description:
            "We've built our reputation one garage door at a time across Dedham, Quincy, Newton, and a dozen other Boston communities.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Fast Service, No Hassle",
      subtitle:
        "Three steps from your first call to a fully working garage door.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Call us anytime — we answer 24/7. Or book online in under two minutes. We'll confirm your appointment immediately and give you an arrival window.",
        },
        {
          title: "We Diagnose & Quote",
          description:
            "Our technician arrives on time, inspects the door, and gives you a clear upfront quote. No pressure, no surprises — just a straight answer.",
        },
        {
          title: "Job Done Right",
          description:
            "We fix or install on the spot whenever possible. We clean up when we're done and don't leave until you're satisfied with the work.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston, South Shore & Metro West",
      subtitle:
        "Our trucks are based in Dedham and cover a wide radius across Greater Boston. If you're not sure we serve your town, just call — we almost certainly do.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Boston Homeowners Count on Armor",
      items: [
        {
          quote:
            "My spring snapped at 7am and I had to leave for work in an hour. I called Armor and someone picked up immediately. The tech was at my house by 9am and had it fixed before I got home. Unbelievable service.",
          name: "Kevin M.",
          role: "Homeowner, Dedham",
          rating: 5,
        },
        {
          quote:
            "I got three quotes for a new door installation. Armor was the most straightforward — no nonsense, honest price, and they explained everything clearly. The install was clean and the door looks fantastic.",
          name: "Sandra L.",
          role: "Homeowner, Newton",
          rating: 5,
        },
        {
          quote:
            "Used Armor twice now — once for a broken cable, once to upgrade our opener to a smart model. Both times they showed up on time, did the work fast, and were totally professional. Won't use anyone else.",
          name: "Dave F.",
          role: "Homeowner, Quincy",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Answers Before You Call",
      items: [
        {
          question: "How quickly can you get to me for an emergency?",
          answer:
            "For true emergencies — door stuck open, door off tracks, major impact damage — we typically respond within 1-2 hours in our service area. Call us and we'll give you an accurate ETA right away.",
        },
        {
          question: "How much does a garage door repair cost?",
          answer:
            "Most common repairs (spring replacement, cable repair, track adjustment) run between $150 and $400 depending on the parts and labor involved. We always quote the exact price before starting any work.",
        },
        {
          question: "Can you replace just one broken spring, or does it need to be both?",
          answer:
            "Technically we can replace just one, but we strongly recommend replacing both at the same time. Springs wear at the same rate, so if one breaks, the other is likely close. Replacing both now saves you a second service call soon.",
        },
        {
          question: "What garage door brands do you carry?",
          answer:
            "We're authorized dealers for Clopay and LiftMaster, and we can source doors and hardware from all major manufacturers. We'll help you find the right fit for your home's style and your budget.",
        },
        {
          question: "Do you service commercial garage doors too?",
          answer:
            "Yes. We service commercial roll-up doors, sectional doors, and high-cycle industrial openers for warehouses, auto shops, and multi-unit properties throughout Greater Boston.",
        },
        {
          question: "How long does a garage door installation take?",
          answer:
            "Most standard residential door installations take 3-4 hours from start to finish. We'll haul away your old door and make sure everything is adjusted and balanced before we leave.",
        },
      ],
    },

    finalCTA: {
      headline: "Need a Garage Door Fixed? We're Ready Right Now.",
      subheadline:
        "Call us, book online, or request a free quote. We answer every call and offer same-day service across Greater Boston.",
    },

    footer: {
      description:
        "Greater Boston's trusted garage door company. Repair, installation, opener replacement, and 24/7 emergency service across Dedham, Quincy, Newton, Needham, and surrounding communities.",
      serviceLinks: [
        { label: "Garage Door Repair", href: "#services" },
        { label: "Door Installation", href: "#services" },
        { label: "Opener Replacement", href: "#services" },
        { label: "Emergency Service", href: "#services" },
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
