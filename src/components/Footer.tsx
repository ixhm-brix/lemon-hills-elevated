import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground relative overflow-hidden">
    {/* Top curved divider */}
    <div className="absolute top-0 left-0 right-0 h-20 bg-primary rounded-t-[3rem]" />

    <div className="container mx-auto px-6 pt-24 pb-10 relative z-10">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl font-bold mb-4">
            <span className="text-gradient-gold">Lemon</span> Hills
          </h3>
          <p className="text-primary-foreground/50 text-sm leading-relaxed font-sans">
            A five-star hilltop resort where timeless elegance meets the untouched beauty of nature.
          </p>
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
            <li className="flex items-center gap-2.5 text-primary-foreground/50"><MapPin className="w-3.5 h-3.5 text-accent" /> 42 Hillcrest Road, Greendale</li>
          </ul>
        </div>

        {/* Map placeholder */}
        <div>
          <h4 className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-accent mb-5">Location</h4>
          <div className="w-full h-40 glass rounded-2xl flex items-center justify-center text-xs text-primary-foreground/30 font-sans">
            Map Placeholder
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] font-sans text-primary-foreground/30">© 2026 Lemon Hills Hotel. All rights reserved.</p>
        <div className="flex gap-8">
          {["Facebook", "Instagram", "Twitter"].map((s) => (
            <a key={s} href="#" className="text-[11px] text-primary-foreground/30 hover:text-accent transition-colors font-sans tracking-wider uppercase">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
