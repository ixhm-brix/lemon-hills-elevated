import aboutImg from "@/assets/about-hotel.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div
        ref={ref}
        className={`container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={aboutImg}
            alt="Lemon Hills Hotel exterior with pool and gardens"
            className="w-full h-[400px] object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3 font-sans">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            A Sanctuary of Elegance
          </h2>
          <div className="w-16 h-0.5 bg-accent mb-6" />
          <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
            Since 1987, Lemon Hills Hotel has been a beacon of refined hospitality perched atop
            verdant highlands. Our philosophy is simple — blend timeless luxury with the raw beauty
            of nature to create moments that linger long after departure.
          </p>
          <p className="text-muted-foreground leading-relaxed font-sans">
            Every detail, from our hand-curated interiors to our farm-to-table cuisine, reflects a
            deep commitment to excellence. Here, the rhythm of the hills sets the pace and every
            guest is treated as family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
