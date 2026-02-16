import { useState } from "react";
import { CalendarDays, Users, ArrowRight, BedDouble } from "lucide-react";
import { format } from "date-fns";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const roomTypes = [
  { value: "deluxe", label: "Deluxe Room", price: 320 },
  { value: "executive", label: "Executive Suite", price: 580 },
  { value: "presidential", label: "Presidential Suite", price: 1200 },
];

const BookingSection = () => {
  const { ref, visible } = useScrollReveal();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("deluxe");

  const selectedRoom = roomTypes.find((r) => r.value === roomType);
  const nights = checkIn && checkOut ? Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / 86400000)) : 0;
  const estimate = nights > 0 && selectedRoom ? nights * selectedRoom.price : null;

  return (
    <section id="booking" className="py-16 sm:py-24 md:py-40 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-80 h-80 bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Reservations</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Book Your <span className="text-gradient-gold italic">Stay</span>
          </h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="glass-strong rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-10 md:p-14 glow-accent">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {/* Check-in date picker */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] mb-3 block font-sans text-primary-foreground/60 flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> Check-in
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="w-full glass rounded-xl px-5 py-3.5 text-sm text-primary-foreground font-sans text-left focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                      {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out date picker */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] mb-3 block font-sans text-primary-foreground/60 flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> Check-out
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="w-full glass rounded-xl px-5 py-3.5 text-sm text-primary-foreground font-sans text-left focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                      {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => date < (checkIn || new Date())}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Room type */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] mb-3 block font-sans text-primary-foreground/60 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5" /> Room Type
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full glass rounded-xl px-5 py-3.5 text-sm text-primary-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none transition-all"
                >
                  {roomTypes.map((r) => (
                    <option key={r.value} value={r.value} className="text-foreground bg-card">
                      {r.label} — ${r.price}/night
                    </option>
                  ))}
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] mb-3 block font-sans text-primary-foreground/60 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full glass rounded-xl px-5 py-3.5 text-sm text-primary-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none transition-all"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n} className="text-foreground bg-card">{n} Guest{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price estimate */}
            {estimate !== null && (
              <div className="text-center mb-8 animate-fade-in">
                <p className="text-primary-foreground/50 text-xs font-sans tracking-wider uppercase mb-1">Estimated Total</p>
                <p className="font-serif text-3xl font-bold text-gradient-gold">
                  ${estimate.toLocaleString()}
                </p>
                <p className="text-primary-foreground/40 text-xs font-sans mt-1">
                  {nights} night{nights > 1 ? "s" : ""} × ${selectedRoom?.price}/night
                </p>
              </div>
            )}

            <div className="text-center">
              <button className="group inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-14 py-4 rounded-full text-sm tracking-[0.2em] uppercase transition-all font-sans font-medium hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5">
                Reserve Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
