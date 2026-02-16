import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <main>
    <Navbar />
    <HeroSection />
    
    <RoomsSection />
    <AmenitiesSection />
    <GallerySection />
    <TestimonialsSection />
    <BookingSection />
    <Footer />
    <ScrollToTop />
  </main>
);

export default Index;
