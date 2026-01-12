import { Navigation, Footer } from "@/components/sections";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Inspection Services | Zervtek",
  description:
    "Detailed vehicle inspections with photos and videos. Get a comprehensive look at any vehicle before purchase.",
};

export default function InspectionsPage() {
  return (
    <>
      <Navigation />
      <main>
        <Section variant="surface-container" className="min-h-[70vh] flex items-center">
          <Container size="md" className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Inspection Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              ZervTek&apos;s inspections provide a detailed review of any
              vehicle, including additional photos and videos. We focus on
              exterior condition, interior wear, engine health, and more to give
              you complete confidence in your purchase.
            </p>
            <Link href="/#why-us">
              <Button variant="filled" size="lg">
                Back to Services
              </Button>
            </Link>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
