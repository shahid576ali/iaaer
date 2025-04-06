import React from 'react';
import { useState } from "react";

const Iaesb = () => {
    const [activeTab, setActiveTab] = useState("Round 1");
  return (
      <div>
      <h2 className='text-2xl font-bold'>Informing the IAESB</h2>
      <p>The third program, funded by ACCA, informs the International Accounting Education Standards Board (IAESB).  One round of projects is complete; topics addressed are Continuing Professional Development in the Asia-Pacific Region, Ethics Education and Training, Non-Technical Skills, and IES 2, 3, and 4 Compliance.<br></br>
      <br></br>
        To see both a summary of the research findings and copies of the full research reports click round 1 below. The second round of projects is in process; to see a summary to the topics being investigated click round 2.</p>
      <div className="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-8">
          {["Round 1", "Round 2"].map((tab) => (
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

        {activeTab === "Round 1" && (
          <div className="space-y-8">
            {/* Round 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <p className='text-xl font-bold'>Research on International Accounting Educational Standards</p>
                <ul className='list-disc list-inside'>
                    <li><a className='text-blue-500'>Announcement: Research Grant Recipients</a></li>
                    <li><a className='text-blue-500'>Original Call for Proposals </a></li>
                    <li><a className='text-blue-500'>News release</a></li>
                </ul>
                <br></br>
                <p className='text-xl font-bold'>Final presentations were delivered at the at World Congress of Accounting Educators, in Singapore, on November 4, 2010. </p>
                <ul className='list-disc list-inside'>
                  <li><a className='text-blue-500'>Summary of Research findings</a></li>
                </ul>
                <br></br>
                <p>Setting global standards for accounting education is the job of the International Accounting Education Standards Board (IAESB).  To aid the Board, four research projects were commissioned by the International Association for Accounting Education and Research (IAAER) and funded by the Association of Certified Chartered Accountants (ACCA).
                    These projects will help the IAESB by providing evidence on the acceptance, implementation, and impact of accounting education standards throughout the world.
                </p>
                <br></br>
                <p>The first project is "<a className='text-blue-600'>How Does the Methodology of Education and Training in Ethics Affect the Ethical Awareness and Practice of the Professional Accountant?</a>" Principal investigator <strong>F. Greg Barton</strong> leads a team from <strong>Brigham Young University</strong> (USA),
                   the <strong>Mexican Association of Accounting and Business Faculty</strong>, and the <strong>University of Sao Paulo</strong> (Brazil).
                    The team will examine the effects of different methods of ethics education across different cultures, educational backgrounds, and organizations.  The results will help universities and professional associations tailor their ethics education to better meet IES 4,
                     “Professional Values Ethics and Attitudes.” 
                </p>
                <br></br>
                <p><strong>Paul de Lange</strong> and a team from <strong>RMIT University</strong> (Australia) and <strong>Singapore Management University</strong> will investigate continuing professional development (CPD) programs in their project "<a className='text-blue-600'>Access to CPD Opportunities and Resources to Assist Professional Accountants to Meet Their Commitment to Life Long Learning:
                   Evidence from the Asia Pacific Region</a>." They will address the effectiveness of different CPD activities in developed and emerging market economies and develop ways of improving access, relevance, and delivery of CPD.  This will address IES 7, “Continuing Professional Development: A Program of Lifelong 
                   Learning and Continuing Development of Professional Competence”.
                </p>
                <br></br>
                <p>A team from <strong>Robert Gordon University</strong> (Scotland), headed by <strong>Elizabeth Gammie</strong>, will examine non-technical skills needed by accountants in their project "<a className='text-blue-600'>Searching for Best Practice in the Development and Assessment of Non-Technical Skills in Accountancy Trainees – A Global Study</a>." The need for non-technical
                   skills is stressed in IES 3, “Professional Skills and General Education.”  This study will identify the required non-technical skills, the most effective methods of developing and assessing the skills, and provide examples of successful programs for improving non-technical skills.
                </p>
                <br></br>
                <p>The final team is headed by <strong>Christine Helliar</strong> of the <strong>University of Dundee</strong> (UK) and has members from her university, <strong>Brescia University</strong> (Italy), and <strong>Uganda Martyrs University</strong>.  The project, "<a className='text-blue-600'>The Awareness and Impact of International Accounting Education Standards</a>," will address the extent
                   of impact of the IESs on university and professional association educational programs for accountants.  It will further study the comparative advantage of various organizations in delivering IES-compliant accounting education and the possibilities for cooperation and coordination of accounting
                    education among various organizations.
                </p>

            </div>
          </div>
        )}

        {activeTab === "Round 2" && (
          <div className="space-y-8">
            {/* Round 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className='text-xl font-bold'>IAAER/ACCA Awards Grants for Research to Inform the International Accounting Education Standards Board (IAESB)</p>
            <ul className='list-disc list-inside'>
                    <li><a className='text-blue-500'>Original Call for Proposals</a></li>
            </ul>
            <br></br>
            <p>The International Association for Accounting Education and Research (IAAER), with funding from ACCA, 
              has awarded grants to three teams researching issues of importance to the International Accounting Education 
              Standards Board (IAESB).  These projects were selected from those submitted following a call for proposals in 2010.  
              The selected research projects and researchers are:</p>
            <br></br>
            <p><a className='text-blue-600'>Developing a Global Model of Accounting Education and Examining IES Compliance in Australia, Japan, and Sri Lanka</a></p>
            <p>Kim Watty, Deakin University, Australia,  Principal Investigtor, Satoshi Sugahara, Hiroshima Shudo University, Japan, and Mr Luckmika Perera, Deakin University,
               Australia.  This research will 1) identify the models of accounting education for each country, noting similarities and differences, 2) explore the levels of awareness
                of IESs by professional member bodies and higher education institutes, 3) identify the drivers of compliance and convergence and non-compliance and non-convergence in the three countries,
                  and 4) identify key factors that influence IESs adoption.
            </p>
            <br></br>
            <p><a className='text-blue-600'>A Framework of Best Practice of Continuing Professional Development for the Accounting Profession</a></p>
            <p>Paul de Lange, RMIT University, Australia, Beverley Jackling, Victoria University, Australia, Susan Ravenscroft, Iowa State University, USA,
               Themin Suwardy, Singapore Management University, Singapore, Ilias Basioudis, University of Aston, UK, and Abdel Halabi, University of the Witwatersrand,
                South Africa. This project will explore whether professionals with different organizational roles within the accounting profession differ in their perception
                 of the value added by CPD for accounting, examine differences in perceptions of accountant about the effectiveness of CPD associated with different experience levels
                  within organizations, and identify the perceptions of accountants regarding ways of improving the Profession Development Value (PDV) that assists individuals to develop
                   their skill base as lifelong learners
            </p>
            <br></br>
            <p><strong>Ontology-based e-Assessment for Accounting Education</strong><br></br>
            Patrick Carmichael, Principal Investigator, Kate Litherland, Tony Hall, and Lewis Gordon, all of Liverpool John Moores University, UK, and Maria Paz Prendes
             Espinosa, Maria del Mar Sanchez, and  Jesualdo Tomás Fernández Breis, all of University of Murcia, Spain.  This project explores the question “What is the potential
              for ontology-based semantic technologies for the summative and formative e-assessment of undergraduate learning in accounting?”  The research will identify suitable areas for applying
               ontology-based assessment in accounting, integrate student learning in accounting with the e-assessment system OeLE developed at the University of Murcia, develop a set of assessment
                activities involving extended student writing and relate these to the formal ontology developed by the project, deploy and evaluate the OeLE e-assessment system, and disseminate and share 
                the system with various audiences.
                <br></br>
                The research teams will present interim reports in June and November, 2011, and will deliver final reports in 2012. 
            </p>
            <br></br>
            <p className='font-bold'>Program Advisory Committee</p>
            <ul className='list-disc list-inside'>
              <li>Barry Cooper, ACCA Council Member and Chair of Research Committee, Professor, Deakin University</li>
              <li>Kazuo Hiramatsu, IAESB Member, Professor, Kwansei Gakuin University</li>
              <li>Kim Langfield-Smith, IAESB Member, Deputy Dean (Research), Monash University</li>
              <li>Anne Loft, IAAER VP Education, Professor, Lund University</li>
              <li>David McPeak, Technical Manager, IFAC</li>
              <li>Clare Minchington, ACCA Executive Director, Learning</li>
              <li>Adrian Pulham, Education and Training Director, CIPFA</li>
              <li>Caroline Oades, ACCA Head of Research</li>
              <li>Donna L. Street, IAAER Director of Research and Educational Activities, Professor, University of Dayton</li>
              <li>Gary L. Sundem, IAAER President, Professor Emeritus, University of Washington</li>
            </ul>
            </div>
          </div>
        )}


      </div>

    
    
  )
}

export default Iaesb
