import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { useState } from "react";

const PERKS = [
  "Resume parsed in seconds, not minutes",
  "Matched against live job listings",
  "Ranked by meaning, not keyword luck",
];

export default function SignUp() {

    const[name,setName] = useState("");
    const[email, setEmail] = useState("");
    const[password , setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className="w-full h-screen bg-[#080A12] text-[#EDEFF7] overflow-x-hidden">
      <div className="flex items-center p-10 justify-between w-full">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5EEAD4] to-[#34D8C4] flex items-center justify-center shadow-[0_0_20px_rgba(94,234,212,0.4)]">
            <span className="text-[11px] font-bold text-[#080A12]">JI</span>
          </div>
          <span className="font-bold tracking-tight text-[16px]">
            Job Intelligence
          </span>
        </Link>

        <Link
          to="/login"
          className="text-xs px-4 py-2 rounded-full border border-[#232B42] text-[#EDEFF7] hover:border-[#5EEAD4] hover:text-[#5EEAD4] transition-colors"
        >
          Sign in
        </Link>
      </div>
      <div className="flex mt-20 p-4">
        {/* LEFT */}
        <div className="relative hidden lg:flex flex-col justify-between w-1/2 h-full p-12 overflow-hidden border-r border-white/[0.06]">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#5EEAD4] opacity-[0.12] blur-[110px]" />
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#F5A623] opacity-[0.09] blur-[110px]" />
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(#1B2338 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 30% 30%, black, transparent)",
              }}
            />
          </div>

          <div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-[1.1] mb-6">
              Stop applying
              <br />
              into the void.
            </h2>
            <p className="text-[#8891A8] text-base max-w-sm leading-relaxed mb-10">
              One resume, matched against real listings by what it actually says
              you can do.
            </p>
            <ul className="space-y-4">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm text-[#C7CBDA]"
                >
                  <span className="mt-1 w-4 h-4 rounded-full bg-[#5EEAD4]/15 border border-[#5EEAD4]/40 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[11px] mt-45 text-[#4A5268]">
            built with vectors, not vibes
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center w-full lg:w-1/2 h-full px-6">
          <div className="w-full max-w-sm">
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-[#8891A8] text-sm mb-9">
              Start matching in under a minute.
            </p>

            <form onSubmit={submitHandler} className="space-y-5">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-[10px] text-[#8891A8] uppercase tracking-wide mb-2 block"
                >
                  Full name
                </label>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <FaRegUser className="h-3 w-3" />
                  <input
                    id="fullName"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent text-sm text-[#EDEFF7] placeholder:text-[#4A5268] outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-[10px] text-[#8891A8] uppercase tracking-wide mb-2 block"
                >
                  Email
                </label>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <IoMdMail className="h-4 w-4" />
                  <input
                    id="email"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                     }}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="w-full bg-transparent text-sm text-[#EDEFF7] placeholder:text-[#4A5268] outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-[10px] text-[#8891A8] uppercase tracking-wide mb-2 block"
                >
                  Password
                </label>
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <IoLockClosed className="h-4 w-4" />
                  <input
                    id="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    name="password"
                    type="password"
                    placeholder="At least 8 characters"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    className="w-full bg-transparent text-sm text-[#EDEFF7] placeholder:text-[#4A5268] outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#5EEAD4] text-[#080A12] font-semibold text-sm mt-2"
              >
                Create account
              </button>

              <p className="text-[11px] text-[#4A5268] text-center leading-relaxed">
                By continuing you agree to the Terms & Privacy Policy.
              </p>
            </form>

            <p className="text-xs text-[#8891A8] mt-8 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-[#5EEAD4] hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
