import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 md:px-12 pb-8">

      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0D101A] p-8 md:p-14">

          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#5EEAD4]/10 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-[#34D8C4]/5 blur-[100px]" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[#5EEAD4] text-xs font-medium tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#5EEAD4] animate-pulse" />
                YOUR NEXT ROLE IS OUT THERE
              </div>

              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#EDEFF7] mb-3">
                Stop guessing which jobs fit.
              </h3>

              <p className="text-[#8891A8] text-sm md:text-base leading-relaxed">
                Upload your resume once. Let AI understand your skills and find
                opportunities that actually match your experience.
              </p>
            </div>

            <Link
              to="/signup"
              className="group shrink-0 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#5EEAD4] text-[#080A12] font-semibold text-sm hover:bg-[#7AF3DF] hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Free
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14 border-b border-white/[0.06]">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 w-fit group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.2)]">
                <span className="text-xs font-bold text-[#080A12]">JI</span>
              </div>

              <div>
                <h4 className="font-bold text-[#EDEFF7]">Job Intelligence</h4>
                <p className="text-[10px] tracking-wider text-[#69738D] mt-0.5">
                  AI CAREER PLATFORM
                </p>
              </div>
            </Link>

            <p className="max-w-sm mt-5 text-sm leading-6 text-[#788298]">
              Discover opportunities that match your skills, experience and
              potential using AI-powered semantic job matching.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-wider text-[#EDEFF7] uppercase mb-5">
              Product
            </h5>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                to="/jobs"
                className="text-[#788298] hover:text-[#5EEAD4] transition-colors"
              >
                Explore Jobs
              </Link>

              <a
                href="#how"
                className="text-[#788298] hover:text-[#5EEAD4] transition-colors"
              >
                How it Works
              </a>

              <a
                href="#features"
                className="text-[#788298] hover:text-[#5EEAD4] transition-colors"
              >
                Features
              </a>
            </div>
          </div>

          {/* Account Links */}
          <div>
            <h5 className="text-xs font-semibold tracking-wider text-[#EDEFF7] uppercase mb-5">
              Account
            </h5>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                to="/login"
                className="text-[#788298] hover:text-[#5EEAD4] transition-colors"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="text-[#788298] hover:text-[#5EEAD4] transition-colors"
              >
                Create Account
              </Link>

              <Link
                to="/dashboard"
                className="text-[#788298] hover:text-[#5EEAD4] transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">
          <p className="text-[11px] text-[#4A5268]">
            © {new Date().getFullYear()} Job Intelligence. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-[11px] text-[#4A5268]">
            <span className="hover:text-[#8891A8] transition-colors cursor-default">
              Built with AI
            </span>

            <span className="w-1 h-1 rounded-full bg-[#4A5268]" />

            <span className="hover:text-[#8891A8] transition-colors cursor-default">
              Powered by Vector Intelligence ✦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
