"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | undefined;

    // Fallback reveal for browsers without CSS scroll-driven animations
    if (!reduce && !CSS.supports("animation-timeline: view()")) {
      document.documentElement.classList.add("reveal-fallback");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            if (entry.isIntersecting) {
              el.classList.add("is-open");
              el.classList.remove("is-min");
            } else if (entry.boundingClientRect.top < 0) {
              el.classList.add("is-min");
              el.classList.remove("is-open");
            } else {
              el.classList.remove("is-open", "is-min");
            }
          });
        },
        { threshold: 0.08 }
      );
      document.querySelectorAll(".scroll-rise").forEach((el) => observer?.observe(el));
    }

    if (reduce) return () => observer?.disconnect();

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      observer?.disconnect();
    };
  }, []);
  return null;
}
