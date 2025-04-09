import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Current from "./pages/News/Current/Current";
import Archive from "./pages/News/Archive/Archive";
import Newsletter from "./pages/News/Newsletters/NewsLetter";
import Affiliated from "./pages/Research/Affiliated/affiliated";
import Not_Found from "./components/not_found/Not_Found";
import Iaasb from "./pages/Research/Iaasb/Iaasb";
import Iaesb from "./pages/Research/Iaesb/Iaesb";
import Scholars from "./pages/Research/Scholars";
import Researcher from "./pages/Research/ResearcherDevelopment/ResearcherDevelopment";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-full lg:mr-28 mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/mission-statement" element={<MissionStatement
        organization={organizationData}
        mission={organizationData.mission}
        activities={organizationData.activities}
      />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/news/current" element={<Current />} />
          <Route path="/news/newsletters" element={<Newsletter />} />
          <Route path="/news/archive" element={<Archive />} />
          <Route path="/research/acca-iaaer-scholars-program" element={<Scholars />} />
          <Route
            path="/research/affiliated-journals"
            element={<Affiliated />}
          />
           <Route
            path="/research/iaaer-acca-early-career-researcher-development-program"
            element={<Researcher />}
          />
          <Route path="/research/informing-the-iaasb" element={<Iaasb />} />
          <Route path="/research/informing-the-iaesb" element={<Iaesb />} />
          <Route path="*" element={<Not_Found />} />
          <Route path="institutional-university-members/professional-institutional-members-resources" element={<PIMR />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
