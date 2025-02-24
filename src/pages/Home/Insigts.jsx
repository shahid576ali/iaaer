import { Download, ExternalLink, BookOpen, FileText, Bot, Leaf } from "lucide-react"

export default function Insights() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Insights and Innovations in Accounting</h1>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-12 w-12 rounded-full bg-blue-100 items-center justify-center flex-shrink-0">
                <Leaf className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Dive into Sustainability Assurance: What to Expect with IFAC
                </h2>
                <p className="mt-2 text-gray-600">
                  This article delves into the evolving landscape of mandatory sustainability reporting and assurance,
                  offering insights on compliance and the steps businesses need to take.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <img
                src="https://www.iaaer.org/pictures/W1siZiIsIjIwMjQvMDcvMTkvMDEvMDUvMTIvNjVkNDgwZDUtOGRhMy00ZDRjLWI5ZDMtM2UxMTkwNzYyOWE0L0lGQUMgSUZBQy5qcGciXSxbInAiLCJlbmNvZGUiLCJqcGVnIiwiLXF1YWxpdHkgODUiXV0/IFAC%20IFAC.jpeg?sha=8a812557edfdfd8d"
                alt="IFAC Sustainability Assurance Infographic"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Revolution Article */}
          <div className="bg-white hover:bg-purple-300 cursor-pointer rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Bot className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">The AI Revolution in Accounting</h3>
                <p className="mt-2 text-gray-600">
                  Discover how generative AI is transforming the accounting profession. This article delves into the
                  implications, opportunities, and challenges brought about by AI advancements.
                </p>
                <button className="mt-4 text-purple-600 hover:text-purple-700 inline-flex items-center">
                  Read more
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Future of Education Article */}
          <div className="bg-white rounded-lg hover:bg-green-300 cursor-pointer shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Discover the Future of Accounting Education with AI
                </h3>
                <p className="mt-2 text-gray-600">
                  See how the University of Pretoria's AE-Bot is revolutionizing accounting education with AI, bridging
                  theory and practice through personalized responses.
                </p>
                <button className="mt-4 text-green-600 hover:text-green-700 inline-flex items-center">
                  Read more
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Global Developments Article */}
          <div className="bg-white rounded-lg hover:bg-blue-300 cursor-pointer shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Global Developments in Sustainability Accounting
                </h3>
                <p className="mt-2 text-gray-600">
                  Check out David Madon's presentation on sustainability reporting from the IAAER, AAA, and IAS meeting
                  in Atlanta, January 2024.
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 inline-flex items-center">
                  Download Slides
                  <Download className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Open Access Papers Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Open Access Papers</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="pr-4">
                <h3 className="font-medium text-gray-900">Political Ideology Shapes Reporting Regulation</h3>
                <p className="text-sm text-gray-600">SEC Commissioners' Views on IFRS for US Issuers</p>
              </div>
              <button className="flex-shrink-0 text-blue-600 hover:text-blue-700 inline-flex items-center">
                Download
                <Download className="h-4 w-4 ml-2" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="pr-4">
                <h3 className="font-medium text-gray-900">Research on extended external reporting assurance</h3>
                <p className="text-sm text-gray-600">An update on recent developments</p>
              </div>
              <button className="flex-shrink-0 text-blue-600 hover:text-blue-700 inline-flex items-center">
                Download
                <Download className="h-4 w-4 ml-2" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="pr-4">
                <h3 className="font-medium text-gray-900">Research on Audit evidence, technology, and judgement</h3>
                <p className="text-sm text-gray-600">A review of the literature in response to ED-500</p>
              </div>
              <button className="flex-shrink-0 text-blue-600 hover:text-blue-700 inline-flex items-center">
                Download
                <Download className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

