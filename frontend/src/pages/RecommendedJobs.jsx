import { useLocation } from "react-router-dom";
import { FiMapPin, FiBriefcase, FiArrowUpRight } from "react-icons/fi";
import { IoSparklesOutline } from "react-icons/io5";

export default function RecommendedJobs() {
  const location = useLocation();

  const recommendedJobs =
    location.state?.recommendedJobs || [];

  return (
    <div className="min-h-screen bg-[#080A12] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2 text-[#5EEAD4]">
            <IoSparklesOutline size={18} />

            <p className="text-sm font-semibold uppercase tracking-wider">
              AI Recommendations
            </p>
          </div>

          <h1 className="text-4xl font-bold">
            Jobs that match your resume
          </h1>

          <p className="mt-3 max-w-2xl text-gray-400">
            These opportunities are selected based on your skills,
            experience and resume profile.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-[#5EEAD4]/20 bg-[#5EEAD4]/5 p-5">
          <p className="text-sm text-gray-300">
            We found{" "}
            <span className="font-semibold text-[#5EEAD4]">
              {recommendedJobs.length} strong matches
            </span>{" "}
            for your profile.
          </p>
        </div>

        {recommendedJobs.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            No matching jobs found.
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {recommendedJobs.map((job) => (
            <div
              key={job._id}
              className="rounded-2xl border border-gray-800 bg-[#111522] p-6 transition hover:border-[#5EEAD4]/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    {job.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    {job.company}
                  </p>
                </div>

                <div className="rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/10 px-3 py-1.5">
                  <span className="text-sm font-bold text-[#5EEAD4]">
                    {(job.matchScore * 100).toFixed(0)}% Match
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <FiMapPin />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <FiBriefcase />
                  {job.employmentType || "Full-time"}
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                {job.description}
              </p>

              <div className="mt-7 border-t border-gray-800 pt-5">
                <a
                  href={job.jobUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-end gap-2 text-sm font-medium text-[#5EEAD4] hover:text-[#8BF5E6]"
                >
                  View Job
                  <FiArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}