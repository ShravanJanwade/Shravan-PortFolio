"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import Lottie from "react-lottie";
import animationData from "../assets/Animation.json";

const Hero = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobileQuery);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5">
        {/* Left vertical line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915EFF] to-transparent" />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-white text-3xl sm:text-6xl lg:text-7xl font-black leading-tight break-words">
            Hi, I'm{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #915EFF, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="text-3xl sm:text-6xl lg:text-7xl font-bold block sm:inline"
            >
              Shravankumar
            </span>
          </h1>

          <p className="text-white/80 mt-2 text-sm sm:text-lg lg:text-xl max-w-3xl leading-relaxed break-words">
            I develop React Web Application, user{" "}
            <br className="sm:block hidden" />
            interfaces and Backend standalone application
          </p>
        </div>
      </div>

      {/* 3D Model / Mobile Lottie Animation */}
      {!isMobile ? (
        <ComputersCanvas />
      ) : (
        <div className="absolute inset-0 flex items-center mt-60 justify-center">
          <Lottie options={lottieOptions} height={250} width={250} />
        </div>
      )}

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 27, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white/30 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "Hero");
