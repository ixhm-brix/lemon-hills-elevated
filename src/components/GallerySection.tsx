import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  { src: g1, alt: "Infinity pool overlooking mountains", className: "col-span-2 row-span-2" },
  { src: g2, alt: "Fine dining restaurant", className: "" },
  { src: g3, alt: "Spa and wellness center", className: "row-span-2" },
  { src: g4, alt: "Grand hotel lobby", className: "" },
  { src: g5, alt: "Garden terrace dining at dusk", className: "" },
];

const GallerySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="gallery" className="py-28 md:py-40 bg-section-alt relative overflow-hidden">
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Moments</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Our <span className="text-gradient-gold italic">Gallery</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[260px] transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`group overflow-hidden rounded-[1.5rem] relative cursor-pointer ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover overlay with glass */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-xs tracking-wider font-sans">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
