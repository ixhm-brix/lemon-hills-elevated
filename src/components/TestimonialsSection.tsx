import { useState, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  {
    name: "Sophia Laurent",
    role: "Travel Blogger",
    quote: "An absolutely magical experience. The views from our suite were unlike anything we've ever seen. Pure serenity.",
    initials: "SL",
  },
  {
    name: "James Whitmore",
    role: "Business Executive",
    quote: "Impeccable service, world-class dining, and the infinity pool at sunset is something every traveler must witness.",
    initials: "JW",
  },
  {
    name: "Amara Osei",
    role: "Interior Designer",
    quote: "From the moment we arrived, every detail was thoughtfully curated. Lemon Hills redefines luxury hospitality.",
    initials: "AO",
  },
  {
    name: "David Chen",
    role: "Photographer",
    quote: "The landscape is a photographer's dream. Golden hour from the terrace is absolutely breathtaking.",
    initials: "DC",
  },
];

const TestimonialsSection = () => {
  const { ref, visible } = useScrollReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => { emblaApi?.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { emblaApi?.scrollNext(); }, [emblaApi]);

  // Update selected index on scroll
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Attach listener
  useCallback(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[150px]" />

      {/* Large decorative quote */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote className="w-[400px] h-[400px] text-accent" strokeWidth={0.5} />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Guest <span className="text-gradient-gold italic">Reviews</span>
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((r) => (
                <div key={r.name} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="glass-card rounded-[2rem] p-10 md:p-14 text-center max-w-2xl mx-auto">
                    {/* Avatar */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/15 flex items-center justify-center border-2 border-accent/30">
                      <span className="font-serif text-lg font-bold text-accent">{r.initials}</span>
                    </div>

                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>

                    <p className="text-foreground/80 italic leading-relaxed mb-8 font-sans text-base md:text-lg">
                      "{r.quote}"
                    </p>

                    <div className="w-10 h-[1px] bg-accent/30 mx-auto mb-5" />

                    <p className="font-serif text-base font-semibold text-foreground">{r.name}</p>
                    <p className="text-muted-foreground text-xs font-sans mt-1">{r.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={scrollPrev} className="glass rounded-full p-3 text-foreground/50 hover:text-accent transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "bg-accent w-6" : "bg-foreground/15"
                  }`}
                />
              ))}
            </div>
            <button onClick={scrollNext} className="glass rounded-full p-3 text-foreground/50 hover:text-accent transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
