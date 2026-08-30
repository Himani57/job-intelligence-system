import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-10xl mx-auto">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.4)]">
          <span className="ji-mono text-[11px] font-bold text-[#080A12]">JI</span>
        </div>
        <span className="ji-display font-bold tracking-tight text-[16px] text-[#EDEFF7]">
          Job Intelligence
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm text-[#8891A8]">
        <a href="#how" className="hover:text-[#EDEFF7] transition-colors">How it works</a>
        <a href="#features" className="hover:text-[#EDEFF7] transition-colors">Features</a>
      </nav>
      <div className="gap-3 flex">
        <Link to="/signup" className="ji-mono text-xs px-4 py-2 rounded-full border border-[#232B42] text-[#EDEFF7] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors">
        Sign up
      </Link>
      <Link to="/login" className="ji-mono text-xs px-4 py-2 rounded-full border border-[#232B42] text-[#EDEFF7] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors">
        Sign in
      </Link>
      </div>
      
    </header>
  );
}