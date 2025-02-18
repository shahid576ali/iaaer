import Navbar from "./components/nav/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import Home from "./pages/Home";
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <Home />
        </div>
          <Sidebar />
      </main>
    </div>
  );
}
