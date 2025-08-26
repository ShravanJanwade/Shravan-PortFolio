import { useState, useEffect, useRef } from "react"

const MyApproach = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleCards, setVisibleCards] = useState([])
  const [headerVisible, setHeaderVisible] = useState(false)
  const [typingStates, setTypingStates] = useState([false, false, false, false])
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setHeaderVisible(true)
            } else {
              const index = cardRefs.current.indexOf(entry.target)
              if (index !== -1) {
                setTimeout(() => {
                  setVisibleCards((prev) => {
                    const newVisible = [...prev]
                    newVisible[index] = true
                    return newVisible
                  })
                }, index * 200)
              }
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    visibleCards.forEach((visible, index) => {
      if (visible && !typingStates[index]) {
        setTimeout(
          () => {
            setTypingStates((prev) => {
              const newStates = [...prev]
              newStates[index] = true
              return newStates
            })
          },
          800 + index * 200,
        )
      }
    })
  }, [visibleCards, typingStates])

  const developerPersonality = [
    {
      type: "terminal",
      title: "$ whoami",
      command: "cat ~/.developer_profile",
      output: [
        "Name: Problem Solver Extraordinaire",
        "Status: Always debugging something",
        "Superpower: Turning coffee into code",
        "Motto: 'It works on my machine' 🤷‍♂️",
      ],
      gradient: "from-green-400 to-emerald-600",
      bgColor: "bg-gray-900",
      textColor: "text-green-400",
    },
    {
      type: "code",
      title: "my_approach.js",
      language: "javascript",
      code: [
        "const solveProblem = (challenge) => {",
        "  const solution = challenge",
        "    .analyze()",
        "    .breakDown()",
        "    .research()",
        "    .implement()",
        "    .test()",
        "    .optimize();",
        "  return solution;",
        "};",
      ],
      gradient: "from-blue-400 to-cyan-600",
      bgColor: "bg-slate-900",
      textColor: "text-blue-300",
    },
    {
      type: "browser",
      title: "Developer Tools",
      url: "localhost:3000/passion",
      content: {
        title: "What Drives Me",
        items: [
          "🔥 Building things that matter",
          "🧩 Solving complex puzzles",
          "🚀 Learning new technologies",
          "💡 Creating elegant solutions",
          "🌟 Making users smile",
        ],
      },
      gradient: "from-purple-400 to-pink-600",
      bgColor: "bg-slate-800",
      textColor: "text-purple-300",
    },
    {
      type: "ide",
      title: "README.md",
      content: {
        title: "# About This Developer",
        sections: [
          "## 🎯 Mission",
          "Transform ideas into reality",
          "",
          "## 🛠️ Stack",
          "Full-stack + AI + Cloud",
          "",
          "## 🎮 Fun Fact",
          "I debug in my dreams",
        ],
      },
      gradient: "from-orange-400 to-red-600",
      bgColor: "bg-gray-800",
      textColor: "text-orange-300",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Static Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-blue-500/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <p
              className={`text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4 transition-all duration-800 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              Problem Solver
            </p>
            <h2
              className={`text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-8 transition-all duration-800 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              My Approach
            </h2>
          </div>

          <div
            className={`max-w-4xl mx-auto transition-all duration-800 delay-400 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              I thrive on solving complex technical challenges through{" "}
              <span className="text-cyan-400 font-semibold">analytical thinking</span> and{" "}
              <span className="text-cyan-400 font-semibold">innovative solutions</span>. My approach combines deep
              technical expertise with creative problem-solving to deliver results that exceed expectations.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Every problem is an opportunity to learn, innovate, and create something extraordinary. Let's tackle your
              biggest challenges together.
            </p>
          </div>
        </div>

        {/* Problem Solving Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developerPersonality.map((card, index) => (
            <div
              key={card.title}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group relative transition-all duration-1000 transform ${
                visibleCards[index] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              {/* Enhanced card container with window-like design */}
              <div
                className={`relative ${card.bgColor} rounded-lg border border-gray-600 shadow-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/20`}
              >
                {/* Window header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-700 border-b border-gray-600">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-300 text-sm font-mono">{card.title}</div>
                  <div className="w-12"></div>
                </div>

                {/* Card content based on type */}
                <div className="p-6 min-h-[300px]">
                  {/* Terminal Card */}
                  {card.type === "terminal" && (
                    <div className="font-mono text-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-green-400">➜</span>
                        <span className="ml-2 text-gray-300">{card.command}</span>
                        <span className="ml-2 animate-pulse">|</span>
                      </div>
                      {typingStates[index] &&
                        card.output.map((line, i) => (
                          <div
                            key={i}
                            className={`${card.textColor} mb-2 transition-all duration-300`}
                            style={{
                              animationDelay: `${i * 200}ms`,
                              animation: `typewriter 0.5s steps(${line.length}) ${i * 200}ms forwards`,
                            }}
                          >
                            {line}
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Code Editor Card */}
                  {card.type === "code" && (
                    <div className="font-mono text-sm">
                      <div className="flex items-center mb-4 text-gray-400">
                        <span className="text-yellow-400">●</span>
                        <span className="ml-2">{card.title}</span>
                      </div>
                      {typingStates[index] &&
                        card.code.map((line, i) => (
                          <div
                            key={i}
                            className={`${card.textColor} mb-1 transition-all duration-300`}
                            style={{
                              animationDelay: `${i * 150}ms`,
                              animation: `slideInLeft 0.4s ease-out ${i * 150}ms forwards`,
                              opacity: 0,
                            }}
                          >
                            <span className="text-gray-500 mr-4">{String(i + 1).padStart(2, "0")}</span>
                            {line}
                          </div>
                        ))}
                    </div>
                  )}

                  {/* Browser Card */}
                  {card.type === "browser" && (
                    <div>
                      <div className="flex items-center mb-4 p-2 bg-gray-700 rounded text-sm">
                        <span className="text-gray-400">🔒</span>
                        <span className="ml-2 text-gray-300">{card.url}</span>
                      </div>
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-4 text-purple-300">{card.content.title}</h3>
                        {typingStates[index] &&
                          card.content.items.map((item, i) => (
                            <div
                              key={i}
                              className="mb-3 text-gray-300 transition-all duration-300"
                              style={{
                                animationDelay: `${i * 200}ms`,
                                animation: `fadeInUp 0.5s ease-out ${i * 200}ms forwards`,
                                opacity: 0,
                              }}
                            >
                              {item}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* IDE/Markdown Card */}
                  {card.type === "ide" && (
                    <div className="font-mono text-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-blue-400">📝</span>
                        <span className="ml-2 text-gray-300">{card.title}</span>
                      </div>
                      {typingStates[index] &&
                        card.content.sections.map((section, i) => (
                          <div
                            key={i}
                            className={`mb-2 transition-all duration-300 ${
                              section.startsWith("#")
                                ? "text-orange-400 font-bold"
                                : section.startsWith("##")
                                  ? "text-yellow-400 font-semibold"
                                  : section === ""
                                    ? ""
                                    : "text-gray-300"
                            }`}
                            style={{
                              animationDelay: `${i * 150}ms`,
                              animation: `slideInRight 0.4s ease-out ${i * 150}ms forwards`,
                              opacity: 0,
                            }}
                          >
                            {section || "\u00A0"}
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-lg`}
                />

                {/* Glowing effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500 rounded-lg -z-10`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div
          className={`flex justify-center mt-20 transition-all duration-800 delay-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default MyApproach
