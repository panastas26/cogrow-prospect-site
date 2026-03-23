import { SiteConfig } from "./types";

export const kjHeatCoolConfig: SiteConfig = {
  business: {
    name: "KJ Heat Cool",
    vertical: "HVAC Contractor",
    businessType: "Heating & Cooling Service Company",
    geography: "Boston, MA",
    phone: "(617) 555-0389",
    email: "info@kj-heatcool.com",
    address: "Malden, MA",
    targetAudience:
      "Homeowners and small commercial property owners in Greater Boston who need heating, cooling, or HVAC replacement services",
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
      label: "Emergency HVAC Service",
      href: "#contact",
    },
  },

  trust: {
    yearsInBusiness: "18+",
    credentials: [
      "MA Licensed HVAC Contractor",
      "EPA 608 Certified",
      "NATE-Certified Technicians",
    ],
    serviceArea: [
      "Boston",
      "Malden",
      "Medford",
      "Somerville",
      "Arlington",
      "Revere",
      "Winthrop",
    ],
    differentiators: [
      "We answer every call — 24/7 emergency service",
      "NATE-certified technicians on every job",
      "Same-day diagnostics available",
      "18+ years in Greater Boston",
      "Book online 24/7",
      "Upfront pricing — no surprise invoices",
    ],
    guarantee:
      "We back every installation with a 1-year labor warranty and honor all manufacturer equipment warranties.",
    metrics: [
      { value: "18+", label: "Years in Business" },
      { value: "5,000+", label: "Systems Serviced" },
      { value: "4.9", label: "Google Rating" },
      { value: "24/7", label: "Emergency Service" },
    ],
  },

  seo: {
    title: "KJ Heat Cool | Boston HVAC Repair, Heating & AC Service",
    description:
      "KJ Heat Cool provides HVAC repair, furnace installation, AC service, heat pump installation, and 24/7 emergency heating and cooling service across Greater Boston. Call now — we pick up.",
    primaryTerms: [
      "HVAC repair Boston",
      "heating and cooling Boston MA",
      "AC repair Boston",
    ],
    secondaryTerms: [
      "furnace installation Boston",
      "heat pump installation Boston",
      "emergency HVAC service Boston",
    ],
  },

  brand: {
    tone: "direct, trustworthy, urgent when needed, locally rooted",
    colors: {
      primary: "#e23c41",
      primaryDark: "#b82e33",
      accent: "#2196F3",
      light: "#fff5f5",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Boston HVAC Experts — Heating, Cooling & Emergency Service",
      headline: "Heating Out? AC Down?\nWe Answer Every Call.",
      subheadline:
        "KJ Heat Cool delivers fast, reliable HVAC repair and installation for homes and businesses across Greater Boston. 18 years of local expertise. Book online 24/7 or call us right now.",
    },

    services: {
      label: "Our Services",
      title: "Full HVAC Service — Repair, Replace, Maintain",
      subtitle:
        "Whether your furnace died in January or your AC quit in August, we show up fast and fix it right the first time.",
      items: [
        {
          icon: "thermometer",
          title: "Heating Repair & Furnace Install",
          description:
            "Gas furnace repair and replacement, boiler service, hydronic heating, and forced air systems. We work on all major brands and can replace aging units fast.",
          benefit: "Heat restored the same day in most cases",
        },
        {
          icon: "wind",
          title: "AC Repair & Cooling Systems",
          description:
            "Central air repair, refrigerant recharge, condenser and air handler service, and new cooling system installation for homes and small commercial spaces.",
          benefit: "Stay comfortable through every Boston summer",
        },
        {
          icon: "refresh-cw",
          title: "Heat Pump Installation",
          description:
            "Cold-climate heat pump systems for New England winters — including Mitsubishi and Daikin mini-splits and whole-home heat pump conversions.",
          benefit: "Year-round comfort with lower energy costs",
        },
        {
          icon: "layout",
          title: "Ductwork & Air Quality",
          description:
            "Duct sealing, cleaning, and new ductwork installation to improve efficiency and air quality. We also install air filtration and humidity control systems.",
          benefit: "Cleaner air and a more efficient system",
        },
      ],
    },

    whyUs: {
      label: "Why KJ Heat Cool",
      title: "We Don't Leave You in the Cold",
      subtitle:
        "Boston winters are brutal and Boston summers are no picnic either. We're the team that shows up fast, fixes it right, and tells you exactly what it costs.",
      items: [
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "Call KJ Heat Cool and a real technician or dispatcher picks up — day, night, weekend, or holiday. We don't let your call go to voicemail when your heat is out.",
        },
        {
          icon: "clock",
          title: "Same-Day Diagnostics",
          description:
            "We keep our schedules open for same-day calls. If you call before noon, we aim to be there the same afternoon. For emergencies, we come faster.",
        },
        {
          icon: "award",
          title: "NATE-Certified Technicians",
          description:
            "Every technician on our team holds NATE certification — the industry standard for HVAC competency. You get a skilled professional, not a trainee.",
        },
        {
          icon: "dollar-sign",
          title: "Upfront Pricing",
          description:
            "We quote the repair or installation before we start. No surprises on the invoice, no upsells mid-job. What we quote is what you pay.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule service, request a quote, or get on the emergency list — any time through our website. We confirm within the hour during business hours.",
        },
        {
          icon: "map-pin",
          title: "18+ Years in Greater Boston",
          description:
            "We know the housing stock in this city — old triple-deckers, newer condos, commercial buildings. We've seen it all and we know how to handle it.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "From First Call to Fixed System",
      subtitle:
        "Fast, transparent, and done right. Here's what to expect when you call KJ Heat Cool.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Call us 24/7 or book online in minutes. Tell us what's happening and we'll get you scheduled — same day for most service calls, immediately for emergencies.",
        },
        {
          title: "Diagnosis & Upfront Quote",
          description:
            "Our technician arrives on time, diagnoses the issue, and gives you a clear, written quote before touching anything. No work starts without your approval.",
        },
        {
          title: "Repair or Install — Done Right",
          description:
            "We complete the work, test the system thoroughly, and walk you through what we did. We don't leave until your system is running and you're satisfied.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Boston, North Shore & Surrounding Communities",
      subtitle:
        "Based in Malden, our crews cover Boston, Somerville, Medford, Arlington, Revere, Winthrop, and the broader Greater Boston metro.",
    },

    testimonials: {
      label: "What Our Customers Say",
      title: "Greater Boston Trusts KJ Heat Cool",
      items: [
        {
          quote:
            "My heat went out on a Sunday night in February. I called KJ at 8pm and they had a tech at my door by 10. He had the part on his truck, fixed the furnace, and my house was warm again before midnight. I cannot thank them enough.",
          name: "Donna K.",
          role: "Homeowner, Revere",
          rating: 5,
        },
        {
          quote:
            "I'd been putting off replacing my 20-year-old AC unit. KJ came out, assessed the situation, and gave me options at three different price points — no pressure. The installation was clean, fast, and the new system is incredible.",
          name: "Carlos B.",
          role: "Homeowner, Malden",
          rating: 5,
        },
        {
          quote:
            "We had KJ install a ductless mini-split system in our condo. They were the most knowledgeable crew we spoke to, they explained the whole process, and the install was tidy and professional. Highly recommend.",
          name: "Amy and Jason R.",
          role: "Condo Owners, Somerville",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "HVAC Questions We Hear Every Day",
      items: [
        {
          question: "How do I know if I need a repair or a full replacement?",
          answer:
            "A good rule of thumb: if the system is under 10-12 years old and the repair cost is less than half the cost of replacement, repair usually makes sense. Our technicians give you an honest assessment — we'll never push a replacement if a repair will do the job.",
        },
        {
          question: "How much does a new furnace or AC unit cost to install?",
          answer:
            "A standard furnace installation in Greater Boston typically ranges from $3,000 to $6,500 depending on the unit and complexity. Central AC installs run $4,000 to $8,000. We provide a detailed written quote after assessing your space — no surprises.",
        },
        {
          question: "Do you offer financing for HVAC replacements?",
          answer:
            "Yes. We work with financing partners to offer flexible payment options on equipment replacements and new installations. Ask us about current offers when you request your quote.",
        },
        {
          question: "What's the benefit of a heat pump over a traditional furnace?",
          answer:
            "Modern cold-climate heat pumps can operate efficiently down to -15°F, making them viable in New England. They heat and cool in one system, use electricity instead of gas, and can significantly lower your energy bills — especially combined with Mass Save rebates.",
        },
        {
          question: "Do you service all HVAC brands?",
          answer:
            "Yes. We service all major residential HVAC brands including Carrier, Trane, Lennox, Rheem, Mitsubishi, Daikin, and more. We stock common parts for the most popular systems to keep repair times short.",
        },
        {
          question: "How often should I have my HVAC system serviced?",
          answer:
            "We recommend a tune-up once a year — ideally in the fall for heating systems and spring for cooling. Regular maintenance catches small issues before they become expensive failures and keeps your system running at peak efficiency.",
        },
      ],
    },

    finalCTA: {
      headline: "Heating or Cooling Problem? Let's Fix It Today.",
      subheadline:
        "Call us 24/7 or book online. We answer every call and offer same-day service across Greater Boston.",
    },

    footer: {
      description:
        "Greater Boston's trusted HVAC contractor. Heating repair, furnace installation, AC service, heat pump installation, and 24/7 emergency service across Boston, Malden, Medford, Somerville, and surrounding communities.",
      serviceLinks: [
        { label: "Heating & Furnace", href: "#services" },
        { label: "AC Repair & Cooling", href: "#services" },
        { label: "Heat Pump Installation", href: "#services" },
        { label: "Ductwork & Air Quality", href: "#services" },
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
