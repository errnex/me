"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect } from "react";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
// springy ease-out (slight overshoot)
const easeOutBack = (t: number) => {
  const c1 = 1.4, c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("mac-anim");
    const els = Array.from(document.querySelectorAll<HTMLElement>(".scroll-rise"));
    const visible = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target as HTMLElement);
        else visible.delete(e.target as HTMLElement);
      }),
      { rootMargin: "20% 0px 20% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const apply = (el: HTMLElement) => {
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      // opening: from the moment the top enters the bottom of the viewport
      const enter = clamp((vh - r.top) / (vh * 0.4));
      // minimizing: once the element bottom moves into the top 22% of the viewport
      const exit = clamp((vh * 0.22 - r.bottom) / (vh * 0.22));
      if (reduce) {
        el.style.opacity = String(Math.min(enter, 1 - exit));
        return;
      }
      if (exit > 0) {
        el.style.transformOrigin = "50% 0%";
        el.style.transform = `translateY(${-30 * exit}px) scale(${1 - 0.12 * exit})`;
        el.style.filter = `blur(${10 * exit}px)`;
        el.style.opacity = String(1 - exit);
      } else {
        const e = easeOutBack(enter);
        el.style.transformOrigin = "50% 100%";
        el.style.transform = `translateY(${60 * (1 - e)}px) scale(${0.8 + 0.2 * e})`;
        el.style.filter = `blur(${10 * (1 - enter)}px)`;
        el.style.opacity = String(enter);
      }
    };

    let frame = 0;
    let lenis: Lenis | undefined;
    if (!reduce) lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: true });
    els.forEach(apply);
    const loop = (time: number) => {
      lenis?.raf(time);
      visible.forEach(apply);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      io.disconnect();
    };
  }, []);
  return null;
}
