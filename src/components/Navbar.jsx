import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
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
          <div
            className="p-2"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <TbSocial
              className="text-white text-2xl cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            <motion.div
              className={`${
                dropdownOpen ? "flex" : "hidden"
              } absolute top-full right-0 mt-1 p-2 w-[40px] flex-col items-center gap-4 bg-black-800 rounded-md`}
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: dropdownOpen ? 1 : 0,
                y: dropdownOpen ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <motion.a
                href="https://github.com/ShravanJanwade"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaGithub className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/shravankumar-janawade-45bbb0200/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="https://instagram.com/janwadeshravan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram className="text-white text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
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
