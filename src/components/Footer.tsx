import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, Twitter, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-primary rounded-t-[3rem]" />

      <div className="container mx-auto px-6 pt-24 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand + Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              <span className="text-gradient-gold">Lemon</span> Hills
            </h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed font-sans mb-6">
              A five-star hilltop resort where timeless elegance meets the untouched beauty of nature.
            </p>
            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 glass rounded-full px-4 py-2.5 text-xs text-primary-foreground font-sans placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-2.5 transition-all hover:shadow-lg hover:shadow-accent/20">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-5">Explore</h4>
            <ul className="space-y-3 text-sm font-sans">
              {["About", "Rooms", "Amenities", "Gallery"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-1 group">
                    {l}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-5">Contact</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-center gap-2.5 text-primary-foreground/50"><Phone className="w-3.5 h-3.5 text-accent" /> +1 (555) 987-6543</li>
              <li className="flex items-center gap-2.5 text-primary-foreground/50"><Mail className="w-3.5 h-3.5 text-accent" /> reservations@lemonhills.com</li>
              <li className="flex items-center gap-2.5 text-primary-foreground/50"><MapPin className="w-3.5 h-3.5 text-accent" /> 1 KR Ruyenzi, Lemon Hills Hotel</li>
            </ul>
          </div>

          {/* Map embed */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-5">Location</h4>
            <div className="w-full h-40 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d29.3667!3d-2.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMjMnMDAuMCJTIDI5wrAyMicwMC4wIkU!5e0!3m2!1sen!2srw!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.8) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lemon Hills Hotel Location"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-sans text-primary-foreground/30">© 2026 Lemon Hills Hotel. All rights reserved.</p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="glass rounded-full p-2.5 text-primary-foreground/40 hover:text-accent hover:bg-accent/10 transition-all"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
