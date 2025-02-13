import { AboutSection } from "./components/about/AboutSection"
import {HighlightsSection} from "./components/highlights/HighlightsSection"
import Navbar from "./components/nav/Navbar"
import { Sidebar } from "./components/sidebar/Sidebar"
export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 lg:ml-[100px] space-y-12">
            <AboutSection />
            <HighlightsSection />
          </div>
          <Sidebar />
        </div>
      </main>
    </div>
  )
}