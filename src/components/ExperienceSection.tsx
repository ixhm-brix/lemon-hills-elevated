import { useScrollReveal } from "@/hooks/useScrollReveal";
import expHilltop from "@/assets/exp-hilltop.jpg";
import expDining from "@/assets/exp-dining.jpg";
import expPool from "@/assets/exp-pool.jpg";
import expSpa from "@/assets/exp-spa.jpg";
import expGarden from "@/assets/exp-garden.jpg";
import expEvents from "@/assets/exp-events.jpg";

const experiences = [
  { title: "Hilltop Retreats", img: expHilltop },
  { title: "Fine Dining", img: expDining },
  { title: "Infinity Pool", img: expPool },
  { title: "Luxury Spa", img: expSpa },
  { title: "Garden Sanctuary", img: expGarden },
  { title: "Private Events", img: expEvents },
];

const ExperienceSection = () => {
  const { ref, visible, getStaggerClass, getStaggerDelay } = useScrollReveal();

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 bg-section-alt relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-14 md:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">
            Discover
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            The <span className="text-gradient-gold italic">Experience</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className={`group relative rounded-2xl overflow-hidden ${getStaggerClass(i, "scale")}`}
              style={getStaggerDelay(i, 120)}
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-[1.05] transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-3 left-3 sm:bottom-4 sm:left-5 font-serif text-sm sm:text-lg font-semibold text-white">
                {exp.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
