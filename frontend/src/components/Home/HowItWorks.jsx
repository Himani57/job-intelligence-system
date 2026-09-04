const STEPS = [
  {
    n: "01",
    title: "Upload Resume",
    body: "Upload your resume as a PDF. We instantly extract the text and prepare it for intelligent analysis.",
    icon: "↑",
  },
  {
    n: "02",
    title: "Parse & Embed",
    body: "Your skills, roles and experience are converted into vector embeddings — a semantic fingerprint of your profile.",
    icon: "✦",
  },
  {
    n: "03",
    title: "Get Matched",
    body: "Your profile is matched against live job listings by meaning, not just keywords, so you discover roles that actually fit.",
    icon: "✓",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 md:px-12 py-24"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/5 text-[#5EEAD4] text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
            HOW IT WORKS
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#EDEFF7]">
            From resume to opportunity
            <span className="block text-[#5EEAD4] mt-1">
              in three simple steps.
            </span>
          </h2>

          <p className="mt-5 text-[#8891A8] text-sm md:text-base leading-relaxed max-w-xl">
            Job Intelligence understands your profile, analyzes your skills and
            connects you with opportunities that actually match your experience.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#5EEAD4]/30 to-transparent" />

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {STEPS.map((step) => (
              <div
                key={step.n}
                className=" relative p-7 rounded-2xl border border-white/[0.07] bg-[#0D101A]/70 backdrop-blur-sm hover:border-[#5EEAD4]/30 hover:bg-[#101520] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#111827] border border-[#273044] flex items-center justify-center text-[#5EEAD4] text-lg font-semibold group-hover:border-[#5EEAD4]/40 group-hover:shadow-[0_0_20px_rgba(94,234,212,0.15)] transition-all">
                    {step.icon}
                  </div>

                  <span className="text-4xl font-bold text-white/[0.05] group-hover:text-[#5EEAD4]/10 transition-colors">
                    {step.n}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#EDEFF7] mb-3 group-hover:text-[#5EEAD4] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm leading-6 text-[#8891A8]">{step.body}</p>

              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-[#788298]">
            Ready to discover jobs that fit your profile?
          </p>

          <a
            href="/signup"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#5EEAD4] hover:text-[#7AF3DF] transition-colors"
          >
            Upload your resume
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
