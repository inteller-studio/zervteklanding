export const content = {
  hero: {
    headline: "Your Gateway to Japan's Premier Vehicle Auctions",
    subheadline:
      "Access 100+ exclusive Japanese auctions with 100,000+ vehicles weekly. Professional sourcing, transparent pricing, worldwide shipping.",
    primaryCta: "Start Your Journey",
    secondaryCta: "View How It Works",
  },

  stats: [
    { value: "800+", label: "Happy Customers" },
    { value: "30+", label: "Countries Served" },
    { value: "100+", label: "Partner Auctions" },
    { value: "10+", label: "Years Experience" },
  ],

  services: [
    {
      title: "Vehicle Sourcing",
      description:
        "Access Japan's top auctions including USS, TAA, and HAA. We handle bidding, purchasing, and secure the best deals on your behalf.",
      icon: "car",
    },
    {
      title: "Inspections & Translations",
      description:
        "Get detailed pre-auction inspections with photos and videos. Our team translates auction sheets so you know exactly what you're buying.",
      icon: "search",
    },
    {
      title: "Shipping & Customs",
      description:
        "Complete logistics handling from Japan to your doorstep. We manage customs clearance, documentation, and international shipping.",
      icon: "ship",
    },
  ],

  process: [
    {
      step: 1,
      title: "Register",
      description: "Create your free account and connect with our team via WhatsApp for personalized support.",
    },
    {
      step: 2,
      title: "Deposit",
      description: "Place a refundable security deposit to activate your bidding power. 100% refundable if you don't win.",
    },
    {
      step: 3,
      title: "Browse & Bid",
      description: "Explore thousands of vehicles daily. We translate auction sheets and place bids on your behalf.",
    },
    {
      step: 4,
      title: "Win",
      description: "Celebrate your successful bid! Receive a detailed invoice with transparent pricing breakdown.",
    },
    {
      step: 5,
      title: "Ship",
      description: "We arrange RoRo or container shipping to your destination port with full tracking.",
    },
    {
      step: 6,
      title: "Pickup",
      description: "Receive notification when your vehicle arrives. Collect it with all required documentation.",
    },
  ],

  features: [
    {
      title: "Customer Centric",
      description:
        "We partner with you to deliver personalized solutions. Your feedback shapes our process, ensuring we exceed your expectations every time.",
    },
    {
      title: "Trustworthy",
      description:
        "Complete transparency in everything we do. Honest pricing with no hidden fees, no surprise bills. All expenses are pre-approved by you.",
    },
    {
      title: "Quality Assured",
      description:
        "We source only high-quality vehicles from reputable auctions. Detailed inspections and reports ensure you know exactly what you're getting.",
    },
  ],

  servicesDetail: {
    title: "Why Us",
    subtitle: "Find Your Next Ride with Confidence",
    items: [
      {
        icon: "translate",
        title: "Translations",
        description:
          "Our translation service is designed to help you fully understand the condition and specifications of the Japanese vehicles you are interested in.",
        details:
          "The translated Japanese auction sheet will include details about the car's make, model, year, grade, mileage, and any noted damages or issues.",
        href: "/translations",
      },
      {
        icon: "search",
        title: "Inspections",
        description:
          "ZervTek's inspections provide a detailed review of a vehicle, including additional photos and videos for a comprehensive look.",
        details:
          "This enhances the information in the Japanese auction sheet, focusing on aspects like the exterior, interior wear, and engine condition.",
        href: "/inspections",
      },
    ],
  },

  pricing: {
    individual: {
      price: "¥140,000+",
      label: "Individual Buyers",
      description: "Perfect for personal imports, 1-3 cars per month",
      features: [
        "Full auction access",
        "Auction sheet translation",
        "Pre-auction inspections",
        "Customs clearance",
        "Inland transportation",
        "Document preparation",
      ],
    },
    dealer: {
      price: "¥130,000+",
      label: "Licensed Dealers",
      description: "Volume pricing for 4+ cars per month",
      features: [
        "Everything in Individual",
        "Volume discounts",
        "Priority support",
        "Dedicated account manager",
        "Bulk shipping rates",
        "Extended payment terms",
      ],
    },
  },

  cta: {
    headline: "Ready to Find Your Perfect JDM?",
    subheadline: "Join 800+ satisfied customers who trust Zervtek for their Japanese vehicle imports.",
    buttonText: "Get Started Today",
  },

  footer: {
    description:
      "Your trusted partner for Japanese vehicle auctions since 2014. Delivering quality JDMs to 30+ countries worldwide.",
    links: {
      services: [
        { label: "Vehicle Sourcing", href: "#services" },
        { label: "Inspections", href: "#services" },
        { label: "Shipping", href: "#services" },
        { label: "Pricing", href: "#pricing" },
      ],
      company: [
        { label: "About Us", href: "#" },
        { label: "How It Works", href: "#process" },
        { label: "FAQ", href: "#" },
        { label: "Contact", href: "#contact" },
      ],
      legal: [
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  },

  navigation: {
    links: [
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      label: "Get Started",
      href: "#contact",
    },
  },
} as const;

export type Content = typeof content;
