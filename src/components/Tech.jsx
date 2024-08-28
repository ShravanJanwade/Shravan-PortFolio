import React, { useState } from "react";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import SkillModal from "./SkillModal";
const Tech = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
    console.log("Clicked Ball");
    console.log(open);
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Skills i am expert in</p>
        <h2 className={styles.sectionHeadText}>My Skills.</h2>
      </motion.div>
      {technologies.map((technology) => (
        <SkillModal technology={technology}>
          <div className="w-28 h-28" key={technology.name} onClick={handleOpen}>
            <BallCanvas icon={technology.icon} name={technology.name} />
          </div>
        </SkillModal>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
