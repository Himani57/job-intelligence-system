import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-20 border-t border-white/[0.06] max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#5EEAD4] opacity-[0.08] blur-[80px]" />
        <div className="relative">
          <h3 className=" text-2xl md:text-3xl font-bold mb-2 text-[#EDEFF7]">Stop guessing which jobs fit.</h3>
          <p className="text-[#8891A8] text-sm md:text-base">Upload once. Let the matching do the searching.</p>
        </div>
        <Link to='/signup' className=" bg-emerald-800 relative px-8 py-3.5 text-black font-bold rounded-full  font-semibold text-sm whitespace-nowrap">
          Get started
        </Link>
      </div>
      <div className="mt-12 flex items-center justify-between">
        <div className="text-[11px] text-[#4A5268]">job.intelligence</div>
        <div className="text-[11px] text-[#4A5268]">built with vectors, not vibes</div>
      </div>
    </footer>
  );
}