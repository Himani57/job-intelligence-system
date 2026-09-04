import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {
  IoLockClosed,
  IoSparklesOutline,
  IoArrowForward,
  IoCheckmarkCircle,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import { useState } from "react";
import { registerUser } from "../../services/auth.service.js";
import AuthNavbar from "../components/Auth/AuthNavbar.jsx";

const PERKS = [
  "Resume parsed in seconds",
  "Matched with relevant job openings",
  "AI-powered semantic job matching",
];

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await registerUser({
        fullName: name,
        email: email,
        password: password,
      });

      setName("");
      setEmail("");
      setPassword("");

      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#060811] text-[#F4F7FB]">
      <AuthNavbar />

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center px-6 pb-12 pt-6 md:px-10 lg:pt-0">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <section className="hidden lg:block">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#5EEAD4]/20 bg-[#5EEAD4]/[0.06] px-4 py-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">
                Start your journey
              </span>
            </div>

            <h2 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] xl:text-7xl">
              Your next job
              <span className="block bg-gradient-to-r from-[#5EEAD4] via-[#72F1DE] to-[#A7F3D0] bg-clip-text text-transparent">
                is out there.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#858EA4]">
              Create your profile once. Let Job Intelligence understand your
              skills and find opportunities that actually fit you.
            </p>

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
                </div>
              ))}
            </div>

            <div className="relative mt-12 w-full max-w-[430px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
              <div className="relative flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5EEAD4]/10 text-[#5EEAD4]">
                  <IoSparklesOutline size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#E8ECF5]">
                    One profile. Smarter matches.
                  </p>

                  <p className="mt-1 text-[10px] text-[#687186]">
                    AI understands skills beyond keywords.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "Node.js", "MongoDB", "AI + Vector Search"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[9px] text-[#737D92]"
                    >
                      {skill}
                    </span>
                  ),
                )}
              </div>
            </div>

            <p className="mt-10 text-[10px] uppercase tracking-[0.25em] text-[#343B4D]">
              Built with AI • vectors • semantic search
            </p>
          </section>

          <section className="flex w-full justify-center">
            <div className="relative w-full max-w-[440px]">
              <div className="relative rounded-[24px] border border-white/[0.09] bg-[#0B0E18]/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:p-10">
                <div className="mb-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-[#5EEAD4]/20 bg-[#5EEAD4]/10 text-[#5EEAD4]">
                    <IoSparklesOutline size={17} />
                  </div>

                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#5EEAD4]/15 bg-[#5EEAD4]/5 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5EEAD4] animate-pulse" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#5EEAD4]">
                      Free to get started
                    </span>
                  </div>

                  <h1 className="text-2xl font-bold tracking-tight text-[#F4F7FB]">
                    Create your account
                  </h1>

                  <p className="mt-1.5 text-xs leading-5 text-[#7D879C]">
                    Start discovering jobs that match your potential.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/5 px-3 py-2.5 text-xs text-red-400">
                    {error}
                  </div>
                )}

                <form onSubmit={submitHandler} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7C8599]"
                    >
                      Full name
                    </label>

                    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#5EEAD4]/50 focus-within:bg-[#5EEAD4]/[0.025] focus-within:shadow-[0_0_0_3px_rgba(94,234,212,0.07)]">
                      <FaRegUser
                        className="shrink-0 text-[#626B80] transition-colors group-focus-within:text-[#5EEAD4]"
                        size={14}
                      />

                      <input
                        id="fullName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full bg-transparent text-xs text-[#EDEFF7] outline-none placeholder:text-[#41495B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7C8599]"
                    >
                      Email address
                    </label>

                    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#5EEAD4]/50 focus-within:bg-[#5EEAD4]/[0.025] focus-within:shadow-[0_0_0_3px_rgba(94,234,212,0.07)]">
                      <IoMdMail
                        className="shrink-0 text-[#626B80] transition-colors group-focus-within:text-[#5EEAD4]"
                        size={16}
                      />

                      <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-transparent text-xs text-[#EDEFF7] outline-none placeholder:text-[#41495B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7C8599]"
                    >
                      Password
                    </label>

                    <div className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3.5 py-2.5 transition-all duration-300 focus-within:border-[#5EEAD4]/50 focus-within:bg-[#5EEAD4]/[0.025] focus-within:shadow-[0_0_0_3px_rgba(94,234,212,0.07)]">
                      <IoLockClosed
                        className="shrink-0 text-[#626B80] transition-colors group-focus-within:text-[#5EEAD4]"
                        size={16}
                      />

                      <input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="At least 8 characters"
                        minLength={8}
                        className="w-full bg-transparent text-xs text-[#EDEFF7] outline-none placeholder:text-[#41495B]"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-[#626B80] transition-colors hover:text-[#5EEAD4]"
                      >
                        {showPassword ? (
                          <IoEyeOffOutline size={16} />
                        ) : (
                          <IoEyeOutline size={16} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5EEAD4] to-[#34D8C4] py-3 text-xs font-bold text-[#06100F] shadow-[0_10px_25px_-8px_rgba(94,234,212,0.6)] transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#06100F]/30 border-t-[#06100F]" />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Create account
                        <IoArrowForward
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>

                  <p className="pt-0.5 text-center text-[9px] leading-relaxed text-[#4F586B]">
                    By creating an account, you agree to our{" "}
                    <span className="cursor-pointer text-[#697387] hover:text-[#5EEAD4]">
                      Terms
                    </span>{" "}
                    &{" "}
                    <span className="cursor-pointer text-[#697387] hover:text-[#5EEAD4]">
                      Privacy Policy
                    </span>
                    .
                  </p>
                </form>
                <div className="my-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/[0.06]" />
                  <span className="text-[8px] uppercase tracking-widest text-[#444C5E]">
                    Quick start
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                <p className="text-center text-[11px] text-[#747E93]">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-[#5EEAD4] transition-colors hover:text-[#A0F7EA]"
                  >
                    Sign in
                  </Link>
                </p>

                <div className="mt-4 flex items-center justify-center gap-2 text-[8px] uppercase tracking-wider text-[#3F4759]">
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
