import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoCloudUploadOutline,
  IoDocumentTextOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";

const TRUST_POINTS = [
  "AI-powered skill extraction",
  "Personalized job recommendations",
  "Secure file processing",
];

export default function UploadResume() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("No file selected");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      alert("Please select a resume first!");
      return;
    }
    navigate("/results");
  };

  return (
    <div className="w-full h-screen bg-[#080A12] text-[#EDEFF7] overflow-hidden flex flex-col">

      <div className="flex items-center p-4 justify-between w-full shrink-0">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.4)]">
            <span className="text-[11px] font-bold text-[#080A12]">
              JI
            </span>
          </div>

          <span className="font-bold tracking-tight text-[16px]">
            Job Intelligence
          </span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">

        <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#5EEAD4] border border-[#5EEAD4]/30 bg-[#5EEAD4]/[0.06] rounded-full px-3 py-1 -translate-y-8">
          Last step
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight">
          Upload your resume
        </h1>

        <p className="text-[#8891A8] text-sm text-center max-w-sm mb-5">
          We'll extract your skills and start matching you with real listings.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white/[0.02] border border-white/[0.07] rounded-3xl p-6 md:p-7 backdrop-blur-sm shadow-[0_0_60px_-15px_rgba(94,234,212,0.15)]"
        >

          <div
            onClick={handleUploadClick}
            className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-white/[0.12] hover:border-[#5EEAD4]/50 rounded-2xl py-8 md:py-10 px-6 cursor-pointer transition-colors"
          >

            <div className="w-11 h-11 rounded-full bg-[#5EEAD4]/10 border border-[#5EEAD4]/30 flex items-center justify-center">
              <IoCloudUploadOutline
                className="text-[#5EEAD4]"
                size={21}
              />
            </div>

            <p className="text-sm text-[#EDEFF7] font-medium">
              Click to upload, or drag and drop
            </p>

            <p className="text-xs text-[#8891A8]">
              PDF only, up to 5MB
            </p>

            <div className="flex items-center gap-2 mt-1 text-xs text-[#5EEAD4]">
              <IoDocumentTextOutline size={14} />
              <span>{fileName}</span>
            </div>


            <input
              type="file"
              accept=".pdf"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#5EEAD4] to-[#34D8C4] text-[#080A12] font-semibold text-sm mt-5 shadow-[0_8px_30px_-8px_rgba(94,234,212,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Analyze my resume
          </button>

          <p className="text-[11px] text-[#4A5268] text-center mt-3">
            Your resume is used only to find you matches — nothing more.
          </p>
        </form>

        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-9">
          {TRUST_POINTS.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-xs text-[#8891A8]"
            >
              <IoCheckmarkCircle
                className="text-[#5EEAD4]"
                size={15}
              />
              {point}
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="text-xs text-[#8891A8] border px-3 py-2 rounded-2xl hover:text-[#EDEFF7] mt-9"
        >
          Skip for now
        </Link>
      </div>
    </div>
  );
}

