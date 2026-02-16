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
    <section id="amenities" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3 font-sans">Experience</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Resort Amenities</h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {amenities.map((a) => (
            <div key={a.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-accent/30 group-hover:bg-accent/10 transition-colors rounded-full">
                <a.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed font-sans">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
