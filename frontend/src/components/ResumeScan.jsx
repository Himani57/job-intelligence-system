import { Link } from "react-router-dom";

const jobs = [
  {
    initial: "F",
    title: "Frontend Developer",
    company: "Sarvam AI",
    location: "PAN India",
    type: "Full-time",
  },
  {
    initial: "M",
    title: "UI/UX Design Intern (+PPO)",
    company: "MATCHBEST SOFTWARE",
    location: "Gurugram",
    type: "Internship",
  },
  {
    initial: "F",
    title: "Full Stack Developer",
    company: "PayMe",
    location: "Noida",
    type: "Internship",
  },
  {
    initial: "A",
    title: "Software Engineering Intern (+PPO)",
    company: "Actionpackd",
    location: "Chennai",
    type: "Internship",
  },
];

export default function LiveJobs() {
  return (
    <section className="w-full max-w-md">
      <div className="rounded-2xl border border-[#232B42] bg-[#0D101A]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#232B42]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5EEAD4]" />
            </span>

            <span className="text-sm font-medium text-[#EDEFF7]">
              Live right now
            </span>
          </div>

          <span className="text-xs font-medium text-[#5EEAD4]">2,748 open</span>
        </div>

        <div className="divide-y divide-[#1C2335]">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 px-5 py-4 hover:bg-[#121827] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#151C2C] border border-[#252E43] flex items-center justify-center text-sm font-semibold text-[#5EEAD4]">
                {job.initial}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[#EDEFF7] truncate group-hover:text-[#5EEAD4] transition-colors">
                  {job.title}
                </h3>

                <div className="flex items-center gap-1.5 mt-1 text-xs text-[#7D879D]">
                  <span>{job.company}</span>
                  <span className="w-1 h-1 rounded-full bg-[#4B5568]" />
                  <span>{job.location}</span>
                </div>
              </div>

              <span className="hidden sm:block text-[10px] px-2.5 py-1 rounded-full border border-[#2A3449] text-[#8891A8]">
                {job.type}
              </span>
            </div>
          ))}
        </div>

        <Link
          to="/jobs"
          className="group flex items-center justify-center gap-2 py-4 text-sm font-medium text-[#5EEAD4] border-t border-[#232B42] hover:bg-[#101622] transition-colors"
        >
          Browse all matches
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
