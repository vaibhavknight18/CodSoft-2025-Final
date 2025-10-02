import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "src/components/Navbar";
import HomePage from "src/pages/HomePage";
import JobsPage from "src/pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import EmployerDashboard from "./pages/EmployerDashboard";
import CandidateDashboard from "./pages/CandidateDashboard";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailPage />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
      </Routes>
    </>
  );
}
