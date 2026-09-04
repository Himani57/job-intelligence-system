import { useEffect, useState } from "react";
import {
FiMapPin,
FiBriefcase,
FiArrowUpRight,
FiChevronLeft,
FiChevronRight,
} from "react-icons/fi";

import { getAllJobs } from "../../services/auth.service.js";

export default function Jobs() {
const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(true);

const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

useEffect(() => {
const fetchAllJobs = async () => {
try {
setLoading(true);

    const response = await getAllJobs(currentPage);

    console.log(response.data);

    setJobs(response.data.jobs);

    setTotalPages(response.data.pagination.totalPages);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  } finally {
    setLoading(false);
  }
};

fetchAllJobs();

}, [currentPage]);

const handlePrevious = () => {
if (currentPage > 1) {
setCurrentPage((prev) => prev - 1);
}
};

const handleNext = () => {
if (currentPage < totalPages) {
setCurrentPage((prev) => prev + 1);
}
};

if (loading && jobs.length === 0) {
return ( <div className="min-h-screen bg-[#080A12] text-white flex items-center justify-center">
Loading jobs... </div>
);
}

return ( <div className="min-h-screen bg-[#080A12] text-white px-6 py-10">

  <div className="max-w-6xl mx-auto mb-10">
    <p className="text-[#5EEAD4] text-sm font-medium mb-2">
      EXPLORE OPPORTUNITIES
    </p>

    <h1 className="text-4xl font-bold">
      Available Jobs
    </h1>

    <p className="text-gray-400 mt-3">
      Discover opportunities that match your skills and experience.
    </p>
  </div>

  {jobs.length === 0 && !loading && (
    <div className="text-center text-gray-400">
      No jobs available.
    </div>
  )}

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
    {jobs.map((job) => (
      <div
        key={job._id}
        className="bg-[#111522] border border-gray-800 rounded-2xl p-6 hover:border-[#5EEAD4]/50 transition-all duration-300"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <h2 className="text-xl font-semibold">
              {job.title}
            </h2>

            <p className="text-gray-400 mt-1">
              {job.company}
            </p>
          </div>

          <span className="bg-[#5EEAD4]/10 text-[#5EEAD4] px-3 py-1 rounded-full text-xs whitespace-nowrap">
            {job.employmentType || "Full-time"}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm mt-5">
          <FiMapPin />
          {job.location}
        </div>

        <p className="text-gray-400 text-sm leading-6 mt-5 line-clamp-3">
          {job.description}
        </p>

        <div className="flex justify-between items-center mt-7 pt-5 border-t border-gray-800">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FiBriefcase />
            {job.employmentType || "Full-time"}
          </div>

          <a
            href={job.jobUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#5EEAD4] hover:text-[#A0F7EA] text-sm font-medium transition"
          >
            View Job
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    ))}
  </div>

  {totalPages > 1 && (
    <div className="max-w-6xl mx-auto mt-12 flex justify-center items-center gap-4">

      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-[#8891A8] transition-all hover:border-[#5EEAD4]/50 hover:text-[#5EEAD4] disabled:cursor-not-allowed disabled:opacity-30"
      >
        <FiChevronLeft size={18} />
      </button>

      <div className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-[#5EEAD4] px-4 text-sm font-semibold text-[#080A12] shadow-[0_0_20px_rgba(94,234,212,0.25)]">
        {currentPage}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] text-[#8891A8] transition-all hover:border-[#5EEAD4]/50 hover:text-[#5EEAD4] disabled:cursor-not-allowed disabled:opacity-30"
      >
        <FiChevronRight size={18} />
      </button>

    </div>
  )}

  {totalPages > 1 && (
    <p className="text-center text-xs text-[#667085] mt-4">
      Page {currentPage} of {totalPages}
    </p>
  )}
</div>

);
}
