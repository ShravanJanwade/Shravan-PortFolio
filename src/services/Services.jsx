import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Skills from "./Skills";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <motion.div
        className="services"
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
      >
        <Skills />

        <motion.div className="textContainer" variants={variants}>
          <p>
            The following skills are areas of my expertise
            <br />
            Key skills that drive effective software development.
          </p>
          <hr />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
