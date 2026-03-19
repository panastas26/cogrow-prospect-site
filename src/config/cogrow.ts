import { SiteConfig } from "./types";

export const cogrowConfig: SiteConfig = {
  business: {
    name: "CoGrow",
    vertical: "AI Consultancy / Agency",
    businessType: "AI-Powered Growth Partner",
    geography: "Boston, MA (serving clients nationally)",
    email: "paul@cogrow.ai",
    targetAudience:
      "Small professional services firms -- CPAs, law firms, real estate brokers, consultants",
  },

  conversion: {
    primaryCTA: {
      label: "Book a Free Audit",
      href: "https://cal.com/cogrowai/freeaudit",
    },
    secondaryCTA: {
      label: "See How It Works",
      href: "#process",
    },
  },

  trust: {
    yearsInBusiness: "New",
    credentials: [
      "AI-Native Team",
      "Built on Enterprise-Grade Infrastructure",
    ],
    serviceArea: [
      "Boston",
      "New York",
      "Chicago",
      "Los Angeles",
      "National",
    ],
    differentiators: [
      "Built and live in days, not months",
      "4.2-second lead response vs 47-hour industry average",
      "Fixed monthly retainer -- no surprise fees",
    ],
    guarantee:
      "If we don't improve your lead response time, you don't pay.",
    metrics: [
      { value: "4.2s", label: "Average Lead Response Time" },
      { value: "47h", label: "Industry Average (Not Us)" },
      { value: "78%", label: "Of Buyers Hire Whoever Responds First" },
      { value: "$0", label: "Upfront Cost for Your Demo" },
    ],
  },

  seo: {
    title: "CoGrow | AI-Powered Growth for Professional Services Firms",
    description:
      "CoGrow builds AI-powered websites, speed-to-lead automation, booking systems, and client reporting dashboards for CPAs, law firms, and professional services. Live in days, not months.",
    primaryTerms: [
      "AI for professional services",
      "speed to lead automation",
      "AI website builder for CPAs",
    ],
    secondaryTerms: [
      "AI consultancy Boston",
      "lead response automation",
      "professional services AI tools",
    ],
  },

  brand: {
    tone: "direct, confident, no hype -- like talking to a smart operator",
    colors: {
      primary: "#000000",
      primaryDark: "#000000",
      accent: "#ffffff",
      light: "#f7f8fa",
      dark: "#000000",
    },
  },

  sections: {
    hero: {
      badge: "AI for Professional Services",
      headline:
        "We Already Rebuilt\nYour Website.",
      subheadline:
        "See what your firm looks like with modern AI tools -- before you commit to anything. Speed-to-lead automation, smart booking, and a site that actually converts.",
    },

    services: {
      label: "What We Build",
      title: "Everything Your Firm Needs to Compete in 2026",
      subtitle:
        "We build the full stack: site, automation, intake, and reporting. You get a modern growth engine, not a prettier brochure.",
      items: [
        {
          icon: "zap",
          title: "Speed-to-Lead Automation",
          description:
            "Respond to every inbound inquiry in seconds, not hours. AI qualifies the lead, books the call, and follows up automatically.",
          benefit: "Never lose a lead to a faster competitor again",
        },
        {
          icon: "monitor",
          title: "AI-Powered Websites",
          description:
            "Modern, conversion-optimized sites built around your firm. Clean, fast, and designed to turn visitors into clients.",
          benefit: "Live in days, not months -- and we show you the demo first",
        },
        {
          icon: "message-circle",
          title: "Smart Booking Systems",
          description:
            "AI chat trained on your firm answers questions, captures leads, and books appointments 24/7 while you sleep.",
          benefit: "Your best employee works nights and weekends for free",
        },
        {
          icon: "bar-chart-2",
          title: "Client Reporting Dashboards",
          description:
            "Automated onboarding flows, intake forms, and live dashboards so you always know where every client stands.",
          benefit: "Stop chasing -- start knowing",
        },
      ],
    },

    whyUs: {
      label: "Why CoGrow",
      title: "Most Agencies Sell You a Promise. We Show You the Product.",
      subtitle:
        "We build your demo before you spend a dime. If you love it, we launch it. If not, you walk away with a free audit.",
      items: [
        {
          icon: "clock",
          title: "Built in Days, Not Months",
          description:
            "Your site and automation tools go live in days. No six-month timelines, no scope creep, no waiting.",
        },
        {
          icon: "zap",
          title: "4.2s vs 47 Hours",
          description:
            "Our clients respond to leads in 4.2 seconds. The industry average is 47 hours. That gap is where you're losing revenue.",
        },
        {
          icon: "dollar-sign",
          title: "Fixed Monthly Retainer",
          description:
            "One price. No surprise invoices, no hourly billing, no nickel-and-diming. You know exactly what you pay.",
        },
        {
          icon: "shield",
          title: "Performance Guarantee",
          description:
            "If we don't improve your lead response time, you don't pay. We put our money where our mouth is.",
        },
        {
          icon: "eye",
          title: "See It Before You Buy It",
          description:
            "We build your demo for free -- your branding, your services, fully functional. You decide after you see the results.",
        },
        {
          icon: "code",
          title: "Powered by CoGrow, Branded as You",
          description:
            "Your clients see your brand, not ours. We're the engine under the hood -- subtle, not loud.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "Simple. Fast. No Risk.",
      subtitle:
        "Three steps to a modern firm. We do the heavy lifting -- you just show up.",
      steps: [
        {
          title: "We Audit Your Site",
          description:
            "We analyze your current site, your competitors, and your intake flow. Response time, SEO, conversion rate. Takes us about a day.",
        },
        {
          title: "We Build Your Demo",
          description:
            "A real site with your business name, your branding, your services -- fully functional, personalized to your firm. Free. No strings.",
        },
        {
          title: "You See the ROI",
          description:
            "We walk you through the demo and the projected results. You decide if you want to move forward. Zero pressure.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Based in Boston. Serving Firms Nationally.",
      subtitle:
        "We work with professional services firms across the country. Everything is remote-first -- no geography limits what we can build for you.",
    },

    testimonials: {
      label: "Early Results",
      title: "What Happens When You Respond First",
      items: [
        {
          quote:
            "They showed me a working demo of my new site before I paid anything. It was better than what my last agency delivered after three months and $15K. I signed that week.",
          name: "Demo Prospect",
          role: "CPA Firm Owner, Boston",
          rating: 5,
        },
        {
          quote:
            "The speed-to-lead numbers are real. We went from responding to leads in two days to under five seconds. Three new clients in the first month just from faster follow-up.",
          name: "Early Adopter",
          role: "Real Estate Broker, MA",
          rating: 5,
        },
        {
          quote:
            "I was skeptical about the 'AI' pitch -- everyone says AI now. But CoGrow actually built something useful. The booking system alone paid for itself in week one.",
          name: "Pilot Client",
          role: "Law Firm Partner, NY",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "What does CoGrow actually cost?",
          answer:
            "A fixed monthly retainer. No hourly billing, no surprise fees, no long-term contracts. We quote you upfront before any work starts. Most clients are on a simple monthly plan that covers site, automation, and support.",
        },
        {
          question: "How fast can you get my site live?",
          answer:
            "Days, not months. We build your personalized demo in about 24 hours. Once you approve, we can have everything live within the week. No six-month project timelines.",
        },
        {
          question: "What if I already have a website?",
          answer:
            "We'll audit it for free and show you what a modern version looks like -- side by side. If your current site is working, we'll tell you. If it's not, you'll see exactly what changes would move the needle.",
        },
        {
          question: "Is the demo really free?",
          answer:
            "Yes. We build a fully functional demo with your branding, your services, and your business name. If you don't like it, you walk away. No invoice, no guilt trip, no follow-up spam.",
        },
        {
          question: "What's the 'speed-to-lead' thing about?",
          answer:
            "78% of buyers hire whoever responds first. The average professional services firm takes 47 hours to respond to a new lead. Our automation responds in 4.2 seconds -- qualifying the lead, booking a call, and following up. That's the difference between winning and losing the client.",
        },
        {
          question: "Do you only work with CPAs?",
          answer:
            "No. We work with any small professional services firm -- CPAs, law firms, real estate brokers, financial advisors, consultants. If your business runs on trust and expertise, we can help you grow faster.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to See What Your Firm Could Look Like?",
      subheadline:
        "We'll build your demo for free. No commitment, no pitch -- just your firm, upgraded.",
    },

    footer: {
      description:
        "AI-powered growth tools for professional services firms. Websites, automation, booking, and reporting -- built in days, not months.",
      serviceLinks: [
        { label: "Speed-to-Lead", href: "#services" },
        { label: "AI Websites", href: "#services" },
        { label: "Booking Systems", href: "#services" },
        { label: "Reporting Dashboards", href: "#services" },
      ],
      companyLinks: [
        { label: "How It Works", href: "#process" },
        { label: "Service Area", href: "#service-area" },
        { label: "Book a Free Audit", href: "https://cal.com/cogrowai/freeaudit" },
      ],
    },
  },
};
