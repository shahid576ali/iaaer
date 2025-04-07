import React from 'react'
import { useState } from "react"

const Round2 = () => {
     // Sample data structure
const researchPapers = [
    {
      id: 1,
      title: "A Study of Skepticism Traits in Auditing Financial Statements",
      authors: [
        { name: "Takiah Mohd Iskandar", affiliation: "Universiti Kebangsaan Malaysia" },
        { name: "Sayed Alwee Hussnie Sayed Hussin", affiliation: "National Audit Department of Malaysia" },
        { name: "Romlah Jaafar", affiliation: "Universiti Kebangsaan Malaysia" },
        { name: "Norman Mohd Saleh", affiliation: "Universiti Kebangsaan Malaysia" },
      ],
      category: "Auditing",
      year: 2022,
      abstract: "This study examines the skepticism traits in auditing financial statements...",
      keywords: ["Skepticism", "Auditing", "Financial Statements"],
    },
    {
      id: 2,
      title: "An Examination of the Implications of Integrated Reporting on Investor Judgment",
      authors: [
        { name: "Diane Janvrin", affiliation: "Iowa State University" },
        { name: "William Dilla", affiliation: "Iowa State University" },
        { name: "Jon Perkins", affiliation: "Iowa State University" },
        { name: "Robyn Raschke", affiliation: "University of Nevada – Las Vegas" },
      ],
      category: "Reporting",
      year: 2021,
      abstract: "This paper examines how integrated reporting affects investor judgment...",
      keywords: ["Integrated Reporting", "Investor Judgment", "Financial Analysis"],
    },
    {
      id: 3,
      title:
        "Auditors' Materiality Judgments under Integrated Reporting: the Impact of Strategic Significance of Reported Information and Integrativeness of Performance Information Systems",
      authors: [
        { name: "Mandy Cheng", affiliation: "University of New South Wales" },
        { name: "Wendy Green", affiliation: "University of New South Wales" },
      ],
      category: "Auditing",
      year: 2023,
      abstract:
        "This research investigates how auditors make materiality judgments under integrated reporting frameworks...",
      keywords: ["Materiality", "Integrated Reporting", "Performance Information Systems"],
    },
    {
      id: 4,
      title: "Hindsight Bias and Professional Skepticism: Does the End Justify the Means?",
      authors: [
        { name: "Joseph Brazel", affiliation: "North Carolina State University" },
        { name: "Tammie R. Schaefer", affiliation: "University of South Carolina" },
        { name: "Bryan W. Stewart", affiliation: "University of South Carolina" },
      ],
      category: "Professional Ethics",
      year: 2020,
      abstract: "This study explores the relationship between hindsight bias and professional skepticism in auditing...",
      keywords: ["Hindsight Bias", "Professional Skepticism", "Auditing Ethics"],
    },
    {
      id: 5,
      title:
        "The Informational Value of Emphasis of Matter Paragraphs and Auditor Commentaries: Evidence from Eye-tracking Studies",
      authors: [
        { name: "Louis-Philippe Sirois", affiliation: "HEC Montréal" },
        { name: "Palash Bera", affiliation: "Saint Louis University" },
        { name: "Jean Bédard", affiliation: "Laval University" },
        { name: "Anand Jha", affiliation: "Texas A&M University" },
      ],
      category: "Auditing",
      year: 2022,
      abstract:
        "Using eye-tracking technology, this research examines how users process information in emphasis of matter paragraphs...",
      keywords: ["Eye-tracking", "Auditor Commentaries", "Information Processing"],
    },
  ]
  
  const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")
    const [expandedPaper, setExpandedPaper] = useState(null)
  
    // Get unique categories for filter
    const categories = ["All", ...new Set(researchPapers.map((paper) => paper.category))]
  
    // Filter papers based on category and search term
    const filteredPapers = researchPapers.filter((paper) => {
      const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory
      const matchesSearch =
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.authors.some((author) => author.name.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Academic Research Papers</h1>
          <p className="text-gray-600">Explore the latest research in auditing and financial reporting</p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="md:w-2/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title or author..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="md:w-1/3">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredPapers.length > 0 ? (
            filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
                        {paper.category} • {paper.year}
                      </span>
                      <h2
                        className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer"
                        onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                      >
                        {paper.title}
                      </h2>
                    </div>
                    <button
                      className="text-gray-400 hover:text-blue-500"
                      onClick={() => setExpandedPaper(expandedPaper === paper.id ? null : paper.id)}
                    >
                      {expandedPaper === paper.id ? (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {paper.authors.map((author, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-gray-700">{author.name}</span>
                          <span className="text-gray-500 text-sm ml-1">
                            ({author.affiliation}){index < paper.authors.length - 1 && <span className="mr-1">;</span>}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {expandedPaper === paper.id && (
                    <div className="mt-4 border-t pt-4 animate-fadeIn">
                      <h3 className="font-semibold text-gray-700 mb-2">Abstract</h3>
                      <p className="text-gray-600 mb-4">{paper.abstract}</p>

                      <h3 className="font-semibold text-gray-700 mb-2">Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-md">
                            {keyword}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          View Full Paper
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                          Cite
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-xl shadow">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default Round2
