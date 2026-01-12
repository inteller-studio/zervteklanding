import {
  Navigation,
  Hero,
  Mission,
  Process,
  ServicesDetail,
  WhyAuctions,
  Pricing,
  Blog,
  FAQ,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Process />
        <ServicesDetail />
        <WhyAuctions />
        <Pricing />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
