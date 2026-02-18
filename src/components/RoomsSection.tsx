import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { allRooms, type RoomData } from "@/data/roomData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import BookingModal from "@/components/BookingModal";

const RoomText = ({
  room,
  onReserve,
}: {
  room: RoomData;
  onReserve: () => void;
}) => (
  <div className="flex flex-col justify-center py-6 md:py-0">
    <p className="text-accent tracking-[0.35em] uppercase text-[10px] font-sans font-medium mb-3">
      {room.detail}
    </p>
    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-2">
      {room.name}
    </h3>
    <p className="font-serif text-lg text-gradient-gold font-bold mb-3">
      ${room.price}
      <span className="text-muted-foreground text-xs font-sans font-normal ml-1">
        / night
      </span>
    </p>
    <div className="w-10 h-px bg-accent mb-4" />
    <button
      onClick={onReserve}
      className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent font-sans font-medium hover:text-foreground transition-colors self-start"
    >
      Reserve
      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
    </button>
  </div>
);

const RoomImage = ({ room }: { room: RoomData }) => (
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
  onReserve,
}: {
  rooms: RoomData[];
  label: string;
  staggerStart?: number;
  getStaggerClass: (i: number, v?: "up" | "left" | "right" | "scale") => string;
  getStaggerDelay: (i: number, base?: number) => React.CSSProperties;
  onReserve: (room: RoomData) => void;
}) => (
  <div>
    <p className="text-accent/60 tracking-[0.3em] uppercase text-[9px] font-sans font-medium mb-8 text-center">
      {label}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
      {rooms.map((room, i) => (
        <div
          key={room.id}
          className={`space-y-5 ${getStaggerClass(staggerStart + i, i % 2 === 0 ? "left" : "right")}`}
          style={getStaggerDelay(staggerStart + i, 150)}
        >
          <RoomImage room={room} />
          <RoomText room={room} onReserve={() => onReserve(room)} />
        </div>
      ))}
    </div>
  </div>
);

const RoomsSection = () => {
  const { ref, visible, getStaggerClass, getStaggerDelay } = useScrollReveal();
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const standardRooms = allRooms.filter((r) => r.category === "Standard");
  const deluxeRooms = allRooms.filter((r) => r.category === "Deluxe");
  const vipRoom = allRooms.find((r) => r.category === "VIP")!;

  const openBooking = (room: RoomData) => {
    setSelectedRoom(room);
    setModalOpen(true);
  };

  return (
    <>
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
            <RoomPair rooms={standardRooms} label="Standard" staggerStart={0} getStaggerClass={getStaggerClass} getStaggerDelay={getStaggerDelay} onReserve={openBooking} />
            <RoomPair rooms={deluxeRooms} label="Deluxe" staggerStart={2} getStaggerClass={getStaggerClass} getStaggerDelay={getStaggerDelay} onReserve={openBooking} />

            {/* VIP Suite */}
            <div
              className={`relative group overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] cursor-pointer ${getStaggerClass(4, "scale")}`}
              style={getStaggerDelay(4, 150)}
              onClick={() => openBooking(vipRoom)}
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
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-1">
                    {vipRoom.name}
                  </h3>
                  <p className="font-serif text-xl text-gradient-gold font-bold mb-3">
                    ${vipRoom.price}
                    <span className="text-white/50 text-xs font-sans font-normal ml-1">/ night</span>
                  </p>
                  <div className="w-10 h-px bg-accent mx-auto mb-4" />
                  <span className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent font-sans font-medium hover:text-white transition-colors">
                    Reserve
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        room={selectedRoom}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default RoomsSection;
