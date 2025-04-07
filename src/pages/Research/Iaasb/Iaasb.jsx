
import React from 'react';
import { useState } from "react";
import Round2 from './Round2';

const Iaasb = () => {
    const [activeTab, setActiveTab] = useState("Round 1");
   
  return (
      <div>
      <h2 className='text-2xl font-bold'>Informing the IAESB</h2>
      <p>The third program, funded by ACCA, informs the International Accounting Education Standards Board (IAESB).  One round of projects is complete; topics addressed are Continuing Professional Development in the Asia-Pacific Region, Ethics Education and Training, Non-Technical Skills, and IES 2, 3, and 4 Compliance.<br></br>
      <br></br>
        To see both a summary of the research findings and copies of the full research reports click round 1 below. The second round of projects is in process; to see a summary to the topics being investigated click round 2.</p>
      <div className="flex space-x-1 rounded-xl bg-gray-200 p-1 mb-8 mt-6">
          {["Round 1", "Round 2", "Round 3"].map((tab) => (
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
                <p className='text-xl font-bold'>Key Research Into Global Audit Issues Is Announced (funded by ACCA)</p>
                <ul className='list-disc list-inside'>
                    <li><a className='text-blue-500 cursor-pointer'>Original Call for Proposals</a></li>
                    <li><a className='text-blue-500 cursor-pointer'>ACCA/IAAER/IAASB Grant Recipients Announcement</a></li>
                    <li><a className='text-blue-500 cursor-pointer'>International Symposium on Audit Research (ISAR), June 24-25, 2010: Singapore</a></li>
                    <li><a className='text-blue-500 cursor-pointer'>IFAC Press Release: IAASB Welcomes New Auditing Research Initiative</a></li>
                </ul>
                <br></br>
                <p><strong>Executive Summaries of Funded Projects</strong></p>
                <p><a className='text-blue-600 cursor-pointer'>International Consistency and Convergence in the Application
                   of International Auditing Standards: Evidence from Going Concern Modifications</a>
                </p>
                <p>Per Christen Trønnes, University of New South Wales</p>
                <p>Elizabeth Carson, University of New South Wales</p>
                <p>Roger Simnett, University of New South Wales</p>
                <br></br>
                <p><a className='text-blue-600 cursor-pointer'>The Implications of XBRL for the Financial Statement Audit</a></p>
                <p>Roger Debreceny, University of Hawaii at Manoa</p>
                <p>Stephanie Farewell,University of Arkansas at Little Rock</p>
                <p>Hans Verkruijsse, Tilburg University</p>
                <br></br>
                <p><a className='text-blue-600 cursor-pointer'>Use of Business Risk Audit Perspectives by non-Big 4 Audit Firms</a></p>
                <p>C. M. van Nieuw Amerongen, Northeastern University</p>
                <p>J. P.van Buuren, Nyenrode Business University</p>
                <p>A. Wright, Northeastern University</p>
                <p>C. Koch, University of Mannheim</p>
                <br></br>
                <ul className='list-disc list-inside'>
                  <li>Van Buuren, Joost, Koch, Christopher, Nieuw Amerongen, Niels van, and
                     Wright, Arnold. Use of Business Risk Audit Perspectives by non-Big 4
                      Audit Firms. Auditing: A Journal of Practice & Theory, Vol. 33, No. 3
                      , pp. 105-128, August 2014.</li>
                </ul>
                <br></br>
                <p>Abstract: This study investigates the role of business risk perspectives
                   in the audit of smaller and medium-sized entities (SMEs) by small and 
                   medium-sized audit practices (SMPs). The research is important, since
                    we have little knowledge of how SMPs utilize business risk factors, and 
                    there is a current debate about the need for proportionally applying auditing
                     standards, including standards on business risks, in the audit of SMEs. We conduct
                      38 interviews with Dutch and German auditors of both small and medium-sized
                       audit practices to capture a variety of different audit environments. 
                       We develop a model that considers a continuum of audit approaches ranging 
                       from a substantive-based audit approach to a full-scope business risk audit,
                        and observe a limited and heterogeneous application of business risk perspectives 
                        by SMP auditors. We find that client complexity, enforcement by audit supervisory
                         authorities, relative emphasis on book-tax alignment in different countries, and 
                         investments in audit technology are important factors explaining the use of business
                          risk perspectives. The findings imply a need to provide auditors with sufficient
                           flexibility to proportionally adjust their audit approaches in the application
                            of international audit standards under varying client and audit firm conditions.
                </p>
                <br></br>
                <p><strong>Programme Advisory Committee:</strong></p>
                <p><strong>IAASB</strong></p>
                <ul className='list-disc list-inside'>
                  <li>Arnold Schilder, Chair</li>
                  <li>Jon Grant, Member</li>
                  <li>Susan Jones, Member</li>
                  <li>Bill Kinney, Member</li>
                  <li>James Gunn, Technical Director</li>
                </ul>
                <br></br>
                <p><strong>IAAER</strong></p>
                <ul className='list-disc list-inside'>
                  <li>Martin Hoogendoorn, VP-Practice</li>
                  <li>Donna L. Street, President</li>
                </ul>  
                <br></br>
                <p><strong>ACCA</strong></p>
                <ul className='list-disc list-inside'>  
                  <li>Barry Cooper, Council Member and Chair, ACCA Research Committee</li>
                  <li>Arnold Schilder, Chair</li>
                  <li>David York, Head of Auditing Practice</li>
                  <li>Caroline Oades, Head of Research</li>
                </ul>  
            </div>
          </div>
        )}

        {activeTab === "Round 2" && (
          <div className="space-y-8">
            {/* Round 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className='text-xl font-bold'>Informing the IAASB Standard Setting Process IAAER – KPMG Research Opportunities – Round 2</p>
            <ul className='list-disc list-inside'>
                    <li><a className='text-blue-500 cursor-pointer'>Call for proposals</a></li>
                    <li><a className='text-blue-500 cursor-pointer'>Grant recipients</a></li>
            </ul>
            <br></br>
            <p>The International Association for Accounting Education and Research
               (IAAER), in collaboration with the KPMG Foundation and KPMG International,
                is pleased to announce our Research Informing the IAASB Decision Process
                 grant recipients. Four research grants of $25,000 (U.S.) each
                  have been awarded for the following research projects:
            </p>
            <br></br>
            <Round2 />
              <br></br>
              <p>Funding for this program is provided by the KPMG Foundation and KPMG International. Funded projects will be
                showcased at two events in London involving representatives from the IAASB and renowned accounting researchers.
                For more information contact Donna Street at dstreet1@udayton.edu.
              </p>
            </div>
          </div>
        )}

        {activeTab === "Round 3" && (
          <div className="space-y-8">
            {/* Round 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className='text-blue-600 cursor-pointer'>ICAS & IAAER Call for Research to Inform the IAASB Standard Setting Process</p>
              <br></br>
              <p>The International Association for Accounting Education and Research (IAAER) and The Institute of 
                Chartered Accountants of Scotland (ICAS) are pleased to invite research proposals under the Informing
                 the IAASB Standard-Setting Process Program. The program supports research directed at informing the International
                  Auditing and Assurance Standards Board’s (IAASB) decision process in relation to future topics to be addressed. 
                  Funding for this program has been provided by The Institute of Charted Accountants of Scotland.
                  </p>
              <br></br>
              <p>The IAAER is delighted to announce a new global call for research to gather independent evidence
                 to inform the IAASB’s crucial standard setting process: <a className='text-blue-600 cursor-pointer'>IAAER Press Release</a>.
              </p>  
            </div>
          </div>
        )}


      </div>

    
    
  )
}

export default Iaasb
