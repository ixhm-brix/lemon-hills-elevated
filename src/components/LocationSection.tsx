import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Car, Plane, Clock, MapPin } from "lucide-react";

const nearbyAttractions = [
  { name: "Kigali Genocide Memorial", distance: "8 km", time: "15 min" },
  { name: "Volcanoes National Park", distance: "110 km", time: "2 hrs" },
  { name: "Nyungwe Forest National Park", distance: "225 km", time: "3.5 hrs" },
  { name: "Lake Kivu", distance: "155 km", time: "2.5 hrs" },
  { name: "Kimironko Market", distance: "6 km", time: "12 min" },
  { name: "Kigali Convention Centre", distance: "5 km", time: "10 min" },
];

const transportOptions = [
  {
    icon: Plane,
    title: "From Kigali Airport",
    desc: "Kigali International Airport (KGL) is 18 km away. Our complimentary airport shuttle runs 24/7 — just share your flight details at booking.",
    badge: "~25 min",
  },
  {
    icon: Car,
    title: "Self-Drive & Parking",
    desc: "Located on KG 12 Ave, Gikondo hill. Free secured parking is available for all guests. GPS coordinates: -1.9350, 30.0645.",
    badge: "Free Parking",
  },
];

const LocationSection = () => {
  const { ref, getStaggerClass, getStaggerDelay } = useScrollReveal();

  return (
    <section className="py-24 bg-muted/40" id="location">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-sans font-medium mb-3">
            Getting Here
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us in Kigali
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm leading-relaxed">
            Nestled on a hilltop above Rwanda's vibrant capital, Lemon Hills is perfectly
            positioned for both relaxation and exploration.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — transport + attractions */}
          <div className="space-y-5">
            {/* Transport options */}
            {transportOptions.map((t, i) => (
              <div
                key={t.title}
                className={`glass-card rounded-3xl p-6 flex gap-4 ${getStaggerClass(i, "left")}`}
                style={getStaggerDelay(i, 120)}
              >
                <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                  <t.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-sans font-semibold text-sm text-foreground">{t.title}</h4>
                    <span className="text-[10px] font-sans text-accent border border-accent/30 rounded-full px-2.5 py-0.5">
                      {t.badge}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}

            {/* Nearby attractions */}
            <div
              className={`glass-card rounded-3xl p-6 ${getStaggerClass(2, "left")}`}
              style={getStaggerDelay(2, 120)}
            >
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-4 h-4 text-accent" />
                <h4 className="font-sans font-semibold text-sm text-foreground">
                  Nearby Attractions
                </h4>
              </div>
              <div className="space-y-3">
                {nearbyAttractions.map((a) => (
                  <div key={a.name} className="flex items-center justify-between">
                    <span className="text-sm font-sans text-foreground/70">{a.name}</span>
                    <div className="flex items-center gap-3 text-[11px] font-sans text-muted-foreground shrink-0 ml-4">
                      <span>{a.distance}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {a.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div
            className={`rounded-3xl overflow-hidden shadow-premium h-[480px] ${getStaggerClass(0, "right")}`}
            style={getStaggerDelay(0)}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.8!2d29.85!3d-1.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e0fd1b729f%3A0x8ba3e0a3e5d7fbf!2sKigali%2C+Rwanda!5e0!3m2!1sen!2srw!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lemon Hills Hotel Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
