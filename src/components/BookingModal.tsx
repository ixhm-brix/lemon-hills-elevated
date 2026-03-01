import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
    CalendarDays,
    Users,
    ArrowRight,
    ArrowLeft,
    Check,
    CreditCard,
    BedDouble,
    Maximize,
    Star,
    ChevronLeft,
    ChevronRight,
    QrCode,
    Mail,
    Phone,
    Copy,
} from "lucide-react";
import type { RoomData } from "@/data/roomData";

/* ─── types ─── */
type Step = 1 | 2 | 3 | 4;

interface BookingModalProps {
    room: RoomData | null;
    open: boolean;
    onClose: () => void;
}

/* ─── step indicator ─── */
const steps = [
    { n: 1, label: "Details" },
    { n: 2, label: "Review" },
    { n: 3, label: "Payment" },
    { n: 4, label: "Confirmed" },
] as const;

const StepIndicator = ({ current }: { current: Step }) => (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mb-8">
        {steps.map((s, i) => (
            <div key={s.n} className="flex items-center gap-1 sm:gap-2">
                <div
                    className={cn(
                        "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-xs font-sans font-medium transition-all",
                        current >= s.n
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                    )}
                >
                    {current > s.n ? <Check className="w-3.5 h-3.5" /> : s.n}
                </div>
                <span
                    className={cn(
                        "text-[10px] sm:text-xs font-sans tracking-wide hidden sm:inline",
                        current >= s.n ? "text-foreground" : "text-muted-foreground"
                    )}
                >
                    {s.label}
                </span>
                {i < steps.length - 1 && (
                    <div
                        className={cn(
                            "w-6 sm:w-10 h-px transition-all",
                            current > s.n ? "bg-accent" : "bg-border"
                        )}
                    />
                )}
            </div>
        ))}
    </div>
);

/* ─── image gallery (top of modal) ─── */
const RoomGallery = ({ room }: { room: RoomData }) => {
    // We use the same image but show it as a gallery-like display
    return (
        <div className="relative overflow-hidden rounded-2xl mb-6">
            <img
                src={room.img}
                alt={room.name}
                className="w-full h-[200px] sm:h-[260px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                    <p className="text-accent tracking-[0.3em] uppercase text-[10px] font-sans font-medium mb-1">
                        {room.category}
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {room.name}
                    </h3>
                </div>
                <div className="glass-strong rounded-xl px-4 py-2 text-center">
                    <p className="text-white font-serif text-lg sm:text-xl font-bold">
                        ${room.price}
                    </p>
                    <p className="text-white/60 text-[9px] font-sans uppercase tracking-wider">
                        per night
                    </p>
                </div>
            </div>
        </div>
    );
};

/* ─── room info bar ─── */
const RoomInfoBar = ({ room }: { room: RoomData }) => (
    <div className="grid grid-cols-3 gap-3 mb-6">
        {[
            { icon: BedDouble, label: room.detail.split("·")[0]?.trim() },
            { icon: Maximize, label: room.size },
            { icon: Users, label: `Up to ${room.maxGuests} guests` },
        ].map((item) => (
            <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 glass-card rounded-xl py-3 px-2"
            >
                <item.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                <span className="text-[10px] font-sans text-foreground/70 text-center leading-tight">
                    {item.label}
                </span>
            </div>
        ))}
    </div>
);

