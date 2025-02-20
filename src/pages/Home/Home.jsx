import React from "react";
import AboutSection from "../../components/about/AboutSection";
import Badge from "./Badge";
import Card from "./Card";
import Conferences from "./Conference";
import Insights from "./Insigts";
import Publication from "./Publication";

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
            {/* IASB Research Forum Card */}
            <div className="rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">IASB Research Forum 2025 Call for Papers</h2>
  
                  <div className="mt-4 prose text-gray-600">
                    <p>
                      IAAER is pleased to share the IASB's invitation for academic submissions for the 2025 IASB Research
                      Forum, in partnership with the academic journal, Accounting Horizons. We encourage the IAAER
                      community to take part and showcase the impact of academic research in advancing IFRS and global
                      financial reporting practices.
                    </p>
                  </div>
  
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Read Full Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
  
                <div className=" rounded-lg p-4 md:w-64">
                  <div className="text-blue-900">
                    <div className="text-sm font-medium uppercase tracking-wide">Submission Deadline</div>
                    <div className="mt-1 text-2xl font-bold">31 March 2025</div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Paper Development Workshop Card */}
            <div className="rounded-lg mt-7 shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Call for Submissions: IAAER Paper Development Workshop
                  </h2>
  
                  <div className="mt-4 prose text-gray-600">
                    <p>
                      The IAAER, in collaboration with the 2025 SAAA Biennial Conference, invites submissions for its
                      Paper Development Workshop (PDW) in Cape Town, South Africa, on 27 June 2025.
                    </p>
                    <p>
                      The PDW aims to support African accounting scholars—PhD holders and candidates—by providing expert
                      feedback from internationally recognized researchers to enhance the quality and publication
                      potential of their work.
                    </p>
                  </div>
  
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        View Submission Guidelines
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
  
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      For inquiries, contact Professor Donna Street at{" "}
                      <a href="mailto:dstreet1@udayton.edu" className="text-blue-600 hover:text-blue-800 ml-1">
                        dstreet1@udayton.edu
                      </a>
                    </div>
                  </div>
                </div>
  
                <div className="bg-blue-50 rounded-lg p-4 md:w-64">
                  <div className="text-blue-900">
                    <div className="text-sm font-medium uppercase tracking-wide">Submission Deadline</div>
                    <div className="mt-1 text-2xl font-bold">1 April 2025</div>
                  </div>
                </div>
              </div>
            </div>
            <Conferences />
            <Insights />
            <Publication />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
