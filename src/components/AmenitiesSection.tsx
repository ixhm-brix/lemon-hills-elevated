import { Waves, UtensilsCrossed, Sparkles, Building2, Wifi } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const amenities = [
  { icon: Waves, title: "Infinity Pool", desc: "Swim on the edge of the sky with breathtaking valley views." },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Award-winning cuisine blending local flavors with global artistry." },
  { icon: Sparkles, title: "Spa & Wellness", desc: "Rejuvenate body and mind with holistic treatments and therapies." },
  { icon: Building2, title: "Conference Hall", desc: "State-of-the-art facilities for meetings and exclusive events." },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected with high-speed internet across the entire resort." },
];

const AmenitiesSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="amenities" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Experience</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Resort <span className="text-gradient-gold italic">Amenities</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {amenities.map((a, i) => (
            <div
              key={a.title}
              className="group glass-card rounded-[1.5rem] p-7 text-center hover:shadow-premium hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 group-hover:glow-accent transition-all duration-500 rounded-2xl">
                <a.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed font-sans">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
