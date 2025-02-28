import React from "react";
import AboutSection from "../../components/about/AboutSection";
import Badge from "./Badge";
import Card from "./Card";
import Conferences from "./Conference";
import Insights from "./Insigts";
import Publication from "./Publication";
import { Sponsor } from "../../components/sidebar/Sponsor";
import images from "../../assets/images";

const Home = () => {
  return (
    <>
      <div className="lg:col-span-2 lg:ml-[150px] space-y-12">
        <AboutSection />
        <div className="min-h-screen py-8">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 hover:text-blue-600 transition-colors">Highlights and Announcements</h1>

            <div className="space-y-6">
              {/* Proposal Card */}
              <Card>
                <img src={images.propose} alt="Proposal" className="w-full h-48 object-contain rounded-t-lg" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">IAAER Council Expansion Proposal</h2>
                      <p className="text-sm text-gray-500 mt-1">Voting opens February 22, 2025</p>
                    </div>
                    <Badge variant="warning">Important Update</Badge>
                  </div>

                  <div className="prose text-gray-600">
                    <p className="mb-4">
                      The International Association for Accounting Education and Research (IAAER) is pleased to announce a
                      proposal to amend its Constitution to expand the IAAER Council. The proposed amendment would allow
                      University Members to nominate a representative to the Council.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-blue-800">Voting Period: 06:00 - 18:00 EST</p>
                    </div>

                    <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
                      Access Proposal Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Card>

              {/* Research Program Card */}
              <Card>
                <img src={images.program} alt="Research Program" className="w-full h-48 object-contain rounded-t-lg" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">IAAER-KPMG Research Program</h2>
                      <p className="text-sm text-gray-500 mt-1">Round 8 Recipients Announced</p>
                    </div>
                    <Badge variant="success">New Winners</Badge>
                  </div>

                  <div className="prose text-gray-600">
                    <p>
                      Congratulations to the recipients of Round 8 of the research program "Informing the IASB
                      Standard-setting Process"!
                    </p>
                    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mt-4">
                      View Recipients
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>

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
