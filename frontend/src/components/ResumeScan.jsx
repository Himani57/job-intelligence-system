import { useEffect, useState } from "react";

const LINES = [
  { text: "Himani Garkoti", w: "40%", bold: true },
  { text: "B.Tech CSE · 2023–2027", w: "55%" },
  { text: "", w: "0%" },
  { text: "SKILLS", w: "25%", label: true },
  { text: "React · Node.js · MongoDB · Express", w: "70%", tag: true },
  { text: "Python · SQL · Git", w: "45%", tag: true },
  { text: "", w: "0%" },
  { text: "PROJECTS", w: "30%", label: true },
  { text: "Job Intelligence — resume matcher", w: "62%" },
  { text: "Notes + Tasks manager (MERN)", w: "58%" },
];

export default function ResumeScan() {
  const [scanY, setScanY] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 3600;

    const tick = (now) => {
      const elapsed = (now - start) % duration;
      const progress = elapsed / duration;
      setScanY(progress * 320);
      setScore(Math.min(94, Math.round(progress * 2 * 94)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative h-[400px] hidden md:block">
      <div className="absolute inset-0 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden">
        {/* document */}
        <div className="absolute left-7 right-7 top-8 bottom-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 overflow-hidden">
          <div className="space-y-3">
            {LINES.map((l, i) => (
              <div
                key={i}
                className={`h-2 rounded-full ${
                  l.label
                    ? "ji-mono text-[9px] text-[#5EEAD4] tracking-widest h-auto"
                    : l.tag
                    ? "bg-[#5EEAD4]/[0.14] border border-[#5EEAD4]/25"
                    : "bg-white/[0.08]"
                } ${l.bold ? "h-2.5" : ""}`}
                style={{ width: l.w }}
              >
                {l.label ? l.text : null}
              </div>
            ))}
          </div>

          {/* scan line */}
          <div
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${scanY}px`,
              background: "linear-gradient(90deg, transparent, #5EEAD4, transparent)",
              boxShadow: "0 0 12px 2px rgba(94,234,212,0.5)",
            }}
          />
          <div
            className="absolute left-0 right-0 h-16 pointer-events-none"
            style={{
              top: `${scanY - 64}px`,
              background: "linear-gradient(180deg, transparent, rgba(94,234,212,0.06))",
            }}
          />
        </div>

        {/* live match score badge */}
        <div className="ji-card absolute -right-3 top-10 rounded-2xl border border-[#5EEAD4]/30 px-4 py-3 text-center">
          <div className="ji-display text-2xl font-bold text-[#5EEAD4] tabular-nums">
            {score}%
          </div>
          <div className="ji-mono text-[9px] text-[#8891A8] mt-0.5 uppercase tracking-wide">
            match score
          </div>
        </div>

        {/* status pill */}
        <div className="absolute left-9 bottom-4 ji-mono text-[10px] text-[#4A5268] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
          extracting skills…
        </div>
      </div>
    </div>
  );
}