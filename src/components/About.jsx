import { useState, useEffect, useRef } from "react"

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [activeSkill, setActiveSkill] = useState(null)
  const sectionRef = useRef(null)

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
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const majorSkills = [
    {
      id: 1,
      title: "Problem Solving",
      subtitle: "Algorithms & Logic",
      description: "Breaking down complex problems into elegant, efficient solutions",
      tech: ["Data Structures", "Algorithms", "Optimization", "Logic Design"],
      icon: "⚡",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      delay: 0,
    },
    {
      id: 2,
      title: "Full Stack Development",
      subtitle: "End-to-End Solutions",
      description: "Frontend, Backend, and Database - complete application development",
      tech: ["React/Next.js", "Node.js/Python", "PostgreSQL/MongoDB", "REST/GraphQL APIs"],
      icon: "🚀",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      delay: 200,
    },
    {
      id: 3,
      title: "System Design",
      subtitle: "Scalable Architecture",
      description: "Designing robust, scalable systems that handle real-world complexity",
      tech: ["Microservices", "Load Balancing", "Caching", "Distributed Systems"],
      icon: "🏗️",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      delay: 400,
    },
    {
      id: 4,
      title: "Creative Thinking",
      subtitle: "Innovation & Design",
      description: "Transforming ideas into intuitive, user-centered digital experiences",
      tech: ["UI/UX Design", "Creative Solutions", "Innovation", "User Experience"],
      icon: "💡",
      gradient: "from-orange-500 via-yellow-500 to-amber-500",
      delay: 600,
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden flex items-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Static Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />

        {/* Mouse Follower */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-cyan-500/3 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">Full-Stack Developer</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6">
              Creative Problem Solver
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming complex challenges into elegant solutions through innovative thinking and technical expertise
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Central Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-1/2" />

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {majorSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={`relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${skill.delay}ms` }}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* Skill Container */}
                <div className="relative group cursor-pointer">
                  {/* Icon Circle */}
                  <div
                    className={`relative w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${skill.gradient} p-0.5 transition-all duration-500 ${
                      activeSkill === skill.id ? "scale-110 rotate-12" : "group-hover:scale-105"
                    }`}
                  >
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-3xl">
                      {skill.icon}
                    </div>

                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.gradient} opacity-0 blur-xl transition-opacity duration-500 ${
                        activeSkill === skill.id ? "opacity-30" : ""
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{skill.title}</h3>
                      <p className="text-sm text-cyan-400 font-medium">{skill.subtitle}</p>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed px-2">{skill.description}</p>

                    {/* Animated Skill Indicators */}
                    <div className="space-y-3 px-2">
                      {skill.tech.map((tech, i) => (
                        <div
                          key={i}
                          className={`relative overflow-hidden transition-all duration-500 ${
                            activeSkill === skill.id ? "opacity-100" : "opacity-70"
                          }`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-300 font-medium">{tech}</span>
                            <div className="flex space-x-1">
                              {[...Array(4)].map((_, dotIndex) => (
                                <div
                                  key={dotIndex}
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                    activeSkill === skill.id
                                      ? `bg-gradient-to-r ${skill.gradient} animate-pulse`
                                      : "bg-gray-600"
                                  }`}
                                  style={{
                                    transitionDelay: `${i * 100 + dotIndex * 50}ms`,
                                    animationDelay: `${dotIndex * 200}ms`,
                                  }}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Animated Progress Line */}
                          <div className="mt-1 h-px bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ${
                                activeSkill === skill.id ? "w-full" : "w-0"
                              }`}
                              style={{ transitionDelay: `${i * 150}ms` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Connection Dots */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-500 rounded-full opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`flex flex-wrap justify-center gap-12 mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              2+
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
          </div>
        
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              ∞
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Problems Solved</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
