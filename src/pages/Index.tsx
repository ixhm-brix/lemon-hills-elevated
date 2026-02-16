import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";

import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    <ExperienceSection />
    <RoomsSection />
    <AmenitiesSection />
    <GallerySection />
    
    <BookingSection />
    <Footer />
    <ScrollToTop />
  </main>
);

export default Index;
