import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Features from "../components/Home/Features";
import Footer from '../components/Home/Footer'

export default function Home() {
  return (
    <div className="ji-root min-h-screen bg-[#080A12] text-[#EDEFF7] overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
}