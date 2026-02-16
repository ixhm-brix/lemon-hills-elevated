import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/80 pt-16 pb-8 rounded-t-[2.5rem]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-4">Lemon Hills</h3>
          <p className="text-sm leading-relaxed font-sans">
            A five-star hilltop resort where timeless elegance meets the untouched beauty of nature.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm font-sans">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> +1 (555) 987-6543</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> reservations@lemonhills.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> 42 Hillcrest Road, Greendale Valley</li>
          </ul>
        </div>

        {/* Map placeholder */}
        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-widest text-accent mb-4">Location</h4>
          <div className="w-full h-40 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl flex items-center justify-center text-xs text-primary-foreground/40 font-sans">
            Map Placeholder
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-sans">© 2026 Lemon Hills Hotel. All rights reserved.</p>
        <div className="flex gap-6">
          {["Facebook", "Instagram", "Twitter"].map((s) => (
            <a key={s} href="#" className="text-xs hover:text-accent transition-colors font-sans">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
