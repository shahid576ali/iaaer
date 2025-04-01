import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Newsletter = () => {
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
          <h2
            className="text-2xl font-bold mb-4 text-muted"
            style={{ color: "#494f4a" }}>
            {" "}
            Newsletters
          </h2>
          <p className="fs-6 mt-4 mb-4  space-y-3 text-gray-700">
            IAAER publishes newsletter with updates from within the IAAER
            network, upcoming conferences, calls for papers and research funds
            and grants. To view previous newsletters please click on the links
            below. To submit materials to the IAAER Newsletter, send an email
            attachment to{" "}
            <a href="#" className="text-blue-500 hover:underline">
              {" "}
              cecile.jansevanrensburg@up.ac.za{" "}
            </a>{" "}
            .
          </p>

          <hr className="mt-6 mb-4 " style={{ color: "#9aa19c" }} />

          {/* 1st Section */}
          <p className="mt-4"> 2024</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter, Vol. 21
              </a>{" "}
            </li>
          </ul>

          {/* 2nd Section */}
          <p className="mt-4"> 2022</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 20
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 19
              </a>{" "}
            </li>
          </ul>

          {/*3rd Section  */}
          <p className="mt-4"> 2021</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 18
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 17
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 16
              </a>{" "}
            </li>
          </ul>

          {/* 4th Section */}
          <p className="mt-4"> 2020</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 15
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 14
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 13
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 12
              </a>{" "}
            </li>
          </ul>

          {/* 5th Section */}
          <p className="mt-4"> 2019</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 11{" "}
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 10
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 9
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 8
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2018</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 7
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 6
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 5
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Newsletter No. 4{" "}
              </a>{" "}
            </li>
          </ul>

          <hr className="mt-6 mb-4 " style={{ color: "#9aa19c" }} />
          <h2
            className="text-2xl font-bold mb-4 text-muted"
            style={{ color: "#494f4a" }}>
            {" "}
            COSMOS
          </h2>

          <p className="fs-6 mt-4 mb-4  space-y-3 text-gray-700">
            COSMOS Accountancy Chronicle publishesed announcements of upcoming
            conferences, and links to the major academic and professional
            accounting organizations of the world. COSMOS Accountancy Chronicle
            ended effective in 2015. IAAER now publishes newsletters with
            updates from within the IAAER network, upcoming conferences, calls
            for papers and research funds and grants. .
          </p>

          {/* 1st Section */}
          <p className="mt-4"> 2015</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 27 No. 1
              </a>{" "}
            </li>
          </ul>

          {/* 2nd Section */}
          <p className="mt-4"> 2014</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 26 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 26 No. 2{" "}
              </a>{" "}
            </li>
          </ul>

          {/*3rd Section  */}
          <p className="mt-4"> 2013</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 25 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 25 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 4th Section */}
          <p className="mt-4"> 2012</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 24 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 24 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 5th Section */}
          <p className="mt-4"> 2011</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 23 No. 1
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2010</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 22 No. 1
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2009</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 21 No. 1
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2008</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 20 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 20 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2007</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 19 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 19 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2006</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 18 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 18 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2005</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 17 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 17 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2004</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 16 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 16 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2004</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 16 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 16 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2003</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 15 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 15 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2002</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 14 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 14 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2001</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 13 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 13 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 2000</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 12 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 12 No. 2
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 1999</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 11 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 11 No. 2{" "}
              </a>{" "}
            </li>
          </ul>

          {/* 6th Section */}
          <p className="mt-4"> 1998</p>
          <ul className="list-disc mx-5 mt-4  pl-5 space-y-3 text-gray-700">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 10 No. 1
              </a>{" "}
            </li>

            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Vol. 10 No. 2
              </a>{" "}
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

export default Newsletter;
