import { useState } from "react";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BookingSection = () => {
  const { ref, visible } = useScrollReveal();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section id="booking" className="py-28 md:py-40 bg-primary relative overflow-hidden">
      {/* Background decorative elements */}
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
          <div className="glass-strong rounded-[2rem] p-10 md:p-14 glow-accent">
            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] mb-3 block font-sans text-primary-foreground/60 flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full glass rounded-xl px-5 py-3.5 text-sm text-primary-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] mb-3 block font-sans text-primary-foreground/60 flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full glass rounded-xl px-5 py-3.5 text-sm text-primary-foreground font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
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