/* ─── step 1: dates & guests ─── */
const StepDates = ({
    room,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    guests,
    setGuests,
    onNext,
}: {
    room: RoomData;
    checkIn: Date | undefined;
    setCheckIn: (d: Date | undefined) => void;
    checkOut: Date | undefined;
    setCheckOut: (d: Date | undefined) => void;
    guests: number;
    setGuests: (n: number) => void;
    onNext: () => void;
}) => {
    const nights =
        checkIn && checkOut
            ? Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / 86400000))
            : 0;

    return (
        <div>
            {/* Features */}
            <div className="mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground mb-3">
                    Room Features
                </p>
                <div className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                        <span
                            key={f}
                            className="text-[11px] font-sans px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                            {f}
                        </span>
                    ))}
                </div>
            </div>

            {/* Date pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" /> Check-in
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans text-left focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                                {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 z-[200]" align="start">
                            <Calendar
                                mode="single"
                                selected={checkIn}
                                onSelect={setCheckIn}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" /> Check-out
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans text-left focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                                {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 z-[200]" align="start">
                            <Calendar
                                mode="single"
                                selected={checkOut}
                                onSelect={setCheckOut}
                                disabled={(date) => date < (checkIn || new Date())}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {/* Guests */}
            <div className="mb-6">
                <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> Guests
                </label>
                <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 appearance-none transition-all"
                >
                    {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                            {n} Guest{n > 1 ? "s" : ""}
                        </option>
                    ))}
                </select>
            </div>

            {/* Price summary */}
            {nights > 0 && (
                <div className="bg-accent/5 border border-accent/15 rounded-xl p-4 mb-6">
                    <div className="flex justify-between text-sm font-sans mb-1">
                        <span className="text-muted-foreground">
                            ${room.price} × {nights} night{nights > 1 ? "s" : ""}
                        </span>
                        <span className="text-foreground font-medium">
                            ${(room.price * nights).toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm font-sans mb-1">
                        <span className="text-muted-foreground">Service fee</span>
                        <span className="text-foreground font-medium">
                            ${Math.round(room.price * nights * 0.05).toLocaleString()}
                        </span>
                    </div>
                    <div className="w-full h-px bg-border my-2" />
                    <div className="flex justify-between font-sans">
                        <span className="text-foreground font-semibold">Total</span>
                        <span className="font-serif text-xl font-bold text-gradient-gold">
                            ${Math.round(room.price * nights * 1.05).toLocaleString()}
                        </span>
                    </div>
                </div>
            )}

            <button
                onClick={() => {
                    if (!checkIn || !checkOut) {
                        toast.error("Please select check-in and check-out dates.");
                        return;
                    }
                    if (checkOut <= checkIn) {
                        toast.error("Check-out must be after check-in.");
                        return;
                    }
                    onNext();
                }}
                className="w-full group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all font-sans font-medium hover:shadow-xl hover:shadow-accent/20"
            >
                Continue
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

/* ─── step 2: review ─── */
const StepReview = ({
    room,
    checkIn,
    checkOut,
    guests,
    nights,
    total,
    onBack,
    onNext,
}: {
    room: RoomData;
    checkIn: Date;
    checkOut: Date;
    guests: number;
    nights: number;
    total: number;
    onBack: () => void;
    onNext: () => void;
}) => (
    <div>
        <div className="bg-muted rounded-2xl p-5 sm:p-6 mb-6 space-y-4">
            {[
                { label: "Room", value: room.name },
                { label: "Check-in", value: format(checkIn, "EEEE, MMMM dd, yyyy") },
                { label: "Check-out", value: format(checkOut, "EEEE, MMMM dd, yyyy") },
                { label: "Duration", value: `${nights} night${nights > 1 ? "s" : ""}` },
                { label: "Guests", value: `${guests} guest${guests > 1 ? "s" : ""}` },
            ].map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm font-sans">{item.label}</span>
                    <span className="text-foreground text-sm font-sans font-medium">{item.value}</span>
                </div>
            ))}
            <div className="w-full h-px bg-border" />
            <div className="flex justify-between items-center">
                <span className="text-foreground font-sans font-semibold">Total</span>
                <span className="font-serif text-2xl font-bold text-gradient-gold">
                    ${total.toLocaleString()}
                </span>
            </div>
        </div>

        {/* Cancellation policy notice */}
        <div className="bg-muted rounded-xl px-5 py-4 mb-6 space-y-1.5">
            <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground font-semibold">
                Booking Policies
            </p>
            <p className="text-xs font-sans text-foreground/70 leading-relaxed">
                <span className="font-medium text-foreground">Check-in:</span> 2:00 PM &nbsp;·&nbsp; <span className="font-medium text-foreground">Check-out:</span> 12:00 PM
            </p>
            <p className="text-xs font-sans text-foreground/70 leading-relaxed">
                <span className="font-medium text-foreground">Cancellation:</span> Free cancellation up to 48 hours before arrival. Cancellations within 48 hours incur a one-night charge.
            </p>
            <p className="text-xs font-sans text-foreground/70 leading-relaxed">
                <span className="font-medium text-foreground">Breakfast:</span> Included with Deluxe & VIP rooms. Available as add-on ($25/person/day) for Standard rooms.
            </p>
        </div>

        <div className="flex gap-3">
            <button
                onClick={onBack}
                className="flex-1 inline-flex items-center justify-center gap-2 border border-border hover:bg-muted py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all font-sans font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
                Back
            </button>
            <button
                onClick={onNext}
                className="flex-[2] group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all font-sans font-medium hover:shadow-xl hover:shadow-accent/20"
            >
                Continue to Payment
                <CreditCard className="w-4 h-4" />
            </button>
        </div>
    </div>
);

