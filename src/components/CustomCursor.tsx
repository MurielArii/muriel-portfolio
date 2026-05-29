"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Désactivé sur écrans tactiles
    if (window.matchMedia("(hover: none)").matches) return;

    const dot  = dotRef.current!;
    const ring = ringRef.current!;

    let mx = -300, my = -300;
    let rx = -300, ry = -300;
    let rafId: number;
    let visible = false;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    /* ── Suivi immédiat du dot ── */
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top  = `${my}px`;
      if (!visible) {
        visible = true;
        rx = mx; ry = my;
        dot.style.opacity  = "1";
        ring.style.opacity = "1";
      }
    };

    /* ── Ring avec spring (lerp) ── */
    const tick = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", onMove);
    document.documentElement.style.cursor = "none";

    /* ── Hover sur éléments interactifs ── */
    const enter = () => {
      ring.style.width       = "60px";
      ring.style.height      = "60px";
      ring.style.background  = "color-mix(in oklch, var(--color-primary) 7%, transparent)";
      ring.style.borderColor = "var(--color-primary)";
      dot.style.transform    = "translate(-50%, -50%) scale(0)";
    };
    const leave = () => {
      ring.style.width       = "38px";
      ring.style.height      = "38px";
      ring.style.background  = "";
      ring.style.borderColor = "";
      dot.style.transform    = "translate(-50%, -50%) scale(1)";
    };

    const interactives = document.querySelectorAll<Element>("a, button, [role='button']");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = "";
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* ── Dot : suit instantanément ── */}
      <div
        ref={dotRef}
        style={{
          position   : "fixed",
          top        : 0,
          left       : 0,
          width      : 7,
          height     : 7,
          borderRadius: "50%",
          background : "var(--color-primary)",
          boxShadow  : "0 0 8px var(--color-primary), 0 0 18px color-mix(in oklch, var(--color-primary) 40%, transparent)",
          transform  : "translate(-50%, -50%) scale(1)",
          opacity    : 0,
          pointerEvents: "none",
          zIndex     : 10000,
          willChange : "left, top, transform",
          transition : "transform 0.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s",
        }}
      />
      {/* ── Ring : suit avec lag (spring) ── */}
      <div
        ref={ringRef}
        style={{
          position   : "fixed",
          top        : 0,
          left       : 0,
          width      : 38,
          height     : 38,
          borderRadius: "50%",
          border     : "1.5px solid color-mix(in oklch, var(--color-primary) 45%, transparent)",
          background : "transparent",
          transform  : "translate(-50%, -50%)",
          opacity    : 0,
          pointerEvents: "none",
          zIndex     : 9999,
          willChange : "left, top, width, height",
          transition :
            "width 0.4s cubic-bezier(0.34,1.56,0.64,1), height 0.4s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s, opacity 0.4s",
        }}
      />
    </>
  );
}
