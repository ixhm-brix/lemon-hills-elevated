import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Book", href: "#booking" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-card/60 backdrop-blur-xl shadow-lg border border-border/50"
          : "bg-white/10 backdrop-blur-md border border-white/20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className={`font-serif text-2xl font-bold tracking-wide ${scrolled ? "text-primary" : "text-white"}`}>
          Lemon Hills
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm tracking-widest uppercase transition-colors ${
                  scrolled ? "text-foreground hover:text-accent" : "text-white/90 hover:text-accent"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className={`md:hidden ${scrolled ? "text-primary" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/70 backdrop-blur-xl border-t border-border/30 rounded-b-2xl">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
