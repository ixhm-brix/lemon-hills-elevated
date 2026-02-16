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
  },
  {
    name: "Executive Suite",
    price: "$580",
    desc: "Expansive living area with panoramic hill views, private lounge, and dedicated concierge service.",
    img: execImg,
  },
  {
    name: "Presidential Suite",
    price: "$1,200",
    desc: "The pinnacle of luxury — opulent interiors, private terrace, marble bath, and butler service.",
    img: presImg,
  },
];

const RoomsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="rooms" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3 font-sans">Accommodations</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Rooms & Suites</h2>
        </div>

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {rooms.map((room) => (
            <div key={room.name} className="group bg-card/60 backdrop-blur-lg border border-border/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
              <div className="overflow-hidden h-64 rounded-t-3xl">
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{room.name}</h3>
                  <span className="bg-accent/15 text-accent font-sans text-sm font-medium px-3 py-1 rounded-full">{room.price}<span className="text-accent/70 text-xs"> /night</span></span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 font-sans">{room.desc}</p>
                <button className="text-xs tracking-widest uppercase bg-primary/10 hover:bg-primary/20 text-primary px-5 py-2 rounded-full transition-all font-sans">
                  View Details →
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
