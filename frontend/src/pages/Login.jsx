import { Link } from "react-router-dom";
import {
  IoMailOutline,
  IoLockClosedOutline,
  IoSparklesOutline,
  IoCheckmarkCircle,
  IoArrowForward,
} from "react-icons/io5";

const PERKS = [
  "Resume parsed in seconds",
  "Matched with relevant job openings",
  "AI-powered semantic job matching",
];

export default function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#060811] text-[#F4F7FB]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Glow 1 */}
        <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#5EEAD4]/10 blur-[130px]" />

        {/* Glow 2 */}
        <div className="absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full bg-[#8B5CF6]/10 blur-[140px]" />

        {/* Center glow */}
        <div className="absolute left-[40%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#5EEAD4]/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#060811_80%)]" />
      </div>

      <nav className="relative z-10 flex w-full items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] shadow-[0_0_30px_rgba(94,234,212,0.25)]">
            <span className="text-xs font-black text-[#06100F]">JI</span>
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

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-[#667085] sm:block">
            New here?
          </span>

          <Link
            to="/signup"
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-medium text-[#E6EAF2] backdrop-blur-xl transition-all duration-300 hover:border-[#5EEAD4]/40 hover:bg-[#5EEAD4]/5 hover:text-[#5EEAD4]"
          >
            Create account
            <IoArrowForward
              size={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </nav>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-10xl items-center px-6 pb-12 pt-6 md:px-10 lg:pt-0">
        <div className="grid w-full pl-4 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          
          {/* ================= LEFT SIDE ================= */}
          <section className="hidden lg:block">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/[0.06] px-1 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5EEAD4] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5EEAD4]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">
                Intelligent job search
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] xl:text-7xl">
              Your next career move
              <span className="block bg-gradient-to-r from-[#5EEAD4] via-[#72F1DE] to-[#A7F3D0] bg-clip-text text-transparent">
                starts here.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#858EA4]">
              Let AI understand your resume, discover your skills, and find
              opportunities that actually match your potential.
            </p>

            {/* Perks */}
            <div className="mt-10 space-y-4">
              {PERKS.map((perk, index) => (
                <div
                  key={perk}
                  className="flex items-center gap-3 text-sm text-[#C9CEDA]"
                >
                  <IoCheckmarkCircle
                    className="shrink-0 text-[#5EEAD4]"
                    size={19}
                  />

                  <span>{perk}</span>

                  {index === 2 && (
                    <span className="rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#A78BFA]">
                      AI
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* AI Match Card */}
            <div className="relative mt-12 w-[430px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#5EEAD4]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5EEAD4]/10 text-[#5EEAD4]">
                    <IoSparklesOutline size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-[#E8ECF5]">
                      AI Match Score
                    </p>
                    <p className="mt-0.5 text-[10px] text-[#687186]">
                      Based on your profile
                    </p>
                  </div>
                </div>

                <span className="text-xl font-bold text-[#5EEAD4]">
                  94%
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-[#5EEAD4] to-[#8B5CF6]" />
              </div>

              <div className="mt-3 flex justify-between text-[9px] text-[#626B80]">
                <span>Skills</span>
                <span>Experience</span>
                <span>Role</span>
                <span>Semantic match</span>
              </div>
            </div>

            <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-[#343B4D]">
              Built with AI • vectors • semantic search
            </p>
          </section>

          {/* ================= LOGIN CARD ================= */}
          <section className="flex w-full justify-center">
            <div className="relative w-full max-w-[440px]">
              
              {/* Card glow */}
              <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-[#5EEAD4]/10 via-transparent to-[#8B5CF6]/10 blur-xl" />

              <div className="relative rounded-[28px] border border-white/[0.09] bg-[#0B0E18]/80 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-9">
                
                {/* Mobile logo */}
                <Link
                  to="/"
                  className="mb-9 flex w-fit items-center gap-2.5 lg:hidden"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4]">
                    <span className="text-xs font-black text-[#06100F]">
                      JI
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-bold">Job Intelligence</p>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#667085]">
                      AI Career Matching
                    </p>
                  </div>
                </Link>

                {/* Header */}
                <div className="mb-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#5EEAD4]/20 bg-[#5EEAD4]/10 text-[#5EEAD4]">
                    <IoSparklesOutline size={20} />
                  </div>

                  <h1 className="text-3xl font-bold tracking-tight">
                    Welcome back
                  </h1>

                  <p className="mt-2 text-sm leading-6 text-[#7D879C]">
                    Sign in to continue discovering jobs matched to you.
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7C8599]"
                    >
                      Email address
                    </label>

                    <div className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 transition-all duration-300 focus-within:border-[#5EEAD4]/50 focus-within:bg-[#5EEAD4]/[0.025] focus-within:shadow-[0_0_0_4px_rgba(94,234,212,0.07)]">
                      <IoMailOutline
                        size={18}
                        className="shrink-0 text-[#626B80] transition-colors group-focus-within:text-[#5EEAD4]"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                        className="w-full bg-transparent text-sm text-[#EDF1F8] outline-none placeholder:text-[#41495B]"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7C8599]"
                      >
                        Password
                      </label>

                      <Link
                        to="/forgot-password"
                        className="text-[10px] font-medium text-[#5EEAD4] transition-colors hover:text-[#9AF5E7]"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <div className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 transition-all duration-300 focus-within:border-[#5EEAD4]/50 focus-within:bg-[#5EEAD4]/[0.025] focus-within:shadow-[0_0_0_4px_rgba(94,234,212,0.07)]">
                      <IoLockClosedOutline
                        size={18}
                        className="shrink-0 text-[#626B80] transition-colors group-focus-within:text-[#5EEAD4]"
                      />

                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        autoComplete="current-password"
                        className="w-full bg-transparent text-sm text-[#EDF1F8] outline-none placeholder:text-[#41495B]"
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#5EEAD4] to-[#34D8C4] py-4 text-sm font-bold text-[#06100F] shadow-[0_12px_35px_-10px_rgba(94,234,212,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-10px_rgba(94,234,212,0.8)] active:translate-y-0"
                  >
                    Sign in

                    <IoArrowForward
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>

                {/* Divider */}
                <div className="my-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/[0.06]" />
                  <span className="text-[9px] uppercase tracking-widest text-[#444C5E]">
                    Secure access
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                {/* Signup */}
                <p className="text-center text-xs text-[#747E93]">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-[#5EEAD4] transition-colors hover:text-[#A0F7EA]"
                  >
                    Create one
                  </Link>
                </p>

                {/* Security */}
                <div className="mt-6 flex items-center justify-center gap-2 text-[9px] uppercase tracking-wider text-[#3F4759]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4]" />
                  Your data stays private
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}