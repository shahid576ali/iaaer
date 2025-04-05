import { title } from "framer-motion/client";
import React from "react";
import "./Affiliated.css";
const affiliated = () => {
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
    <div className="main-card">
      <h2>Affliated Journals</h2>
      <h4>Accounting Education</h4>
      <p>
        The official educational journal of the IAAER. Accounting Education
        publishes material related to the business of the IAAER in line with its
        primary mission of seeking to enhance the educational base of accounting
        practice.
      </p>
      <p>
        Taylor & Francis are proud to announce the alliance between Accounting
        Education and the International Association for Accounting Education and
        Research (IAAER). The partnership between the journal and the
        association became effective on January 1, 2005.
      </p>
      <a href="https://www.tandfonline.com/journals/raed20" target="_blank">
        Accounting Education Main Page
      </a>
      <hr />
      <h4>Journal of International Financial Management & Accounting</h4>
      <p>
        In 1999, JIFMA formed a new relationship with International Association
        for Accounting Research and Education, and became the official research
        journal for the IAAER. JIFMA publishes original research dealing with
        international aspects of financial management and reporting, banking and
        financial services, auditing and taxation.
      </p>
      <a href="https://onlinelibrary.wiley.com/journal/1467646x" target="blank">
        JIFMA Main Page
      </a>
      <ul>
        <li>Open Access papers available for free download: </li>
        <div className="list">
          <li>
            Political Ideology Shapes Reporting Regulation: SEC Commissioners'
            view on IFRS for US Issuers{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/10.1111/jifm.12230"
              target="blank"
            >
              here
            </a>
          </li>
          <li>
            Research on Nature-related Corporate Reporting from Academics at the
            University of Glasgow{" "}
            <a
              href="https://www.researchgate.net/publication/388868000_Evidence_on_companies%27_biodiversity_disclosures"
              target="blank"
            >
              here
            </a>
          </li>
          <li>
            Research on extended external reporting assurance: An update on
            recent developments{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/full/10.1111/jifm.12200"
              target="blank"
            >
              here
            </a>
          </li>
          <li>
            Research on Audit evidence, technology, and judgement: A review of
            the literature in response to ED-500{" "}
            <a
              href="https://onlinelibrary.wiley.com/doi/full/10.1111/jifm.12192"
              target="blank"
            >
              here
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default affiliated;
