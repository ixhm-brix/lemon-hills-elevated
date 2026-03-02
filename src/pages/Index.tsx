import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <RoomsSection />
    <SpecialOffersSection />
    <AmenitiesSection />
    <GallerySection />
    <AboutSection />
    <Footer />
    <ScrollToTop />
    <WhatsAppButton />
  </main>
);

export default Index;
