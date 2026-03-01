import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 2:00 PM and check-out is by 12:00 PM (noon). Early check-in and late check-out are available on request, subject to availability. VIP Suite guests receive guaranteed early check-in from 10:00 AM.",
  },
  {
    q: "Is breakfast included in the room rate?",
    a: "Continental breakfast is included in all Deluxe and VIP room rates. Standard room guests can add a breakfast package for $25 per person per day. Our buffet is served daily from 6:30 AM to 10:30 AM at The Hilltop Restaurant.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Standard bookings: free cancellation up to 48 hours before arrival. Cancellations within 48 hours incur a one-night charge. Non-refundable rates are clearly marked at booking. Special packages (Honeymoon, Corporate) carry custom terms — refer to your package confirmation.",
  },
  {
    q: "Do you offer airport transfers?",
    a: "Yes! We offer complimentary round-trip shuttle service from Kigali International Airport (KGL) for stays of 2+ nights. For single-night stays, transfers are available at $30 each way. Please share your flight details at least 24 hours before arrival.",
  },
  {
    q: "Are children welcome at the hotel?",
    a: "Absolutely. Children of all ages are welcome. Children under 6 stay free when sharing their parents' room. The hotel has a dedicated play area, and our dining menu includes a children's section. Babysitting services are available with 12 hours' notice.",
  },
  {
    q: "Is the spa open to non-guests?",
    a: "Our Spa & Wellness Centre is open to outside visitors on weekdays, subject to availability. We recommend booking treatments at least 48 hours in advance. Hotel guests receive priority booking and a 10% discount on all treatments.",
  },
  {
    q: "Is WiFi available throughout the property?",
    a: "Yes. Complimentary high-speed WiFi (up to 100 Mbps) is available in all rooms, restaurants, public areas, the spa, and conference facilities. VIP Suite guests receive dedicated fibre bandwidth.",
  },
  {
    q: "Is the hotel wheelchair accessible?",
    a: "Yes. The hotel is fully accessible with ramp access, elevator service to all floors, and two adapted accessible rooms. Please notify us at booking so we can ensure the best room allocation and any additional assistance required.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, getStaggerClass, getStaggerDelay } = useScrollReveal();

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-sans font-medium mb-3">
            Have Questions?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground font-sans text-sm leading-relaxed">
            Everything you need to know before your stay. Can't find an answer?{" "}
            <a
              href="mailto:reservations@lemonhills.com"
              className="text-accent hover:underline"
            >
              Email our team
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div ref={ref} className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden ${getStaggerClass(i, "up")}`}
              style={getStaggerDelay(i, 60)}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="font-sans font-medium text-sm text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-accent shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
