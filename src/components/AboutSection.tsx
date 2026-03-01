import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Leaf, Heart, Globe } from "lucide-react";

const milestones = [
  {
    year: "2018",
    label: "Founded",
    desc: "Lemon Hills Hotel opened its doors as Rwanda's first hilltop luxury resort.",
  },
  {
    year: "2020",
    label: "Award",
    desc: "Named 'Best Boutique Hotel in East Africa' by Luxury Travel Guide.",
  },
  {
    year: "2022",
    label: "Expansion",
    desc: "Spa & Wellness Centre and Conference Hall added to the property.",
  },
  {
    year: "2025",
    label: "Recognition",
    desc: "TripAdvisor Travellers' Choice Award for the 3rd consecutive year.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainable Luxury",
    desc: "Solar-powered resort with a zero-waste kitchen and locally sourced produce on every menu.",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    desc: "Every team member is trained in the Rwandan spirit of Agaciro — dignity, pride, and genuine care.",
  },
  {
    icon: Globe,
    title: "Community First",
    desc: "60% of our staff are from surrounding communities. We invest in local crafts, art, and produce.",
  },
  {
    icon: Award,
    title: "Five-Star Standards",
    desc: "Certified by Rwanda Development Board. Every stay is curated to meet the highest global benchmarks.",
  },
];

const stats = [
  { num: "60+", label: "Countries" },
  { num: "4,800+", label: "Happy Guests" },
  { num: "7+", label: "Awards Won" },
];

const AboutSection = () => {
  const { ref: storyRef, getStaggerClass: storyClass, getStaggerDelay: storyDelay } =
    useScrollReveal();
  const { ref: valuesRef, getStaggerClass: valuesClass, getStaggerDelay: valuesDelay } =
    useScrollReveal();

  return (
    <section className="py-24 bg-background" id="about">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-sans font-medium mb-3">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Lemon Hills
          </h2>
        </div>

        {/* Story + timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left — story text */}
          <div ref={storyRef} className={`space-y-6 ${storyClass(0, "left")}`} style={storyDelay(0)}>
            <p className="font-sans text-foreground/80 leading-relaxed text-base">
              Perched on a sun-kissed hilltop above Kigali, Lemon Hills Hotel was born from a single
              vision: to offer discerning travellers a sanctuary where African authenticity and
              world-class luxury coexist in perfect harmony.
            </p>
            <p className="font-sans text-foreground/80 leading-relaxed text-base">
              Named for the wild lemon trees that once dotted these hills, our resort honours the
              land it stands on. Every architectural detail, every handcrafted amenity, every dish
              on our menu tells a story of Rwanda — past, present, and future.
            </p>
            <p className="font-sans text-foreground/80 leading-relaxed text-base">
              Today we welcome guests from over 60 countries who come seeking the extraordinary —
              and leave with memories that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-accent">{s.num}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-5 items-start">
                <div className="w-14 shrink-0 text-right pt-1.5">
                  <span className="font-serif text-accent text-lg font-bold">{m.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border my-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-sans font-semibold text-sm text-foreground mb-1">{m.label}</p>
                  <p className="font-sans text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values grid */}
        <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`glass-card rounded-3xl p-6 ${valuesClass(i, "up")}`}
              style={valuesDelay(i, 100)}
            >
              <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <h4 className="font-sans font-semibold text-sm text-foreground mb-2">{v.title}</h4>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
