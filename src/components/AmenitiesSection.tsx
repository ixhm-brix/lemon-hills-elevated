import { Waves, UtensilsCrossed, Sparkles, Building2, Wifi } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const amenities = [
  { icon: Waves, title: "Infinity Pool", desc: "Swim on the edge of the sky with breathtaking valley views.", size: "large" },
  { icon: UtensilsCrossed, title: "Fine Dining", desc: "Award-winning cuisine blending local flavors with global artistry.", size: "small" },
  { icon: Sparkles, title: "Spa & Wellness", desc: "Rejuvenate body and mind with holistic treatments and therapies.", size: "small" },
  { icon: Building2, title: "Conference Hall", desc: "State-of-the-art facilities for meetings and exclusive events.", size: "small" },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected with high-speed internet across the entire resort.", size: "large" },
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

        {/* Bento grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[180px] md:auto-rows-[220px] transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {amenities.map((a, i) => (
            <div
              key={a.title}
              className={`group relative rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-premium ${
                a.size === "large" ? "col-span-2 row-span-1" : "col-span-1 row-span-1"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-accent/5 to-transparent" />
              <div className="absolute inset-0 glass-card" />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-accent rounded-[1.5rem]" />

              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 mb-5 flex items-center justify-center bg-accent/10 group-hover:bg-accent/25 transition-all duration-500 rounded-2xl group-hover:scale-110">
                  <a.icon className="w-7 h-7 text-accent group-hover:animate-float" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed font-sans max-w-[200px]">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
