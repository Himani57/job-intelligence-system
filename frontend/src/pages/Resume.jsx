import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
IoCloudUploadOutline,
IoDocumentTextOutline,
IoCheckmarkCircle,
IoArrowForward,
IoSparklesOutline,
} from "react-icons/io5";
import { analyzeResume } from "../../services/auth.service.js";

const TRUST_POINTS = [
"AI-powered skill extraction",
"Personalized job recommendations",
"Secure file processing",
];

export default function UploadResume() {
const navigate = useNavigate();
const fileInputRef = useRef(null);

const [fileName, setFileName] = useState("No file selected");
const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);

const handleFileChange = (e) => {
const selectedFile = e.target.files?.[0];


if (selectedFile) {
  setFile(selectedFile);
  setFileName(selectedFile.name);
}


};

const handleUploadClick = () => {
fileInputRef.current?.click();
};

const handleSubmit = async (e) => {
e.preventDefault();


if (!file) {
  alert("Please select a resume first!");
  return;
}

try {
  setLoading(true);

  const formData = new FormData();
  formData.append("resume", file);

  const response = await analyzeResume(formData);

  navigate("/recommended-jobs", {
    state: {
      recommendedJobs: response.data.recommendedJobs,
    },
  });
} catch (error) {
  console.log(error.response?.data);
  console.log(error.message);
} finally {
  setLoading(false);
}

};

return ( <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#080A12] text-[#EDEFF7]">

  {/* Background effects */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#5EEAD4]/[0.05] blur-[120px]" />
    <div className="absolute bottom-[5%] right-[10%] h-80 w-80 rounded-full bg-[#34D8C4]/[0.05] blur-[120px]" />

    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  </div>

  {/* Navbar */}
  <nav className="relative z-10 flex w-full shrink-0 items-center justify-between px-6 py-5 md:px-12">
    <Link to="/" className="group flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] shadow-[0_0_25px_rgba(94,234,212,0.3)] transition-transform duration-300 group-hover:scale-105">
        <span className="text-[11px] font-black text-[#080A12]">
          JI
        </span>
      </div>

      <div>
        <p className="text-[15px] font-bold tracking-tight text-[#EDEFF7]">
          Job Intelligence
        </p>
        <p className="text-[8px] uppercase tracking-[0.2em] text-[#5F687C]">
          AI Career Matching
        </p>
      </div>
    </Link>

    <Link
      to="/jobs"
      className="group flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-[#A6AEC0] transition-all hover:border-[#5EEAD4]/40 hover:text-[#5EEAD4]"
    >
      Explore jobs
      <IoArrowForward className="transition-transform group-hover:translate-x-1" />
    </Link>
  </nav>

  {/* Main Content */}
  <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-5">
    
    {/* Badge */}
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/[0.06] px-3 py-1.5">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5EEAD4]" />
      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">
        Last step
      </span>
    </div>

    {/* Heading */}
    <div className="mb-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Your profile is almost ready.
      </h1>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#8891A8]">
        Upload your resume and let our AI understand your skills,
        experience, and career potential.
      </p>
    </div>

    {/* Upload Card */}
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[500px] rounded-[28px] border border-white/[0.08] bg-[#0B0E18]/80 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-6"
    >
      {/* Card header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#5EEAD4]/20 bg-[#5EEAD4]/10 text-[#5EEAD4]">
          <IoSparklesOutline size={18} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#EDEFF7]">
            Resume analysis
          </h2>
          <p className="mt-0.5 text-[11px] text-[#687187]">
            PDF format · Maximum file size 5MB
          </p>
        </div>
      </div>

      {/* Upload Zone */}
      <div
        onClick={handleUploadClick}
        className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed px-6 py-7 transition-all duration-300 ${
          file
            ? "border-[#5EEAD4]/50 bg-[#5EEAD4]/[0.04]"
            : "border-white/[0.10] bg-white/[0.015] hover:border-[#5EEAD4]/40 hover:bg-[#5EEAD4]/[0.02]"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#5EEAD4]/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div
          className={`relative mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border transition-all ${
            file
              ? "border-[#5EEAD4]/40 bg-[#5EEAD4]/15"
              : "border-[#5EEAD4]/20 bg-[#5EEAD4]/10"
          }`}
        >
          {file ? (
            <IoCheckmarkCircle className="text-[#5EEAD4]" size={24} />
          ) : (
            <IoCloudUploadOutline className="text-[#5EEAD4]" size={24} />
          )}
        </div>

        <p className="relative text-sm font-medium text-[#EDEFF7]">
          {file ? "Resume selected successfully" : "Upload your resume"}
        </p>

        <p className="relative mt-1 text-[11px] text-[#737C91]">
          {file
            ? "Click here to choose a different file"
            : "Click to browse your files"}
        </p>

        {file && (
          <div className="relative mt-4 flex max-w-full items-center gap-2 rounded-lg border border-[#5EEAD4]/15 bg-[#5EEAD4]/[0.06] px-3 py-2 text-xs text-[#5EEAD4]">
            <IoDocumentTextOutline size={15} />
            <span className="max-w-[260px] truncate">
              {fileName}
            </span>
          </div>
        )}

        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5EEAD4] to-[#34D8C4] py-3.5 text-sm font-bold text-[#06100F] shadow-[0_12px_30px_-8px_rgba(94,234,212,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-8px_rgba(94,234,212,0.7)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#06100F]/30 border-t-[#06100F]" />
            Analyzing your resume...
          </>
        ) : (
          <>
            Analyze my resume
            <IoArrowForward
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      {/* Privacy */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[#596276]">
        <IoCheckmarkCircle className="text-[#5EEAD4]" size={13} />
        Your resume is used only for job matching
      </div>
    </form>

    {/* Trust Points */}
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
      {TRUST_POINTS.map((point) => (
        <li
          key={point}
          className="flex items-center gap-1.5 text-[10px] text-[#7D8799]"
        >
          <IoCheckmarkCircle
            className="text-[#5EEAD4]"
            size={14}
          />
          {point}
        </li>
      ))}
    </ul>

    {/* Skip */}
    <Link
      to="/jobs"
      className="mt-5 text-[11px] text-[#667085] transition-colors hover:text-[#EDEFF7]"
    >
      Skip for now →
    </Link>
  </main>
</div>

);
}

