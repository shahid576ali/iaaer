import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home/Home";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-full lg:mr-28 mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Home />
      </main>
      <Footer />
    </div>
  );
}