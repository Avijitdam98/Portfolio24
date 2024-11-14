import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Avijit_Dam_CV.pdf"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  const [theme, setTheme] = useTheme();

  // Handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const fadeIn = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>
      <div className="container home-content">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h2>Hi 👋 I'm Avijit Dam</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer!", "MERN Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <div className="home-button">
            <button className="btn btn-hire">
              <a
                href="mailto:avijitdam003@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Hire Me
              </a>
            </button>
            <a className="btn btn-cv" href={Resume} download="AvijitDam_CV.pdf">
              My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
