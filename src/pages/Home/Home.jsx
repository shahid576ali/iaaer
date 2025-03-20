import React, { useEffect, useState } from "react";
import AboutSection from "../../components/about/AboutSection";
import Conferences from "./Conference";
import Insights from "./Insigts";
import Publication from "./Publication";
import { Sponsor } from "../../components/sidebar/Sponsor";
import images from "../../assets/images";

const Home = () => {
  const [isPulsing, setPulsing] = useState(true);

  useEffect(() => {
    // Stop pulsing after 5 seconds to avoid being too distracting
    const timer = setTimeout(() => setPulsing(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="lg:col-span-2 lg:ml-[150px] space-y-12">
        <AboutSection />
        <div className="min-h-screen py-8">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors">
              Highlights and Announcements
            </h1>

            <div className="space-y-6">
              {/* Proposal Card */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg shadow-lg border-2 border-white to-white overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-[290px] flex items-center justify-center">
                      <img
                        src={images.pro}
                        alt="Proposal"
                        className="w-full h-[290px] object-contain rounded-t-lg"
                      />
                    </div>

                    {/* Highlight ribbon for important content */}
                    <div className="absolute -right-12 top-6 rotate-45 bg-yellow-500 text-white px-10 py-1 shadow-md z-10">
                      Important
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          IAAER Council Expansion Proposal
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Voting opens February 22, 2025
                        </p>
                      </div>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500 text-white">
                        Important Update
                      </span>
                    </div>

                    <div className="prose text-gray-600">
                      <p className="mb-4">
                        The International Association for Accounting Education
                        and Research (IAAER) is pleased to announce a proposal
                        to amend its Constitution to expand the IAAER Council.
                        The proposed amendment would allow University Members to
                        nominate a representative to the Council.
                      </p>

                      {/* Highlighted important information box */}
                      <div
                        className={`
              bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 mb-4
              ${isPulsing ? "animate-pulse" : ""}
              shadow-md
            `}
                      >
                        <p className="text-sm font-medium text-blue-800">
                          Voting Period: 06:00 - 18:00 EST
                        </p>
                      </div>

                      <button className="inline-flex items-center px-4 py-2 border bg-blue-50 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 cursor-pointer hover:text-white transition-colors">
                        Access Proposal Details
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Research Program Card */}
                <div className="rounded-lg shadow-lg border-2 border-white overflow-hidden">
                  <div className="w-full h-[290px] flex items-center justify-center">
                    <img
                      src={images.searc}
                      alt="Research Program"
                      className="w-full h-[220px] object-contain rounded-t-lg"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                          IAAER-KPMG Research Program
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                          Round 8 Recipients Announced
                        </p>
                      </div>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500 text-white">
                        New Winners
                      </span>
                    </div>

                    <div className="prose text-gray-600">
                      {/* Highlighted content with a special background */}
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-500 mb-4">
                        <p className="font-medium">
                          Congratulations to the recipients of Round 8 of the
                          research program "Informing the IASB Standard-setting
                          Process"!
                        </p>
                      </div>
                      <div
                        className={`
              bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 mt-8 rounded-lg p-4 mb-4
              ${isPulsing ? "animate-pulse" : ""}
            `}
                      >
                        <p className="text-sm font-medium text-green-800">
                          Voting Period: 06:00 - 18:00 EST
                        </p>
                      </div>

                      <a
                        href="#"
                        className="inline-flex items-center text-green-600 hover:bg-green-600 hover:text-white border border-green-500 rounded-[4px] py-2 px-14 bg-green-50 transition-colors mt-2"
                      >
                        View Recipients
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conference Section */}
              <Conferences />
              <Insights />
              <Publication />
              <Sponsor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
