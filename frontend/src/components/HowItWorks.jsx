const STEPS = [
  {
    n: "01",
    title: "Upload",
    body: "Drop your resume in as a PDF. It's parsed the moment it lands — nothing sits in a queue.",
  },
  {
    n: "02",
    title: "Parse & Embed",
    body: "Skills, roles and experience are extracted from the text and turned into vector embeddings — a numeric fingerprint of what you actually know.",
  },
  {
    n: "03",
    title: "Match",
    body: "That fingerprint is compared against live job listings by meaning, not keywords — so a 'React dev' resume still surfaces a 'Frontend Engineer' role.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-12 py-24 border-t border-white/[0.06] max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#EDEFF7]">
          Three steps. No guesswork.
        </h2>
        <div className="h-[3px] w-16 mt-4 rounded-full" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map((s) => (
          <div key={s.n} className="p-7 rounded-2xl border border-white/[0.07]">
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] text-3xl font-bold mb-5">
              {s.n}
            </div>
            <h3 className="font-semibold text-lg mb-2.5 text-[#EDEFF7]">{s.title}</h3>
            <p className="text-[#8891A8] text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}