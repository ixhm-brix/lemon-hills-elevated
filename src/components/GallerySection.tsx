import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const allImages = [
  { src: g1, alt: "Infinity pool overlooking mountains", category: "Pool", className: "col-span-2 row-span-2" },
  { src: g2, alt: "Fine dining restaurant", category: "Dining", className: "" },
  { src: g3, alt: "Spa and wellness center", category: "Spa", className: "row-span-2" },
  { src: g4, alt: "Grand hotel lobby", category: "Rooms", className: "" },
  { src: g5, alt: "Garden terrace dining at dusk", category: "Dining", className: "" },
];

const categories = ["All", "Rooms", "Dining", "Pool", "Spa"];

const GallerySection = () => {
  const { ref, visible, getStaggerClass, getStaggerDelay } = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? allImages : allImages.filter((img) => img.category === activeFilter);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () => setLightboxIdx((prev) => (prev !== null ? (prev - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIdx((prev) => (prev !== null ? (prev + 1) % filtered.length : null));

  return (
    <section id="gallery" className="py-16 sm:py-24 md:py-40 bg-section-alt relative overflow-hidden">
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-accent tracking-[0.4em] uppercase text-xs mb-4 font-sans font-medium">Moments</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
            Our <span className="text-gradient-gold italic">Gallery</span>
          </h2>
        </div>

        <div className={`flex justify-center gap-2 mb-12 flex-wrap transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[11px] tracking-[0.15em] uppercase font-sans px-5 py-2 rounded-full transition-all ${
                activeFilter === cat
                  ? "bg-accent text-accent-foreground"
                  : "glass text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[260px]">
          {filtered.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className={`group overflow-hidden rounded-[1.5rem] relative cursor-pointer ${img.className} ${getStaggerClass(i, "scale")}`}
              style={getStaggerDelay(i, 120)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white text-xs tracking-wider font-sans">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10">
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={filtered[lightboxIdx].src}
            alt={filtered[lightboxIdx].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-white/60 text-sm font-sans tracking-wider">
            {filtered[lightboxIdx].alt}
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
