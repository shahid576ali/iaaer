import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Current from "./pages/Home/Current.jsx";
import Newsletter from "./pages/Home/QuarterlyNewsLetter.jsx";
import Archive from "./pages/Home/Archive.jsx";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
        <main className="max-w-full lg:mr-28 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/current" element={<Current />} />
            <Route path="/news/quarterly-newsletter" element={<Newsletter />} />
            <Route path="/news/archive" element={<Archive />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}