/* ─── step 3: payment ─── */
const StepPayment = ({
    total,
    onBack,
    onPay,
}: {
    total: number;
    onBack: () => void;
    onPay: () => void;
}) => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const formatCard = (v: string) =>
        v
            .replace(/\D/g, "")
            .slice(0, 16)
            .replace(/(.{4})/g, "$1 ")
            .trim();

    const formatExpiry = (v: string) => {
        const digits = v.replace(/\D/g, "").slice(0, 4);
        if (digits.length > 2) return digits.slice(0, 2) + "/" + digits.slice(2);
        return digits;
    };

    const handlePay = () => {
        if (!name.trim()) return toast.error("Please enter the cardholder name.");
        if (cardNumber.replace(/\s/g, "").length < 16) return toast.error("Please enter a valid card number.");
        if (expiry.length < 5) return toast.error("Please enter a valid expiry date.");
        if (cvc.length < 3) return toast.error("Please enter a valid CVC.");

        setLoading(true);
        // Simulate processing
        setTimeout(() => {
            setLoading(false);
            onPay();
        }, 2000);
    };

    return (
        <div>
            <div className="bg-accent/5 border border-accent/15 rounded-xl p-4 mb-6 flex justify-between items-center">
                <span className="text-sm font-sans text-muted-foreground">Amount to pay</span>
                <span className="font-serif text-xl font-bold text-gradient-gold">
                    ${total.toLocaleString()}
                </span>
            </div>

            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground">
                        Cardholder Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                </div>
                <div>
                    <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground">
                        Card Number
                    </label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(formatCard(e.target.value))}
                        placeholder="4242 4242 4242 4242"
                        className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans font-mono focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all tracking-wider"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground">
                            Expiry
                        </label>
                        <input
                            type="text"
                            value={expiry}
                            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                            placeholder="MM/YY"
                            className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans font-mono focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all tracking-wider"
                        />
                    </div>
                    <div>
                        <label className="text-[10px] uppercase tracking-[0.2em] mb-2 block font-sans text-muted-foreground">
                            CVC
                        </label>
                        <input
                            type="text"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
                            placeholder="123"
                            className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-sans font-mono focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all tracking-wider"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={onBack}
                    disabled={loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 border border-border hover:bg-muted py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all font-sans font-medium disabled:opacity-50"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </button>
                <button
                    onClick={handlePay}
                    disabled={loading}
                    className="flex-[2] group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all font-sans font-medium hover:shadow-xl hover:shadow-accent/20 disabled:opacity-70"
                >
                    {loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            Pay ${total.toLocaleString()}
                            <CreditCard className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

/* ─── step 4: confirmation ─── */
const StepConfirmation = ({
    room,
    checkIn,
    checkOut,
    nights,
    guests,
    total,
    refNumber,
    onClose,
}: {
    room: RoomData;
    checkIn: Date;
    checkOut: Date;
    nights: number;
    guests: number;
    total: number;
    refNumber: string;
    onClose: () => void;
}) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        if (!email.trim() && !phone.trim()) {
            toast.error("Please enter your email or phone number.");
            return;
        }
        setSent(true);
        toast.success("Confirmation sent!", {
            description: email
                ? `Check your inbox at ${email}`
                : `SMS sent to ${phone}`,
        });
    };

    return (
        <div className="text-center">
            {/* Success icon */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-500" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-foreground mb-1">Booking Confirmed!</h3>
            <p className="text-muted-foreground text-sm font-sans mb-6">
                Your reservation has been confirmed.
            </p>

            {/* Reference number */}
            <div className="bg-muted rounded-xl p-4 mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground mb-1">
                    Booking Reference
                </p>
                <div className="flex items-center justify-center gap-2">
                    <p className="font-mono text-lg font-bold text-foreground tracking-wider">
                        {refNumber}
                    </p>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(refNumber);
                            toast.success("Copied to clipboard!");
                        }}
                        className="text-muted-foreground hover:text-accent transition-colors"
                    >
                        <Copy className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Booking summary */}
            <div className="bg-muted rounded-xl p-4 mb-6 text-left space-y-2">
                {[
                    { label: "Room", value: room.name },
                    { label: "Check-in", value: format(checkIn, "MMM dd, yyyy") },
                    { label: "Check-out", value: format(checkOut, "MMM dd, yyyy") },
                    { label: "Nights", value: String(nights) },
                    { label: "Guests", value: String(guests) },
                    { label: "Total Paid", value: `$${total.toLocaleString()}` },
                ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm font-sans">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium">{item.value}</span>
                    </div>
                ))}
            </div>

            {/* Email / Phone for QR code */}
            {!sent ? (
                <div className="bg-accent/5 border border-accent/15 rounded-xl p-5 mb-6 text-left">
                    <div className="flex items-center gap-2 mb-3">
                        <QrCode className="w-4 h-4 text-accent" />
                        <p className="text-sm font-sans font-medium text-foreground">
                            Get your check-in QR code
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground font-sans mb-4">
                        We'll send a QR code to speed up your check-in at the hotel.
                    </p>
                    <div className="space-y-3">
                        <div>
                            <label className="text-[10px] uppercase tracking-[0.2em] mb-1.5 block font-sans text-muted-foreground flex items-center gap-1">
                                <Mail className="w-3 h-3" /> Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="guest@example.com"
                                className="w-full bg-background rounded-xl px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-[0.2em] mb-1.5 block font-sans text-muted-foreground flex items-center gap-1">
                                <Phone className="w-3 h-3" /> Phone (optional)
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+250 7XX XXX XXX"
                                className="w-full bg-background rounded-xl px-4 py-2.5 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                            />
                        </div>
                        <button
                            onClick={handleSend}
                            className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-full text-xs tracking-[0.15em] uppercase transition-all font-sans font-medium"
                        >
                            Send QR Code
                            <QrCode className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-green-500/5 border border-green-500/15 rounded-xl p-5 mb-6 flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <p className="text-sm font-sans text-foreground">
                        QR code sent! Check your {email ? "inbox" : "messages"}.
                    </p>
                </div>
            )}

            <button
                onClick={onClose}
                className="w-full border border-border hover:bg-muted py-3.5 rounded-full text-sm tracking-[0.15em] uppercase transition-all font-sans font-medium"
            >
                Done
            </button>
        </div>
    );
};

