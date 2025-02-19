import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Home />
          <Sidebar />
      </main>
      <Footer />
    </div>
  );
}
