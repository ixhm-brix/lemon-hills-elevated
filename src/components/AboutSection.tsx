import aboutImg from "@/assets/about-hotel.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-28 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div
        ref={ref}
        className={`container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Image with layered glass frame */}
        <div className="relative">
          <div className="absolute inset-0 glass-card rounded-[2rem] rotate-3 scale-95 opacity-50" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium">
            <img
              src={aboutImg}
              alt="Lemon Hills Hotel exterior with pool and gardens"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            {/* Glass overlay badge */}
            <div className="absolute bottom-6 left-6 glass-strong rounded-2xl px-6 py-3">
              <p className="text-white text-xs tracking-[0.2em] uppercase font-sans font-medium">Est. 1987</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
            A Sanctuary of<br />
            <span className="text-gradient-gold italic">Timeless Elegance</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-5 font-sans text-base">
            Since 1987, Lemon Hills Hotel has been a beacon of refined hospitality perched atop
            verdant highlands. Our philosophy is simple — blend timeless luxury with the raw beauty
            of nature to create moments that linger long after departure.
          </p>
          <p className="text-muted-foreground leading-relaxed font-sans text-base mb-8">
            Every detail, from our hand-curated interiors to our farm-to-table cuisine, reflects a
            deep commitment to excellence. Here, the rhythm of the hills sets the pace and every
            guest is treated as family.
          </p>
          {/* Stats */}
          <div className="flex gap-10">
            {[
              { num: "35+", label: "Years of Legacy" },
              { num: "200+", label: "Luxury Rooms" },
              { num: "50K+", label: "Happy Guests" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl font-bold text-gradient-gold">{s.num}</p>
                <p className="text-muted-foreground text-xs tracking-wider uppercase font-sans mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
