import React from "react";
import { AboutSection } from "../components/about/AboutSection";
import { Badge } from "../components/Badge";
import { Card } from "../components/card";
import Conferences from "../components/Conference";

const Home = () => {
  return (
    <>
    <div className="lg:col-span-2 lg:ml-[100px] space-y-12">
      <AboutSection />
      <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Highlights and Announcements</h1>

        <div className="space-y-6">
          {/* Proposal Card */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">IAAER Council Expansion Proposal</h2>
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

                <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
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
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">IAAER-KPMG Research Program</h2>
                  <p className="text-sm text-gray-500 mt-1">Round 8 Recipients Announced</p>
                </div>
                <Badge variant="success">New Winners</Badge>
              </div>

              <div className="prose text-gray-600">
                <p>
                  Congratulations to the recipients of Round 8 of the research program "Informing the IASB
                  Standard-setting Process"!
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4">
                  View Recipients
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>

          {/* ECRDP Card */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">ACCA IAAER Early Career Program</h2>
                  <p className="text-sm text-gray-500 mt-1">Second Cohort (2025 - 2026)</p>
                </div>
                <Badge>Applications Open</Badge>
              </div>

              <div className="prose text-gray-600">
                <p>
                  IAAER, in collaboration with ACCA, is pleased to announce the second cohort of the ECRDP for
                  2025-2026.
                </p>
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>

          {/* IFAC Young Leaders Card */}
          <Card>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">IFAC Young Leaders Collective</h2>
                  <p className="text-sm text-gray-500 mt-1">28 Outstanding Leaders Selected</p>
                </div>
                <Badge variant="default">New Initiative</Badge>
              </div>

              <div className="prose text-gray-600">
                <p className="mb-4">
                  The International Federation of Accountants (IFAC) has selected 28 outstanding young leaders for its
                  inaugural Young Leaders Collective, running until the end of 2025.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">IAAER Nominees Selected:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Relebogile Mashile, CA(SA)</li>
                    <li>Michal Siczek</li>
                    <li>Josha Oestringer</li>
                  </ul>
                </div>

                <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  Visit IFAC Young Leaders Page
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
    <Conferences />
    </>
  );
};

export default Home;
