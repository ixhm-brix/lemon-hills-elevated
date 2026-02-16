import { useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import deluxeImg from "@/assets/room-deluxe.jpg";
import execImg from "@/assets/room-executive.jpg";
import presImg from "@/assets/room-presidential.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import useEmblaCarousel from "embla-carousel-react";

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

const RoomsSection = () => {
  const { ref, visible } = useScrollReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

        {/* Desktop — full-width stacked editorial cards */}
        <div
          className={`hidden md:flex flex-col gap-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`group relative rounded-[2rem] overflow-hidden h-[420px] cursor-pointer ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              <img
                src={room.img}
                alt={room.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-12 max-w-lg">
                <p className="text-accent text-[10px] tracking-[0.3em] uppercase font-sans font-medium mb-3">
                  {room.detail}
                </p>
                <h3 className="font-serif text-4xl font-bold text-white mb-3 leading-tight">
                  {room.name}
                </h3>
                <p className="text-white/60 text-sm font-sans leading-relaxed mb-6">
                  {room.desc}
                </p>
                <div className="flex items-end gap-6">
                  <div>
                    <span className="text-white font-serif text-2xl font-bold">{room.price}</span>
                    <span className="text-white/40 text-xs font-sans ml-1">/night</span>
                  </div>
                  <a
                    href="#booking"
                    className="group/btn inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-accent font-sans font-medium hover:text-white transition-colors"
                  >
                    Reserve
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
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
                <div key={room.name} className="flex-[0_0_90%] min-w-0">
                  <div className="relative rounded-[1.5rem] overflow-hidden h-[400px]">
                    <img
                      src={room.img}
                      alt={room.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <p className="text-accent text-[9px] tracking-[0.3em] uppercase font-sans font-medium mb-2">
                        {room.detail}
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">{room.name}</h3>
                      <p className="text-white/50 text-xs font-sans leading-relaxed mb-4">{room.desc}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-serif text-xl font-bold">{room.price}</span>
                          <span className="text-white/40 text-xs font-sans ml-1">/night</span>
                        </div>
                        <a href="#booking" className="text-accent text-[10px] tracking-[0.15em] uppercase font-sans font-medium">
                          Reserve →
                        </a>
                      </div>
                    </div>
                  </div>
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
