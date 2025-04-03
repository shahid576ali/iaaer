import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Archive = () => {
  const Sidedata = [
    {
      title: "Gold Sponsors",
      url: "https://www.iaaer.org/pictures/W1siZiIsIjIwMTkvMDEvMDIvMDEvMTYvMTMvODUzMDYzN2YtOWY5Ni00ZjczLWE0MjctMTZiYzJmZDlhMjA5L2twbWcuanBnIl1d/kpmg.jpg.jpg?sha=cd3db3ee978f615e",
      link: "#",
    },
    {
      title: "Silver Sponsors",
      url: "https://www.iaaer.org/pictures/W1siZiIsIjIwMTkvMDEvMDIvMTMvMDUvNDcvN2U1OGYyNzUtNDUzNy00ZTk4LWIzMzktZTFkODIwNmQ1N2NkL2FjY2EuanBnIl1d/acca.jpg.jpg?sha=67ab91d2afb710b8",
      link: "#",
    },
    {
      title: "IAAER LinkedIn",
      url: "https://www.iaaer.org/pictures/W1siZiIsIjIwMjMvMDQvMTMvMTQvMDUvMDIvZGMxZTAzZDctMTdiZS00ODY2LWI3M2QtMGU0Mjk3Njk4NThhL0xpbmtlZEluIEltYWdlIGZvciBJQUFFUi5wbmciXV0/LinkedIn%20Image%20for%20IAAER.png.png?sha=514a22171653f14c",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Section: News */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-2/3 mx-auto p-4">
        <div className="max-w-4xl border-t  mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Archived News</h2>
          <ul className="list-disc pl-5  space-y-3 text-gray-700">
            <li>
              <b>
                December 1-2, 2022: 14th IAAER World Congress of Accounting
                Educators and Researchers
              </b>{" "}
              <br />
              <p className="mt-4 mb-5 ">
                The 14th IAAER World Congress of Accounting Educators and
                Researchers will take place in Paris, France, 1-2 December 2022,
                at the IÉSEG School of Management. Please{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  save the date{" "}
                </a>{" "}
                as we hope to see many of you in person at the World Congress at
                IÉSEG School of Management, Paris in December 2022. As soon as
                it is available, we will distribute the information relating to
                the paper submission process.
              </p>
              <br />
            </li>

            <li>
              <b>
                {" "}
                August 24, 2022: Digital Transformation & Innovation in Auditing{" "}
              </b>{" "}
              .
              <p className="mt-4">
                For information on the Call for Papers,{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  click here
                </a>
                .
              </p>
            </li>

            <li className="mt-4">
              <b>
                {" "}
                April 1, 2022: CIMA Call for Papers on Sustainability and ESG
              </b>
              <p className="mt-4">
                CIMA has just launched their latest research call which is
                seeking to sponsor case study research within the sustainability
                and ESG space. Closing date for applications is 1 April 2022.
                <p className="mt-4">
                  For more information,{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    click here
                  </a>
                  .
                </p>
              </p>
            </li>

            <li className="mt-4">
              <b>
                {" "}
                March 30, 2022: Membership Applications for IAASB and IESBA
              </b>
              <p className="mt-4">
                The Public Interest Oversight Board Standard-Setting Boards
                Nominations Committee welcomes applications for membership of
                the International Auditing and Assurance Standards Board (IAASB)
                and of the International Ethics Standards Board (IESBA). Closing
                date: 30 March 2022.
                <p className="mt-4">
                  For more information,{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    click here
                  </a>
                  .
                </p>
              </p>
            </li>

            <li className="mt-4 mb-5">
              <b>
                {" "}
                May 31, 2022: International Sustainability Standards Board
                Webinar, featuring Alan Teixeira, Deloitte's Global Director of
                IFRS Research
              </b>

              <p className="mt-4">
                Find the event flyer attached{"  "}
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>
                .
              </p>
            </li>

            <li className="mt-4">
              <b> April 28, 2022: ISSB Webinar</b>

              <p className="mt-4">
                Click &nbsp;
                <a href="#" className="text-blue-500 hover:underline">
                  here{" "}
                </a>{" "}
                to access the recordings You can also access the webinar slides
                by clicking{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>
                .
              </p>
            </li>

            <li className="mt-4">
              <b>April 2022: First ACCA IAAER Scholars Programr</b>

              <p className="mt-4">
                This program aims to strengthen the accountancy profession by
                providing mentoring and other support for carefully selected
                accounting academics in emerging/transitional economies. The
                ACCA IAAER program will provide up to five Scholars with
                financial support to participate in IAAER-linked workshops and
                conferences. Applications are due 15 April 2022. Click here for
                more information.
              </p>
            </li>

            <li className="mt-4">
              <b>
                September 2021: IFRS Advisory Council met via videoconference
                meeting
              </b>

              <p className="mt-4">
                The agenda papers for the meeting and meeting recording are
                available at:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  https://www.ifrs.org/news-and-events/calendar/2021/september/ifrs-advisory-
                  council/{" "}
                </a>{" "}
                . Click{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  here{" "}
                </a>{" "}
                for more information.
              </p>
            </li>

            <li className="mt-4">
              <b>
                March 1, 2021: Call for academic research to inform the IASB's
                post-implementation reviews of IFRS standards
              </b>

              <p className="mt-4">
                he IFRS Foundation is calling for research proposals to help
                inform the International Accounting Standards Board’s planned
                post-implementation reviews of three Standards, focusing
                specifically on the quality of disclosures provided by companies
                applying IFRS 9 Financial Instruments, together with the
                disclosure requirements in IFRS 7 Financial Instruments:
                Disclosures, and on the disclosures required by IFRS 15 Revenue
                from Contracts with Customers.
                <br />
                <br />
                The deadline for submitting research proposals is 31 March 2021.
                <br />
                <br />
                More information available{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>{" "}
                .
              </p>
            </li>

            <li className="mt-4">
              <b>
                December 12, 2019: Professor Leslie Hodder appointed IAAER
                representative on the IFRS Advisory Council
              </b>

              <p className="mt-4">
                The Trustees of the IFRS Foundation, responsible for the
                oversight and governance of the IASB, have confirmed the
                appointment of Professor Leslie Hodder (Indiana University,
                Kelley School of Business, USA) to the IFRS Advisory Council.
                The appointments takes effect on January 1, 2020 and is for a
                three-year period.
                <br />
                <br />
                The Council advises the IFRS Foundation Trustees and the Board
                on strategic and technical matters. It consists of
                representatives from over 40 groups that are affected by and
                interested in international financial reporting, including
                academics, analysts, auditors, investors, preparers,
                professional accounting bodies, regulators and standard-setters.
                The Council membership is held by the organization concerned,
                and not its individual representative .
              </p>
            </li>

            <li className="mt-4">
              <b>
                June 25, 2019: IAAER Emerging Scholars Workshop in conjunction
                with IAAER SAAA Joint Conference in Pretoria/Johannesburg
              </b>

              <p className="mt-4">
                On 25 June 2019, IAAER facilitated an emerging scholars workshop
                at the University of Pretoria (South Africa). The workshop was
                held in advance of the Southern African Accounting Association
                (SAAA) Biennial International Conference.
                <br />
                <br />
                The workshop commenced with a presentation by faculty members,
                Profs. Leslie Hodder and Patrick Hopkins (Indiana University),
                on research design considerations to meaningfully address audit
                and financial reporting issues. A presentation by Prof.
                Katherine Schipper (Duke University and IAAER past president) on
                how to read an archival accounting study complemented the
                morning of the workshop. In the afternoon, twelve emerging
                scholars from South Africa presented their research and obtained
                feedback from the IAAER mentors, which also included Prof Donna
                Street (University of Dayton and IAAER Director Research &
                Educational Activities) and Dr. Sebastian Hoffmann (University
                of Edinburgh and IAAER Vice-President Communications).
              </p>
            </li>

            <li className="mt-4">
              <b>
                June 23, 2019: ACCA Early Career Workshop and AMIS IAAER 2019
                Joint Conference in Bucharest, Romania
              </b>

              <p className="mt-4">
                Since 2008 IAAER organizes annual paper development workshops
                for early career consortia on the days preceding the
                International Accounting and Management Information Systems
                (AMIS) conference in Bucharest, Romania. ACCA provides generous
                financial support for this workshop and supported 11 presenters
                and 10 other young researchers from Romania, Czech Republic,
                Poland and Turkey during this year’s workshop on June 3-4.
                Participants benefited from the presentations and feedback
                offered by 10 international mentors. The program included four
                panels and presentations on methodological issues, advice on how
                to conduct research and publish in international journals, and
                five sections where young scholars presented their research
                proposals and received individual feedback.
                <br />
                <br />
                Following the workshop, 130 participants from 16 countries,
                academics and practitioners alike, attended the joint AMIS IAAER
                conference, held on June 5-6 in Bucharest, Romania. The program
                included six panels and 17 parallel sessions with 55 papers
                presented. IAAER co-organized two major panels. “The audit of
                the future”, moderated by Holger Erchinger (KPMG and IAAER Board
                of Advisors) and featuring Prof. Keryn Chalmers (Swinburne
                University of Technology and IAAER President) as well as
                “Financial reporting in a two-GAAP world”, moderated by Prof.
                Katherine Schipper (Duke University and IAAER past president)
                stimulated vibrant discussions among the conference delegates.
              </p>
            </li>

            <li className="mt-4">
              <b>
                December 13, 2018: 13th IAAER World Congress of Accounting
                Educators and Researchers, Sydney 2018
              </b>

              <p className="mt-4">
                More than 200 accounting academics and practitioners attended
                the 13th IAAER World Congress hosted in Sydney from November
                8-10, 2018 by the University of Sydney Business School. Dr In-ki
                Joo, President of IFAC, and Mr Richard Howitt, CEO of the
                International Integrated Reporting Council, provided opening
                keynote addresses. The opening plenary session was followed by a
                full program of symposia, including contributions by members of
                IASB, IAASB, IAESB, IPSASB as well as leading practitioners and
                researchers, along with a large number of academic papers
                presented in concurrent sessions. A dinner cruise of Sydney
                harbor was enjoyed by many as one of the conference activities.
                The congress concluded with a gala dinner at the University of
                Sydney's historic McLaurin Hall. A full report on the World
                Congress will be available on the IAAER website soon.
              </p>
            </li>

            <li className="mt-4">
              <b>
                December 13, 2018: Plenary Address by Richard Howitt, Integrated
                Reporting
              </b>

              <p className="mt-4">
                Howitt's presentation can be found{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>{" "}
              </p>
            </li>

            <li className="mt-4">
              <b>
                November 14, 2018: IFAC Standard Setters Presentations IAAER
                2018 World Congress
              </b>

              <p className="mt-4">
                IFAC Standard Setters Presentations (IAASB & IESBA) from the
                2018 IAAER World Congress can be found
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>{" "}
              </p>
            </li>

            <li className="mt-4">
              <b>
                December 13, 2018: Plenary Address by Richard Howitt, Integrated
                Reporting
              </b>

              <p className="mt-4">
                Howitt's presentation can be found{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>{" "}
              </p>
            </li>

            <li className="mt-4">
              <b>
                November 14, 2018: IFAC Standard Setters Presentations IAAER
                2018 World Congress
              </b>

              <p className="mt-4">
                IFAC Standard Setters Presentations (IAASB & IESBA) from the
                2018 IAAER World Congress can be found
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>{" "}
              </p>
            </li>

            <li className="mt-4">
              <b>
                September 21, 2018: Nominees for IAAER Executive Committee Nov
                2018-2020
              </b>

              <p className="mt-4">
                Information surrounding the nominees for the IAAER executive
                committee can be found
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>{" "}
              </p>
            </li>

            <li className="mt-4">
              <b>
                August 28, 2018: IFAC Perspectives on the Way Forward for
                Strengthening the Oversight and Operations of the International
                Audit & Assurance and Ethics Standards Board
              </b>

              <p className="mt-4">
                The Monitoring Group (MG) has been reviewing the international
                standard setting process since early 2015. Following the
                November 2017 publication of the MG Consultation Paper outlining
                possible actions, a Summary of Feedback on the submissions
                collected and an independent analysis of that feedback (the
                Gibson Dunn report) commissioned by IFAC were issued and the MG
                held a series of roundtables. These analyses demonstrate that
                while there still are diverse views, there is agreement on a
                number of proposals and a timely resolution is needed. Against
                this backdrop, IFAC is pleased to share with you its
                “Perspectives on the Way Forward for Strengthening the Oversight
                and Operations of the International Audit & Assurance and Ethics
                Standards Boards”. The Way Forward identifies key areas of
                concern and proposes improvements to ensure the continued
                development of high quality international audit & assurance and
                ethics standards in the public interest. The paper notes the
                need to finalize the current review in a timely and responsible
                manner. Concluding this process will allow all parties to focus
                on implementation of improvements and on the continued
                development, adoption and implementation of high quality
                standards. We believe you will find this paper a constructive
                step forward in enhancing the standard setting process and that
                it is consistent with IFAC’s mission to serve the public
                interest by contributing to and promoting the development,
                adoption and implementation of high-quality, international
                standards. We encourage you to engage with your stakeholders on
                this topic as we all work to reach a timely and responsible
                resolution to these matters.
                <br />
                <br />
                More information can be found here.
              </p>
            </li>

            <li className="mt-4">
              <b>
                June 11-12, 2018: Central and Eastern European Emerging
                Accounting Scholars Research Workshop
              </b>

              <p className="mt-4">
                The International Association for Accounting Education and
                Research (IAAER) and Association of Chartered Certified
                Accountants (ACCA) have hosted their annual Central and Eastern
                European Emerging Accounting Scholars Research Workshop in
                Bucharest, Romania on June 11-12, 2018. The workshop was held in
                conjunction with the AMIS 2018 International Conference
                organized by the Bucharest University of Economic Studies,
                Romania, Faculty of Accounting and Management Information
                Systems. 20 young researchers from the Czech Republic, Estonia,
                Poland, Romania and Turkey presented a total of eleven research
                papers and proposals. The received detailed feedback and advice
                from eight international, accomplished accounting academics from
                the United States, the United Kingdom, Switzerland, France,
                Germany and Norway. The networking events, supported by the
                local ACCA office in Bucharest, have allowed participants to
                interact with each other as well as with the international
                mentors enabling them to build research networks within and
                outside of Europe. A similar workshop is expected to be held in
                June 2019. Visit www.iaaer.org regularly for updates and
                registration information.
              </p>
            </li>

            <li className="mt-4">
              <b>
                December 6, 2017: Supporting Accounting Scholars in Africa:
                IAAER in South Africa
              </b>

              <p className="mt-4">
                From June 28-30 2017, the IAAER co-hosted a conference with the
                Southern African Accounting Association (SAAA) and the African
                Accounting and Finance Association (AAFA) at the Champagne
                Sports Resort, Drakensberg, South Africa. The theme of the
                conference was The Quest for Relevance in a Changing World. An
                overwhelming 130 papers were submitted for the conference and
                about 400 delegates attended the conference. <br /> <br />
                An IAAER paper development workshop sponsored by CIMA, the KPMG
                Foundation and KPMG South Africa preceded the main conference.
                Six African scholars presented at the workshop, while an
                additional three scholars received feedback via Skype. Four
                additional Scholars attended the workshop as observers. Workshop
                faculty included Professors Katherine Schipper, Alfred
                Wagenhofer, Elizabeth Gordon, Elmar Venter and Donna Street.
                CIMA awarded a 200 GBP best paper award for the workshop to Ms
                Corlia Joynt from the University of Pretoria. Mr Erik Outa of
                Kenya received the IAAER ‘paper with the best potential to make
                an impact’ award to attend Annual Accounting Conference
                “Accounting Research: Diversity within Unity” to be held in
                Berlin during February 2018.
              </p>
            </li>

            <li className="mt-4">
              <b>
                December 4, 2017: Strengthening the CEE Network: IAAER in Cracow
              </b>

              <p className="mt-4">
                From September 26-27 2017 IAAER co-organized the International
                Conference "Financial Reporting and Auditing: Challenges and
                Opportunities for Accounting Researchers and Educators" with the
                Department of Financial Accounting of the Cracow University of
                Economics. More than 120 participants from over 20 different
                countries and representing more than 30 different academic
                institutions and professional accounting organizations were able
                to present about 50 research papers. The conference opening
                keynote speaker was Professor Katherine Schipper and the closing
                plenary featured Professors Leslie Hodder and Patrick Hopkins.
                The conference was preceded by an IAAER paper development
                workshop under the sponsorship of CIMA. Eleven young scholars
                from Central and Eastern Europe had an opportunity to discuss
                their research their experienced mentors Professors Keryn
                Chalmers, Andrei Filip, Sidney Grey, Leslie Hodder, Sebastian
                Hoffmann, Patrick Hopkins, Katherine Schipper, Donna Street and
                Elmar Venter. All workshop participants appreciated this
                opportunity and the valuable feedback they received for their
                future research. The opening workshop session was attended by
                over 50 accounting academics from the CEE regional and featured
                Professors Patrick Hopkins and Leslie Hodder.
              </p>
            </li>

            <li className="mt-4">
              <b>
                September 5, 2017:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Institute of Management Accountants - IMA Educational Case
                  Journal (IECJ)
                </a>
              </b>

              <p className="mt-4">
                The{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  Institute of Management Accountants (IMA®)
                </a>{" "}
                is pleased to announce that as of July 1, 2017,{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  IMA Educational Case Journal (IECJ ®)
                </a>{" "}
                has two new associate editors, Jason Porter and Leif Sjöblom.{" "}
                <br /> <br />
                IMA also calls for submissions to its IECJ® Fall Ethics Case
                Writing Competition: Cases must be based on real companies or
                events and relate to an ethical situation. Cases submitted to
                the competition will concurrently be reviewed for publication in
                IECJ. Submission deadline is October 15, 2017. For details click
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  here
                </a>{" "}
                .
              </p>
            </li>

            <li className="mt-4">
              <b>
                September 5, 2017:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  IAAER and ACCA Early Career Researchers Workshop in Bucharest:
                  continued funding for 2018-2020 provided by ACCA Global
                </a>
              </b>

              <p className="mt-4">
                Immediately preceding the AMIS 2017 conference in Bucharest
                (Romania), the Association of Chartered Certified Accountants
                (ACCA) and the IAAER co-organized another edition of the
                Emerging Accounting Scholars Research Workshop. On June 6,
                internationally recognized scholars led sessions designed to
                increase participants’ research skills (for example,
                discussing/reviewing a research paper, basic research designs).
                On June 7, ten research proposals authored or co-authored by
                emerging scholars were presented, and guidance was provided on
                ways to increase the quality of the research and publication
                potential of these proposals. Additionally, feedback was
                provided on the proposals before the workshop presentation. All
                18 international workshop presenting and non-presenting authors
                (representing eight universities) truly thank the mentors who
                continue to volunteer their time for the support of their
                academic careers. The workshop was coordinated by Catalin Albu
                and Nadia Albu both of Bucharest University of Economic Studies
                and Donna Street of the University of Dayton.
                <br />
                <br />
                Following the success of these workshops in recent years, IAAER
                gratefully acknowledges ACCA’s commitment to continue funding
                the workshops for the next three years, 2018-2020.
              </p>
            </li>

            <li className="mt-4">
              <b>
                May 27, 2017:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  Call for Literature Review: IFRS 13 Post Implementation Review
                </a>
              </b>

              <p className="mt-4">
                The call for research seeks applications to undertake a
                literature review, bringing together the existing academic
                literature on the effect of implementation of IFRS 13 Fair Value
                Measurement. Submission deadline is 20 June 2017.
              </p>
            </li>

            <li className="mt-4">
              <b>
                July 25, 2017:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  Nominees for IAAER Executive Committee Nov 2018-2020
                </a>
              </b>

              <p className="mt-4">
                The Accounting Section of the German Academic Association for
                Business Research (AS-VHB) together with IAAER organize a joint
                conference on “Accounting Research: Unity within Diversity” on
                26-27 February 2018. It is hosted by ESMT Berlin. Submission
                deadline for papers is 30 September 2017.
              </p>
            </li>

            <li className="mt-4">
              <b>
                March 28, 2017:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  Call for Papers: IMA Educational Case Journal (IECJ)
                </a>
              </b>

              <p className="mt-4">
                IECJ invites submissions of short cases in any area of
                management accounting. Those reflecting "real-world" situations
                are strongly preferred. Submission deadline is 30 June 2017.
              </p>
            </li>

            <li className="mt-4">
              <b>
                March 28, 2017:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  CIMA launches 2017 Seedcorn Research Funding Initiative
                </a>
              </b>

              <p className="mt-4">
                CIMA is committed to developing tomorrow’s world class
                management accounting researchers. It recognizes that it can be
                difficult for less experienced researchers to obtain funding
                through traditional channels and that it can be hard to fully
                evaluate the merits and feasibility of a research idea, without
                first undertaking preliminary investigations. With these issues
                in mind, CIMA is inviting submissions from both academic and
                practitioner research proposals to its seed-corn funding
                program.
                <br />
                <br />
                Funding of up to £7,500 is being offered for projects which
                explore issues in the field of management accounting of interest
                to practitioners, conducted by:
                <br />
                <br />
                <li>
                  Early career researchers – including those who have experience
                  as a research assistant; have not been awarded a funding award
                  previously; are pursuing a research degree, PhD (please note
                  CIMA does not directly fund PhD’s) or have not previously
                  acted as a principal researcher.
                </li>
                <li>
                  Experienced researchers looking to undertake feasibility
                  studies.
                </li>
                <br />
                <br />
                CIMA is particularly keen to fund projects on innovative or
                "fire starter" topics that address the latest thinking in
                Management Accounting. Projects will typically last no longer
                than 12 months and researchers are required to produce a 3,000
                word practitioner report about their project.
                <br />
                <br />
                The closing date for applications is Friday 16 June 2017.
                <br />
                <br />
                More information, including application forms, can be obtained
                at
                http://www.cimaglobal.com/Research--Insight/Research-Funding/Research-intiatives
                or by emailing research@cimaglobal.com.
              </p>
            </li>

            <li className="mt-4">
              October 31, 2016:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                {" "}
                2016 Report IAAER Nominations Committee - Voting will open
                December 1 and close December 10
              </a>
            </li>

            <li className="mt-4">
              October 31, 2016:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                {" "}
                &nbsp; Teaching European Public Sector Accounting at
                Universities: ERASMUS + Strategic partnership of five European
                universities started
              </a>
            </li>

            <li className="mt-4">
              <b>October 12, 2016: IASB IFRS Workshop for Academics</b>
              <br />
              <br />
              In May 2017, IASB technical staff will hold a one day event in
              London for those teaching IFRS Standards.
              <br />
              <br />
              <p className="mt-4">
                The event provides a forum for those teaching IFRS Standards to:
                <br />
                <br />
                <li>
                  discuss the development of new and amended IFRS Standards
                  (especially on those IFRS Standards that have been issued but
                  that are not yet effective) with the IASB technical staff;
                </li>
                <li>
                  discuss the development of recent interpretations and
                  amendments to IFRS Standards resulting from the annual
                  improvements project with the IFRS Interpretations Committee
                  technical staff;
                </li>
                <li>
                  be updated by senior IASB technical staff on the main
                  principles being considered in developing major new IFRS
                  Standards that are on the IASB’s active agenda;
                </li>
                <li>
                  participate in a workshop on Framework-based IFRS teaching by
                  exploring case studies with the IASB Education Initiative
                  staff; and
                </li>
                <li>
                  provide feedback to the IASB on providing support to those
                  teaching IFRS Standards
                </li>
              </p>
              <p className="mt-3">
                Closing date for applications is November 25, 2016.
              </p>
            </li>

            <li className="mt-4">
              August 10, 2016:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                {" "}
                &nbsp; ACCA Calls For New ‘Future Looking’ Integrated Reporting
                Culture
              </a>
            </li>

            <li className="mt-4">
              <p className="mt-4">
                Two new research reports, jointly commissioned by the IIRC, the
                IAAER and ACCA, shed light on the progress made since the
                publication of the International IR Framework, and discuss the
                challenges that lie ahead as IR aims to become the reporting
                norm.
              </p>
            </li>

            <li className="mt-4">
              August 1, 2016: &nbsp; Call for Nominations for IAAER Executive
              Committee
            </li>

            <li className="mt-4">
              <p className="mt-4">
                The current two-year term for each member of the IAAER Executive
                Committee ends November 2016. The Nominations Committee invites
                you to submit one or more nominations. Please see the link below
                for more information.
              </p>

              <li className="mt-4">
                <a href="#" className="text-blue-500 hover:underline">
                  Call for Nominations
                </a>
              </li>
            </li>

            <li className="mt-4">
              Feburary 15, 2016: &nbsp; CIMA Launches new Topic Specific Funding
            </li>

            <li className="mt-4">
              The Chartered Institute of Management Accountants has launched a
              new Topic Specific Funding Initiative. Funding is available from
              £5,000 to £40,000 and is being offered for projects which explore
              issues in the field of management accounting within one of the
              three following topics: Stewartship & Trust, Costing, and
              Analytics.
            </li>

            <li className="mt-4">
              More information can be found in the following flyers:
              <li className="mt-4">Stewardship and Trust Scoping</li>
              <li className="mt-4">Costing Scoping</li>
              <li className="mt-4"> Analytics Scoping</li>
            </li>

            <p className="mt-5">
              The closing date for applications is August 31, 2016.
            </p>

            <li className="mt-4">
              December 22, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 27 No. 1
              </a>
            </li>

            <li className="mt-4">
              November 26, 2015: &nbsp;{" "}
              <a href="#" className="text-blue-500 hover:underline">
                IFRS Education Initiative releases CPD training materials for
                IFRS 9 and IFRS 15
              </a>
              <p className="mt-4">
                To support those providing continuing professional development
                (CPD)—sometimes called continuing professional education
                (CPE)—to others on recently issued IFRS Standards, IFRS is
                pleased to release new training materials for IFRS 9 Financial
                Instruments and IFRS 15 Revenue from Contracts with Customers.
              </p>
            </li>

            <li className="mt-4">
              November 25, 2015: &nbsp; CIMA LAUNCHES NEW RESEARCH FUNDING
              INITIATIVE
              <p className="mt-4">
                CIMA is committed to developing tomorrow’s world class
                management accounting researchers. It recognizes that it can be
                difficult for less experienced researchers to obtain funding
                through traditional channels and that it can be hard to fully
                evaluate the merits and feasibility of a research idea, without
                first undertaking preliminary investigations. With these issues
                in mind, CIMA is inviting submissions from both academic and
                practitioner research proposals to its seedcorn funding
                programme.
              </p>
            </li>

            <p className="mt-3">
              Funding of up to £5,000 is being offered for projects which
              explore issues in the field of management accounting of interest
              to practitioners, conducted by
            </p>

            <li className="mt-4">
              Early career researchers – including those who have experience as
              a research assistant; have not been awarded a funding award
              previously; are pursuing a research degree, PhD* or have not
              previously acted as a principal researcher.
            </li>

            <li className="mt-4">
              Experienced researchers looking to undertake feasibility studies
            </li>

            <p className="mt-2">
              * please note CIMA does not directly fund PHD’s.
            </p>

            <p className="mt-2">
              CIMA is particularly keen to fund projects on innovative or "fire
              starter" topics that address the latest thinking in Management
              Accounting.Projects will typically last no longer than 12 months
              and researchers are required to produce a 3,000 word practitioner
              report about their project.
            </p>

            <p className="mt-3">
              The closing date for applications is Friday 1st April 2016.
            </p>

            <li className="mt-3">
              October 12, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Accounting in Europe: 1st Call for Papers
              </a>
            </li>

            <p className="mt-3">
              The Accounting in Europe publication is having a call for papers
              regarding a special issue on Corporate Reporting in Central and
              Eastern Europe. They invite papers that investigate the impact of
              changes in regulation, corporate governance mechanisms,
              enforcement difficulties and institutional reforms on the
              reporting practices of companies in Central and Eastern European
              countries. Feedback for the papers considered for the special
              issue will be provided in a panel section organised in conjunction
              with the Accounting and Management Information Systems (AMIS).
            </p>

            <p className="mt-5">Paper Submission Deadline: March 1, 2016</p>

            <li className="mt-4">
              September 14, 2015: &nbsp; Framework-based IFRS approach
            </li>

            <p className="mt-3">
              These slides presented at an IFRS Plenary Workshop during the
              African Accounting and Finance Association (AAFA) Conference
              covers a wide range of topics such as: Framework-based IFRS
              approaches, fair value and other measurement issues, and root
              causes of financial reporting anomalies.
            </p>

            <li className="mt-4">
              August 26, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                What kind of accounting standards should the IASB write?{" "}
              </a>
            </li>

            <p className="mt-3">
              This paper focuses on a long-standing challenge for standard
              setters: what kind of standards should they write? How specific
              and prescriptive should standards be? How should cost
              considerations influence requirements? How should standard setters
              balance comparability with effective communication of an entity’s
              strategy and business model? What are reasonable expectations for
              the use of judgement? And what is the interaction of the types of
              standards with the training – both skills and subject matter
              knowledge – of accountants? These issues are explored using
              examples from recent IASB standard setting, primarily the IASB’s
              new revenue standard. The author concludes that there is no single
              answer.
            </p>

            <li className="mt-3">
              April 20, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                The Effects of Mandatory IFRS Adoption in the EU: A Review of
                Empirical Research
              </a>
            </li>

            <p className="mt-3">
              This research by the Institute of Chartered Accountants in England
              and Wales (ICAEW) reviews the empirical research evidence on the
              effects of mandatory IFRS adoption in the EU. The review finds
              that there is evidence of benefits following IFRS adoption in
              relation to financial reporting transparency and comparability,
              the cost of capital, market liquidity, corporate investment
              efficiency and cross-border capital flows. However, the evidence
              on some of these matters is disputed and it is unclear how far the
              benefits identified are attributable to the adoption of IFRS or to
              other concurrent institutional changes. The paper also considers
              the problems of interpreting the research and drawing conclusions
              from it for policy making purposes.
            </p>

            <li className="mt-3">
              March 23, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                ICAS & IAAER Call for Research to Inform the IAASB Standard
                Setting Process
              </a>
              <p className="mt-3">
                The International Association for Accounting Education and
                Research (IAAER) and The Institute of Chartered Accountants of
                Scotland (ICAS) are pleased to invite research proposals under
                the Informing the IAASB Standard-Setting Process Program. The
                program supports research directed at informing the
                International Auditing and Assurance Standards Board’s (IAASB)
                decision process in relation to future topics to be addressed.{" "}
                <br />
                <br />
                The IAAER is delighted to announce a new global call for
                research to gather independent evidence to inform the IAASB’s
                crucial standard setting process:{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  {" "}
                  IAAER Press Release{" "}
                </a>{" "}
                .
              </p>
            </li>

            <li className="mt-3">
              March 3, 2015: &nbsp;Academic Fellow in IASB's Education
              Initiative.
            </li>

            <p className="mt-2">
              The IFRS Foundation recently advertised the position of Academic
              Fellow in the IASB's Education Initiative. The IFRS Foundation’s
              Education Initiative reinforces the IFRS Foundation’s goal of
              promoting the adoption and consistent application of a single set
              of high quality international accounting standards. The position
              is a 1 year term appointment commencing July 2016 to be filled
              continuously by IFRS Academics on sabbatical leave from
              universities. Exceptional candidates may also be considered to
              fill the post for a period of 6 months.
            </p>

            <li className="mt-4">
              February 25, 2015: &nbsp;{" "}
              <a href="#" className="text-blue-500 hover:underline">
                KPMG sponsored Informing the IASB Round 5 Grant Recipients
              </a>{" "}
            </li>

            <p className="mt-3">
              The International Association for Accounting Education and
              Research (IAAER), KPMG LLP and the KPMG Foundation are pleased to
              invite research proposals under the Informing the IASB Standard
              Setting Process Research Program. The program supports scholarly
              research directed at informing the IASB’s decision process on any
              current agenda item. Up to four research grants will be awarded
              under this program. Funded projects will be showcased at three
              events hosted by the IASB in London. Funding for the program has
              been provided by KPMG LLP and the KPMG Foundation.
            </p>

            <li className="mt-4">
              January 20, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                JIFMA Call for Papers on International Integrated Reporting
              </a>
            </li>

            <p className="mt-3">
              JIFMA, the official research journal of the International
              Association for Accounting and Education Research (IAAER),
              announces a call for papers on “International Integrated
              Reporting” to be published in 2016. Papers submitted and accepted
              for presentation in concurrent sessions on ”International
              Integrated Reporting” at the annual conference of the Southern
              African Accounting Association held jointly with IAAER in June
              2015 will be considered for the special issue and will be
              fast-tracked for JIFMA review.{" "}
            </p>

            <li className="mt-3">
              January 16, 2015: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Deloitte IAAER Scholarship Program Podcast Reflections
              </a>
            </li>
            <p className="mt-3">
              In today’s increasingly global economy, the task of preparing the
              next generation of accounting professionals is more challenging
              than ever. Educators need to provide the link between local and
              global developments to help their students excel. To further those
              efforts, Deloitte, in conjunction with the International
              Association for Accounting Education and Research (IAAER) launched
              the Deloitte IAAER Scholarship Program. Now approaching its third
              year, the program supports promising educators in five emerging
              regions.
            </p>

            <li className="mt-4">
              December 5, 2014: Deloitte IAAER Scholars Record Podcasts in
              Florence
            </li>

            <p className="mt-3">
              13-15 November 2014, the Deloitte IAAER scholars attended the 12th
              World Congress of Accounting Educators and Researchers, held in
              Florence, Italy. As part of their activities in Florence, the
              scholars recorded two parallel podcasts organized through Deloitte
              Global Insights, as a way to share their insights on the demands
              for developing accounting professionals, developing an
              accounting-curriculum to meet these demands, and the challenges
              faced (particularly in emerging economies) – and how the Deloitte
              IAAER scholarship program is playing a role to help alleviate and
              overcome such obstacles.
            </p>

            <p className="mt-3">
              To learn more about the Deloitte IAAER scholarship program, click
              <a href="#" className="text-blue-500 hover:underline">
                here
              </a>
              .
            </p>

            <li className="mt-4">
              November 24, 2014 : &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Call for Proposals: IAAER & KPMG Research Opportunities Round 5
              </a>
            </li>

            <p className="mt-4">
              The International Association for Accounting Education and
              Research (IAAER), KPMG LLP and the KPMG Foundation are pleased to
              invite research proposals under the Informing the IASB Standard
              Setting Process Research Program. The program supports scholarly
              research directed at informing the IASB’s decision process on any
              current agenda item. Up to four research grants will be awarded
              under this program. Funded projects will be showcased at three
              events hosted by the IASB in London. Funding for the program has
              been provided by KPMG LLP and the KPMG Foundation.{" "}
            </p>

            <li className="mt-4">
              November 3, 2014: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                The Effects of Mandatory IFRS Adoption in the EU: A Review of
                Empirical Research
              </a>
            </li>

            <p className="mt-4">
              The Institute of Chartered Accountants (ICAEW) recently released a
              report in their Information for Better Markets series. The report
              finds that there is evidence of benefits following IFRS adoption
              in relation to financial reporting transparency and comparability,
              the cost of capital, market liquidity, corporate investment
              efficiency and cross-border capital flows. But the evidence on
              some of these matters is disputed and it is unclear how far the
              benefits identified are attributable to the adoption of IFRS or to
              other concurrent institutional changes, particularly in
              enforcement. What is clear is that the benefits found are uneven,
              varying with the institutions and incentives that apply for
              different companies in different countries.
            </p>

            <li className="mt-4">
              September 26, 2014: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Nominations for IAAER Executive Committee Positions
              </a>
            </li>

            <p className="mt-3">
              The Nominating Committee, consisting of Holger Erchinger, Sid
              Gray, Lana Hanner, Chika Saka and Gary Sundem, are pleased to
              present nominations for positions on the IAAER Executive
              Committee. The election will take place at the IAAER business
              meeting at the World Congress in Florence, Italy, 13-15 November.
            </p>

            <li className="mt-3">
              August 19, 2014:
              <a href="#" className="text-blue-500 hover:underline">
                Preparing Today's and Tomorrow's Educators and Researchers in
                Emerging Economies
              </a>
            </li>

            <p>
              The International Federation of Accountants (IFAC) has posted to
              its website an article by Professor Katherine Schipper and
              Professor Donna Street challenging other firms to follow the
              example set by Deloitte and the IAAER in establishing the Deloitte
              IAAER Scholarship Programme.{" "}
            </p>

            <li className="mt-3">
              June 20, 2014: IFRS Foundation Education Initiative Seeks Project
              Manager
            </li>

            <p className="mt-4">
              The IFRS Foundation’s Education Initiative reinforces the
              Foundation’s goal of promoting the adoption and consistent
              application of IFRSs by improving the global understanding of
              IFRSs. They are looking for a Project Manager to join the
              Education Initiative to work on a broad range of initiatives that
              will support both the global understanding of IFRSs and the
              reputation of IFRSs and the IFRS for SMEs. Applications are due by
              July 16, 2014.
            </p>

            <li className="mt-3">
              May 14, 2014: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                COSMOS Vol. 26 No. 1
              </a>
            </li>

            <li className="mt-3">
              May 9, 2014: Call for Nominations for Executive Committee
            </li>

            <p className="mt-3">
              The current two-year term of each member of the IAAER Executive
              Committee ends in November. The Nominating Committee invites
              nominations for the following positions:
              <ul>
                <li>1. President</li>
                <li>2. Vice-President, Finance and Administration</li>
                <li>3. Vice-President, Education</li>
                <li>4. Vice-President, Research</li>
                <li>5. Vice-President, Conferences</li>
                <li>6. Vice-President, Practice</li>
                <li>7. Vice-President, Membership</li>
                <li>8. Vice-President, Communications</li>
              </ul>
            </p>

            <p className="mt-3">
              Executive Committee members are allowed to serve no more than two
              terms in any one position, so members in their first term may be
              re-nominated.
            </p>

            <p className="mt-2">
              The Nominating Committee also seeks nominations for the Founders
              Award, which is given to an individual who has provided
              distinguished service to IAAER but who is not currently a member
              of the Executive Committee.
            </p>

            <p className="mt-4">
              Each nomination should include a brief description of why you
              support the nomination. All nominations should be sent to Gary
              Sundem (glsundem@uw.edu). Please indicate the position(s) for
              which a person is nominated. Nominations are due by May 30, 2014.
            </p>

            <p className="mt-2">
              April 4, 2014: Deloitte IAAER Scholarship Programme
            </p>
            <p className="mt-3">
              In February 2013, Deloitte (DTTL) and the International
              Association for Accounting Education and Research (IAAER) launched
              the Deloitte IAAER Scholarship Programaiming at supporting better
              accounting education and improving the quality of financial
              reporting and auditing. One year into the programme, the scholars
              have had the chance to present their work at international
              conferences, have published papers in high quality journals and
              have become links between academe, standard-setting and industry.
            </p>

            <a href="#" className="text-blue-500 hover:underline">
              Deliotte IAAER Scholars
            </a>
            <br />
            <br />
            <a href="#" className="text-blue-500 hover:underline">
              Looking into the Future: Young Scholars Awarded Global Opportunity
            </a>
            <br />
            <br />
            <a href="#" className="text-blue-500 hover:underline">
              Deloitte & IAAER Announce Inaugural Scholarship Program
            </a>

            <li className="mt-3">
              January 16, 2014: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                4th African Accounting and Finance Association Conference
              </a>
            </li>

            <p className="mt-3">
              The African Accounting and Finance Association, in collaboration
              with The School for Organisation and Resource Management, Faculty
              of Military Science of Stellenbosch University and the IAAER is
              pleased to present the 4th African Accounting and Finance
              Conference (AAFA 2014) at the Lord Charles Hotel, Somerset West,
              Western Cape from 3 – 4 September 2014. Featured speakers include
              Katherine Schipper IAAER VP Research, Keryn Chalmers IAAER VP
              Education and Donna Street IAAER Director of Research and
              Educational Activities. Academic articles are welcome from
              academics and practitioners on a broad range of topics; e.g.
              auditing, ethics, financial management and corporate social
              responsibility.
              <p className="font-bold mt-3">Key dates: </p>
              <p className="m-3">
                Deadline for submission of papers: 31 May 2014{" "}
              </p>
              <p className="mt-3">
                Notification about acceptance or rejection: 30 June 2014{" "}
              </p>
              <p className="mt-2">
                {" "}
                Deadline for registration of authors: 31 July 2014
              </p>
              <p className="mt-2">
                The African Accounting and Finance Association aims to provide a
                platform for academics and practitioners to debate the role of
                accounting, finance, auditing, corporate governance and other
                related fields in Africa. The AAFA seeks to bring together
                academics, graduate students and practitioners from the
                continent and beyond to network with peers and establish
                business contacts while sharing information, experiences and
                challenges. Previous conferences have been hosted in Ghana
                (2011), Nigeria (2012) and Uganda (2013), attended by delegates
                across Africa and other parts of the world. The expected number
                of delegates from South Africa, Africa and other countries is
                250 – 300
              </p>
            </p>

            <li className="mt-3">
              May 13, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                COSMOS Vol 25 No. 2
              </a>
            </li>

            <li className="mt-3">
              December 4, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                12th World Congress of Accounting Educators and Researchers Call
                for Proposals Due March 1, 2014
              </a>
            </li>

            <p className="mt-2">
              The Conference is a three day event comprising plenary sessions
              and concurrent paper sessions which include refereed paper
              presentations, panel sessions, and a paper forum.
            </p>
            <p className="mt-2">
              We welcome papers and panels in the following topic areas:
            </p>

            <p className="mt-2"> Financial Accounting </p>
            <p className="mt-2"> Information Systems and Computer Auditing </p>
            <p className="mt-2"> Auditing and Internal Auditing </p>
            <p className="mt-2"> Ethics in Accounting Education </p>
            <p className="mt-2"> Financial Management </p>
            <p className="mt-2"> Corporate Governance </p>
            <p className="mt-2"> Taxation </p>
            <p className="mt-2"> Accounting History</p>
            <p className="mt-2"> Performance Measurement </p>
            <p className="mt-2"> Public Sector and Nonprofit Accounting </p>
            <p className="mt-2"> Management Accounting </p>
            <p className="mt-2"> Sustainability Accounting</p>
            <p className="mt-2"> International Accounting </p>
            <p className="mt-2"> Accounting Education and Training </p>
            <p className="mt-2"> Integrated Reporting </p>
            <p className="mt-2">
              {" "}
              Intangibles and Intellectual Capital Reporting{" "}
            </p>

            <li className="mt-3">
              September 18, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Meditari Accountancy Research Conference 2014 June 26 - 27
              </a>
              <p className="mt-2">
                This conference alternates with the SAAA Biennial Conference and
                is held every second year. The conference aims to maximise the
                learning and feedback opportunities for the whole spectrum of
                researchers, from early-career to experienced academics. The
                conference will specifically focus on getting papers ready for
                submission to a refereed journal and maximising papers’ chances
                of being accepted for publication. On the first day of the
                conference, the five best papers submitted to the conference (as
                adjudged by the editorial team) will be presented in a plenary
                session (i.e. all conference attendees together) with ample time
                for each paper to be presented and for discussion and
                suggestions for improvement. Attendees will be able to learn
                from these extended presentations and discussions. The second
                day of the conference will consist of parallel presentations of
                most of the other papers submitted to ensure that attendees get
                the opportunity to present and obtain feedback on their own
                research. The five papers presented on the first day of the
                conference will be published (subject to satisfactory revisions)
                in a special issue of the journal to be published early in 2015.
                The other papers presented at the conference will be subject to,
                and may progress towards publication in, the journal’s normal
                refereeing process.
              </p>
            </li>

            <li className="mt-3">
              August 5, 2013:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                KPMG sponsored Informing the IAASB Round 2 Grant Recipients
              </a>
            </li>

            <p className="mt-3">
              The International Association for Accounting Education and
              Research (IAAER), KPMG International and the KPMG Foundation are
              pleased to invite research proposals under the Informing the IAASB
              Standard Setting Process Research Program. The program supports
              scholarly research directed at informing the International
              Auditing and Assurance Standards Board’s (IAASB) decision process.
              Up to five research grants will be awarded under this program.
              Funding for this program has been provided by KPMG International
              and the KPMG Foundation.
              <br />
              <br />
              <a href="#" className="text-blue-500">
                Informing the IAASB Round 2 Webpage
              </a>
            </p>

            <li className="mt-3">
              July 16, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                COSMOS Volume 25 No 1
              </a>
            </li>

            <li className="mt-3">
              July 17, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Joint AAA International Section and IAAER Conference February
                20-22, 2014
              </a>
            </li>

            <p className="mt-2">
              The 20th Annual Midyear Conference and 10th Annual Doctoral/New
              Faculty Consortium of the International Accounting Section of the
              American Accounting Association will be held in San Antonio, Texas
              at the Westin Riverwalk during February 20–22, 2014. The meeting
              will be co-chaired by Francesco Bova (University of Toronto), Lili
              Sun (University of North Texas) and Ya-wen Yang (Wake Forest
              University). The conference program will start Thursday, February
              20, with the doctoral student/new faculty consortium (coordinated
              by Bjorn Jorgensen, London School of Economics) and CPE workshop.
              The conference will continue with the plenary sessions, panels,
              concurrent sessions, poster sessions and other events through
              Saturday afternoon. There will be receptions on Thursday and
              Friday evenings
            </p>

            <li className="mt-3">
              May 1, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                12th World Congress of Accounting Educators and Researchers
                November 13-15, 2014
              </a>
            </li>

            <li className="mt-3">
              April 16, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Integrated Reporting business and investor led coalition
                releases new corporate reporting model for consultation
              </a>
            </li>

            <li className="mt-3">
              March 19, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IAASB Seeks Input on Strategic Review
              </a>
            </li>

            <p className="mt-3">
              The International Auditing and Assurance Standards Board (IAASB)
              today released an online survey seeking public comment, insights,
              and views from all stakeholders to help shape its future direction
              for 2015 and beyond. It is seeking the input of interested parties
              at this early stage to identify key issues for discussion.
              Responses to the survey will inform the development of a formal
              consultation paper on the IAASB’s Strategy and Work Program for
              the period commencing 2015. The consultation paper is scheduled to
              be issued in late 2013. For more information, click on this
              <a href="#" className="text-blue-500 hover:underline">
                link
              </a>
            </p>

            <li className="mt-3">
              March 18, 2013:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Call for Proposals from Emerging Scholars in Traditional
                Economies due March 31st
              </a>
            </li>

            <p className="mt-2">
              The International Association for Accounting Education and
              Research (IAAER) and Association of Chartered Certified
              Accountants (ACCA) will host a Paper Development Workshop in
              Bucharest, Romania on June 10 and 11 in conjunction with the AMIS
              2013 Conference that is being jointly sponsored by the Bucharest
              University of Economic Studies and IAAER. The objective of the
              workshop is to provide doctoral students, early career researchers
              and emerging scholars (hereafter collectively referred to as
              emerging scholars) from transitional economies with feedback on
              their research prior to the resulting paper being submitted to a
              quality journal. Representatives of the ACCA and IAAER will select
              the research projects to be featured during the workshop and will
              attend the workshop to provide comprehensive feedback and guidance
              to the participants.
            </p>

            <li className="mt-3">
              March 15, 2013:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Integrated Reporting Framework Development
              </a>
            </li>

            <p className="mt-3">
              In accordance with the IIRC’s Due Process, technical agenda papers
              of the Working Group and the Council are being posted to the
              website in advance of meetings, and a recording of those meetings
              or a summary of discussions is being posted after the meeting. For
              more information on the Technical Agenda Papers please visit:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                http://www.theiirc.org/resources-2/framework-development/technical-agenda-papers/
              </a>
            </p>

            <li className="mt-3">
              March 8, 2013:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IMA Case Writing Competition - Call for Submissions Due May 31st
              </a>
            </li>

            <p className="mt-3">
              IMA® (Institute of Management Accountants) is soliciting
              submissions for a case writing competition. Cases in any area of
              management accounting or related fields are invited.{" "}
            </p>

            <li className="mt-3">
              February 18, 2013:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Deloitte & IAAER Inaugural Scholarship Program
              </a>
            </li>

            <p className="mt-2">
              Deloitte (DTTL) and the International Association for Accounting
              Education & Research (IAAER) have launched the Deloitte IAAER
              Scholarship Program. This program aims to bring a broader
              perspective to local accounting education by providing the link
              between “local” and “global” accounting developments. This
              reflects the global progression of the profession and business in
              general, and in the long term will help raise the quality of
              accounting, auditing and financial reporting in markets around the
              world.
            </p>

            <p className="mt-3">
              The Deloitte IAAER scholars include: For photo, click here
            </p>

            <li className="mt-3">
              Nadia Albu, Associate Professor, Department of Accounting,
              Auditing and Business Analysis, Bucharest University of Economic
              Studies (ASE), Romania
            </li>

            <li className="mt-3">
              Konrad Grabiński, Associate Professor, Department of Financial
              Accounting, Cracow University of Economics, Poland Fernando Dal-Ri
              Murcia, Associate Professor, Accounting and Actuarial Sciences
              Department, University of São Paulo, Brazil
            </li>
            <li className="mt-3">
              Supriyadi, Assistant Professor, Department of Accounting, Faculty
              of Economics and Business, Gadjah Mada University, Indonesia
            </li>

            <li className="mt-4">
              Elmar Retief Venter, Associate Professor, Department of Taxation,
              University of Pretoria, South Africa
            </li>

            <p className="mt-3 fs-6 text-muted ">
              For More information on the scholarship program, See the Inaugural
              Deloitte IAAER Scholars and the Deloitte & IAAER Announcement
              Inaugural Scholarship Program
            </p>

            <li className="mt-3">
              February 15, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                World Congress of Accountants Call for Papers Due May 31st
              </a>
            </li>

            <p className="mt-3">
              The Scientific Committee of the World Congress of Accountants 2014
              invites the submission of original research papers to be published
              on the occasion of the 19th World Congress, in order to stimulate
              and feed the debate around the theme of the Congress: “2020
              Vision: Learning from the Past, Building the Future”. The
              objective of this invitation is to share contributions of
              world-wide researchers and scholars on future trends of the
              accountancy profession, and to disseminate innovative ideas.
            </p>

            <li className="mt-3">
              February 8, 2013: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IFRS Foundation Publishes Free Teaching Material
              </a>
            </li>

            <p className="mt-3">
              The free-to-download teaching material is designed to assist IFRS
              teachers to educate IFRS learners more effectively. In particular,
              the material is designed to support those teaching IFRS, so that
              they can progressively develop in their students the ability to
              make the estimates and judgments that are necessary to apply IFRS
              and the IFRS for SMEs. The Framework-based teaching approach
              should also better prepare students to update their IFRS knowledge
              and competencies continuously in the context of life-long
              learning.
            </p>

            <li className="mt-3">
              January 15, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IAAER Officer Nominees
              </a>
            </li>

            <p className="mt-4">
              The charge of The IAAER Nominations Committee is to prepare a
              single slate of candidates for election as officers, to include
              the nominees for the Vice-Presidents at-Large who shall be
              provided from representatives of the Academic Accounting. The
              following slate has been approved by the IAAER Nominations
              Committee and shall be presented for approval at the general
              membership meeting held during IAAER’s joint conference Accounting
              Research: Diversity within Unity World Congress in Frankfurt,
              February 14-16, 2013. The general meeting will be held Thursday,
              Feb. 14, 18:00. A simple majority (50% plus one) at an officially
              convened general membership meeting is required to elect the
              officers.
            </p>

            <li className="mt-3">
              November 27, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Invitation to join the IAAER sponsored Conference: Diversity
                within Unity - February 14-16 in Frankfurt, Germany
              </a>
            </li>

            <li className="mt-3">
              November 26, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                COSMOS Article on IES Comments
              </a>
            </li>

            <p className="mt-3">
              The IAAER has appointed committees to respond to three exposure
              drafts of the International Accounting Education Standards Board
              (IAESB). Although these committee reports do not represent an
              official IAAER position, they have each been endorsed by several
              members of the IAAER Executive Committee. The reports have been
              submitted and are available on the IFAC Web site.
            </p>

            <li className="mt-3">
              November 16, 2012:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                COSMOS Vol. 24 No. 2
              </a>
            </li>

            <li className="mt-3">
              November 16, 2012:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IAAER/ACCA Early Career Researchers Seed Grant Recipients
              </a>
            </li>

            <p className="mt-3">
              As part of an initiative to support research teams in transitional
              economies in building their research skills capacity, the IAAER
              (the International Association for Accounting Education and
              Research) and ACCA (the Association of Chartered Certified
              Accountants) have awarded grants to five teams of early career
              accounting researchers, following an IAAER ACCA consortium held in
              conjunction with the SAAA (Southern African Accounting
              Association) June 2011 Conference.
            </p>

            <li className="mt-3">
              November 12, 2012:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IAAER Officer Nominations Due Dec 31st
              </a>
            </li>

            <p className="mt-3">
              Nominations are invited for the election of Officers of IAAER for
              the two-year period February 2013 to November 2014. Nominees are
              expected to be able to demonstrate their commitment to the
              promotion of excellence in accounting education and research on a
              worldwide basis and to the goal of maximizing the contribution of
              accounting academics to the development of high quality, globally
              recognized standards of accounting practice.
            </p>

            <li className="mt-3">
              October 15, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                JIFMA Call for Special Issue Proposals
              </a>
            </li>

            <p className="mt-3">
              JIFMA Special Issues are designed to focus attention on
              controversial topics, under-researched issues or newly emerging
              themes relating to the international aspects of accounting,
              finance and financial management.
            </p>

            <p className="mt-3">
              JIFMA aims to publish at least one Special Issue each year,
              commencing 2013. Proposals will be evaluated by the Co- Editors,
              Sid Gray and Richard Levich and they are now calling for proposals
              to be submitted not later than November 30, 2012.
            </p>

            <li className="mt-3">
              September 14, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                ICAS Research Funding Opportunity: SME funding
              </a>
              <p className="mt-2">
                It has been suggested that the global credit crisis has meant
                that small and medium sized enterprises’ (SMEs) access to
                finance has been significantly curtailed; this, in turn, may
                limit the potential for growth, employment and the business
                birth rate in the UK. ICAS is interested in sponsoring research
                which considers how barriers to SME finance can be reduced.
                Research proposals are invited to consider relevant issues
                around SME funding and growth.
                <p className="mt-3">
                  {" "}
                  For More Information visit the website:
                  <a href="#" className="text-blue-500 hover:underline">
                    http://icas.org.uk/callsforresearch/
                  </a>
                </p>
              </p>
            </li>

            <li className="mt-3">
              August 22, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IFRS in the US - Beta Alpha Psi Presentation
              </a>
            </li>
            <li className="mt-3">
              August 10, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                CIMA's Research Initiative Call for Proposals
              </a>
              <p className="mt-3">
                This year, CIMA is therefore looking to fund innovative research
                that challenges and offers fresh perspectives on a range of
                topics that are of interest to CIMA members. The research
                findings should be of value to both businesses and academic
                communities globally, and any case studies may be drawn from
                both the commercial and not-for-profit sectors.
              </p>
            </li>

            <li className="mt-3">
              August 8, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                ACCA-IMA Research Foundation: Special Joint Call for Research
                Proposals
              </a>
              <p className="mt-3">
                The IMA (Institute of Management Accountants) Research
                Foundation and the Association of Chartered Certified
                Accountants (ACCA) invite the academic and practitioner
                communities to participate in a joint call for research
                proposals. Up to US$100,000 will be awarded for research
                projects pertaining to the areas specified below. It is
                anticipated that four to five projects will be funded. The
                deadline for the submission of proposals is January 31, 2013.
                Earlier expressions of interest are encouraged.
              </p>
            </li>

            <li className="mt-3">
              August 2, 2012:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                ICAS Research Funding Opportunity - Tax Implications
              </a>
              <p className="mt-3">
                ICAS research funding opportunity: The tax implications of
                Scottish independence or further devolution
              </p>
              <p className="mt-3">
                As Scotland debates whether it should remain within the UK or
                seek independence, there is a need for further evidence in
                relation to the implications for how an independent or more
                devolved Scotland would legislate to tax its citizens. The
                Institute of Chartered Accountants of Scotland (ICAS), in its
                capacity as an apolitical professional body, seeks research
                projects which will consider the practical implications for
                Scotland under two scenarios, an independent tax regime under
                independence or more tax raising powers under devolution
              </p>
              <p className="mt-3">
                The project should draw upon how other ‘new’ countries have
                created new tax systems or modified existing ones and the
                insights, processes and learning points from federal systems.
                The final report should be written as a short accessible
                document of between 5,000 and 10,000 words and should identify
                the issues which the Scottish Government and public should
                consider and the practical implications of enhanced tax
                devolution. ICAS will use the report to inform public debate and
                the project will therefore be high profile.
              </p>
              <p className="mt-3">
                Funding in the region of £10,000 is available to undertake the
                research, which may be payable as a fee to an individual or a
                university. The project may be a literature review or may be
                supplemented by additional empirical work. If empirical work is
                undertaken, additional funding may be available. Applications
                are welcomed from researchers and institutions anywhere in the
                world. The deadline for expressions of interest is 14 September
                2012
              </p>
            </li>

            <li className="mt-3">
              July 15, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Recent Presentations at IAAER Events
              </a>
            </li>

            <li className="mt-3">
              June 21, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Call for Proposals for the IAAER, KPMG, and IASB Grant Program
                Round 2
              </a>
              <p className="mt-3">
                Submission Deadline: The proposal submission deadline for the
                Informing the IAASB Standard Setting Process Research Grant
                Program is October 1, 2012. Funding decisions will be announced
                as soon as the evaluation process is complete, but no later than
                November 30, 2012.
              </p>
            </li>

            <li className="mt-3">
              May 29, 2012:&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Job Posting - IFRS Academic Fellow: Education Initiative
              </a>
              Salary: £44,500 per annum + benefits
              <br />
              Location: London
              <br />
              Duration: two 12-month positions available
              <br />
              <li>
                . 2013 position: to start January 2013, for a duration of 12
                months; and
              </li>
              <li>
                2014 position: to start from January 2014, duration of 12 months
              </li>
            </li>

            <li className="mt-3">
              May 14, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Revisions to IAAER Constitution
              </a>
              <p className="mt-3">
                The IAAER Executive Committee has approved sending some proposed
                revisions to the IAAER constitution to the membership for
                approval. The proposed revisions will be discussed and voted on
                at the General Membership meeting on June 20, 2012, in
                Amsterdam. As required by the constitution, the proposed changes
                are being presented to the membership at least 30 days before
                the scheduled vote.
              </p>
              <p className="mt-3">
                A clean copy of the revised constitution follows this message. A
                copy with the changes highlighted is can be found by clicking on
                the link about or here.
              </p>
              <p className="mt-3">
                Some of the changes are simply editorial. The more substantive
                ones are the following:
              </p>
              <li>
                {" "}
                Update the types of membership to better reflect the current
                situation by adding university and student members.
              </li>
              <li>
                Add a Council. This is a way for the Academic Institutional
                members to be more active and have more of a voice.{" "}
              </li>
              <li>
                Move responsibility for membership completely from the
                VP-Administration to the VP-Membership.
              </li>
              <li>
                {" "}
                Combine the VP-Administration and VP-Finance positions. There is
                much overlap between these two positions, especially with the
                constraints on where the IAAER bank account can be located.{" "}
              </li>
              <li>
                Add the Director of Research and Educational Programs to the
                Executive Committee and make it possible to pay this person
                directly. The current DREA is not paid directly, but this
                flexibility may be needed in the future.
              </li>
              <li>
                Change the nominating committee to include 2 members of Council
                rather than 2 at-large VPs.{" "}
              </li>
              <li>
                {" "}
                Explicitly recognize the possibility of an editor of COSMOS
                separate from the VP-Communications.
              </li>
              <li>Recognize disposal of assets if IAAER were to dissolve.</li>
              <li> Recognize the incorporation of IAAER in Illinois, USA.</li>
            </li>

            <p className="mt-3">
              April 30, 2012:{" "}
              <a href="#" className="text-blue-500 hover:underline">
                International Symposium on IFRS and ISAs - Call for Papers
                sponsored by Del Valle and ICESI University in association with
                the IAAER.
              </a>
            </p>

            <p className="mt-3">
              April 30, 2012:
              <a href="#" className="text-blue-500 hover:underline">
                COSMOS Accountancy Chronicle Vol. 24 No. 1
              </a>
            </p>

            <p className="mt-3">
              April 4, 2012:
              <a href="#" className="text-blue-500 hover:underline">
                IAAER/ACCA Early Career Researchers Seed Grant Recipients -
                South Africa 2011
              </a>
            </p>

            <p className="mt-3">
              April 1, 2012:
              <a href="#" className="text-blue-500 hover:underline">
                The British Accounting & Finance Association's Special Interest
                Group on Accounting Education Annual Best Paper Prize
                Announcement
              </a>
              <p className="mt-3">
                The International Association for Accounting Education and
                Research (IAAER), in collaboration with the KPMG Foundation and
                KPMG International, is pleased to announce our Research
                Informing the IASB Decision Process grant recipients. Four
                research grants of $25,000 (U.S.) each have been awarded for the
                following research projects
              </p>
              <p className="mt-3">
                For more information on Round 4 of Informing the IASB, click
                &nbsp;
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>
                .
              </p>
            </p>

            <li className="mt-3">
              February 23, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IASB event for 'IFRS teachers'
              </a>
              <p className="mt-3">
                The IASB has announced that the IASB technical staff will hold a
                one-day event for those teaching International Financial
                Reporting Standards (IFRSs).
                <br />
                <br /> The event will be held in the IASB Board Room in London
                on Monday 14 May 2012 and will include a number of sessions
                taking a variety of forms — presentations, question and answer
                sessions, a Framework-based teaching workshop and feedback from
                the participants.
                <p className="mt-3">
                  Participation is limited to a maximum of 40 IFRS teachers,
                  with no more than four participants from each country.
                  <a href="#" className="text-blue-500 hover:underline">
                    Click for more information (link to IASB website){" "}
                  </a>{" "}
                  .
                </p>
              </p>
            </li>

            <li className="mt-3">
              February 21, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                IMA Case Writing Competition - Call for Submissions
              </a>
            </li>
            <li className="mt-3">
              February 20, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Accounting Education and IAAER Outstanding Reviewer Awards 2011
              </a>
            </li>
            <li className="mt-3">
              January 26, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Call for Papers: Research in Accounting in Emerging Economies
              </a>
              <p className="mt-3">Paper Deadline: April 15, 2012</p>
            </li>

            <li className="mt-3">
              January 18, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                ACCA/IAAER Call for Proposals and Participation from Emerging
                Scholars
              </a>
              <p className="mt-2">
                The International Association for Accounting Education and
                Research (IAAER) and Association of Chartered Certified
                Accountants (ACCA) will host a Paper Development Workshop in
                Bucharest, Romania on Tuesday June 12 in conjunction with the
                AMIS 2012 Conference. The objective of the workshop is to
                provide doctoral students, early career researchers and emerging
                scholars (hereafter referred to as emerging scholars) from
                transitional economies with feedback on their research prior to
                the resulting paper being submitted to a quality journal.
                Representatives of the ACCA and IAAER will select the research
                projects to be featured during the workshop and will attend the
                workshop to provide comprehensive feedback and guidance to the
                participants.
              </p>
              <p className="mt-3">
                Key Dates Papers and Proposal Deadline: April 2, 2012
                <br />
                Workshop Registration Deadline: May 2, 2012 <br />
                Paper Development Workshop: June 11-12, 2012 <br></br>Click
                <a href="#" className="text-blue-500 hover:underline">
                  here
                </a>
                to learn more
              </p>
            </li>

            <li className="mt-3">
              January 17, 2012: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                CIMA Research Initiative: Leadership
              </a>
              <p className="mt-3">
                CIMA’s intention is therefore to study leadership in the context
                of the management accountant and their careers and how they
                interact with the organization to make change happen. More
                broadly, CIMA’s intention is also to identify common
                characteristics across management accountants who do and don’t
                reach senior levels of management and to identify the
                prerequisites to reaching those influential positions, as well
                as the barriers. Most people will not get to CEO level, but
                nonetheless have the opportunity to lead effectively within
                their organizations.
              </p>
              <p className="mt-3">Application Deadline: April 2, 2012</p>
            </li>

            <li className="mt-3">
              December 13, 2011: International Federation of Accountants (IFAC)
              has published &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Competent and Versatile: How Professional Accountants in
                Business Drive Sustainable Success
              </a>
              <p className="mt-3">
                Professional accountants in business play key roles in
                organizations—roles that often go far beyond the stereotypical
                perceptions of accountants. It may not be readily apparent to
                all employers and business owners, but they can capitalize on
                professional accountants’ training, knowledge, and skill sets to
                help guide their organizations toward long-term sustainable
                success.
              </p>
            </li>

            <li className="mt-3">
              December 13, 2011: The Institute of Chartered Accountants in
              England and Wales has published &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Reporting Business Risks: Meeting Expectations
              </a>
              <p className="mt-3">
                Reporting Business Risks: Meeting Expectations forms part of the
                Information for Better Markets thought leadership programme of
                ICAEW’s Financial Reporting Faculty.
              </p>
              <p className="mt-3">
                Requirements for businesses to report their risks have now been
                in place in a number of countries for some years, and there
                seems to be a common view that their results have been
                disappointing. There is widespread agreement that businesses
                should report better information about the risks they face, and
                this determination has been reinforced by the wish to avoid
                another global financial crisis.
              </p>
              <p className="mt-3">
                But before fresh requirements are introduced, we need to
                understand why good risk reporting has proved to be so difficult
                in practice and why risk reporting may prove to be less useful
                to investors and other users of corporate reporting than has
                generally been assumed. In this report we look at the problems
                and limitations of risk reporting, but also suggest how it could
                be improved.
              </p>
            </li>

            <li className="mt-3">
              November 22, 2011: IAAER executive committee&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Meeting Minutes
              </a>{" "}
              &nbsp; are now updated.
            </li>

            <li className="mt-3">
              November 22, 2011: IAAER conference&nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Meeting Minutes
              </a>{" "}
              &nbsp;have been updated.
            </li>

            <li className="mt-3">
              October 20, 2011: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Call for Proposals IAAER/ACCA Seed Grant Funding South Africa{" "}
              </a>{" "}
              &nbsp;.
              <p className="mt-3">
                The two organizations will award seed corn grants to up to five
                teams of early career accounting researchers in South Africa.
                Each research team will be assisted by mentors representing
                IAAER in progressing the sponsored research. The teams will
                present their findings during an IAAER-sponsored event in 2013,
                either in person or via telephone conference.
              </p>
            </li>

            <li className="mt-3">
              September 26, 2011: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                ACCA/IAAER Early Researcher Consortium and Seed Grant Winners -
                Kuala Lumpar{" "}
              </a>{" "}
              <p className="mt-3">
                The two organizations have awarded grants to five teams of early
                career accounting researchers, following an IAAER/ACCA
                consortium in November held in conjunction with the University
                of Malaya and the Malaysian Accountancy Research and Education
                Foundation 2010 Conference.
              </p>
            </li>

            <li className="mt-3">
              September 21, 2011: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Competent and Versatile: How Professional Accountants in
                Business Drive Sustainable Organizational Success - Publication
                by IFAC/PAIB
              </a>{" "}
              <p className="mt-3">
                The IFAC Professional Accountants in Business Committee, new
                publication, Competent and Versatile: How Professional
                Accountants in Business Drive Sustainable Organizational Success
                is now available. To see the news release click here
              </p>
              <p className="mt-3">
                The publication is primarily designed to support IFAC and its
                members (professional accountancy organizations) to promote the
                value of professional accountants in business to their
                organizations and more widely—an important mission deliverable
                for IFAC. In the publication, we have highlighted key areas of
                competency development for professional accountants aligned to
                the needs of organizations that employ them. We hope it will be
                a useful resource to aid the development of qualification,
                training, and continuing professional development programs to
                support the changing needs of professional accountants in
                business.
              </p>
              <p className="mt-3">
                This publication is hopefully perceived as an important
                contribution to improving common understanding, within the
                accountancy profession and beyond, of the work by our colleagues
                who work in business and the public sector. To help communicate
                the scope of the roles and activities of professional
                accountants to non-accountants, and particularly to employers,
                we have also developed a shorter, brochure-length companion
                piece.
              </p>
            </li>

            <li className="mt-3">
              September 6, 2011: &nbsp;
              <a href="#" className="text-blue-500 hover:underline">
                Accounting Education: an international journal - Special
                Subscription Rate
              </a>{" "}
              Click
              <a href="#" className="text-blue-500 hover:underline">
                here{" "}
              </a>{" "}
              for more information
              <p className="mt-3">
                The two organizations have awarded grants to five teams of early
                career accounting researchers, following an IAAER/ACCA
                consortium in November held in conjunction with the University
                of Malaya and the Malaysian Accountancy Research and Education
                Foundation 2010 Conference.
              </p>
            </li>

            <p className="mt-5">
              IAAER Representation on Global Standard-Setting Boards and
              Committees{" "}
            </p>

            <p className="mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                IFRS Advisory Council: Holly Ashbaugh Skaife (Press Release)
              </a>
            </p>

            <p className="mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                International Accounting Education Standards Board (IAESB)
                (observer): Gary L. Sundem
              </a>
            </p>

            <p className="mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                Education Advisory Group (EAG) to IFRS Foundation’s Director of
                Education: Donna L. Street
              </a>
            </p>

            <p className="mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                KPMG LLP and KPMG Foundation Announce Sponsorship of IAAER
                Website and Electronic IFRS Database
              </a>

              <p className="mt-4">
                KPMG LLP, the U.S. audit, tax, and advisory firm and the KPMG
                Foundation, have announced a joint sponsorship of the
                International Association for Accounting Education and Research
                (IAAER) website (www.iaaer.org) and eIFRS
                (electronicInternational Financial Reporting Standards), which
                is available to IAAER members via the IAAER website. Click above
                for more details.
              </p>
            </p>

            <p className="mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                New research in emerging economies to be encouraged by global
                partners
              </a>

              <p className="mt-4">
                The IAAER (International Association of Accounting Education and
                Research) and ACCA (the Association of Chartered Certified
                Accountants) have signed a collaboration agreement to work
                together over the next three years to promote detailed research
                which will help to inform and influence the development of
                accounting and auditing standards.
              </p>
            </p>

            <p className="mt-5">
              <a href="#" className="text-blue-500 hover:underline">
                Recipients of the IAAER/ACCA/IAESB Research Grants
              </a>

              <p className="mt-4">
                A global invitation for research proposals to advance the field
                of accounting education was launched jointly by the
                International Association for Accounting Education and Research
                (IAAER) and ACCA (the Association of Chartered Certified
                Accountants). Up to five research grants of $25,000, funded by
                ACCA, the world’s largest and fastest-growing global
                professional accountancy body, have been awarded under the
                program, which aims to support the work of the International
                Accounting Education Standards Board (IAESB).
              </p>
            </p>
          </ul>
        </div>
      </motion.div>

      {/* Right Section: Sponsors & Links */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/3">
        {Sidedata.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
            className="mt-5 border-t p-5 bg-white shadow-lg rounded-lg text-center">
            <p className="font-semibold">{item.title}</p>
            <Link to={item.link}>
              <div className="flex justify-center items-center p-4">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-40 h-auto object-contain"
                />
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mt-5 border-t p-5 bg-white shadow-lg rounded-lg">
          <p className="font-semibold mt-2 mb-4 ">Quick Links</p>
          <Link to="#" className="text-blue-500 hover:font-bold">
            IFAC Global Gateway
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Archive;
