import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NewsSection = () => {
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
        <div className="max-w-4xl border-t mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">News and Press Releases</h2>
          <ul className="list-disc pl-5 space-y-3 text-gray-700">
            <li>
              On February 16, 2023, the International Association for Accounting
              Education and Research (IAAER) and the Association of Chartered
              Certified Accountants launched the Early Career Researcher
              Development Program (ECRDP) by naming associate and assistant
              professors from Croatia, the Czech Republic, North Macedonia,
              Poland, Romania, and Turkey to participate in the program.
              <br />
              <a href="#" className="text-blue-500 hover:underline">
                Click here for the announcement
              </a>
            </li>
            <li>
              A new meeting of the Early Career Researcher Development Program
              took place in Krakow on December 11 in conjunction with the 11th
              International Conference "Financial reporting and auditing:
              challenges of a transformation era", organized by Krakow
              University of Economics and the International Association for
              Accounting Education and Research (IAAER).
            </li>
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

export default NewsSection;
