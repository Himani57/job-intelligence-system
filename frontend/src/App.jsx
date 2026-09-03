import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Signup from "./pages/Signup";
import Login from './pages/Login';
import Resume from './pages/Resume';
import Jobs from './pages/Jobs';
import RecommendedJobs from './pages/RecommendedJobs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/recommended-jobs" element={<RecommendedJobs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
