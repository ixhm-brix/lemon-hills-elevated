import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  {
    name: "Sophia Laurent",
    role: "Travel Blogger",
    quote: "An absolutely magical experience. The views from our suite were unlike anything we've ever seen. Pure serenity.",
  },
  {
    name: "James Whitmore",
    role: "Business Executive",
    quote: "Impeccable service, world-class dining, and the infinity pool at sunset is something every traveler must witness.",
  },
  {
    name: "Amara Osei",
    role: "Interior Designer",
    quote: "From the moment we arrived, every detail was thoughtfully curated. Lemon Hills redefines luxury hospitality.",
  },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[150px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Guest <span className="text-gradient-gold italic">Reviews</span>
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {reviews.map((r) => (
            <div
              key={r.name}
              className="glass-card rounded-[2rem] p-8 md:p-10 text-center hover:shadow-premium hover:-translate-y-2 transition-all duration-500 relative"
            >
              {/* Decorative quote icon */}
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-accent/10 rounded-2xl">
                <Quote className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>

              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/80 italic leading-relaxed mb-8 font-sans text-sm">
                "{r.quote}"
              </p>

              <div className="w-10 h-[1px] bg-accent/30 mx-auto mb-5" />

              <p className="font-serif text-sm font-semibold text-foreground">{r.name}</p>
              <p className="text-muted-foreground text-xs font-sans mt-1">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
