import { Carousel } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import LeetcodeDays from "../assets/LeetCodeDays.png";
import LeetcodeBadge from "../assets/LeetcodeAnnual.png";
import hackerRank from "../assets/HackerRank.png";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
function ProblemSolving() {
  return (
    <div>
      <motion.div
        variants={textVariant()}
        className="flex items-center space-x-4"
      >
        <div className="flex flex-col">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            My Problem Solving Skills
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Programming Platforms
          </h2>
        </div>
        <span className="flex items-center">
          <a href="https://leetcode.com/u/shravanJanwade/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nGNgIBH4GEtyGWrJvFNTU/lvbyx5goGawMJChlNPQ/azurrafxDWVFP4TTPD1dRU/zubSi2miuEqKgzsepqyH2GGg7CtkdQ2ahr+CdlwL2uZvVQzXFcD1fCWNM3/L9db/3ux2vjw//3yHJQZrokaLI0pmv9fbbCB45drTV/dWmzGR475bLoaciiGp/orvXm5xmj/i9Um919tsEa25MXLVVo8JBou+wHZcDcL6UPICp6v0i97tR7JkjWmz/6v0mIjy3AvK5kj2BQ+X2WY+3K91T+4Jav1Gwiarq8p+xrZcD9bmeP41L9Yo5/2cp3Vv5frLf8+X21sjtdwRxOJJciGBzjInCboIgYGhrurjPn/L9LjJqhQQ1X+F8xwd0vZ2wxUBmyqqirQIkD5/8w0Bi5kyS0bNjhu3rjh/eaNG/4Tgf9s3rBhDorpHBwcsiIiwv9BWE9N5A+67cuWLN60ZNHC/8TjBb/QzWAU5uf4z87O9p+fl/1/ko+QG4oFyxaZL5o/787C+fMeE4MXL144GSOMLDS5P4AsAGFLTe5fnUnCUhQGOypwNeGLEOBjB1sAwra6PD/rQ7kkCOm7OUu28eZs+WqiLHEy5FvIzYViyY/KCG5xXOrvzpY7/HyJ/H8QvjNTNp0oSxz1eZYjW2Kjy/0jN5RHFF3dvblyJ2GGg/CN2bLhRFkA9okBz0pkS+z0eH6c6pbRAcndmCkpcm+ezFVkw2/Pkp3LQCpw1udejWzJ2Ymy/x4vlPvxdLHcP2TDb82WXUSy4TDgasy7UlqU43+wDd//Z4sRhoLwM0oNh4Ebs6Sd7s6Tu/F4gdwfkCWPF8n9vT9P9uH12TJRxBgAABE1rBTkH+ppAAAAAElFTkSuQmCC"
              alt="icon"
              className="w-6 h-6 mt-5 ml-5"
            />
          </a>
          <a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD10lEQVR4nO1YTYgdRRDuaMSAiIKKQUUP4kUETVY9KDqZ6pmqdhVvuYgK/h38uyshPjwtnkIUhcW3U/U2/qCiB6MoKgYUQRFU8BD/iKDJxd8kmyUuxF2pyZvdntk3Oz1ZwSfMBwPvUdVV39fTXV09xnTo0KFDhw4dOvw7sEJL+sSS3gzPw4VW6HFgfBeE9lvGn0HoMAj+AkJfWqYMJL0l2hdtPNV8E9MTZ8SZm9RYVuirYezDw1z7NXfC+JhyUU4Fv0YBVvAoCP618n+tB7+xjK4teSUOjN+G5DjJBY+2EOA9THMgNBULTqSz6VnJdHIOCF5vmZ4BxgXPd1ev1zutifj2V7efrmOXyTEugNDTNnPXaew8xyC51go+BUzHRnEKFgCMXySD5NLaWRScAKFD3tt42SyZDXX+KhAYX1mZHDwIGW2tjd+fvEyX1ikJyF/vwJ5X61yMGbgtIDjvjdtR5wuMT3jLYj7l9Jqm+NGLt51vmb5vJ4BpcRunNzYF98Y96Qk4MWpWdVmA4N+egF5o/HwDMy0GC9Ddb1rghv7tZ5fXK75d9QGhd/x9pWvdtIAVei9YQJLhHW2C52MZXyotwRl3ZWFLZ9OrylWFXmgbP2a6K1hAtMdd0jYBCN3vk9T6vWxj3OHbYsF72se/9eJGAeuBVqRK7f6gsFmmD0uVZOC2mHEDnDy5vfMDf1i2MR3wbW7GXWDGDRFHm8plmI4VNr/M5gJ2uzPNuCHaF22sHv+FrXJiL62nf1qFsH5nfB/zvxdQlCgQfKtq1L5FN6cJwLBv8Wv9d4VNf/u2tforHxFPbrZMr40g/qZyLjkn/eSiCvkT2h2aQFjBuytJdhU2ENxdFufuDI0bcXSucintIZ7cPJoE09yyI+MfoUlykozvr4ylRb/WxzN4td/LaFvRJrYV+tOb2CNrOOKPnoBfg8lntLXUqDHtXeXjLVH1VVEmNL7Q717sA/WOTJ97jr+FXgst06fe7M/F4i6v+iVZckXlPPhEx4bk0NXgxf+s3lGwP6qOr3lBEZoprf0M763zTxgfKO8T7Ifc4vxzBISm6x0F49Jmy+imOl9t+LRtLhFi2tlIRrBXLha0d1VF8UUPXFSuYC5qSEBT3oDjOkvA7r5kQKSXd51hy7incgtbAKaHm8h7Ih4pzyrOW8HZYWynuTTn8O0e92Z/qjn6ktlgB+4h3e1hhwl+pJ2oaYn8hsb4cUgO/dSSCD7YKoF2jJbxUcv4hn4HAqGfdKZUGDB9DYzPWqZtZp0AwRiYnhvGPJLnyHNpTnxd39ZYdq8dOnTo0KFDhw7mv8c/hXdKvMBwaFwAAAAASUVORK5CYII="
              alt="icon"
              className="w-9 h-9 mt-6 ml-5"
            />
          </a>
          <a>
            <img src={hackerRank} alt="icon" className="w-9 h-9 mt-6 ml-5" />
          </a>
        </span>
      </motion.div>

      <Carousel
        className="rounded-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-14 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src={LeetcodeDays}
          alt="image 1"
          className="h-96 w-full object-cover"
        />
        <img
          src={LeetcodeBadge}
          alt="image 2"
          className="h-100 w-full object-cover mt-10"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-96 w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
export default SectionWrapper(ProblemSolving, "ProblemSolving");
