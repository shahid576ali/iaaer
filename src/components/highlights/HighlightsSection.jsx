import { ChevronDown, Award, UserCheck, GraduationCap, Users2, Users, BookOpen } from "lucide-react";
import { useState } from "react";

const ExpandableCard = ({ title, icon: Icon, description, items, expanded, setExpanded }) => {
  return (
    <div className={`bg-white rounded-lg relative shadow-lg overflow-hidden transition-all ${expanded ? "h-auto" : "h-96"}`}>
      <div className="p-3 text-white bg-gradient-to-r from-purple-400 to-purple-600 flex items-center">
        <Icon className="w-5 h-5 mr-3" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <UserCheck className="w-4 h-4 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.name}</p>
                <p className="text-xs text-gray-500">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="w-full absolute bottom-0 bg-purple-500 text-white py-2 text-sm font-medium hover:bg-purple-600"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export function HighlightsSection() {
  const [firstSection, setFirstSection] = useState(false);
  const [secondSection, setSecondSection] = useState(false);
  const [thirdSection, setThirdSection] = useState(false);
  const [fourthSection, setFourthSection] = useState(false);
  const [fifthSection, setFifthSection] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Highlights and Announcements
          </span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExpandableCard
            title="Newly Elected IAAER Executive Committee"
            icon={Award}
            description="The following slate has been elected to serve a two-year term as officers on the IAAER Executive Committee, 2025-2026:"
            items={[
              { title: "President", name: "Katherine Schipper", org: "Duke University, US" },
              { title: "VP-Finance", name: "Leslie Hodder", org: "Indiana University, US" },
            ]}
            expanded={firstSection}
            setExpanded={setFirstSection}
          />

          <ExpandableCard
            title="ACCA IAAER Scholars - Second Cohort"
            icon={GraduationCap}
            description="IAAER and ACCA are thrilled to announce the selection of five exceptional scholars for the second cohort of the ACCA IAAER Scholars program."
            items={[
              { name: "Dr. Joanna Krasodomska", title: "PhD, Professor", org: "Krakow University of Economics, Poland" },
              { name: "Dr. Karol Marek Klimczak", title: "PhD, Professor", org: "Lodz University of Technology, Poland" },
            ]}
            expanded={secondSection}
            setExpanded={setSecondSection}
          />

          <ExpandableCard
            title="IFAC Young Leaders Collective!"
            icon={Users2}
            description="The International Federation of Accountants (IFAC) has selected 28 outstanding young leaders for its inaugural Young Leaders Collective."
            items={[
              { title: "IAAER nominees selected", name: "Relebogile Mashile, CA(SA)", org: "" },
              { title: "IAAER nominees selected", name: "Michał Siczek", org: "" },
            ]}
            expanded={thirdSection}
            setExpanded={setThirdSection}
          />

          <ExpandableCard
            title="Expand IAAER Council"
            icon={Users}
            description="Proposal to amend IAAER Constitution, allowing University Members to nominate Council representatives."
            items={[
              { title: "Virtual vote", name: "February 22, 2025", org: "06:00-18:00 EST" },
            ]}
            expanded={fourthSection}
            setExpanded={setFourthSection}
          />

          <ExpandableCard
            title="IASB Research Forum 2025"
            icon={BookOpen}
            description="IAAER shares IASB's call for academic submissions for the 2025 IASB Research Forum, in partnership with Accounting Horizons."
            items={[]}
            expanded={fifthSection}
            setExpanded={setFifthSection}
          />
        </div>
      </div>
    </section>
  );
}
