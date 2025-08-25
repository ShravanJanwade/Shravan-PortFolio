import { useState, useEffect } from "react"
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles } from "lucide-react"
import './Education.css'

const educationData = [
  {
    id: "1",
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Khoury College of Computer Sciences, Northeastern University",
    location: "Boston, MA",
    startDate: "September 2025",
    endDate: "December 2027",
    status: "upcoming",
  },
  {
    id: "2",
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication Engineering",
    institution: "Jain College Of Engineering, VTU",
    location: "Belagavi, India",
    startDate: "August 2019",
    endDate: "July 2023",
    status: "completed",
    gpa: "8.63/10",
achievements: ["Bachelor's in ECE", "Consistently strong academic performance", "Relevant technical coursework completed"]
  },
]

const StatusBadge = ({
  status,
  children,
  className = "",
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case "completed":
        return "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
      case "in-progress":
        return "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25"
      case "upcoming":
        return "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/25"
      default:
        return "bg-gradient-to-r from-slate-600 to-slate-700 text-white border border-slate-500/30"
    }
  }

  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${getStatusStyles()} ${className}`}
    >
      <div className="w-2 h-2 bg-white/80 rounded-full mr-2 animate-pulse"></div>
      {children}
    </div>
  )
}

const AchievementBadge = ({ children }) => {
  return (
    <div className="group relative inline-flex items-center px-4 py-2 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-indigo-400/30 rounded-full text-sm font-medium text-indigo-300 transition-all duration-300 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-105">
      <Sparkles className="w-3 h-3 mr-2 text-indigo-400 group-hover:animate-spin" />
      {children}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}

const EducationCard = ({
  children,
  className = "",
  isAnimated = false,
  index = 0,
}) => {
  return (
    <div
      className={`group relative p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl transition-all duration-700 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 ${isAnimated ? (index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0"} ${className}`}
    >
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>

      {/* Corner accents */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/30 rounded-tr-lg group-hover:border-blue-400/60 transition-colors duration-300"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-lg group-hover:border-cyan-400/60 transition-colors duration-300"></div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            const itemId = entry.target.getAttribute("data-id")
            if (itemId) {
              setTimeout(() => {
                setAnimatedItems((prev) => new Set([...prev, itemId]))
              }, Number.parseInt(itemId) * 300)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "upcoming":
        return "Upcoming"
      default:
        return "Unknown"
    }
  }

  return (
    <section className="relative py-24 px-8 md:px-16 lg:px-32 cosmic-bg star-field overflow-hidden">
      {/* Enhanced floating cosmic elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-gradient-to-r from-blue-500 to-black-400 rounded-full animate-float opacity-60 blur-sm"></div>
      <div
        className="absolute top-32 right-20 w-4 h-4 bg-gradient-to-r from-cyan-400 to-black-400 rounded-full animate-float opacity-80"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-5 h-5 bg-gradient-to-r from-black-400 to-blue-500 rounded-full animate-float opacity-70"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-black-500 rounded-full animate-float opacity-50"
        style={{ animationDelay: "6s" }}
      ></div>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} data-animate data-id="0">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative p-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-blue-400/30 animate-pulse-glow">
              <GraduationCap className="w-10 h-10 text-blue-400" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6 tracking-tight">
            Education
          </h2>
          <div className="relative w-32 h-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
          <p className="text-slate-300 text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
            Academic journey through innovation and excellence in technology
          </p>
        </div>

        {/* Enhanced Education Timeline */}
        <div className="relative">
          {/* Premium timeline line with glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 rounded-full opacity-80 shadow-lg shadow-blue-500/30"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 via-cyan-300 to-indigo-300 rounded-full animate-pulse"></div>

          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-20 ${index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-8"}`}
              data-animate
              data-id={edu.id}
            >
              {/* Enhanced timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-blue-500/50 animate-pulse-glow">
                <div className="absolute inset-1 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse"></div>
              </div>

              {/* Premium Education Card */}
              <EducationCard isAnimated={animatedItems.has(edu.id)} index={index}>
                {/* Status and GPA Badges */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <StatusBadge status={edu.status}>{getStatusText(edu.status)}</StatusBadge>
                  {edu.gpa && (
                    <StatusBadge className="bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-lg shadow-emerald-500/25">
                      GPA: {edu.gpa}
                    </StatusBadge>
                  )}
                </div>

                {/* Degree and Field */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-500 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-2xl text-cyan-400 font-semibold tracking-wide">{edu.field}</p>
                </div>

                {/* Institution */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg">
                    <BookOpen className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  </div>
                  <p className="text-slate-200 font-medium text-lg leading-relaxed">{edu.institution}</p>
                </div>

                {/* Location and Duration */}
                <div className="flex flex-wrap gap-6 mb-8 text-slate-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="font-medium">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg">
                        <Award className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-lg font-semibold text-blue-300">Key Highlights</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {edu.achievements.map((achievement, idx) => (
                        <AchievementBadge key={idx}>{achievement}</AchievementBadge>
                      ))}
                    </div>
                  </div>
                )}
              </EducationCard>
            </div>
          ))}
        </div>

        {/* Enhanced bottom decorative element */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
            <span className="text-slate-300 text-lg font-medium">Academic Excellence Journey</span>
            <div
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
