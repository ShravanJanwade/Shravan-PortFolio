
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Carousel } from "@material-tailwind/react";
import LeetcodeDays from "../assets/LeetcodeDays1.png";
import LeetcodeBadge from "../assets/LeetcodeAnnual.png";
import LeetcodeBadges from "../assets/LeetcodeBadges.png";
import hackerRank from "../assets/HackerRank.png";
import GFG from "../assets/GeeksForGeeks.png";
import { SectionWrapper } from "../hoc";
import DialogWithImage from "./CarouselDialog";
const textVariant = () => ({
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: 0.2,
    },
  },
})

const PremiumCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % children.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [children.length, isAutoPlaying])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % children.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  return (
    <div
      className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/50 via-blue-950/30 to-indigo-950/50 backdrop-blur-sm border border-blue-500/20 shadow-2xl"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center p-8">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {children[activeIndex]}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-blue-400/30 group"
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-blue-400/30 group"
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index
                ? "w-8 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/50"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const AchievementCard = ({
  mainImg,
  thumbnailImg,
  website,
  websiteUrl,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
          <img
            src={mainImg || "/placeholder.svg"}
            alt={`${website} achievement`}
            className="max-w-full max-h-80 object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {website}
        </h3>
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-400/30 group"
        >
          <span>View Profile</span>
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

function ProblemSolving() {
  return (
    <section className="relative py-20 px-8 lg:px-8 xl:px-8 2xl:px-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 space-y-6 lg:space-y-0"
        >
          <div className="space-y-4">
            <motion.p
              className="text-blue-400/80 text-sm md:text-base uppercase tracking-[0.3em] font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My Problem Solving Skills
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Programming Platforms
            </motion.h2>
          </div>

          {/* Platform icons */}
          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://leetcode.com/u/shravanJanwade/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-500/20 group-hover:border-orange-400/40 transition-all duration-300 group-hover:scale-110">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nGNgIBH4GEtyGWrJvFNTU/lvbyx5goGawMJChlNPQ/azurrafxDWVFP4TTPD1dRU/zubSi2miuEqKgzsepqyH2GGg7CtkdQ2ahr+CdlwL2uZvVQzXFcD1fCWNM3/L9db/3ux2vjw//3yHJQZrokaLI0pmv9fbbCB45drTV/dWmzGR475bLoaciiGp/orvXm5xmj/i9Um919tsEa25MXLVVo8JBou+wHZcDcL6UPICp6v0i97tR7JkjWmz/6v0mIjy3AvK5kj2BQ+X2WY+3K91T+4Jav1Gwiarq8p+xrZcD9bmeP41L9Yo5/2cp3Vv5frLf8+X21sjtdwRxOJJciGBzjInCboIgYGhrurjPn/L9LjJqhQQ1X+F8xwd0vZ2wxUBmyqqirQIkD5/8w0Bi5kyS0bNjhu3rjh/eaNG/4Tgf9s3rBhDorpHBwcsiIiwv9BWE9N5A+67cuWLN60ZNHC/8TjBb/QzWAU5uf4z87O9p+fl/1/ko+QG4oFyxaZL5o/787C+fMeE4MXL144GSOMLDS5P4AsAGFLTe5fnUnCUhQGOypwNeGLEOBjB1sAwra6PD/rQ7kkCOm7OUu28eZs+WqiLHEy5FvIzYViyY/KCG5xXOrvzpY7/HyJ/H8QvjNTNp0oSxz1eZYjW2Kjy/0jN5RHFF3dvblyJ2GGg/CN2bLhRFkA9okBz0pkS+z0eH6c6pbRAcndmCkpcm+ezFVkw2/Pkp3LQCpw1udejWzJ2Ymy/x4vlPvxdLHcP2TDb82WXUSy4TDgasy7UlqU43+wDd//Z4sRhoLwM0oNh4Ebs6Sd7s6Tu/F4gdwfkCWPF8n9vT9P9uH12TJRxBgAABE1rBTkH+ppAAAAAElFTkSuQmCC"
                  alt="LeetCode"
                  className="w-6 h-6"
                />
              </div>
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/shravanjanwade2252/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300 group-hover:scale-110">
                <img
src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD10lEQVR4nO1YTYgdRRDuaMSAiIKKQUUP4kUETVY9KDqZ6pmqdhVvuYgK/h38uyshPjwtnkIUhcW3U/U2/qCiB6MoKgYUQRFU8BD/iKDJxd8kmyUuxF2pyZvdntk3Oz1ZwSfMBwPvUdVV39fTXV09xnTo0KFDhw4dOvw7sEJL+sSS3gzPw4VW6HFgfBeE9lvGn0HoMAj+AkJfWqYMJL0l2hdtPNV8E9MTZ8SZm9RYVuirYezDw1z7NXfC+JhyUU4Fv0YBVvAoCP618n+tB7+xjK4teSUOjN+G5DjJBY+2EOA9THMgNBULTqSz6VnJdHIOCF5vmZ4BxgXPd1ev1zutifj2V7efrmOXyTEugNDTNnPXaew8xyC51go+BUzHRnEKFgCMXySD5NLaWRScAKFD3tt42SyZDXX+KhAYX1mZHDwIGW2tjd+fvEyX1ikJyF/vwJ5X61yMGbgtIDjvjdtR5wuMT3jLYj7l9Jqm+NGLt51vmb5vJ4BpcRunNzYF98Y96Qk4MWpWdVmA4N+egF5o/HwDMy0GC9Ddb1rghv7tZ5fXK75d9QGhd/x9pWvdtIAVei9YQJLhHW2C52MZXyotwRl3ZWFLZ9OrylWFXmgbP2a6K1hAtMdd0jYBCN3vk9T6vWxj3OHbYsF72se/9eJGAeuBVqRK7f6gsFmmD0uVZOC2mHEDnDy5vfMDf1i2MR3wbW7GXWDGDRFHm8plmI4VNr/M5gJ2uzPNuCHaF22sHv+FrXJiL62nf1qFsH5nfB/zvxdQlCgQfKtq1L5FN6cJwLBv8Wv9d4VNf/u2tforHxFPbrZMr40g/qZyLjkn/eSiCvkT2h2aQFjBuytJdhU2ENxdFufuDI0bcXSucintIZ7cPJoE09yyI+MfoUlykozvr4ylRb/WxzN4td/LaFvRJrYV+tOb2CNrOOKPnoBfg8lntLXUqDHtXeXjLVH1VVEmNL7Q717sA/WOTJ97jr+FXgst06fe7M/F4i6v+iVZckXlPPhEx4bk0NXgxf+s3lGwP6qOr3lBEZoprf0M763zTxgfKO8T7Ifc4vxzBISm6x0F49Jmy+imOl9t+LRtLhFi2tlIRrBXLha0d1VF8UUPXFSuYC5qSEBT3oDjOkvA7r5kQKSXd51hy7incgtbAKaHm8h7Ih4pzyrOW8HZYWynuTTn8O0e92Z/qjn6ktlgB+4h3e1hhwl+pJ2oaYn8hsb4cUgO/dSSCD7YKoF2jJbxUcv4hn4HAqGfdKZUGDB9DYzPWqZtZp0AwRiYnhvGPJLnyHNpTnxd39ZYdq8dOnTo0KFDhw7mv8c/hXdKvMBwaFwAAAAASUVORK5CYII="
                  alt="GeeksforGeeks"
                  className="w-8 h-8"
                />
              </div>
            </a>

            <a
              href="https://www.hackerrank.com/profile/shravanjanwade21"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/20 group-hover:border-green-400/40 transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.141-.115-.258-.258-.258H8.963c-.141 0-.258.115-.258.258v9.886c0 .143.117.258.258.258h.742c.141 0 .258-.115.258-.258v-4.629h4.074v4.629c0 .143.115.258.258.258h.74c.143 0 .258-.115.258-.258V7.057c0-.141-.115-.258-.258-.258h-.74z" />
                </svg>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Carousel section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <PremiumCarousel>
            <AchievementCard
              mainImg={LeetcodeDays}
              website="LeetCode"
              websiteUrl="https://leetcode.com/u/shravanJanwade/"
            />
            <AchievementCard
              mainImg={LeetcodeBadges}
              website="LeetCode"
              websiteUrl="https://leetcode.com/u/shravanJanwade/"
            />
            <AchievementCard
              mainImg={GFG}
              website="Geeks For Geeks"
              websiteUrl="https://www.geeksforgeeks.org/user/shravanjanwade2252"
            />
          </PremiumCarousel>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSolving
