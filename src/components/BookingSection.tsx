import { useState } from "react";
import { CalendarDays, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BookingSection = () => {
  const { ref, visible } = useScrollReveal();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section id="booking" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3 font-sans">Reservations</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Book Your Stay</h2>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-3xl p-8 md:p-10">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="text-xs uppercase tracking-widest mb-2 block font-sans opacity-80">
                  <CalendarDays className="w-3.5 h-3.5 inline mr-1" /> Check-in
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground font-sans focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest mb-2 block font-sans opacity-80">
                  <CalendarDays className="w-3.5 h-3.5 inline mr-1" /> Check-out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground font-sans focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest mb-2 block font-sans opacity-80">
                  <Users className="w-3.5 h-3.5 inline mr-1" /> Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/15 rounded-xl px-4 py-3 text-sm text-primary-foreground font-sans focus:outline-none focus:border-accent appearance-none transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n} className="text-foreground">{n} Guest{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-3 rounded-full text-sm tracking-widest uppercase transition-all font-sans hover:shadow-lg hover:shadow-accent/25">
                Reserve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
