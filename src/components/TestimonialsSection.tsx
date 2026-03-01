import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sophie Müller",
    country: "Germany",
    rating: 5,
    date: "February 2026",
    review:
      "Absolutely breathtaking. The infinity pool view over the Kigali hills at sunrise is something I'll never forget. Staff went above and beyond at every turn.",
    room: "VIP Suite",
    avatar: "SM",
  },
  {
    name: "James Okafor",
    country: "Nigeria",
    rating: 5,
    date: "January 2026",
    review:
      "We hosted our wedding here and it was perfection. The event team managed every detail flawlessly. Our guests are still talking about it.",
    room: "Private Event",
    avatar: "JO",
  },
  {
    name: "Claire Fontaine",
    country: "France",
    rating: 5,
    date: "December 2025",
    review:
      "The spa is world-class. Three days of pure relaxation. The Deluxe Double room was immaculate with the most comfortable bed I've ever slept in.",
    room: "Double Deluxe",
    avatar: "CF",
  },
  {
    name: "Amir Hassan",
    country: "UAE",
    rating: 5,
    date: "November 2025",
    review:
      "Lemon Hills combines African warmth with true five-star luxury. The fine dining exceeded our expectations — even compared to restaurants in Dubai.",
    room: "Deluxe Double",
    avatar: "AH",
  },
  {
    name: "Priya Sharma",
    country: "India",
    rating: 5,
    date: "October 2025",
    review:
      "A hidden gem. The gardens are stunning, the service impeccable, and the views are unreal. Already planning our return for our anniversary.",
    room: "Twin Room",
    avatar: "PS",
  },
  {
    name: "Marco Ricci",
    country: "Italy",
    rating: 5,
    date: "September 2025",
    review:
      "Stayed for a week for a corporate retreat. The conference facilities were exceptional and the team building activities in the garden were unforgettable.",
    room: "Corporate Retreat",
    avatar: "MR",
  },
];

const platformBadges = [
  { platform: "TripAdvisor", score: "5.0", label: "Travellers' Choice 2025" },
  { platform: "Google", score: "4.9", label: "320+ verified reviews" },
  { platform: "Booking.com", score: "9.6", label: "Exceptional" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? "fill-accent text-accent" : "text-border"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const { ref, getStaggerClass, getStaggerDelay } = useScrollReveal();

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-sans font-medium mb-3">
            Guest Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto text-sm leading-relaxed">
            Hear from travellers who have experienced the Lemon Hills difference.
          </p>

          {/* Platform rating badges */}
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            {platformBadges.map((p) => (
              <div
                key={p.platform}
                className="glass-card rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div>
                  <p className="font-serif text-xl font-bold text-accent">{p.score}</p>
                  <p className="text-[10px] font-sans text-muted-foreground uppercase tracking-wider">
                    {p.platform}
                  </p>
                </div>
                <div className="w-px h-8 bg-border" />
                <p className="text-xs font-sans text-foreground/70">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`glass-card rounded-3xl p-6 flex flex-col gap-4 ${getStaggerClass(i, "up")}`}
              style={getStaggerDelay(i, 120)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <span className="text-accent font-serif font-bold text-sm">{r.avatar}</span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-foreground">{r.name}</p>
                    <p className="text-[10px] font-sans text-muted-foreground">
                      {r.country} · {r.date}
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-accent/30 shrink-0" />
              </div>

              <StarRating rating={r.rating} />

              <p className="text-sm font-sans text-foreground/70 leading-relaxed flex-1">
                "{r.review}"
              </p>

              <div className="pt-2 border-t border-border">
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-accent">
                  {r.room}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
