export const siteConfig = {
  name: "Zervtek - Japanese Vehicle Auctions",
  description:
    "Your gateway to Japan's premier vehicle auctions. Access 100+ exclusive Japanese auctions with professional sourcing, transparent pricing, and worldwide shipping.",
  url: "https://zervtek.com",
  ogImage: "https://zervtek.com/og-image.png",
  links: {
    twitter: "https://twitter.com/zervtek",
    facebook: "https://facebook.com/zervtek",
    linkedin: "https://linkedin.com/company/zervtek",
  },
  contact: {
    email: "sales@zervtek.com",
    whatsapp: "+81 80 5011 7890",
    phone: "+81 80 5011 7890",
  },
  company: {
    founded: "2014",
    location: "Chiba, Japan",
  },
} as const;

export type SiteConfig = typeof siteConfig;
