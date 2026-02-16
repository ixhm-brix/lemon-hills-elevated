import { useEffect, useRef, useState, useCallback } from "react";

export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  // Helper: returns className for staggered child animations
  const getStaggerClass = useCallback(
    (index: number, variant: "up" | "left" | "right" | "scale" = "up") => {
      const baseHidden = {
        up: "opacity-0 translate-y-10",
        left: "opacity-0 -translate-x-10",
        right: "opacity-0 translate-x-10",
        scale: "opacity-0 scale-95",
      };
      const baseVisible = {
        up: "opacity-100 translate-y-0",
        left: "opacity-100 translate-x-0",
        right: "opacity-100 translate-x-0",
        scale: "opacity-100 scale-100",
      };
      return `transition-all duration-700 ease-out ${
        visible ? baseVisible[variant] : baseHidden[variant]
      }`;
    },
    [visible]
  );

  const getStaggerDelay = useCallback(
    (index: number, baseMs = 100) => ({
      transitionDelay: visible ? `${index * baseMs}ms` : "0ms",
    }),
    [visible]
  );

  return { ref, visible, getStaggerClass, getStaggerDelay };
};
