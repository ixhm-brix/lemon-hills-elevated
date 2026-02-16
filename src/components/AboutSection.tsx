import { useEffect, useState, useRef } from "react";
import aboutImg from "@/assets/about-hotel.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const useCountUp = (end: number, duration = 2000, trigger = false) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [trigger, end, duration]);

  return count;
};

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();
  const years = useCountUp(35, 2000, visible);
  const rooms = useCountUp(200, 2000, visible);
  const guests = useCountUp(50, 2000, visible);

  return (
    <section id="about" className="py-28 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            A Sanctuary of <span className="text-gradient-gold italic">Timeless Elegance</span>
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-12 gap-10 md:gap-6 items-center transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Image — asymmetric overlap */}
          <div className="md:col-span-6 relative">
            <div className="absolute -inset-4 glass-card rounded-[2.5rem] rotate-2 scale-[0.97] opacity-40" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-premium md:-mr-16">
              <img
                src={aboutImg}
                alt="Lemon Hills Hotel exterior with pool and gardens"
                className="w-full h-[480px] md:h-[560px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 glass-strong rounded-2xl px-6 py-3">
                <p className="text-white text-xs tracking-[0.2em] uppercase font-sans font-medium">Est. 1987</p>
              </div>
            </div>
          </div>

          {/* Text — overlaps image */}
          <div className="md:col-span-6 md:pl-12 relative z-10">
            <div className="w-20 h-[2px] bg-gradient-to-r from-accent to-transparent mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-5 font-sans text-base">
              Since 1987, Lemon Hills Hotel has been a beacon of refined hospitality perched atop
              verdant highlands. Our philosophy is simple — blend timeless luxury with the raw beauty
              of nature to create moments that linger long after departure.
            </p>
            <p className="text-muted-foreground leading-relaxed font-sans text-base mb-10">
              Every detail, from our hand-curated interiors to our farm-to-table cuisine, reflects a
              deep commitment to excellence. Here, the rhythm of the hills sets the pace and every
              guest is treated as family.
            </p>

            {/* Animated counter stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: years, suffix: "+", label: "Years of Legacy" },
                { num: rooms, suffix: "+", label: "Luxury Rooms" },
                { num: guests, suffix: "K+", label: "Happy Guests" },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">
                    {s.num}{s.suffix}
                  </p>
                  <p className="text-muted-foreground text-[10px] tracking-[0.15em] uppercase font-sans mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
