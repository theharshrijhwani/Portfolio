import React from "react";
import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import { SocialIcon } from "react-social-icons";

import { projects } from ".";
import { github } from "./imgs";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-containter" id="Projects">
      <div className="project-heading">&lt; My Projects /&gt;</div>
      <div className="projects">
        {projects.map((item, idx) => (
          <ProjectCard
            key={idx}
            name={item.name}
            image={item.img}
            description={item.description}
            stack={item.stack}
            git={item.git}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ name, image, description, stack, git }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: easeOut,
        type: "spring",
        delayChildren: 5,
      }}
    >
      <motion.div
        className="project-name"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", ease: easeOut }}
      >
        {name}
      </motion.div>
      <motion.div
        className="project-img"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring", ease: easeOut }}
      >
        <img src={image} />
      </motion.div>
      <motion.div
        className="project-desc"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring", ease: easeOut }}
      >
        {description}
      </motion.div>
      <motion.div
        className="project-stack"
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, type: "spring", ease: easeOut }}
      >
        <ul>
          {stack.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </motion.div>
      <div className="git-wrapper">
        <div className="github-button">
          <SocialIcon url={git} />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
