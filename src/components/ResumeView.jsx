import React, { useState } from "react";
import "../styles/ResumeStyle.css";
import resumeImage from "../assets/ShravanResume.png"; // Adjust the path accordingly
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";
import { jsPDF } from "jspdf";
import { SectionWrapper } from "../hoc";

const ResumeComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    const imgData = resumeImage;

    // Adding the image to the PDF (full page size)
    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdf.internal.pageSize.getWidth(),
      pdf.internal.pageSize.getHeight()
    );

    // Save the PDF
    pdf.save("My_Resume.pdf");
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
        <Tooltip content="Click to download" placement="bottom">
          <img
            src={resumeImage}
            alt="Resume"
            className={`resume ${isHovered ? "hovered" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          />
        </Tooltip>
      </Tilt>
      {isClicked && (
        <div className="resume-fullscreen">
          <div className="resume-close" onClick={handleClose}>
            &times;
          </div>
          <img src={resumeImage} alt="Full Resume" className="resume-full" />
          <button onClick={handleDownloadPDF} className="download-button">
            Download as PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(ResumeComponent, "Resume");
