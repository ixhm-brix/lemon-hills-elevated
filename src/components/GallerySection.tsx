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
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs mb-3 font-sans">Moments</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Gallery</h2>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px] transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden ${img.className}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
