import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MenuIcon } from "lucide-react";
import logo from "./download.png";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "About",
    subItems: [
      { title: "Mission Statement", url: "/about/mission-statement" },
      { title: "History", url: "/about/history" },
      { title: "Constitution", url: "/about/constitution" },
      { title: "Executive Committee", url: "/about/executive-committee" },
      { title: "Board of Advisors", url: "/about/board-of-dvisors" },
      { title: "Council", url: "/about/council" },
      { title: "Committees", url: "/about/committee" },
      { title: "Institutional Members", url: "/about/institutional-members" },
      { title: "University Members", url: "/about/university-members" },
      { title: "Meetings & Financials", url: "/about/meetings-financials" },
      { title: "Privacy Policy", url: "/about/privacy-policy" },
      { title: "Contact Us", url: "/about/contact-us" },
    ],
  },
  {
    title: "Conferences and Events",
    subItems: [
      { title: "Current", url: "/conferences-and-events/current" },
      { title: "Archive", url: "/conferences-and-events/archive" },
    ],
  },
  {
    title: "News",
    subItems: [
      { title: "Current", url: "/news/current" },
      { title: "Newsletters", url: "/news/newsletters" },
      { title: "Archive", url: "/news/archive" },
    ],
  },
  {
    title: "Research",
    subItems: [
      { title: "Affiliated Journals", url: "/research/affiliated-journals" },
      { title: "Research Grants", url: "/research/research-grants" },
      { title: "Informing the IAASB", url: "/research/informing-the-iaasb" },
      { title: "Informing the IAESB", url: "/research/informing-the-iaesb" },
      { title: "Informing the IASB", url: "/research/informing-the-iasb" },
      { title: "ACCA/IAAER Scholars Program", url: "/research/acca-iaaer-scholars-program" },
      { title: "Call for Papers", url: "/research/call-for-papers" },
      {
        title: "IAAER/ACCA Early Career Researcher Development Program",
        url: "/research/iaaer-acca-early-career-researcher-development-program",
      },
    ],
  },
  {
    title: "Institutional & University Members",
    subItems: [
      {
        title: "Professional Institutional Members' Resources",
        url: "/institutional-university-members/professional-institutional-members-resources",
      },
      {
        title: "Academic Institutional Members' Resources",
        url: "/institutional-university-members/academic-institutional-members-resources",
      },
      {
        title: "University Members' Resources",
        url: "/institutional-university-members/university-members-resources",
      },
    ],
  },
  {
    title: "Membership",
    url: "/membership",
  },
  {
    title: "Sign In",
    url: "/signin",
  },
  {
    title: "Member Content",
    subItems: [
      { title: "Webinars", url: "/member-content/webinars" },
      { title: "Presentations", url: "/member-content/presentations" },
      {
        title: "IASPlus IASB and ISSB Meeting Updates",
        url: "/member-content/iasplus-iasb-and-issb-meeting-updates",
      },
      {
        title: "Report to IAAER Activities",
        url: "/member-content/report-to-iaaer-activities",
      },
    ],
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav
      className={`w-full border-b border-gray-200 bg-gray-100 shadow transition-all duration-300 z-50 ${
        scrolled ? "fixed top-0" : "relative"
      }`}
      ref={navRef}
    >
      <div className="px-4 lg:mr-10">
        <div className="flex items-center justify-between lg:justify-around h-16">
          <div className="flex items-center w-[250px]">
            <a href="/" className="text-black text-2xl font-bold">
              <img src={logo} alt="logo image" className="w-full h-full" />
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.url || "#"}
                    className="text-black cursor-pointer hover:bg-gray-200 px-3 py-2 rounded-md text-[1vw] font-medium"
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        toggleSubmenu(index);
                      } else {
                        setActiveSubmenu(null);
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                  <AnimatePresence>
                    {item.subItems && activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 mt-2 w-auto min-w-48 rounded-md shadow-3xl border-gray-300 shadow bg-white backdrop-blur-lg"
                      >
                        <div className="py-1" role="menu">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.url}
                              className="block px-4 py-2 text-sm text-black hover:bg-gray-200 hover:text-gray-900"
                              onClick={() => setActiveSubmenu(null)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black"
            >
              {mobileMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"
          >
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full text-left text-black font-medium text-[15px] flex justify-between items-center py-2"
                  onClick={() =>
                    item.subItems
                      ? toggleSubmenu(index)
                      : closeMobileMenu()
                  }
                >
                  {item.title}
                  {item.subItems && (
                    <span>{activeSubmenu === index ? "−" : "+"}</span>
                  )}
                </button>
                <AnimatePresence>
                  {item.subItems && activeSubmenu === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.url}
                          onClick={closeMobileMenu}
                          className="block py-2 px-1 text-sm text-gray-700 hover:bg-gray-200 rounded"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
