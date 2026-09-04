import { Link } from "react-router-dom";

export default function Navbar() {
return (
  <header className=" z-50 w-full border-b border-white/5 bg-[#080A12]/80 backdrop-blur-xl"> <div className="flex items-center justify-between mx-auto px-6 sm:px-6 md:px-10 py-4">
    <Link to="/" className="flex items-center gap-3 group shrink-0">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] flex items-center justify-center shadow-[0_0_25px_rgba(94,234,212,0.25)] group-hover:scale-105 transition-all">
        <span className="text-xs font-bold text-[#080A12]">
          JI
        </span>
      </div>

      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-bold tracking-tight text-[17px] text-[#F5F7FF]">
          Job Intelligence
        </span>
        <span className="text-[9px] text-[#69738D] mt-1 tracking-wider">
          AI CAREER PLATFORM
        </span>
      </div>
    </Link>

    <nav className="hidden lg:flex items-center gap-10">
      <Link
        to="/"
        className="px-3 py-2 text-sm text-[#8891A8] hover:text-[#5EEAD4] transition-colors"
      >
        Home
      </Link>

      <a
        href="#how"
        className="px-3 py-2 text-sm text-[#8891A8] hover:text-[#5EEAD4] transition-colors"
      >
        How it Works
      </a>

      <a
        href="#features"
        className="px-3 py-2 text-sm text-[#8891A8] hover:text-[#5EEAD4] transition-colors"
      >
        Features
      </a>

      <Link
        to="/jobs"
        className="px-3 py-2 text-sm text-[#8891A8] hover:text-[#5EEAD4] transition-colors"
      >
        Jobs
      </Link>

      <a
        href="#about"
        className="px-3 py-2 text-sm text-[#8891A8] hover:text-[#5EEAD4] transition-colors"
      >
        About
      </a>
    </nav>

    <div className="flex items-center gap-3 shrink-0">
      <Link
        to="/login"
        className="hidden sm:block px-4 py-2 text-sm font-medium text-[#AAB2C5] hover:text-[#EDEFF7] transition-colors"
      >
        Sign In
      </Link>

      <Link
        to="/signup"
        className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#080A12] bg-[#5EEAD4] hover:bg-[#7AF3DF] transition-all duration-300 hover:shadow-[0_0_25px_rgba(94,234,212,0.35)] hover:-translate-y-[1px]"
      >
        Get Started
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </Link>
    </div>

  </div>
</header>
);
}