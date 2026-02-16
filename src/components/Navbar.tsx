import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#booking" },
];

const glassStyle = {
  background: "hsla(0, 0%, 100%, 0.08)",
  backdropFilter: "blur(24px) saturate(1.8)",
  WebkitBackdropFilter: "blur(24px) saturate(1.8)",
} as const;

const glassCardStyle = {
  background: "hsla(0, 0%, 100%, 0.55)",
  backdropFilter: "blur(20px) saturate(1.5)",
  WebkitBackdropFilter: "blur(20px) saturate(1.5)",
} as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const dipExtra = 30;

  return (
    <nav className="fixed top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 z-50">
      {/* Background: two overlapping rounded divs, no borders, same glass = seamless */}
      {/* Main bar background */}
      <div
        className={`absolute top-0 left-0 right-0 transition-all duration-700 ${
          scrolled ? "shadow-premium" : ""
        }`}
        style={{
          height: "100%",
          borderRadius: "9999px",
          ...(scrolled ? glassCardStyle : glassStyle),
        }}
      />
      {/* Logo dip extension - overlaps with main bar on the left */}
      <div
        className="absolute top-0 left-0 transition-all duration-700"
        style={{
          width: scrolled ? "0px" : "120px",
          height: scrolled ? "100%" : `calc(100% + ${dipExtra}px)`,
          borderRadius: scrolled ? "9999px" : "9999px 0 1.25rem 1.25rem",
          opacity: scrolled ? 0 : 1,
          ...(scrolled ? glassCardStyle : glassStyle),
        }}
      />

      {/* Content layer */}
      <div className="relative flex items-center justify-between px-5 sm:px-8 py-3" style={{ zIndex: 2 }}>
        <a
          href="#"
          className={`flex items-center transition-all duration-700 ${
            scrolled ? "" : "pb-7"
          }`}
        >
          <img
            src={logo}
            alt="Lemon Hills Hotel"
            className={`w-auto transition-all duration-700 ${
              scrolled ? "h-10 sm:h-12" : "h-12 sm:h-14"
            }`}
          />
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
        <div className="md:hidden glass-card rounded-3xl mt-2 mx-2 mb-2 relative" style={{ zIndex: 2 }}>
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
