import { Container } from "@/components/ui/container";
import { content } from "@/config/content";

export function StatsBar() {
  return (
    <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-secondary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
