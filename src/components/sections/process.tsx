"use client";

import { Container } from "@/components/ui/container";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "Talk to an agent",
    description: "Start with a friendly conversation about your dream JDM import, preferences, and budget. Our experts will guide you through the process and answer all your questions.",
  },
  {
    title: "Browse Vehicles",
    description: "We translate Japanese auction sheets and help you discover the perfect vehicle for your needs. Access thousands of JDM vehicles directly from Japanese auctions.",
  },
  {
    title: "Bid and Win",
    description: "With a refundable security deposit, we strategically bid on your chosen vehicle within budget. Our experienced team knows how to win auctions at the best prices.",
  },
  {
    title: "We Handle Everything",
    description: "From transport to customs clearance to international shipping — we manage every detail. Sit back and relax while we take care of all the logistics.",
  },
  {
    title: "Pickup Your Car",
    description: "Collect your JDM import at the destination port and drive home your dream vehicle. The moment you've been waiting for — keys in hand, ready to go.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-surface pt-4 pb-12 md:pt-6 md:pb-16">
      {/* Header */}
      <Container>
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-3">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface">
            How it <span className="text-primary">works</span>
          </h2>
        </div>
      </Container>

      {/* Timeline */}
      <Timeline data={timelineData} />
    </section>
  );
}
