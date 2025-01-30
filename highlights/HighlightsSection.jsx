import { useState } from "react"
import { ChevronDown, ChevronUp, Award, UserCheck, GraduationCap, Users2, Users, BookOpen } from "lucide-react"

export function HighlightsSection() {

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Highlights and Announcements
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Executive Committee Card */}
          <div className="bg-white h-[424px] rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 text-white bg-gradient-to-r from-purple-400 to-purple-600">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-3" />
                <h3 className="text-lg font-semibold">Newly Elected IAAER Executive Committee</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                The following slate has been elected to serve a two-year term as officers on the IAAER Executive
                Committee, 2025-2026:
              </p>
              <div className={`space-y-3`}>
                <div className="flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">President</h4>
                    <p className="text-sm text-gray-600">Katherine Schipper, Duke University, US</p>
                  </div>
                </div>
                {/* VP Positions */}
                {[
                  { title: "VP-Finance", name: "Leslie Hodder", org: "Indiana University, US" },
                  {
                    title: "VP-Administration",
                    name: "Joanna Krasodomska",
                    org: "Krakow University of Economics, Poland",
                  },
                  { title: "VP-Education", name: "Jacqueline Birt", org: "UWA Business School, Australia" },
                  { title: "VP-Research", name: "Holger Daske", org: "University of Mannheim, Germany" },
                  { title: "VP-Conferences", name: "Linda Kidwell", org: "Nova Southeastern University, US" },
                  { title: "VP-Practice", name: "Sharon Machado", org: "ACCA, UK" },
                  { title: "VP-Membership", name: "Mukesh Garg", org: "Monash University, Australia" },
                  {
                    title: "VP-Communications",
                    name: "Cecile Janse van Rensburg",
                    org: "University of Pretoria, South Africa",
                  },
                ].map((vp, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <UserCheck className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{vp.title}</h4>
                      <p className="text-xs text-gray-600">{vp.name}</p>
                      <p className="text-xs text-gray-500">{vp.org}</p>
                    </div>
                  </div>
                ))}
                {/* VPs-at-large and other positions... */}
              </div>
            </div>
          </div>

          {/* ACCA IAAER Scholars Card */}
          <div className="bg-white h-[416px] rounded-lg shadow-lg overflow-hidden">
            <div className="p-3  text-white bg-gradient-to-r from-green-400 to-green-600">
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-3" />
                <h3 className="text-lg font-semibold">ACCA IAAER Scholars - Second Cohort (2024-2026)</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                IAAER and ACCA are thrilled to announce the selection of five exceptional scholars for the second cohort
                of the ACCA IAAER Scholars program (March 2024 - March 2026).
              </p>
              <div className={`space-y-3`}>
                <h4 className="font-medium text-gray-900 text-sm">Congratulations to the scholars!</h4>
                {[
                  {
                    name: "Dr. Joanna Krasodomska",
                    title: "PhD, Professor",
                    institution: "Krakow University of Economics, Poland",
                  },
                  {
                    name: "Dr. Karol Marek Klimczak",
                    title: "PhD, Professor and Dean Faculty of Organization and Management",
                    institution: "Lodz University of Technology, Poland",
                  },
                  {
                    name: "Dr. David M.",
                    title: "PhD, Associate Dean Academics and Student Affairs",
                    institution: "Strathmore University Business School, Kenya",
                  },
                  {
                    name: "Dr. Raquel Sarquis",
                    title: "PhD, Professor with Tenure",
                    institution: "University of São Paulo, Brazil",
                  },
                  {
                    name: "Dr. Wayne van Zijl",
                    title: "CA(SA), PhD, Associate Professor and Assistant Dean Research",
                    institution: "University of the Witwatersrand, South Africa",
                  },
                ].map((scholar, index) => (
                  <div key={index} className="flex items-start gap-2 p-2 bg-green-50 rounded-lg">
                    <UserCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900 text-sm">{scholar.name}</h5>
                      <p className="text-xs text-gray-600">{scholar.title}</p>
                      <p className="text-xs text-gray-500">{scholar.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IFAC Young Leaders Collective Card */}
          <div className="bg-white h-96 rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 text-white bg-gradient-to-r from-orange-400 to-orange-600">
              <div className="flex items-center">
                <Users2 className="w-5 h-5 mr-3" />
                <h3 className="text-lg font-semibold">IFAC Young Leaders Collective!</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">
                The International Federation of Accountants (IFAC) has selected 28 outstanding young leaders for its
                inaugural Young Leaders Collective, running until the end of 2025.
              </p>
              <div className={`space-y-3`}>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm mb-2">IAAER nominees selected:</h4>
                  <ul className="space-y-1">
                    {["Relebogile Mashile, CA(SA)", "Michał Siczek", "Josha Oestringer"].map((nominee, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-700">{nominee}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
                >
                  Visit IFAC Young Leaders page
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Expand IAAER Council Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 text-white bg-gradient-to-r from-blue-400 to-blue-600">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <h3 className="text-lg font-semibold">Expand IAAER Council</h3>
              </div>
            </div>
            <div className="p-4">
              <div className={`space-y-3`}>
                <p className="text-sm text-gray-600">
                  Proposal to amend IAAER Constitution, allowing University Members to nominate Council representatives.
                </p>
                <p className="text-sm text-gray-600">Virtual vote: February 22, 2025, 06:00-18:00 EST.</p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View proposal
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* IASB Research Forum Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-3 text-white bg-gradient-to-r from-indigo-400 to-indigo-600">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-3" />
                <h3 className="text-lg font-semibold">IASB Research Forum 2025</h3>
              </div>
            </div>
            <div className="p-4">
              <div className={`space-y-3 `}>
                <p className="text-sm text-gray-600">
                  IAAER shares IASB's call for academic submissions for the 2025 IASB Research Forum, in partnership
                  with <span className="italic">Accounting Horizons</span>.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read full details
                  <ChevronDown className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}