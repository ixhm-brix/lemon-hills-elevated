import heroImg from "@/assets/hero-hotel.jpg";

const HeroSection = () => (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Lemon Hills Hotel hilltop resort at golden hour"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

    <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
      <p className="text-accent tracking-[0.35em] uppercase text-sm mb-4 font-sans">
        Five-Star Hilltop Resort
      </p>
      <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
        Where Luxury<br />Meets Nature
      </h1>
      <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto font-sans">
        Nestled among lush green hills, Lemon Hills Hotel offers an unparalleled escape
        into serenity, elegance, and world-class hospitality.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#booking"
          className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-sm tracking-widest uppercase transition-colors font-sans"
        >
          Book Now
        </a>
        <a
          href="#rooms"
          className="inline-block border border-white/60 text-white hover:bg-white/10 px-8 py-3 text-sm tracking-widest uppercase transition-colors font-sans"
        >
          Explore Rooms
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
