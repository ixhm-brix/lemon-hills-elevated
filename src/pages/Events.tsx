import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { toast } from "sonner";
import eventsHeroImg from "@/assets/exp-events.jpg";
import weddingImg from "@/assets/exp-garden.jpg";
import conferenceImg from "@/assets/hero-hotel.jpg"; // Fallback until specific img
import partyImg from "@/assets/exp-dining.jpg";

const EventSection = ({
    title,
    description,
    img,
    reversed = false,
    features,
}: {
    title: string;
    description: string;
    img: string;
    reversed?: boolean;
    features: string[];
}) => {
    const { ref, visible, getStaggerClass, getStaggerDelay } = useScrollReveal();

    return (
        <div ref={ref} className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-20 items-center py-16 md:py-24`}>
            <div className={`flex-1 w-full ${getStaggerClass(0, reversed ? "right" : "left")}`} style={getStaggerDelay(0)}>
                <div className={`relative group overflow-hidden rounded-[2rem] shadow-premium h-[300px] md:h-[450px] transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : `opacity-0 ${reversed ? "translate-x-10" : "-translate-x-10"}`}`}>
                    <img
                        src={img}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
            </div>
            <div className={`flex-1 space-y-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "200ms" }}>
                <h3 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
                    {title}
                </h3>
                <div className="w-12 h-1 bg-accent mb-4" />
                <p className="text-muted-foreground font-sans leading-relaxed text-lg">
                    {description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                    {features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm font-sans text-foreground/80">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const InquiryForm = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Inquiry sent!", {
                description: "Our events team will contact you shortly.",
            });
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="max-w-2xl mx-auto glass-strong rounded-3xl p-8 md:p-14 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />

            <div className="text-center mb-10">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Start Planning
                </h3>
                <p className="text-muted-foreground text-sm font-sans max-w-md mx-auto">
                    Tell us about your vision, and our dedicated event specialists will bring it to life.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-sans font-semibold text-muted-foreground ml-1">Name</label>
                        <input required type="text" className="w-full bg-background/60 border border-border/50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-background transition-all" placeholder="Your Full Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-sans font-semibold text-muted-foreground ml-1">Email</label>
                        <input required type="email" className="w-full bg-background/60 border border-border/50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-background transition-all" placeholder="email@example.com" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-sans font-semibold text-muted-foreground ml-1">Date</label>
                        <input type="date" className="w-full bg-background/60 border border-border/50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-background transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-sans font-semibold text-muted-foreground ml-1">Event Type</label>
                        <select className="w-full bg-background/60 border border-border/50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-background transition-all appearance-none">
                            <option>Wedding</option>
                            <option>Conference</option>
                            <option>Private Party</option>
                            <option>Gala Dinner</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-sans font-semibold text-muted-foreground ml-1">Additional Details</label>
                    <textarea required rows={4} className="w-full bg-background/60 border border-border/50 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-background transition-all resize-none" placeholder="Guest count, special requests, timeline..." />
                </div>
                <button disabled={loading} type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-bold tracking-widest uppercase text-xs py-5 rounded-xl transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 mt-4">
                    {loading ? "Sending Request..." : "Submit Inquiry"}
                </button>
            </form>
        </div>
    );
};

const Events = () => {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img src={eventsHeroImg} alt="Events Hero" className="w-full h-full object-cover animate-scale-slow" />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 text-center px-4 animate-fade-in-up mt-20">
                    <p className="text-accent tracking-[0.4em] uppercase text-xs sm:text-sm font-sans font-medium mb-6">
                        Gatherings & Celebrations
                    </p>
                    <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
                        Unforgettable <br /><span className="text-gradient-gold italic">Moments</span>
                    </h1>
                    <p className="text-white/80 max-w-xl mx-auto font-sans text-base sm:text-lg leading-relaxed font-light">
                        From intimate weddings to grand corporate retreats, create lasting memories in our hilltop paradise.
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="container mx-auto px-6 py-20 md:py-32 space-y-20 md:space-y-32">
                <EventSection
                    title="Fairytale Weddings"
                    description="Say 'I do' against a backdrop of rolling hills and golden sunsets. Our dedicated wedding specialists ensure every detail is perfect, from the floral arrangements to the gourmet catering. Whether it's an intimate ceremony or a grand reception, Lemon Hills provides the perfect canvas for your love story."
                    img={weddingImg}
                    features={["Hilltop Ceremony Venue", "Ballroom Reception", "Bridal Suite", "Custom Catering Menus", "Wedding Planner Support", "Photography Packages"]}
                />
                <EventSection
                    title="Corporate Retreats"
                    description="Inspire your team in a setting that encourages creativity and focus. Our conference facilities are equipped with state-of-the-art technology, while our serene environment provides the perfect escape for brainstorming and team building exercises amidst nature."
                    img={conferenceImg}
                    reversed
                    features={["High-Speed WiFi", "AV Equipment", "Breakout Rooms", "Executive Catering", "Team Building Activities", "Concierge Service"]}
                />
                <EventSection
                    title="Private Celebrations"
                    description="Celebrate life's milestones with style. From birthday bashes to anniversary dinners, our private event spaces offer exclusivity and elegance. Enjoy personalized menus curated by our executive chef and impeccable service for you and your guests."
                    img={partyImg}
                    features={["Private Dining Rooms", "Poolside Parties", "Custom Decor", "Live Music Options", "Valet Parking", "Cake & Pastry Service"]}
                />

                <div className="mt-20 md:mt-32">
                    <InquiryForm />
                </div>
            </div>

            <Footer />
            <ScrollToTop />
        </main>
    );
};

export default Events;
