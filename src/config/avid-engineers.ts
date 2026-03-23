import { SiteConfig } from "./types";

export const avidEngineersConfig: SiteConfig = {
  business: {
    name: "Avid Engineers",
    vertical: "Mechanical Engineering & HVAC Design",
    businessType: "Engineering Consulting Firm",
    geography: "Boston, MA",
    phone: "(617) 555-0462",
    email: "info@avid-engineers.com",
    address: "Boston, MA",
    targetAudience:
      "Building owners, developers, architects, and property managers in Greater Boston who need mechanical engineering, HVAC design, or energy consulting services",
  },

  conversion: {
    primaryCTA: {
      label: "Request a Free Consultation",
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
      "Licensed Professional Engineers (PE) in Massachusetts",
      "ASHRAE Member Firm",
      "BPI Certified Energy Auditors",
    ],
    serviceArea: [
      "Boston",
      "Cambridge",
      "Brookline",
      "Newton",
      "Quincy",
      "Waltham",
      "Woburn",
    ],
    differentiators: [
      "PE-stamped drawings delivered on time",
      "We answer every call and respond to RFPs same-day",
      "Deep expertise in New England building systems",
      "10+ years of Boston-area projects",
      "Book a consultation online 24/7",
      "Energy rebate guidance included on every project",
    ],
    guarantee:
      "We deliver on scope and on schedule — or we work until we do.",
    metrics: [
      { value: "10+", label: "Years in Greater Boston" },
      { value: "400+", label: "Projects Completed" },
      { value: "4.9", label: "Client Satisfaction Rating" },
      { value: "$3M+", label: "In Energy Rebates Secured" },
    ],
  },

  seo: {
    title: "Avid Engineers | Boston Mechanical Engineering & HVAC Design",
    description:
      "Avid Engineers provides mechanical engineering, HVAC design, energy audits, and building systems consulting across Greater Boston. Licensed PE firm with deep local expertise. Request a consultation today.",
    primaryTerms: [
      "mechanical engineering firm Boston",
      "HVAC design engineer Boston MA",
      "energy audit Boston",
    ],
    secondaryTerms: [
      "building systems engineering Boston",
      "HVAC engineering consultant Boston",
      "energy modeling Boston MA",
    ],
  },

  brand: {
    tone: "expert, credible, precise, collaborative",
    colors: {
      primary: "#6f9ae2",
      primaryDark: "#4a78c9",
      accent: "#2ecc71",
      light: "#f0f5ff",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "Licensed PE Firm — Boston Mechanical Engineering",
      headline: "Engineering the Buildings\nBoston Depends On.",
      subheadline:
        "Avid Engineers delivers mechanical engineering, HVAC design, energy audits, and building systems consulting for developers, architects, and owners across Greater Boston. Responsive, precise, and on deadline.",
    },

    services: {
      label: "Our Services",
      title: "Full-Spectrum Mechanical Engineering for Boston Buildings",
      subtitle:
        "From concept to construction documents to commissioning, we provide the engineering expertise your project needs — on time and to code.",
      items: [
        {
          icon: "cpu",
          title: "Mechanical Engineering & HVAC Design",
          description:
            "Complete mechanical system design for commercial, residential, and mixed-use buildings. Load calculations, equipment selection, duct and piping layouts, and PE-stamped drawings.",
          benefit: "Code-compliant designs that perform as engineered",
        },
        {
          icon: "zap",
          title: "Energy Audits & Benchmarking",
          description:
            "ASHRAE Level I, II, and III energy audits for existing buildings. We identify inefficiencies, model improvements, and provide a prioritized roadmap for upgrades.",
          benefit: "Know exactly where your energy dollars are going",
        },
        {
          icon: "refresh-cw",
          title: "Heat Pump & Decarbonization Design",
          description:
            "Building electrification feasibility studies, heat pump system design, and decarbonization roadmaps for owners navigating Boston's BERDO requirements and utility rebate programs.",
          benefit: "Navigate decarbonization with a clear engineering plan",
        },
        {
          icon: "settings",
          title: "Building Systems Commissioning",
          description:
            "Functional performance testing, TAB (testing, adjusting, and balancing), and retro-commissioning to ensure mechanical systems operate as designed and at peak efficiency.",
          benefit: "Systems that perform on day one and stay that way",
        },
      ],
    },

    whyUs: {
      label: "Why Avid Engineers",
      title: "Engineering You Can Build On",
      subtitle:
        "We combine rigorous technical expertise with the responsiveness and communication that Boston project teams actually need.",
      items: [
        {
          icon: "award",
          title: "Licensed Professional Engineers",
          description:
            "Every project is led by a Massachusetts-licensed PE. Our drawings are stamped, our calculations are defensible, and our designs meet code — the first time through permitting.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "RFI sitting? Contractor question on-site? Deadline pressure? Call us and we pick up. We're not a firm that disappears after the drawings are issued.",
        },
        {
          icon: "trending-up",
          title: "Energy Rebate Expertise",
          description:
            "We've helped clients secure over $3 million in Mass Save, utility, and federal energy rebates. We identify rebate opportunities at the design stage, not as an afterthought.",
        },
        {
          icon: "calendar",
          title: "Book a Consultation Online",
          description:
            "Request a project consultation any time through our website. We respond to all inquiries same-day during business hours and schedule within the week.",
        },
        {
          icon: "map-pin",
          title: "Deep Boston Market Knowledge",
          description:
            "We know Boston's building stock, the local AHJ requirements, and the particular challenges of working with historic structures, tight urban sites, and New England's climate extremes.",
        },
        {
          icon: "users",
          title: "True Design-Build Partnership",
          description:
            "We work as a collaborative partner to architects, GCs, and owners — not just a stamping service. Our engineers are engaged through construction and commissioning.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "From First Call to Final Commissioning",
      subtitle:
        "A clear, collaborative process that keeps your project moving and your team informed at every step.",
      steps: [
        {
          title: "Consultation & Scope",
          description:
            "Call us or book online and we'll schedule a project consultation within the week. We review drawings, project goals, and budget parameters to define scope and provide a fee proposal.",
        },
        {
          title: "Engineering & Design",
          description:
            "Our engineers perform load calculations, system design, and energy modeling. We coordinate with your project team throughout and deliver PE-stamped construction documents on your schedule.",
        },
        {
          title: "Construction Support & Commissioning",
          description:
            "We respond to RFIs, review submittals, conduct site visits, and oversee commissioning to make sure the system that gets built matches the system we designed.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston and Eastern Massachusetts",
      subtitle:
        "Our office is in Boston and we work on projects across Greater Boston, Eastern Massachusetts, and occasionally throughout New England for the right project.",
    },

    testimonials: {
      label: "What Our Clients Say",
      title: "Developers, Architects & Owners Trust Avid Engineers",
      items: [
        {
          quote:
            "We've worked with Avid on four projects now — two mixed-use buildings and two historic rehabs. Their mechanical designs are always clean, their drawings sail through permitting, and they're responsive when the GC has questions in the field. Exactly what you want in an MEP partner.",
          name: "Thomas W.",
          role: "Principal, Architecture Firm, Boston",
          rating: 5,
        },
        {
          quote:
            "Avid ran our ASHRAE Level II audit and came back with an energy savings roadmap that unlocked $280,000 in Mass Save incentives. The audit paid for itself twenty times over. Their knowledge of the rebate landscape is genuinely impressive.",
          name: "Alicia M.",
          role: "Asset Manager, Commercial Real Estate, Cambridge",
          rating: 5,
        },
        {
          quote:
            "We brought Avid in to design the HVAC system for a large multifamily project with a tight schedule. They hit every milestone, coordinated seamlessly with the GC, and the commissioning was completely smooth. I've recommended them to three other developers.",
          name: "Brian O.",
          role: "Development Manager, Boston",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions From Owners, Developers & Architects",
      items: [
        {
          question: "What types of projects does Avid Engineers work on?",
          answer:
            "We work on commercial, residential, mixed-use, and institutional projects ranging from single-building renovations to large ground-up developments. We have particular depth in multifamily, office, and historic rehabilitation projects in the Greater Boston market.",
        },
        {
          question: "How do you structure your fees?",
          answer:
            "Most projects are priced on a fixed-fee basis scoped to the specific deliverables. We provide a clear written fee proposal after reviewing project documents and discussing scope. No open-ended hourly billing without a clear not-to-exceed.",
        },
        {
          question: "What is BERDO and how does it affect my building?",
          answer:
            "Boston's Building Emissions Reduction and Disclosure Ordinance (BERDO) requires large buildings to meet progressively lower emissions limits through 2050. We help owners understand their current benchmarking position, model compliance pathways, and design the mechanical upgrades needed to meet BERDO thresholds cost-effectively.",
        },
        {
          question: "Can you help us maximize Mass Save and utility rebates?",
          answer:
            "Yes — and this is something we actively build into every design. We've helped clients secure over $3 million in rebates across projects and we stay current on every available program. We identify the rebate strategy at the design stage, not as an afterthought.",
        },
        {
          question: "Do you provide PE-stamped drawings for permitting?",
          answer:
            "Yes. All of our mechanical design deliverables include PE-stamped drawings and calculations signed and sealed by our Massachusetts-licensed engineers. We're well-versed in local AHJ requirements and design for first-pass approval.",
        },
        {
          question: "How early in a project should we bring in a mechanical engineer?",
          answer:
            "The earlier the better. Engaging us at schematic design allows us to influence major decisions — mechanical room sizing, shaft locations, equipment selection — that are expensive to change later. Early engagement consistently results in better outcomes and lower construction cost.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Talk Through Your Project?",
      subheadline:
        "Request a free consultation online or call us directly. We respond same-day and can schedule a project meeting within the week.",
    },

    footer: {
      description:
        "Boston's trusted mechanical engineering and HVAC design firm. Energy audits, building systems design, decarbonization consulting, and commissioning for developers, architects, and owners across Greater Boston.",
      serviceLinks: [
        { label: "HVAC Design", href: "#services" },
        { label: "Energy Audits", href: "#services" },
        { label: "Decarbonization Design", href: "#services" },
        { label: "Commissioning", href: "#services" },
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
