"use client";

import { useState, useEffect } from "react";

const WORDS = [
  { label: "Aspire",  gradient: false },
  { label: "Act",     gradient: false },
  { label: "Achieve", gradient: true  },
];

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");

  
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 2200);
    const t2 = setTimeout(() => setPhase("done"), 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = phase === "enter" ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  if (phase === "done") return null;

  const leaving = phase === "exit";

  return (
    <>
      {}
      <div
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          height: "50%",
          background: "var(--color-base-100)",
          zIndex: 200,
          transform: leaving ? "translateY(-100%)" : "translateY(0)",
          transition: leaving
            ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1) 0.15s"
            : "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: 0, left: 0, right: 0,
          height: "50%",
          background: "var(--color-base-100)",
          zIndex: 200,
          transform: leaving ? "translateY(100%)" : "translateY(0)",
          transition: leaving
            ? "transform 0.85s cubic-bezier(0.76, 0, 0.24, 1) 0.15s"
            : "none",
        }}
      />
<div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 201,
          opacity: leaving ? 0 : 1,
          transition: leaving ? "opacity 0.35s ease" : "none",
          pointerEvents: "none",
        }}
      >
<div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            alignItems: "flex-start",
          }}
        >
          {WORDS.map(({ label, gradient }, i) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                opacity: 0,
                willChange: "transform, opacity",
                animation: `ls-word-in 0.95s cubic-bezier(0.22, 1, 0.36, 1) ${i * 220}ms forwards`,
              }}
            >
<div
                style={{
                  width: "2px",
                  height: "clamp(2rem, 4.5vw, 3.8rem)",
                  background: "var(--color-primary)",
                  boxShadow:
                    "0 0 10px var(--color-primary), 0 0 24px color-mix(in oklch, var(--color-primary) 45%, transparent)",
                  flexShrink: 0,
                  transformOrigin: "top",
                  willChange: "transform",
                  animation: `ls-line-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 220 + 60}ms both`,
                }}
              />
<span
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  ...(gradient
                    ? {
                        backgroundImage:
                          "linear-gradient(120deg, var(--color-base-content) 25%, var(--color-primary) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }
                    : {
                        color: "var(--color-base-content)",
                        opacity: 0.8,
                      }),
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
<div
          style={{
            position: "absolute",
            bottom: "2.25rem",
            left: "2rem",
            right: "2rem",
          }}
        >
<div
            style={{
              width: "100%",
              height: "1px",
              background:
                "color-mix(in oklch, var(--color-base-content) 8%, transparent)",
              position: "relative",
              overflow: "hidden",
            }}
          >
<div
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--color-primary)",
                boxShadow: "0 0 8px var(--color-primary)",
                transformOrigin: "left",
                animation: "ls-bar 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
              }}
            />
          </div>
<div
            style={{
              marginTop: "0.75rem",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "color-mix(in oklch, var(--color-base-content) 25%, transparent)",
            }}
          >
            <span>Portfolio</span>
            <span style={{ animation: "ls-pct 2s linear forwards" }}>0%</span>
          </div>
        </div>
      </div>
<style>{`
        @keyframes ls-word-in {
          from {
            opacity: 0;
            transform: translateY(36px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes ls-line-in {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes ls-bar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes ls-pct {
          0%   { content: "0%";   }
          25%  { content: "25%";  }
          50%  { content: "50%";  }
          75%  { content: "75%";  }
          100% { content: "100%"; }
        }
      `}</style>
    </>
  );
}
