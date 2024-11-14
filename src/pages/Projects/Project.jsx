import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import Project1 from "../../assets/images/project1_img.png";
import Project2 from "../../assets/images/project2_img.png";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const projectData = [
    {
      title: "Shopping Website",
      badges: ["React Js", "Chakra UI", "JavaScript", "SCSS"],
      image: Project1,
      link: "https://ecommerce-site-clone.pages.dev/",
    },
    {
      title: "Food Recipe Site",
      badges: ["React", "MongoDb", "Nodejs", "Expressjs"],
      image: Project2,
      link: "https://food-app-navy.vercel.app/",
    },
    {
      title: "Employee Leave Management System",
      badges: ["Node", "Express", "MongoDb"],
      image:
        "https://www.scnsoft.com/_default_upload_bucket/leave-management-software.png",
      link: "https://your-third-project-link.com", // Replace with the actual link to your third project
    },
  ];

  return (
    <div className="container project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Here are my 3 Top projects with live links
      </p>

      <motion.div
        className="row"
        id="ads"
        initial="hidden"
        animate="visible"
        variants={projectVariants}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Front End</span>
                <img src={project.image} alt={`Project ${index + 1}`} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                {project.badges.map((badge, i) => (
                  <span key={i} className="card-detail-badge">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">{project.title}</h6>
                </div>
                <a
                  className="ad-btn"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
