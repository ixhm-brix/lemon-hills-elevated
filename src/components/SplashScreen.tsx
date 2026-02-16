import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const removeTimer = setTimeout(() => onComplete(), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle decorative glow */}
      <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-[120px]" />

      {/* Top line */}
      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mb-10 animate-fade-in opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]" />

      {/* Logo */}
      <img
        src={logo}
        alt="Lemon Hills Hotel"
        className="h-20 sm:h-28 object-contain animate-fade-in opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]"
      />

      {/* Tagline */}
      <p className="text-accent tracking-[0.45em] uppercase text-[10px] sm:text-xs font-sans font-medium mt-6 animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
        Where Luxury Meets Nature
      </p>

      {/* Bottom line */}
      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mt-10 animate-fade-in opacity-0 [animation-delay:0.3s] [animation-fill-mode:forwards]" />
    </div>
  );
};

export default SplashScreen;
