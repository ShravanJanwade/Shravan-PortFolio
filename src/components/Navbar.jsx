import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { CIcon } from '@coreui/icons-react';
import {cibLeetcode} from '@coreui/icons';
import { TbSocial } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/NavbarStyle.css";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        window.scrollY > 100 ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shravan Janwade &nbsp;
            <span className="sm:block hidden"> | Software Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`nav-item ${
                active === nav.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </motion.li>
          ))}
        </ul>

        {/* Social Media Dropdown */}
        <div className="relative flex items-center">
          <div className="p-2 flex gap-4 mt-3">
            <a
              href="https://github.com/ShravanJanwade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-2xl hover:text-gray-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/shravankumar-janawade-45bbb0200/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl" />
            </a>
            <a
              href="https://leetcode.com/u/shravanJanwade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CIcon className="text-white text-2xl hover:text-gray-500 ml-1 mb-5 h-5"  icon={cibLeetcode} />
            </a>
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center hover:text-gray-400">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  className={`nav-item font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
