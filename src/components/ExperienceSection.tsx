import { useScrollReveal } from "@/hooks/useScrollReveal";
import expHilltop from "@/assets/exp-hilltop.jpg";
import expDining from "@/assets/exp-dining.jpg";
import expPool from "@/assets/exp-pool.jpg";
import expSpa from "@/assets/exp-spa.jpg";
import expGarden from "@/assets/exp-garden.jpg";
import expEvents from "@/assets/exp-events.jpg";

const experiences = [
  {
    title: "Hilltop Retreats",
    desc: "Guided nature walks through lush hills with breathtaking panoramic views at sunrise.",
    img: expHilltop,
  },
  {
    title: "Fine Dining",
    desc: "Farm-to-table cuisine crafted by world-class chefs using locally sourced ingredients.",
    img: expDining,
  },
  {
    title: "Infinity Pool",
    desc: "A stunning hillside pool overlooking the valley — perfect for unwinding at golden hour.",
    img: expPool,
  },
  {
    title: "Luxury Spa",
    desc: "Holistic treatments and traditional therapies designed to restore mind and body.",
    img: expSpa,
  },
  {
    title: "Garden Sanctuary",
    desc: "Wander through our curated botanical gardens, a peaceful escape into nature.",
    img: expGarden,
  },
  {
    title: "Private Events",
    desc: "Celebrate special moments in our exclusive event spaces with bespoke hospitality.",
    img: expEvents,
  },
];

const ExperienceSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 md:py-28 bg-section-alt relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">
            Discover
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            The <span className="text-gradient-gold italic">Experience</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-sans mt-5 max-w-xl mx-auto leading-relaxed">
            Every detail at Lemon Hills is designed to immerse you in luxury, nature, and tranquility.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group rounded-2xl overflow-hidden bg-background"
            >
              <div className="overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-48 object-cover group-hover:scale-[1.05] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
