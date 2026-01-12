"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { IconCheck, IconEye, IconHeadset, IconShieldCheck } from "@tabler/icons-react";

const pricingPlans = [
  {
    label: "For Individuals",
    price: "¥140,000+",
    period: "/car",
    description: "1-3 cars per month",
    features: ["Auction Charges", "Document Fees", "Customs Clearance In Japan", "Inland Transport"],
    highlighted: false,
  },
  {
    label: "For Dealers",
    price: "¥130,000+",
    period: "/car",
    description: "4+ cars per month",
    features: ["Auction Charges", "Document Fees", "Customs Clearance In Japan", "Inland Transport"],
    highlighted: true,
  },
];

const trustFeatures = [
  {
    icon: IconEye,
    title: "Transparent Pricing",
    description:
      "We provide proof of the purchase price for each vehicle, ensuring that what you pay mirrors exactly what we paid at the Japanese auctions.",
  },
  {
    icon: IconHeadset,
    title: "One to One Customer Service",
    description:
      "We are firm believers that exceptional service is the most valuable form of marketing—one that money can't buy.",
  },
  {
    icon: IconShieldCheck,
    title: "Secure Payment Methods",
    description:
      "ZervTek offers secure payment options for your convenience, including PayPal, Wise, and international bank transfers to renowned banks in Japan.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-surface-container">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            Price at the Auctions + Export Fees + Shipping
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4">
            Your total up to the destination port
          </h2>
          <p className="text-on-surface-variant text-lg">
            No hidden charges, no bullshit
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-primary-container shadow-lg hover:shadow-xl"
                  : "bg-surface border border-outline-variant hover:shadow-lg"
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-on-primary-container" : "text-on-surface"}`}>
                  {plan.label}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-on-primary-container/80" : "text-on-surface-variant"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? "text-on-primary-container" : "text-on-surface"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-on-primary-container/80" : "text-on-surface-variant"}>
                  {plan.period}
                </span>
              </div>

              <div className="mb-6">
                <p className={`text-sm font-medium mb-4 ${plan.highlighted ? "text-on-primary-container" : "text-on-surface"}`}>
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? "bg-primary text-primary-foreground" : "bg-primary-container text-primary"
                      }`}>
                        <IconCheck className="w-3 h-3" />
                      </span>
                      <span className={plan.highlighted ? "text-on-primary-container" : "text-on-surface-variant"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="text-center mb-8">
          <p className="text-on-surface-variant">
            We keep it simple and honest for our customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-on-surface mb-2">
                  {feature.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
