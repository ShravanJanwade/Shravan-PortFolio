import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import Lottie from "react-lottie";
import animationData from "../assets/Animation.json";

const Hero = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Lottie animation JSON file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);

  // Detect if the user is on mobile or has a low-power device
  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)").matches;
    setIsMobile(mobileQuery);

    // Check if the device is low-powered (for example, by detecting low resolution or poor GPU)
    // Here, you can use other performance checks based on the use case
    const isLowPower =
      navigator.hardwareConcurrency <= 2 || window.devicePixelRatio < 1.5;
    setIsLowPowerDevice(isLowPower);
  }, []);

  const gradientStyle = {
    backgroundImage: "linear-gradient(90deg, #915EFF, #FFD700)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span style={gradientStyle} className="text-7xl font-bold">
              Shravan
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop React Web Application, user{" "}
            <br className="sm:block hidden" />
            interfaces and Backend standalone application
          </p>
        </div>
      </div>

      {/* Conditionally render the 3D model or fallback animation */}
      {!isMobile || !isLowPowerDevice ? (
        <ComputersCanvas />
      ) : (
        <div>
          <div className="absolute inset-0 flex  items-center mt-60  justify-center">
            <Lottie options={lottieOptions} height={300} width={300} />
          </div>
        </div>
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 27, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "Hero");
