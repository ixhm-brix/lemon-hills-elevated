import { ArrowRight } from "lucide-react";
import deluxeImg from "@/assets/room-deluxe.jpg";
import execImg from "@/assets/room-executive.jpg";
import presImg from "@/assets/room-presidential.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const standardRooms = [
  { name: "Twin Room", detail: "Two Single Beds · 28 m²", desc: "", img: deluxeImg },
  { name: "Single Room", detail: "Single Bed · Compact · 18 m²", desc: "", img: execImg },
];

const deluxeRooms = [
  { name: "Deluxe Double Room", detail: "Queen Bed · Rain Shower · 42 m²", desc: "", img: deluxeImg },
  { name: "Double Deluxe Room", detail: "King Bed · Lounge Area · 55 m²", desc: "", img: execImg },
];

const vipRoom = {
  name: "VIP Suite",
  detail: "Emperor Bed · Jacuzzi · Private Terrace · 120 m²",
  img: presImg,
};

type Room = { name: string; detail: string; desc: string; img: string };

const RoomText = ({ room }: { room: Room }) => (
  <div className="flex flex-col justify-center py-6 md:py-0">
    <p className="text-accent tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-3">
      {room.detail}
    </p>
    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
      {room.name}
    </h3>
    <div className="w-10 h-px bg-accent mb-4" />
    <a
      href="#booking"
      className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent font-sans font-medium hover:text-foreground transition-colors"
    >
      Reserve
      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
    </a>
  </div>
);

const RoomImage = ({ room }: { room: Room }) => (
  <div className="group overflow-hidden rounded-[1.5rem] shadow-premium">
    <img
      src={room.img}
      alt={room.name}
      className="w-full h-[180px] sm:h-[220px] md:h-[300px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
      loading="lazy"
    />
  </div>
);

const RoomPair = ({
  rooms,
  label,
  staggerStart = 0,
  getStaggerClass,
  getStaggerDelay,
}: {
  rooms: Room[];
  label: string;
  staggerStart?: number;
  getStaggerClass: (i: number, v?: "up" | "left" | "right" | "scale") => string;
  getStaggerDelay: (i: number, base?: number) => React.CSSProperties;
}) => (
  <div>
    <p className="text-accent/60 tracking-[0.3em] uppercase text-[9px] font-sans font-medium mb-8 text-center">
      {label}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
      {rooms.map((room, i) => (
        <div
          key={room.name}
          className={`space-y-5 ${getStaggerClass(staggerStart + i, i % 2 === 0 ? "left" : "right")}`}
          style={getStaggerDelay(staggerStart + i, 150)}
        >
          <RoomImage room={room} />
          <RoomText room={room} />
        </div>
      ))}
    </div>
  </div>
);

const RoomsSection = () => {
  const { ref, visible, getStaggerClass, getStaggerDelay } = useScrollReveal();

  return (
    <section id="rooms" className="py-16 sm:py-20 md:py-28 bg-background relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-14 md:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Rooms & <span className="text-gradient-gold italic">Suites</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          <RoomPair rooms={standardRooms} label="Standard" staggerStart={0} getStaggerClass={getStaggerClass} getStaggerDelay={getStaggerDelay} />
          <RoomPair rooms={deluxeRooms} label="Deluxe" staggerStart={2} getStaggerClass={getStaggerClass} getStaggerDelay={getStaggerDelay} />

          {/* VIP Suite */}
          <div
            className={`relative group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ${getStaggerClass(4, "scale")}`}
            style={getStaggerDelay(4, 150)}
          >
            <img
              src={vipRoom.img}
              alt={vipRoom.name}
              className="w-full h-[280px] sm:h-[320px] md:h-[420px] object-cover group-hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <div className="glass-strong rounded-[1rem] sm:rounded-[1.5rem] px-6 py-6 sm:px-10 sm:py-10 md:px-14 md:py-12 text-center max-w-lg">
                <p className="text-accent tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-3">
                  {vipRoom.detail}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                  {vipRoom.name}
                </h3>
                <div className="w-10 h-px bg-accent mx-auto mb-4" />
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
    </section>
  );
};

export default RoomsSection;
