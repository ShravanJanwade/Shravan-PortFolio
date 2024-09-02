import React, { useState } from "react";
import "../styles/ResumeStyle.css";
import resumeImage from "../assets/ShravanResume.png"; // Adjust the path accordingly
import resumePDF from "../assets/ShravanResume.pdf"; // Import the PDF file
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";
import { SectionWrapper } from "../hoc";
import DownloadButton from "./DownloadButton";

const ResumeComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleViewResume = () => {
    // Open the PDF in a new tab
    window.open(resumePDF);
  };

  const handleDownloadResume = () => {
    // Trigger download of the PDF
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "ShravanResume.pdf";
    link.click();
  };

  return (
    <div className="resume-container">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Explore My Professional Journey</p>
        <h2 className={styles.sectionHeadText}>My Professional Resume</h2>
      </motion.div>
      <Tilt
        className={`tilt ${isHovered ? "tilt-hovered" : ""}`}
        options={{ max: 25, scale: 1.05, speed: 300 }}
        style={{ width: "300px", marginTop: "20px" }}
      >
        <Tooltip content="Click to view fullscreen" placement="right">
          <img
            src={resumeImage}
            alt="Resume"
            className={`resume ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleViewResume}
          />
        </Tooltip>
      </Tilt>
      <DownloadButton clickHandler={handleDownloadResume} />
    </div>
  );
};

export default SectionWrapper(ResumeComponent, "Resume");
