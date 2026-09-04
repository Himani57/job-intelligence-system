import React from 'react'
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const AuthNavbar = () => {
  return (
    <>
     <nav className="relative z-10 flex w-full items-center justify-between px-6 py-6 md:px-10 md:py-8">

    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] shadow-[0_0_30px_rgba(94,234,212,0.25)] transition-transform duration-300 group-hover:scale-105">
        <span className="text-xs font-black text-[#06100F]">
          JI
        </span>
      </div>

      <div>
        <p className="text-[15px] font-bold tracking-tight">
          Job Intelligence
        </p>

        <p className="text-[9px] uppercase tracking-[0.25em] text-[#667085]">
          AI Career Matching
        </p>
      </div>
    </Link>

    {/* Login */}
    <div className="flex items-center gap-3">
      <span className="hidden text-xs text-[#667085] sm:block">
        Already have an account?
      </span>

      <Link
        to="/login"
        className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-medium text-[#E6EAF2] backdrop-blur-xl transition-all duration-300 hover:border-[#5EEAD4]/40 hover:bg-[#5EEAD4]/5 hover:text-[#5EEAD4]"
      >
        Sign in

        <IoArrowForward
          size={13}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  </nav>
    </>
  )
}

export default AuthNavbar