import React, { useState } from "react";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import SkillModal from "./SkillModal";
import Skills from "../services/Skills";
const Tech = () => {
  const [open, setOpen] = useState(false);
  const [listShow, setListShow] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
    console.log("Clicked Ball");
    console.log(open);
  };
  const toggleSkillView = () => {
    setListShow((prev) => !prev);
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {!listShow && (
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>The Skills i am expert in</p>
          <h2 className={styles.sectionHeadText}>My Skills.</h2>
          {/* <button onClick={toggleSkillView}>List</button> */}
        </motion.div>
      )}
      {listShow && <Skills clickHandler={toggleSkillView} />}

      {!listShow &&
        technologies.map((technology) => (
          <SkillModal technology={technology} key={technology.name}>
            <div
              className="w-28 h-28"
              key={technology.name}
              onClick={handleOpen}
            >
              <BallCanvas icon={technology.icon} name={technology.name} />
            </div>
          </SkillModal>
        ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
