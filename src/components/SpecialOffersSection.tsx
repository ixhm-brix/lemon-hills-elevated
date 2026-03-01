import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Tag, ArrowRight, Clock, Users, Sparkles } from "lucide-react";

const offers = [
  {
    tag: "Honeymoon Package",
    title: "Romance Escape",
    description:
      "Celebrate your love with a curated romantic escape — private terrace dining, couples spa treatment, champagne on arrival, and petal turndown service.",
    discount: "20% off",
    validUntil: "Valid until June 30, 2026",
    icon: Sparkles,
    highlights: [
      "Champagne & flowers on arrival",
      "Couples spa (90 min)",
      "Private terrace dinner",
      "Petal turndown service",
    ],
    gradientFrom: "from-rose-400/20",
    gradientTo: "to-amber-400/20",
    tagColor: "text-rose-500",
  },
  {
    tag: "Early Bird Offer",
    title: "Plan Ahead & Save",
    description:
      "Book your stay 30+ days in advance and enjoy exclusive savings. Flexible cancellation included — because peace of mind is part of luxury.",
    discount: "15% off",
    validUntil: "For stays March – December 2026",
    icon: Clock,
    highlights: [
      "Free cancellation up to 7 days prior",
      "Complimentary room upgrade",
      "Priority check-in from 10 AM",
      "Late checkout until 2 PM",
    ],
    gradientFrom: "from-teal-400/20",
    gradientTo: "to-blue-400/20",
    tagColor: "text-teal-600",
  },
  {
    tag: "Corporate Package",
    title: "Executive Retreat",
    description:
      "Productive days, restful nights. Full access to our conference facilities, high-speed WiFi, healthy breakfasts, and a dedicated concierge for your team.",
    discount: "Custom Rates",
    validUntil: "For groups of 5+ rooms",
    icon: Users,
    highlights: [
      "Conference room included",
      "Daily breakfast buffet",
      "Group airport transfers",
      "Dedicated event coordinator",
    ],
    gradientFrom: "from-violet-400/20",
    gradientTo: "to-blue-400/20",
    tagColor: "text-violet-600",
  },
];

const SpecialOffersSection = () => {
  const { ref, getStaggerClass, getStaggerDelay } = useScrollReveal();

  return (
    <section className="py-24 bg-muted/40" id="offers">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-sans font-medium mb-3">
            Exclusive Deals
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Special Offers
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm leading-relaxed">
            Elevate your stay with our curated packages, crafted for every kind of traveller.
          </p>
        </div>

        {/* Offers grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.tag}
              className={`relative overflow-hidden rounded-3xl border border-border bg-background shadow-premium flex flex-col ${getStaggerClass(i, "up")}`}
              style={getStaggerDelay(i, 150)}
            >
              {/* Coloured top accent bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${offer.gradientFrom} ${offer.gradientTo}`}
              />

              <div className="p-7 flex flex-col flex-1 gap-5">
                {/* Tag & icon */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase tracking-[0.25em] font-sans font-semibold ${offer.tagColor} flex items-center gap-1.5`}
                  >
                    <Tag className="w-3 h-3" />
                    {offer.tag}
                  </span>
                  <div className="glass-card rounded-xl p-2">
                    <offer.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title & description */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                    {offer.description}
                  </p>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 flex-1">
                  {offer.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs font-sans text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="font-serif text-xl font-bold text-accent">{offer.discount}</p>
                    <p className="text-[10px] font-sans text-muted-foreground">{offer.validUntil}</p>
                  </div>
                  <a
                    href="#rooms"
                    className="group inline-flex items-center gap-1.5 bg-accent/10 hover:bg-accent hover:text-accent-foreground text-accent px-4 py-2 rounded-full text-xs font-sans font-medium tracking-wide transition-all"
                  >
                    Book Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
