import { SiteConfig } from "./types";

export const certifiedTreeConfig: SiteConfig = {
  business: {
    name: "Certified Tree",
    vertical: "Tree Service & Arborist",
    businessType: "Tree Care & Arborist Services",
    geography: "Boston, MA",
    phone: "(617) 555-0537",
    email: "info@certified-tree.com",
    address: "Boston, MA",
    targetAudience:
      "Homeowners and property managers in Greater Boston needing tree removal, trimming, stump grinding, or emergency storm response",
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
    yearsInBusiness: "16+",
    credentials: [
      "ISA Certified Arborist",
      "Fully Insured \u2014 $2M Liability",
      "Massachusetts Licensed Tree Expert",
    ],
    serviceArea: [
      "Boston",
      "Newton",
      "Brookline",
      "Needham",
      "Wellesley",
      "Dedham",
      "Milton",
    ],
  differentiators: [
      "ISA Certified Arborist on every job",
      "24/7 emergency storm response",
      "We answer every call \u2014 nights and weekends",
      "Free written quotes with no obligation",
      "Book online 24/7",
      "16+ years removing and caring for Boston-area trees",
    ],
    guarantee: "Clean site, every time. We haul away every branch and log before we leave.",
    metrics: [
      { value: "16+", label: "Years in Boston" },
      { value: "3,200+", label: "Trees Removed" },
      { value: "4.9", label: "Google Rating" },
      { value: "24/7", label: "Emergency Response" },
    ],
  },

  seo: {
    title: "Certified Tree | ISA Arborist & Tree Removal Boston MA",
    description:
      "Certified Tree is a licensed, ISA-certified arborist serving Greater Boston. Tree removal, trimming, stump grinding, and 24/7 emergency storm service. Free quotes. Fully insured.",
    primaryTerms: [
      "tree removal Boston MA",
      "arborist Boston",
      "tree service Greater Boston",
    ],
  },

  brand: {
    tone: "dependable, expert, safety-conscious",
    colors: {
      primary: "#2d6a2d",
      primaryDark: "#1e4d1e",
      accent: "#8B4513",
      light: "#f0f7f0",
      dark: "#111827",
    },
  },

  sections: {
    hero: {
      badge: "ISA Certified Arborist \u2014 Boston, MA",
      headline: "Boston\u2019s Tree Service\nYou Can Trust with Your Property",
      subheadline:
        "Tree removal, trimming, and stump grinding done safely by ISA-certified arborists. 24/7 emergency response. We answer every call and leave your yard cleaner than we found it.",
    },

    services: {
      label: "Our Services",
      title: "Expert Tree Care for Greater Boston",
      subtitle:
        "From routine trimming to emergency storm cleanup, our certified arborists handle every tree problem safely and efficiently.",
      items: [
        {
          icon: "scissors",
          title: "Tree Removal",
          description:
            "Safe removal of dead, dying, damaged, or hazardous trees. We work in tight spaces and remove everything \u2014 wood, branches, and all.",
          benefit: "Eliminate hazards and reclaim your yard",
        },
        {
          icon: "wind",
          title: "Tree Trimming & Pruning",
          description:
            "Proper pruning keeps trees healthy, improves structure, and removes limbs before they become a problem.",
          benefit: "Healthier trees and fewer emergency calls down the road",
        },
        {
          icon: "circle",
          title: "Stump Grinding",
          description:
            "Complete stump removal ground to well below grade. We clean up the grindings and leave the area ready for grass or planting.",
          benefit: "No more mowing around stumps or tripping hazards",
        },
        {
          icon: "alert-triangle",
          title: "Emergency Storm Service",
          description:
            "Storm-damaged trees don\u2019t wait for business hours. We respond 24/7 to trees on houses, cars, fences, and power lines.",
          benefit: "Fast response when a tree becomes a crisis",
        },
      ],
    },

    whyUs: {
      label: "Why Certified Tree",
      title: "Certified Arborists, Not Just Guys with Chainsaws",
      subtitle:
        "Tree work done wrong costs far more than tree work done right. Our ISA-certified team does it right, every time.",
      items: [
        {
          icon: "award",
          title: "ISA Certified Arborist",
          description:
            "Every job is led by an ISA Certified Arborist \u2014 the industry\u2019s highest credential. Your trees and your property are in expert hands.",
        },
        {
          icon: "phone",
          title: "We Answer Every Call",
          description:
            "A real person picks up nights, weekends, and after major storms. When a tree is on your roof, you shouldn\u2019t get voicemail.",
        },
        {
          icon: "calendar",
          title: "Book Online 24/7",
          description:
            "Schedule a free quote or routine service online anytime. We confirm same-day and show up when we say we will.",
        },
        {
          icon: "shield",
          title: "Fully Insured \u2014 $2M Liability",
          description:
            "We carry $2 million in liability coverage and full workers\u2019 comp. Never let an uninsured tree crew work on your property.",
        },
        {
          icon: "trash-2",
          title: "Complete Cleanup Included",
          description:
            "We haul away every log, branch, and leaf. Your yard will be cleaner when we leave than when we arrived.",
        },
        {
          icon: "map-pin",
          title: "16+ Years in Greater Boston",
          description:
            "We know the trees, the soil, and the neighborhoods. Boston\u2019s older urban canopy requires experienced, careful hands.",
        },
      ],
    },

    process: {
      label: "How It Works",
      title: "From First Call to Clean Yard",
      subtitle:
        "Three steps to a safer property and the peace of mind that comes with certified, professional tree care.",
      steps: [
        {
          title: "Call or Book Online",
          description:
            "Call us anytime or schedule a free quote online. For emergencies, we answer 24/7. For routine work, we confirm same-day.",
        },
        {
          title: "Free On-Site Assessment",
          description:
            "A certified arborist visits, evaluates the tree, and gives you a clear written quote with no obligation.",
        },
        {
          title: "Safe, Clean Removal",
          description:
            "Our crew completes the work safely and hauls away everything. We don\u2019t leave until the site is clean.",
        },
      ],
    },

    serviceArea: {
      label: "Service Area",
      title: "Serving Greater Boston for 16+ Years",
      subtitle:
        "Based in Greater Boston, we run crews across the city and into the western and southern suburbs every day.",
    },

    testimonials: {
      label: "Customer Stories",
      title: "Greater Boston Homeowners Trust Certified Tree",
      items: [
        {
          quote:
            "A massive oak in my backyard was leaning toward the house after last winter\u2019s storms. Certified Tree came out, gave me a clear quote, and had it down in one day. Professional crew, immaculate cleanup. I\u2019d recommend them to anyone.",
          name: "Margaret T.",
          role: "Homeowner, Newton",
          rating: 5,
        },
        {
          quote:
            "We had a large limb come down on our fence during the nor\u2019easter in February. Called Certified Tree at 8pm on a Sunday and someone actually answered. They were at the house by 9am Monday and cleaned everything up. Exactly what you want in an emergency.",
          name: "Brian H.",
          role: "Homeowner, Dedham",
          rating: 5,
        },
        {
          quote:
            "I needed three stumps ground out before we could put in a new patio. Certified Tree did all three in under two hours, ground them deep, cleaned up every bit of debris. Fast, fair price, no hassle.",
          name: "Lisa M.",
          role: "Homeowner, Wellesley",
          rating: 5,
        },
      ],
    },

    faq: {
      label: "Common Questions",
      title: "Questions We Hear Most",
      items: [
        {
          question: "Do I need a permit to remove a tree in Boston?",
          answer:
            "It depends on the tree size and location. Boston and many surrounding towns require permits for removal of trees above a certain diameter, especially street trees. We handle permit applications as part of the job \u2014 you don\u2019t need to navigate it yourself.",
        },
        {
          question: "How much does tree removal cost in Boston?",
          answer:
            "Tree removal pricing depends on tree size, location, and complexity. Small trees typically run $350\u2013$700. Large or hazardous trees can range from $1,000 to $3,500+. We give you a firm written quote before any work begins.",
        },
        {
          question: "Is stump grinding included in tree removal?",
          answer:
            "Stump grinding is quoted separately. Some clients want to use the stump as a seat or planter box, so we don\u2019t assume. If you want the stump gone, we add it to the quote and grind it completely below grade.",
        },
        {
          question: "How quickly can you respond to storm damage?",
          answer:
            "We answer 24/7 for emergencies. For trees on structures or blocking access, we prioritize same-day or next-morning response. During major storm events we work through the region systematically \u2014 call early to get on the list.",
        },
        {
          question: "Are you insured for tree work near my house?",
          answer:
            "Yes. We carry $2 million in liability insurance and full workers\u2019 compensation coverage. We\u2019ll provide a certificate of insurance before any work begins. Never let an uninsured crew work near your home.",
        },
        {
          question: "What happens to the wood after the tree is removed?",
          answer:
            "We haul away all debris by default. If you want to keep firewood, let us know in advance and we\u2019ll leave the logs cut to length. Either way, brush, chips, and small material are always removed.",
        },
      ],
    },

    finalCTA: {
      headline: "Ready to Remove a Hazard or Reclaim Your Yard?",
      subheadline:
        "Get a free written quote online or call us now. We answer every call, including nights and weekends.",
    },

    footer: {
      description:
        "ISA Certified Arborist serving Greater Boston. Tree removal, trimming, stump grinding, and 24/7 emergency storm service. Fully insured.",
      serviceLinks: [
        { label: "Tree Removal", href: "#services" },
        { label: "Tree Trimming & Pruning", href: "#services" },
        { label: "Stump Grinding", href: "#services" },
        { label: "Emergency Storm Service", href: "#services" },
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
