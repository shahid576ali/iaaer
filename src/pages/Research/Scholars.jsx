import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Scholars = () => {
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
    <div>
        <div className="flex flex-col lg:flex-row gap-6 p-4">
      {/* Left Section: News */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-2/3 mx-auto p-4">
        <div className="max-w-4xl border-t mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">2nd Cohort of ACCA IAAER Scholars Program</h1>
          <h2 className="font-bold text-xl text-center">ACCA IAAER Scholars Program March 2024 – March 2026</h2>
          <h2 className="font-bold text-xl text-center mt-2">2nd Cohort Of Scholars Announced</h2>
          <p className="mt-4">
          On November 15-16, 2024 the International Association for Accounting Education and Research (IAAER) and the Association of Chartered Certified Accountants (ACCA) will hold the first event for our second cohort of ACCA IAAER Scholars. The five participants are from Brazil, Kenya, Poland and South Africa.
          </p>
          <p className="mt-4">
          Ongoing mentorship is a key component of the ACCA IAAER Scholars Program. A team of IAAER mentors will support the ACCA IAAER scholars. The mentoring process will enhance the Scholars’ exposure to internationally recognized accounting scholars and best practices in accounting and accounting-related education and research, and assist them in becoming part of a global peer network.
          </p>
            <p className="font-bold mt-4">The five second-cohort Scholars are:</p>
          <ul>
            <li>Dr. Karol Marek Klimczak, PhD, Professor and Dean Faculty of Organization and Management Lodz University of Technology, Poland. </li>
            <li>Dr. Joanna Krasodomska, PhD, Professor Krakow University of Economics, Poland.</li>
            <li>Dr. David Mathuva, PhD, Associate Dean Academics and Student Affairs Strathmore University Business School, Kenya. </li>
            <li>Dr. Raquel Sarquis PhD, Professor with Tenure University of São Paulo, Brazil.</li>
            <li>Dr. Wayne van Zijl, PhD, Associate Professor and Assistant Dean Research University of the Witwatersrand, South Africa</li>
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
    </div>
  )
}

export default Scholars