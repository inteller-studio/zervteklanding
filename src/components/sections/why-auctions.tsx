"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import WorldMap from "@/components/ui/world-map";

const features = [
  {
    title: "Analyze Past Sales Data",
    description:
      "By analyzing historical sales data, you can gain a clear understanding of the current market value for each JDM vehicle, ensuring you make informed bids that reflect the true worth of each Japanese car and never overspend.",
  },
  {
    title: "100+ Auctions Across Japan",
    description:
      "With access to 100+ auctions and 100,000 vehicles weekly, ZervTek offers an extensive selection, from foreign models to classic JDMs. Choose with freedom based on mileage, condition, model, year, and more, ensuring you find your ideal match without compromise.",
  },
  {
    title: "No Auction Snipers",
    description:
      "The Japanese Auto Auctions offers a sniper-free auction experience, ensuring a fair and transparent bidding process. This prevents last-second bid disruptions, allowing us to bid confidently and securely. Experience a transparent and fair auction where every bid matters.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Japan coordinates as the starting point
const japanCoords = { lat: 35.6762, lng: 139.6503 };

// Shipping routes from Japan to various destinations
const shippingRoutes = [
  { start: japanCoords, end: { lat: -33.8688, lng: 151.2093 } }, // Australia (Sydney)
  { start: japanCoords, end: { lat: 1.3521, lng: 103.8198 } },   // Singapore
  { start: japanCoords, end: { lat: 51.5074, lng: -0.1278 } },   // UK (London)
  { start: japanCoords, end: { lat: 40.7128, lng: -74.006 } },   // USA (New York)
  { start: japanCoords, end: { lat: -1.2921, lng: 36.8219 } },   // Kenya (Nairobi)
  { start: japanCoords, end: { lat: 25.2048, lng: 55.2708 } },   // UAE (Dubai)
  { start: japanCoords, end: { lat: 6.9271, lng: 79.8612 } },    // Sri Lanka (Colombo)
  { start: japanCoords, end: { lat: -4.0435, lng: 39.6682 } },   // Tanzania (Mombasa)
];

export function WhyAuctions() {
  return (
    <section className="relative py-20 md:py-28 bg-surface overflow-hidden min-h-[700px]">
      {/* World Map Background - Full Width, Visible */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-[140%] max-w-[1800px]"
        >
          <WorldMap dots={shippingRoutes} lineColor="#FA7921" />
        </motion.div>
      </div>

      {/* Content */}
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Why Japanese Auto Auctions?
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
              Discover the <span className="text-primary">Features</span>
            </h2>
            <p className="text-on-surface-variant text-lg mb-2">
              Get Started for Free
            </p>
            <p className="text-on-surface-variant/70 text-sm">
              Shipping from Japan to 30+ countries worldwide
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mt-8"
        >
          {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full p-6 md:p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-black/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(250,121,33,0.25)] overflow-hidden">
                  {/* Background gradient accent on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </Container>
    </section>
  );
}
