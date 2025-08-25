import { useState, useEffect } from "react"
import { technologies } from "../constants"

const TechSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-[#0b0c1a] via-[#05060c] to-[#0b0c1a] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.5 + Math.random() * 1.5}px`,
              height: `${0.5 + Math.random() * 1.5}px`,
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute bg-gray-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className="absolute w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-400 text-lg mb-4 tracking-wider">THE SKILLS I AM EXPERT IN</p>
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {technologies.map((tech, i) =>
              technologies.slice(i + 1).map((otherTech, j) => {
                const x1 = (i % 4) * 25 + 12.5
                const y1 = Math.floor(i / 4) * 70 + 35
                const x2 = ((i + j + 1) % 4) * 25 + 12.5
                const y2 = Math.floor((i + j + 1) / 4) * 70 + 35

                return (
                  <line
                    key={`${i}-${j}`}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(99, 102, 241, 0.1)"
                    strokeWidth="1"
                    className={`transition-all duration-500 ${
                      hoveredSkill === tech.name || hoveredSkill === otherTech.name ? "stroke-purple-400/40" : ""
                    }`}
                  />
                )
              }),
            )}
          </svg>

          <div className="relative grid grid-cols-4 gap-y-28 gap-x-8 h-auto" style={{ zIndex: 2 }}>
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`relative flex items-center justify-center transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                } ${hoveredSkill === tech.name ? "z-50" : "z-10"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredSkill(tech.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative group cursor-pointer">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${tech.color} opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150`}
                    style={{
                      width: "120px",
                      height: "120px",
                      transform: "translate(-50%, -50%)",
                      left: "50%",
                      top: "50%",
                    }}
                  />
                  <div
                    className={`relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border-2 border-gray-600/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-gray-400/70`}
                  >
                    <div
                      className={`absolute inset-1 rounded-full bg-gradient-to-r ${tech.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <span className="relative z-10 text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <img src={tech.icon}/>
                    </span>
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-60 animate-ping`}
                    />
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center ">
                    <p className="text-white font-semibold text-sm group-hover:text-gray-200 transition-colors">
                      {tech.name}
                    </p>
                  </div>
                  {hoveredSkill === tech.name && (
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-8 bg-gray-900/95 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 min-w-48 animate-in slide-in-from-left-2 duration-300 z-50">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Proficiency</span>
                          <span className="text-white font-semibold">{tech.level}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Category</span>
                          <span className="text-gray-200 text-sm">{tech.category}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm">Experience</span>
                          <span className="text-gray-200 text-sm">{tech.experience}</span>
                        </div>
                        <div className="mt-3">
                          <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                            <div
                              className={`h-1.5 bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${tech.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-8 border-transparent border-r-gray-900/95" />
                    </div>
                  )}
                  {hoveredSkill === tech.name && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${tech.color} rounded-full animate-ping`}
                          style={{
                            left: `${30 + Math.random() * 40}%`,
                            top: `${30 + Math.random() * 40}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${1 + Math.random() * 2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-500" />
            <span className="text-sm tracking-widest">EXPERTISE LEVEL</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechSkills
