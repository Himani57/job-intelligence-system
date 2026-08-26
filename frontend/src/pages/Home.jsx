import Navbar from "../components/Navbar";
import AmbientBackground from "../components/AmbientBackground";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="ji-root min-h-screen bg-[#080A12] text-[#EDEFF7] overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}