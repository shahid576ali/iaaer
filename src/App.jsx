import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Current from './pages/News/Current/Current'
import Archive from './pages/News/Archive/Archive'
import Newsletter from "./pages/News/Newsletters/NewsLetter";


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
        <main className="max-w-full lg:mr-28 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news/current" element={<Current />} />
            <Route path="/news/newsletters" element={<Newsletter />} />
            <Route path="/news/archive" element={<Archive />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}
