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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 z-50 transition-all duration-700 rounded-full ${
        scrolled ? "glass-card shadow-premium" : "glass"
      }`}
    >
      <div className="flex items-center justify-between px-5 sm:px-8 py-3">
        <a href="#" className={`font-serif text-xl font-bold tracking-wide transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}>
          <span className="text-gradient-gold">Lemon</span>{" "}
          <span className={scrolled ? "text-foreground" : "text-white"}>Hills</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative text-[11px] tracking-[0.2em] uppercase transition-all px-4 py-2 rounded-full hover:bg-white/10 ${
                  activeSection === l.href.slice(1)
                    ? "text-accent"
                    : scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                {activeSection === l.href.slice(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                )}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#booking"
              className="text-[11px] tracking-[0.2em] uppercase bg-accent/90 hover:bg-accent text-accent-foreground px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Reserve
            </a>
          </li>
        </ul>

        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card rounded-3xl mt-2 mx-2 mb-2">
          <ul className="flex flex-col items-center gap-1 py-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-xs tracking-[0.2em] uppercase px-6 py-2.5 rounded-full transition-all block ${
                    activeSection === l.href.slice(1)
                      ? "text-accent bg-accent/5"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/5"
                  }`}
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
