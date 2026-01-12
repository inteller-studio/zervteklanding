import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { content } from "@/config/content";

// MD3 Outlined Icons
const Icons = {
  car: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
  search: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  ship: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
    </svg>
  ),
  arrowRight: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  ),
};

const iconMap = ["car", "search", "ship"] as const;

export function Services() {
  return (
    <Section id="services" variant="surface">
      <Container>
        <SectionHeader
          title="Everything You Need to Import from Japan"
          description="From finding your dream car at auction to delivering it to your door, we handle every step of the process."
        />

        {/* MD3 Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {content.services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-300 hover:shadow-lg"
            >
              {/* MD3 Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {Icons[iconMap[index]]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-on-surface mb-3">
                {service.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                {service.description}
              </p>

              {/* MD3 Text Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
              >
                Learn more
                {Icons.arrowRight}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
