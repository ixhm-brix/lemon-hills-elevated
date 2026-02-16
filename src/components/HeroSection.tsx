import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-hotel.jpg";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Lemon Hills Hotel hilltop resort at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: `translateY(${scrollY * 0.35}px) scale(1.1)` }}
        loading="eager"
      />
      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      {/* Floating decorative glow orbs - subtler pulse */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/6 rounded-full blur-[120px] animate-glow-pulse [animation-delay:2s]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-8 opacity-80" />

        <p className="text-accent tracking-[0.5em] uppercase text-xs md:text-sm mb-6 font-sans font-medium animate-fade-in-up [animation-delay:0.2s] opacity-0">
          Five-Star Hilltop Resort
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 animate-fade-in-up [animation-delay:0.4s] opacity-0 drop-shadow-lg">
          Where Luxury<br />
          <span className="text-gradient-gold italic">Meets Nature</span>
        </h1>

        <p className="text-white/75 text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed animate-fade-in-up [animation-delay:0.6s] opacity-0 drop-shadow-sm">
          Nestled among lush green hills, Lemon Hills Hotel offers an unparalleled escape
          into serenity, elegance, and world-class hospitality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.8s] opacity-0">
          <a
            href="#booking"
            className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase transition-all font-sans font-medium hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Book Your Escape
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full text-sm tracking-[0.2em] uppercase transition-all font-sans font-medium hover:-translate-y-0.5"
          >
            Explore Rooms
          </a>
        </div>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-12 opacity-80" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/60 rounded-full animate-fade-in-up" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
