import deluxeImg from "@/assets/room-deluxe.jpg";
import execImg from "@/assets/room-executive.jpg";
import presImg from "@/assets/room-presidential.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const rooms = [
  {
    name: "Deluxe Room",
    price: "$320",
    desc: "Spacious comfort with king bed, nature views, and premium amenities for a restful retreat.",
    img: deluxeImg,
    tag: "Popular",
  },
  {
    name: "Executive Suite",
    price: "$580",
    desc: "Expansive living area with panoramic hill views, private lounge, and dedicated concierge service.",
    img: execImg,
    tag: "Best Value",
  },
  {
    name: "Presidential Suite",
    price: "$1,200",
    desc: "The pinnacle of luxury — opulent interiors, private terrace, marble bath, and butler service.",
    img: presImg,
    tag: "Premium",
  },
];

const RoomsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="rooms" className="py-28 md:py-40 bg-section-alt relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Accommodations</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Rooms & <span className="text-gradient-gold italic">Suites</span>
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {rooms.map((room) => (
            <div
              key={room.name}
              className="group glass-card rounded-[2rem] overflow-hidden hover:shadow-premium transition-all duration-700 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Tag badge */}
                <div className="absolute top-5 right-5 glass-strong rounded-full px-4 py-1.5">
                  <p className="text-white text-[10px] tracking-[0.15em] uppercase font-sans font-medium">{room.tag}</p>
                </div>
                {/* Price on image */}
                <div className="absolute bottom-5 left-5">
                  <span className="text-white font-serif text-2xl font-bold">{room.price}</span>
                  <span className="text-white/60 text-xs font-sans ml-1">/night</span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">{room.name}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6 font-sans">{room.desc}</p>
                <button className="group/btn w-full text-xs tracking-[0.2em] uppercase glass hover:bg-accent hover:text-accent-foreground hover:border-accent text-primary-foreground/80 px-6 py-3 rounded-full transition-all font-sans font-medium">
                  View Details
                  <span className="ml-1 group-hover/btn:ml-2 transition-all">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
