const FEATURES = [
  { title: "Real listings", body: "Matched against live job postings, refreshed continuously — not a static demo dataset." },
  { title: "Vector search", body: "Your skills and each listing live in the same embedding space, so fit is measured by meaning." },
  { title: "Private by default", body: "Your resume is yours. It's used to find you matches — nothing more." },
];

export default function Features() {
  return (
    <section id="features" className="px-6 md:px-12 py-24 border-t border-white/[0.06] max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <div key={f.title} className="p-7 rounded-2xl border border-white/[0.07]">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#5EEAD4]/20 to-transparent border border-[#5EEAD4]/25 mb-5" />
            <h3 className="font-semibold mb-2.5 text-[#EDEFF7]">{f.title}</h3>
            <p className="text-[#8891A8] text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}