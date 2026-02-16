import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Sophia Laurent",
    quote: "An absolutely magical experience. The views from our suite were unlike anything we've ever seen. Pure serenity.",
  },
  {
    name: "James Whitmore",
    quote: "Impeccable service, world-class dining, and the infinity pool at sunset is something every traveler must witness.",
  },
  {
    name: "Amara Osei",
    quote: "From the moment we arrived, every detail was thoughtfully curated. Lemon Hills redefines luxury hospitality.",
  },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3 font-sans">Praise</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Guest Reviews</h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {reviews.map((r) => (
            <div key={r.name} className="bg-secondary/50 p-8 text-center">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground italic leading-relaxed mb-6 font-sans text-sm">"{r.quote}"</p>
              <p className="font-serif text-sm font-semibold text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
