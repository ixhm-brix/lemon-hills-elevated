import { useRef, useCallback } from "react";
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import deluxeImg from "@/assets/room-deluxe.jpg";
import execImg from "@/assets/room-executive.jpg";
import presImg from "@/assets/room-presidential.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import useEmblaCarousel from "embla-carousel-react";

const rooms = [
  {
    name: "Deluxe Room",
    price: "$320",
    desc: "Spacious comfort with king bed, nature views, and premium amenities for a restful retreat.",
    img: deluxeImg,
    tag: "Popular",
    amenities: [
      { icon: Bed, label: "King Bed" },
      { icon: Bath, label: "Rain Shower" },
      { icon: Maximize, label: "45 m²" },
    ],
  },
  {
    name: "Executive Suite",
    price: "$580",
    desc: "Expansive living area with panoramic hill views, private lounge, and dedicated concierge service.",
    img: execImg,
    tag: "Best Value",
    amenities: [
      { icon: Bed, label: "Super King" },
      { icon: Bath, label: "Marble Bath" },
      { icon: Maximize, label: "78 m²" },
    ],
  },
  {
    name: "Presidential Suite",
    price: "$1,200",
    desc: "The pinnacle of luxury — opulent interiors, private terrace, marble bath, and butler service.",
    img: presImg,
    tag: "Premium",
    amenities: [
      { icon: Bed, label: "Emperor Bed" },
      { icon: Bath, label: "Jacuzzi + Bath" },
      { icon: Maximize, label: "140 m²" },
    ],
  },
];

const RoomsSection = () => {
  const { ref, visible } = useScrollReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const RoomCard = ({ room }: { room: typeof rooms[0] }) => (
    <div className="group glass-card rounded-[2rem] overflow-hidden hover:shadow-premium transition-all duration-700 hover:-translate-y-2">
      <div className="relative overflow-hidden h-72">
        <img
          src={room.img}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Ribbon badge */}
        <div className="absolute top-0 right-6">
          <div className="bg-accent text-accent-foreground px-4 py-2 rounded-b-xl">
            <p className="text-[10px] tracking-[0.15em] uppercase font-sans font-semibold">{room.tag}</p>
          </div>
        </div>
        <div className="absolute bottom-5 left-5">
          <span className="text-white font-serif text-2xl font-bold">{room.price}</span>
          <span className="text-white/60 text-xs font-sans ml-1">/night</span>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">{room.name}</h3>
        <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5 font-sans">{room.desc}</p>

        {/* Amenity icons */}
        <div className="flex gap-4 mb-6">
          {room.amenities.map((a) => (
            <div key={a.label} className="flex items-center gap-1.5 text-primary-foreground/50">
              <a.icon className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
              <span className="text-[10px] font-sans tracking-wider uppercase">{a.label}</span>
            </div>
          ))}
        </div>

        <button className="group/btn w-full text-xs tracking-[0.2em] uppercase glass hover:bg-accent hover:text-accent-foreground hover:border-accent text-primary-foreground/80 px-6 py-3 rounded-full transition-all font-sans font-medium">
          View Details
          <span className="ml-1 group-hover/btn:ml-2 transition-all">→</span>
        </button>
      </div>
    </div>
  );

  return (
    <section id="rooms" className="py-28 md:py-40 bg-section-alt relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Accommodations</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Rooms & <span className="text-gradient-gold italic">Suites</span>
          </h2>
        </div>

        {/* Desktop grid */}
        <div
          className={`hidden md:grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {rooms.map((room) => <RoomCard key={room.name} room={room} />)}
        </div>

        {/* Mobile carousel */}
        <div
          className={`md:hidden transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {rooms.map((room) => (
                <div key={room.name} className="flex-[0_0_85%] min-w-0">
                  <RoomCard room={room} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-6">
            <button onClick={scrollPrev} className="glass rounded-full p-2.5 text-primary-foreground/60 hover:text-accent transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={scrollNext} className="glass rounded-full p-2.5 text-primary-foreground/60 hover:text-accent transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
