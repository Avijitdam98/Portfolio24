import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { gsap } from 'gsap';

const About = () => {
  // GSAP animation effect
  React.useEffect(() => {
    gsap.from('.about-content h1', {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out'
    });
    gsap.from('.about-content p', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.8,
      ease: 'power2.out'
    });
  }, []);

  const fadeInAnimation = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0 },
    transition: {
      duration: 0.8,
    },
  };

  const slideInAnimation = {
    hidden: { x: 0 }, // Change to 0 for starting from visible position
    visible: { x: 0 },
  };

  const imagePath = 'https://avatars.githubusercontent.com/u/84221186?v=4';

  return (
    <div className="about" id="about">
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
        <motion.img
  src={imagePath}
  alt="profile_pic"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  whileHover={{ scale: 1.1, rotate: 10 }}
/>
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
        <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.8 }}
>
  About Me
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1.2 }}
>
  <span className="typewriter">
    Hello, I'm Avijit Dam, an enthusiastic and dedicated professional with a strong background in electrical engineering and web development. I hold a B.Tech degree in Electrical Engineering and have accumulated valuable industry experience working as a Project Engineer at Wipro for 8 months.

    Driven by a passion for technology and continuous learning, I completed a professional MERN Stack certification course from Ejob India. Building upon this foundation, I have gained 6 months of hands-on experience as a MERN Stack Developer at Bavistech.

    With a blend of theoretical knowledge and practical skills, I am committed to delivering high-quality, innovative solutions in the field of web development.
  </span>
</motion.p>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            className="btn btn-hire"
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default About;
<div class="about-content">
    <h1>About Me</h1>
    <p><span class="typewriter">Your about me text goes here...</span></p>
</div>