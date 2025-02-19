import { useState } from "react"

export default function Conferences() {
  const [activeTab, setActiveTab] = useState("upcoming")

  return (
    <div className="h-[1100px] bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Conferences and Calls for Papers</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-8">
          <button
            className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 
              ${activeTab === "upcoming" ? "bg-white text-gray-900 shadow" : "text-gray-700 hover:text-gray-900"}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Conferences
          </button>
          <button
            className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 
              ${activeTab === "calls" ? "bg-white text-gray-900 shadow" : "text-gray-700 hover:text-gray-900"}`}
            onClick={() => setActiveTab("calls")}
          >
            Calls for Papers
          </button>
        </div>

        {activeTab === "upcoming" ? (
          <div className="space-y-8">
            {/* Regular Conference Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    The 26th Annual Conference on Finance and Accounting (ACFA 2025)
                  </h2>
                  <p className="text-gray-600 mt-2">22-23 May, 2025</p>
                </div>
                <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  More Information
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Featured Conference Card with Image */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative h-[300px]">
                <img
                  src="https://www.iaaer.org/pictures/W1siZiIsIjIwMjQvMDcvMTkvMDEvMzIvMTkvNmNkNzgyNWItY2NmYi00M2Q3LTk5NjgtNmNjZTUzYTgwNjkzL1NBQUEgQklFTk5JQUwgSU5URVJOQVRJT05BTCBDT05GRVJFTkNFX2JfcGFnZS0wMDAxLmpwZyJdLFsicCIsImVuY29kZSIsImpwZWciLCItcXVhbGl0eSA4NSJdXQ/New%20SAAA%20Poster.jpeg?sha=0763f79c90f5f9de"
                  alt="SAAA/IAAER Conference in Cape Town"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Southern African Accounting Association joint meeting with IAAER
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    June 25-27, 2025
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Cape Town, South Africa
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              2025 SAAA/IAAER Biennial Conference in Cape Town
            </h2>
            <p className="text-gray-600 mb-8">
              We are excited to announce that the 2025 SAAA/IAAER Biennial Conference will take place from 25-27 June
              2025 at the iconic Century City in Cape Town! This prestigious event, jointly hosted by the South African
              Accounting Association (SAAA) and the IAAER, will bring together thought leaders, researchers, and
              practitioners from around the globe.
            </p>

            <h3 className="font-semibold text-gray-900 mb-4">Key Dates:</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 flex-shrink-0">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">February 2025</h4>
                  <p className="text-gray-600">Conference registration opens</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 flex-shrink-0">
                  <span className="text-blue-600 font-semibold">16</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">May 2025</h4>
                  <p className="text-gray-600">Confirmation of presentation acceptance</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 flex-shrink-0">
                  <span className="text-blue-600 font-semibold">24</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">May 2025</h4>
                  <p className="text-gray-600">Registration closes</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Submit Your Paper
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

