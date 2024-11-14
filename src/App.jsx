import React from "react";
import { Layout } from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Education from "./pages/Education/Education";
import Workexp from "./pages/WorkExp/Workexp";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/Mobile/MobileNav";

const App = () => {
  const[theme]=useTheme()
  return (
    <>
      <div id={theme}>
        <MobileNav/>
        <Layout />
        <div className="container">
          <About />
          <Techstack />
          <Project />
          <Education />
          <Workexp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center stylish-text">
              Made With <span className="heart">❤️</span> Avijit Dam &copy; 2024
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
};

export default App;
