import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}) => {
  const navigateHandler = () => {
    window.open(link);
  };
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[340px] w-full flex-shrink-0"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px] -mt-9">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span
                className="blue-text-gradient hover:cursor-pointer"
                onClick={navigateHandler}
              >
                @
              </span>{" "}
              <span
                onClick={navigateHandler}
                className="hover:cursor-pointer hover:border-b border-b-blue"
              >
                {" "}
                {name}
              </span>
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const containerRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current && testimonials.length > 0) {
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = containerRef.current.offsetWidth;

      // Calculate the drag constraint dynamically
      setDragConstraints({
        left: -(containerWidth - viewportWidth), // Prevent dragging beyond the last card
        right: 0, // Allow dragging only to the right
      });
    }
  }, [testimonials]);

  const isDraggable = testimonials.length > 1;
  return (
    <div className={`mt-0 bg-black-100 rounded-[20px] sm:-mt-48`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className="relative -mt-28 pb-14">
        <div className="flex gap-7 overflow-x-hidden">
          <motion.div
            ref={containerRef}
            drag={isDraggable ? "x" : false}
            dragConstraints={isDraggable ? dragConstraints : undefined}
            className={`flex flex-col sm:flex-row gap-7 ${
              isDraggable ? "cursor-grab" : ""
            } px-4 overflow-hidden`}
          >
            {testimonials.map((testimonial, index) => (
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
