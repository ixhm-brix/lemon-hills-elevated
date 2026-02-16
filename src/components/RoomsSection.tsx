import { ArrowRight } from "lucide-react";
import deluxeImg from "@/assets/room-deluxe.jpg";
import execImg from "@/assets/room-executive.jpg";
import presImg from "@/assets/room-presidential.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const rooms = [
  {
    name: "Deluxe Room",
    price: "$320",
    detail: "King Bed · Rain Shower · 45 m²",
    desc: "Spacious comfort with nature views and premium amenities for a restful retreat.",
    img: deluxeImg,
  },
  {
    name: "Executive Suite",
    price: "$580",
    detail: "Super King · Marble Bath · 78 m²",
    desc: "Panoramic hill views, private lounge, and dedicated concierge service.",
    img: execImg,
  },
  {
    name: "Presidential Suite",
    price: "$1,200",
    detail: "Emperor Bed · Jacuzzi · 140 m²",
    desc: "The pinnacle of luxury — private terrace, marble bath, and butler service.",
    img: presImg,
  },
];

const RoomText = ({ room }: { room: typeof rooms[0] }) => (
  <div className="flex flex-col justify-center py-8 md:py-0">
    <p className="text-accent tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-4">
      {room.detail}
    </p>
    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
      {room.name}
    </h3>
    <div className="w-12 h-px bg-accent mb-6" />
    <p className="text-muted-foreground text-sm md:text-base font-sans leading-relaxed mb-8 max-w-sm">
      {room.desc}
    </p>
    <div className="flex items-end gap-8">
      <div>
        <span className="text-foreground font-serif text-xl font-semibold">{room.price}</span>
        <span className="text-muted-foreground text-xs font-sans ml-1">/night</span>
      </div>
      <a
        href="#booking"
        className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent font-sans font-medium hover:text-foreground transition-colors"
      >
        Reserve
        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
      </a>
    </div>
  </div>
);

const RoomImage = ({ room }: { room: typeof rooms[0] }) => (
  <div className="group overflow-hidden rounded-[2rem] shadow-premium">
    <img
      src={room.img}
      alt={room.name}
      className="w-full h-[320px] md:h-[480px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
      loading="lazy"
    />
  </div>
);

const RoomsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="rooms" className="py-28 md:py-40 bg-background relative">
      <div ref={ref} className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Rooms & <span className="text-gradient-gold italic">Suites</span>
          </h2>
        </div>

        <div
          className={`space-y-20 md:space-y-32 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Room 1 — Image Left, Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
            <div className="md:col-span-3">
              <RoomImage room={rooms[0]} />
            </div>
            <div className="md:col-span-2">
              <RoomText room={rooms[0]} />
            </div>
          </div>

          {/* Room 2 — Text Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
            <div className="md:col-span-2 order-2 md:order-1">
              <RoomText room={rooms[1]} />
            </div>
            <div className="md:col-span-3 order-1 md:order-2">
              <RoomImage room={rooms[1]} />
            </div>
          </div>

          {/* Room 3 — Full-width cinematic with glass overlay */}
          <div className="relative group overflow-hidden rounded-[2rem]">
            <img
              src={rooms[2].img}
              alt={rooms[2].name}
              className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="glass-strong rounded-[1.5rem] px-10 py-10 md:px-16 md:py-14 text-center max-w-lg">
                <p className="text-accent tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-4">
                  {rooms[2].detail}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                  {rooms[2].name}
                </h3>
                <div className="w-12 h-px bg-accent mx-auto mb-5" />
                <p className="text-white/70 text-sm font-sans leading-relaxed mb-7">
                  {rooms[2].desc}
                </p>
                <div className="flex items-center justify-center gap-8">
                  <div>
                    <span className="text-white font-serif text-xl font-semibold">{rooms[2].price}</span>
                    <span className="text-white/50 text-xs font-sans ml-1">/night</span>
                  </div>
                  <a
                    href="#booking"
                    className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent font-sans font-medium hover:text-white transition-colors"
                  >
                    Reserve
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
