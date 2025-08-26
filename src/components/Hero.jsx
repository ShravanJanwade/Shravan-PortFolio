import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import Lottie from "react-lottie";
import animationData from "../assets/Animation.json";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)").matches
    setIsMobile(mobileQuery)
  }, [])

  // Custom Mobile Animation Component
  const MobileSpaceAnimation = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center mt-60 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60 animate-pulse`}
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + i * 8}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Central Floating Geometric Shape */}
        <div className="relative">
          {/* Main Hexagon */}
          <div className="w-32 h-32 relative animate-spin" style={{ animationDuration: "20s" }}>
            <div
              className="absolute inset-0 border-2 border-purple-400/30 transform rotate-0"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
            <div
              className="absolute inset-2 border border-blue-400/40 transform rotate-12"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            ></div>
          </div>

          {/* Orbiting Elements */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 60}deg) translateX(60px) translateY(-50%)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          {/* Inner Pulsing Core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse opacity-80"></div>
            <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-ping opacity-40"></div>
          </div>

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                top: `${Math.random() * 200 - 50}px`,
                left: `${Math.random() * 200 - 50}px`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-48 h-48 border border-purple-400/20 rounded-full animate-pulse"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute w-64 h-64 border border-blue-400/10 rounded-full animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          ></div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `}</style>
      </div>
    )
  }

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
            I develop React Web Application, user <br className="sm:block hidden" />
            interfaces and Backend standalone application
          </p>
        </div>
      </div>

      {/* 3D Model / Mobile Custom Animation */}
      {!isMobile ? (
       <ComputersCanvas/>
      ) : (
        <MobileSpaceAnimation />
      )}

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white/30 flex justify-center items-start p-2">
            <div
              className="w-3 h-3 rounded-full bg-white/30 mb-1 animate-bounce"
              style={{ animationDuration: "1.5s" }}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero, "Hero");
