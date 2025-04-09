import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Callforpapers = () => {
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
    <div className="flex justify-center items-center min-h-screen ml-15">
    <div className="">
        <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Section: News */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-2/3 mx-auto p-4">
        <div className="max-w-4xl border-t mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">IAAER / ACCA Early Career Researcher Development Program</h1>
          <h2 className="font-bold text-xl text-center">Second Cohort of the IAAER ACCA</h2>
          <h2 className="font-bold text-xl text-center mt-2">Early Career Researcher Development Program Announced</h2>
          <p className="mt-4">
          (Funding Provided by ACCA Global)
          </p>
          <p className="mt-4">
          On February 3, 2025, the International Association for Accounting Education and Research (IAAER) and the Association of Chartered Certified Accountants (ACCA) launched the second cohort of the Early Career Researcher Development Program (ECRDP) by naming 13 associate and assistant professors from Croatia, North Macedonia, Poland, Romania and Turkey to participate in the program. The program will run for 2025-2026 and consist of, inter alia, at least two events per year. The first event for the second cohort will be a virtual workshop addressing Qualitative Research Methods run by Professor Lisa Baudot of HEC Paris on February 10, 2025. A second workshop for the Scholars will be hosted by Prague University of Economics and Business on May 21, 2025 immediately prior to the university’s ACFA conference (May 22-23).
          </p>
            <p className="font-bold mt-4">The 13 Scholars are: </p>
          <ol className="list-disc pl-5">
            <li>Oana Bogdan, West University of Timisoara, Romania </li>
            <li>Valentin Burca, West University of Timisoara, Romania.</li>
            <li>Ivan Dionisijev, University “SS. Cyril and Methodius” in Skopje, North Macedonia  </li>
            <li>Olga Grzybek, University of Economics in Katowice, Poland</li>
            <li>Grygorii Kravchenko, Kozminski University, Poland</li>
            <li>Radu Marian, Babes-Bolyai University, Cluj-Napoca, Romania</li>

            <li>Mirela Nichita, Bucharest University of Economic Studies, Romania</li>

            <li>Mustafa Oguz, Balikesir University, Turkey</li>

            <li>Mirela Paunescu, Bucharest University of Economic Studies, Romania</li>
            <li>Ivana Perica, University of Split, Croatia</li>
            <li>.Inna Tselinko, Kozminski University, Poland</li>
            <li>Maciej Tuszkiewicz, University of Economics in Katowice, Poland</li>

            


          </ol>

          <p className="mt-4"> IAAER faculty for the May 21, 2025 workshop hosted by Prague University of Economics and Business will include Professors Catalin Albu (Bucharest University of Economic Studies), Nadia Albu (Bucharest University of Economic Studies), Mukesh Garg (Monash University), Leslie Hodder (Indiana University), Joanna Krasodomska (Krakow University of Economics), Michaela Rankin (Monash University), Katherine Schipper (Duke) and Donna Street (University of Dayton).</p>

          <p className="mt-4">
          For more information about the program email dstreet1@udayton.edu.
          </p>
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
    </div>
    </div>
  )
}

export default Callforpapers