import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { CIcon } from "@coreui/icons-react";
import { cibLeetcode } from "@coreui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2"; // Sleek icons
import "../styles/NavbarStyle.css";
import BackgroundMusic from '../assets/midnight-daydreams-250159.mp3'
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle music
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
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
            Shravankumar Janawade &nbsp;
          </p>
        </Link>

        {/* Nav Links */}
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

        {/* Right Side: Socials + Music */}
        <div className="flex items-center gap-6">
          {/* Social Media */}
          <div className="hidden sm:flex gap-5 items-center">
            <a
              href="https://github.com/ShravanJanwade"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-2xl hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shravankumar-janawade-45bbb0200/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition-colors" />
            </a>
            <a
              href="https://leetcode.com/u/shravanJanwade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CIcon
                className="text-white text-2xl hover:text-gray-400 ml-1 h-6"
                icon={cibLeetcode}
              />
            </a>
          </div>

          {/* Music Toggle */}
        {/* Music Toggle (hidden on mobile) */}
<motion.div
  onClick={toggleMusic}
  whileTap={{ scale: 0.85 }}
  className="relative cursor-pointer hidden sm:flex"
>
  {isPlaying ? (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
    >
      {/* Glowing Ring */}
      <span className="absolute w-8 h-8 rounded-full border border-cyan-400 animate-ping" />
      {/* Equalizer bars */}
      <span className="absolute flex gap-[3px]">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-[3px] h-4 bg-cyan-400 rounded-sm"
            animate={{
              height: ["6px", "16px", "6px"],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </span>
      <HiSpeakerWave className="text-cyan-400 text-3xl drop-shadow-lg" />
    </motion.div>
  ) : (
    <HiSpeakerXMark className="text-gray-400 text-3xl hover:text-red-400 transition-colors" />
  )}
</motion.div>

        </div>

        {/* Mobile Menu */}
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

      {/* Hidden Audio Player */}
      <audio ref={audioRef} loop src={BackgroundMusic} />
    </nav>
  );
};

export default Navbar;
