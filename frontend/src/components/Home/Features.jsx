const FEATURES = [
  {
    title: "Real Listings",
    body: "Matched against live job postings and refreshed continuously — so you're exploring real opportunities, not a static demo dataset.",
    icon: "◉",
    tag: "LIVE DATA",
  },
  {
    title: "Semantic Matching",
    body: "Your skills and job listings live in the same embedding space, so fit is measured by meaning — not just exact keywords.",
    icon: "✦",
    tag: "AI POWERED",
  },
  {
    title: "Private by Default",
    body: "Your resume belongs to you. It's securely processed to find relevant matches — nothing more.",
    icon: "⌁",
    tag: "SECURE",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 md:px-12 py-24"
    >
      <div className="absolute right-0 top-1/2 w-[450px] h-[450px] rounded-full bg-[#5EEAD4]/5 blur-[130px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-[#5EEAD4]">
                WHY JOB INTELLIGENCE
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#EDEFF7]">
              Built for smarter
              <span className="block text-[#5EEAD4] mt-1">job discovery.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm -tracking-tight md:text-base leading-relaxed text-[#8891A8]">
            Go beyond traditional keyword matching and discover opportunities
            that truly align with your skills and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden p-7 rounded-2xl border border-white/[0.07] bg-[#0D101A]/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#5EEAD4]/30 hover:bg-[#101520] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-[#5EEAD4]/10 border border-[#5EEAD4]/20 text-[#5EEAD4] text-xl group-hover:bg-[#5EEAD4]/15 group-hover:shadow-[0_0_25px_rgba(94,234,212,0.15)] transition-all duration-300">
                {feature.icon}
              </div>


              <div className="text-[10px] tracking-[0.15em] font-medium text-[#5EEAD4]/70 mb-3">
                {feature.tag}
              </div>

              <h3 className="text-lg font-semibold text-[#EDEFF7] mb-3 group-hover:text-[#5EEAD4] transition-colors">
                {feature.title}
              </h3>

              <p className="text-sm leading-6 text-[#8891A8]">{feature.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-sm text-[#788298]">
            Stop searching harder. Start matching smarter.
          </p>

          <span className="text-sm font-medium text-[#5EEAD4]">
            Powered by AI & vector intelligence ✦
          </span>
        </div>
      </div>
    </section>
  );
}
