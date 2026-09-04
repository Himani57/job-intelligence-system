import ResumeScan from "./jobs";

const STATS = [
  { value: "2,400+", label: "listings indexed" },
  { value: "0.3s", label: "avg. match time" },
  { value: "94%", label: "relevant match rate" },
];

export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 pt-14 md:pt-20 pb-28 max-w-7xl mx-auto">
      <div className="absolute inset-0 -z-10 opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="grid md:grid-cols-2 gap-50 items-center">
        <div>
          <div className="text-xs text-[#5EEAD4] mb-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5EEAD4]/25 bg-[#5EEAD4]/[0.06] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
            SEMANTIC MATCHING, NOT KEYWORD MATCHING
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-[#EDEFF7]">
            Your resume,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8891A8] to-[#5A6178]">decoded.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEAD4] to-[#8CF5E4]">Jobs that fit.</span>
          </h1>
          <p className="mt-7 text-[#8891A8] text-base md:text-lg max-w-md leading-relaxed">
            We read your resume the way a hiring manager would — then search
            real listings by what you can do, not the words you happened to use.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <button className="px-7 py-3.5 rounded-full text-[#080A12] font-semibold text-sm">
              Analyze my resume
            </button>
            <a href="#how" className="text-xs text-[#8891A8] hover:text-[#EDEFF7] transition-colors">
              See how it works →
            </a>
          </div>

          <div className="mt-14 flex items-center gap-10">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#EDEFF7]">{s.value}</div>
                <div className="text-[10px] text-[#8891A8] mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <ResumeScan />
      </div>
    </section>
  );
}