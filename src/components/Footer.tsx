import { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight, Instagram, Facebook, Twitter, Send, Clock } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-20 bg-primary rounded-t-[3rem]" />

      <div className="container mx-auto px-6 pt-24 pb-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand + Newsletter */}
          <div className="md:col-span-1">
            <img src={logo} alt="Lemon Hills Hotel" className="h-14 w-auto mb-4" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed font-sans mb-6">
              A five-star hilltop resort where timeless elegance meets the untouched beauty of nature.
            </p>
            {/* Newsletter */}
            <p className="text-primary-foreground/70 text-xs font-sans font-semibold uppercase tracking-[0.15em] mb-2">
              Get 10% Off Your First Stay
            </p>
            <p className="text-primary-foreground/40 text-xs font-sans leading-relaxed mb-4">
              Subscribe for exclusive member rates, seasonal packages, and Rwanda travel inspiration.
            </p>
            <form className="flex gap-2" onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) {
                toast.error("Please enter your email.");
                return;
              }
              toast.success("Thanks for subscribing!", { description: "You'll receive our latest offers and updates." });
              setEmail("");
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 glass rounded-full px-4 py-2.5 text-xs text-primary-foreground font-sans placeholder:text-primary-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-2.5 transition-all hover:shadow-lg hover:shadow-accent/20">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-5">Explore</h4>
            <ul className="space-y-3 text-sm font-sans">
              {[
                { label: "Rooms", href: "#rooms" },
                { label: "Amenities", href: "#amenities" },
                { label: "Special Offers", href: "#offers" },
                { label: "Gallery", href: "#gallery" },
                { label: "Our Story", href: "#about" },
                { label: "Events", href: "/events" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-primary-foreground/50 hover:text-accent transition-colors flex items-center gap-1 group">
                    {l.label}
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
              <li className="flex items-center gap-2.5 text-primary-foreground/50"><Phone className="w-3.5 h-3.5 text-accent shrink-0" /> +250 788 123 456</li>
              <li className="flex items-center gap-2.5 text-primary-foreground/50"><Mail className="w-3.5 h-3.5 text-accent shrink-0" /> reservations@lemonhills.com</li>
              <li className="flex items-start gap-2.5 text-primary-foreground/50"><MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" /> 1 KR Ruyenzi, Lemon Hills Hotel, Kigali</li>
            </ul>
            <div className="mt-5 pt-5 border-t border-primary-foreground/10 space-y-2">
              <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-accent font-semibold mb-3">Hotel Hours</p>
              <div className="flex items-center gap-2.5 text-primary-foreground/50 text-xs font-sans">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span><span className="text-primary-foreground/70 font-medium">Check-in:</span> 2:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary-foreground/50 text-xs font-sans">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span><span className="text-primary-foreground/70 font-medium">Check-out:</span> 12:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5 text-primary-foreground/50 text-xs font-sans">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span><span className="text-primary-foreground/70 font-medium">Front Desk:</span> 24 / 7</span>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div>
            <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-5">Location</h4>
            <div className="w-full h-40 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.8!2d29.85!3d-1.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6e0fd1b729f%3A0x8ba3e0a3e5d7fbf!2sKigali%2C+Rwanda!5e0!3m2!1sen!2srw!4v1700000000000"
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
              { icon: Facebook, label: "Facebook", href: "https://facebook.com/lemonhillshotel" },
              { icon: Instagram, label: "Instagram", href: "https://instagram.com/lemonhillshotel" },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com/lemonhillshotel" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
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
