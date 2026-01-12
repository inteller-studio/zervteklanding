import { Navigation, Footer } from "@/components/sections";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Translation Services | Zervtek",
  description:
    "Professional Japanese auction sheet translation services. Understand every detail about your vehicle before you buy.",
};

export default function TranslationsPage() {
  return (
    <>
      <Navigation />
      <main>
        <Section variant="surface-container" className="min-h-[70vh] flex items-center">
          <Container size="md" className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Translation Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Our professional translation service helps you fully understand
              the condition and specifications of Japanese vehicles. We
              translate auction sheets including make, model, year, grade,
              mileage, and any noted damages or issues.
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
