import React from "react";
import BallCanvas from "../Ball/Ball";
import { motion } from "framer-motion";

import "./tech.css";

import { technologies } from ".";

const Tech = () => {
  return (
    <>
      <div className="technologies-container">
        <div className="tech-header">
          <span>My Tech Toolkit</span>
        </div>
        <div className="technologies">
          {technologies.map((technology) => (
            <div className="ball-div" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileInView={{ opacity: 1 }}
        className="projects-scroll"
      >
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/expand-arrow--v1.png"
          alt="expand-arrow--v1"
        />
        <a href="#Projects">Projects</a>
      </motion.div>
    </>
  );
};

export default Tech;
