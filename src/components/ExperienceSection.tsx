import { Leaf, Mountain, Utensils, Sparkles, Heart, Waves } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    icon: Mountain,
    title: "Hilltop Retreats",
    desc: "Guided nature walks through lush hills with breathtaking panoramic views at sunrise.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    desc: "Farm-to-table cuisine crafted by world-class chefs using locally sourced ingredients.",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    desc: "A stunning hillside pool overlooking the valley — perfect for unwinding at golden hour.",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    desc: "Holistic treatments and traditional therapies designed to restore mind and body.",
  },
  {
    icon: Leaf,
    title: "Garden Sanctuary",
    desc: "Wander through our curated botanical gardens, a peaceful escape into nature.",
  },
  {
    icon: Heart,
    title: "Private Events",
    desc: "Celebrate special moments in our exclusive event spaces with bespoke hospitality.",
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
              className="glass rounded-2xl p-8 group hover:bg-accent/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <exp.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {exp.title}
              </h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
