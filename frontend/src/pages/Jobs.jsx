import { useEffect, useState } from "react";
import { FiMapPin, FiBriefcase, FiArrowUpRight } from "react-icons/fi";
import {getAllJobs} from '../../services/auth.service.js';

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const response = await getAllJobs();

        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080A12] text-white flex items-center justify-center">
        Loading jobs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080A12] text-white px-6 py-10">
      
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-blue-400 text-sm font-medium mb-2">
          EXPLORE OPPORTUNITIES
        </p>

        <h1 className="text-4xl font-bold">
          Available Jobs
        </h1>

        <p className="text-gray-400 mt-3">
          Discover opportunities that match your skills and experience.
        </p>
      </div>

      {jobs.length === 0 && (
        <div className="text-center text-gray-400">
          No jobs available.
        </div>
      )}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-[#111522] border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">
                  {job.title}
                </h2>

                <p className="text-gray-400 mt-1">
                  {job.company}
                </p>
              </div>

              <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs">
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
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium"
              >
                View Job
                <FiArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}