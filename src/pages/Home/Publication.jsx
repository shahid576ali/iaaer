import { useState } from "react"

export default function Publication() {
  const [activeTab, setActiveTab] = useState("publications")
  const [searchQuery, setSearchQuery] = useState("")

  const publications = [
    { title: "IAAER Newsletter", type: "newsletter", link: "#" },
    { title: "Journal of International Financial Management & Accounting (JIFMA)", type: "journal", link: "#" },
    { title: "Accounting Education", type: "journal", link: "#" },
    { title: "IAAER Global Code of Ethics for Accounting Educators", type: "guide", link: "#" },
  ]

  const openAccessPapers = [
    {
      title: "Political Ideology Shapes Reporting Regulation: SEC Commissioners' Views on IFRS for US Issuers",
      link: "#",
    },
    {
      title: "Research on extended external reporting assurance: An update on recent developments",
      link: "#",
    },
    {
      title: "Research on Audit evidence, technology, and judgement: A review of the literature in response to ED-500",
      link: "#",
    },
  ]

  const membershipTypes = [
    {
      type: "Universities",
      description: "Contributing to accounting education and research",
      link: "#",
    },
    {
      type: "Institutions",
      description: "Collaborating with IAAER for the promotion of accounting education and policy relevant research",
      link: "#",
    },
    {
      type: "Individual Faculty",
      description: "Academic professionals in accounting and related fields",
      link: "#",
    },
    {
      type: "Students",
      description: "Enrolled in accounting or related programs",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl">
        {/* Tab Navigation */}
        <div className="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-8">
          {["publications", "membership", "search"].map((tab) => (
            <button
              key={tab}
              className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 
                ${activeTab === tab ? "bg-white text-gray-900 shadow" : "text-gray-700 hover:text-gray-900"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === "publications" && (
          <div className="space-y-8">
            {/* Main Publications */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">IAAER Publications</h2>
              <div className="grid gap-4">
                {publications.map((pub) => (
                  <a
                    key={pub.title}
                    href={pub.link}
                    className="flex items-center p-4 rounded-lg border border-gray-200 hover:scale-[1.02] transition-all hover:bg-blue-100 hover:border-blue-500"
                  >
                    <div className="mr-4">
                      {pub.type === "newsletter" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                          />
                        </svg>
                      )}
                      {pub.type === "journal" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )}
                      {pub.type === "guide" && (
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-900 hover:text-blue-600">{pub.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Open Access Papers */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Open Access Papers</h2>
              <p className="text-gray-600 mb-6">
                Download the following free papers from JIFMA's Institutional Perspectives section:
              </p>
              <div className="space-y-4">
                {openAccessPapers.map((paper) => (
                  <a
                    key={paper.title}
                    href={paper.link}
                    className="block p-4 rounded-lg border border-gray-200 transition-all hover:bg-blue-100 hover:scale-[1.02] hover:border-blue-500"
                  >
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                        />
                      </svg>
                      <span className="text-gray-900 hover:text-blue-600">{paper.title}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "membership" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">IAAER Membership</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {membershipTypes.map((membership) => (
                <div
                  key={membership.type}
                  className="p-6 rounded-lg border border-gray-200 hover:scale-[1.02] hover:bg-blue-100 transition-all hover:border-blue-500"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{membership.type}</h3>
                  <p className="text-gray-600 mb-4">{membership.description}</p>
                  <a href={membership.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "search" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Search IFAC</h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">A KnowledgeNet for Professional Accountants</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}