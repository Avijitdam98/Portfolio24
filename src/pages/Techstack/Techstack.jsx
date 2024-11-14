import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/Techstacklist";
import { motion, AnimatePresence } from "framer-motion";

const Techstack = () => {
  const containerVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, rotate: -15 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.8, rotate: -15 },
  };

  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: -45 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.5, rotate: -45 },
  };

  return (
    <motion.div
      className="container techstack"
      id="techstack"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h2 className="col-12 mt-3 mb-1 text-center">
        Technology Stack
      </motion.h2>
      <hr />
      <motion.p className="pb-3 text-center">
        👉 including Programming Languages, Frameworks, databases, front-end and
        back-end tools, and APIs
      </motion.p>
      <AnimatePresence>
        <div className="row">
          {TechstackList.map((tech) => (
            <motion.div
              key={tech._id}
              className="col-md-3"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <motion.div
                      className="media d-flex justify-content-center"
                      variants={iconVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <div className="align-self-center">
                        {React.createElement(tech.icon, {
                          className: "tech-icon",
                        })}
                      </div>
                    </motion.div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Techstack;
