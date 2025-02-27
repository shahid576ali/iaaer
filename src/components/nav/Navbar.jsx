import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MenuIcon } from "lucide-react";
import logo from './download.png'

const navItems = [
  {
    title: "About",
    url: "/",
    subItems: [
      { title: "Mission Statement", url: "/products/electronics" },
      { title: "History", url: "/products/clothing" },
      { title: "Constitution", url: "/products/clothing" },
      { title: "Executive Committee", url: "/products/clothing" },
      { title: "Board of Advisors", url: "/products/clothing" },
      { title: "Council", url: "/products/clothing" },
      { title: "Committee", url: "/products/clothing" },
      { title: "Institutional Members", url: "/products/clothing" },
      { title: "University Members", url: "/products/clothing" },
      { title: "Meetings & Financials", url: "/products/clothing" },
      { title: "Privacy Policy", url: "/products/clothing" },
      { title: "Contact Us", url: "/products/clothing" },
      { title: "Cookie Policy", url: "/products/clothing" },
    ],
  },
  {
    title: "Conferences and Events",
    url: "/products",
    subItems: [
      { title: "Current", url: "/products/electronics" },
      { title: "Archive", url: "/products/clothing" }
    ],
  },
  {
    title: "News",
    url: "/services",
    subItems: [
      { title: "Current", url: "/services/consulting" },
      { title: "Quarterly Newsletter", url: "/services/design" },
      { title: "Archive", url: "/services/development" },
    ],
  },
  {
    title: "Research",
    url: "/about",
    subItems:[
      {title: "Affiated Journals",url:"/journals"},
      {title: "Research Grants",url:"/grants"},
      {title: "ACCA/IAAER Schorls Program",url:"/journals"},
      {title: "IAAER/ACCA Early Career Researcher Development Program",url:"/journals"},
    ]
  },
  {
    title: "Resources",
    url: "/resources",
    subItems:[
      {title: "IAAER Standard setting Insights",url:"/journals"},
      {title: "Institutional Members Resources",url:"/grants"},
      {title: "IASB Resources",url:"/journals"},
      {title: "IASB Resources",url:"/journals"},
      {title: "IFAC Resources",url:"/journals"},
      {title: "IAASB Resources",url:"/journals"},
      {title: "IESBA Resources",url:"/journals"},
      {title: "IPSASB Resources",url:"/journals"},
      {title: "KPMG Resources",url:"/journals"},
      {title: "ACCA Resources",url:"/journals"},
    ]
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
  url: "/membership",
  subItems:[
    {title: "Webinars",url:"/journals"},
    {title: "Presentations",url:"/grants"},
    {title: "IASPlus IASB and ISSB Meeting Updates",url:"/journals"},
    {title: "Report to IAAER Activities",url:"/journals"},
  ]
},
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 shadow bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-[250px]">
            <a href="/" className="text-black text-2xl font-bold">
              <img src={logo} alt="logo image" className="w-full h-full" />
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.url}
                    className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    onClick={(e) => {
                      if (item.subItems) {
                        e.preventDefault();
                        toggleSubmenu(index);
                      }
                    }}
                  >
                    {item.title}
                  </a>
                  <AnimatePresence>
                    {item.subItems && activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-3xl border-gray-300 shadow bg-[#ffffff] backdrop-blur-lg"
                      >
                        <div className="py-1" role="menu">
                          {item.subItems.map((subItem, subIndex) => (
                            <motion.a
                              key={subIndex}
                              href={subItem.url}
                              className="block px-4 py-2 text-sm text-balck hover:bg-gray-200 hover:text-gray-900"
                              role="menuitem"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {subItem.title}
                            </motion.a>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.url}
                  className="text-black hover:bg-gray-300 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={(e) => {
                    if (item.subItems) {
                      e.preventDefault();
                      toggleSubmenu(index);
                    }
                  }}
                >
                  {item.title}
                </a>
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
                        <motion.a
                          key={subIndex}
                          href={subItem.url}
                          className="text-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {subItem.title}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