/* ═══════════════════════════════════════════════════════
   MAIN MODAL
   ═══════════════════════════════════════════════════════ */
const BookingModal = ({ room, open, onClose }: BookingModalProps) => {
    const [step, setStep] = useState<Step>(1);
    const [checkIn, setCheckIn] = useState<Date>();
    const [checkOut, setCheckOut] = useState<Date>();
    const [guests, setGuests] = useState(1);

    const nights =
        checkIn && checkOut
            ? Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / 86400000))
            : 0;
    const subtotal = room ? room.price * nights : 0;
    const total = Math.round(subtotal * 1.05); // 5% service fee

    const refNumber = useMemo(
        () => "LH-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [step === 4] // regenerate only when reaching confirmation
    );

    const handleClose = () => {
        onClose();
        // Reset after close animation
        setTimeout(() => {
            setStep(1);
            setCheckIn(undefined);
            setCheckOut(undefined);
            setGuests(1);
        }, 300);
    };

    if (!room) return null;

    return (
        <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-0 shadow-2xl rounded-2xl sm:rounded-3xl">
                <DialogTitle className="sr-only">Book {room.name}</DialogTitle>

                <div className="p-5 sm:p-8">
                    {/* Room gallery — only show on step 1 */}
                    {step === 1 && (
                        <>
                            <RoomGallery room={room} />
                            <RoomInfoBar room={room} />
                        </>
                    )}

                    {/* Step indicator */}
                    <StepIndicator current={step} />

                    {/* Step content */}
                    {step === 1 && (
                        <StepDates
                            room={room}
                            checkIn={checkIn}
                            setCheckIn={setCheckIn}
                            checkOut={checkOut}
                            setCheckOut={setCheckOut}
                            guests={guests}
                            setGuests={setGuests}
                            onNext={() => setStep(2)}
                        />
                    )}

                    {step === 2 && checkIn && checkOut && (
                        <StepReview
                            room={room}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            guests={guests}
                            nights={nights}
                            total={total}
                            onBack={() => setStep(1)}
                            onNext={() => setStep(3)}
                        />
                    )}

                    {step === 3 && (
                        <StepPayment
                            total={total}
                            onBack={() => setStep(2)}
                            onPay={() => setStep(4)}
                        />
                    )}

                    {step === 4 && checkIn && checkOut && (
                        <StepConfirmation
                            room={room}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            nights={nights}
                            guests={guests}
                            total={total}
                            refNumber={refNumber}
                            onClose={handleClose}
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
