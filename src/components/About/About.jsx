import React from "react";
import { TypeAnimation } from "react-type-animation";
import Computer from "../Computer/Computer";

import "./about.css";

const About = () => {
  return (
    <div className="about-div" id="About">
      <div className="about-me">I am a software developer</div>
      <div className="typewriter">
        <TypeAnimation
          sequence={[
            "welcome user",
            500,
            "initializing....",
            150,
            'import React, { useEffect } from "react"',
            150,
            "",
            150,
            "import pygame",
            150,
            "console.log('Hello World')",
            150,
            "axios.post('http://localhost:8000', data)",
            150,
            'import { OrbitControls, Preload, useGLTF } from "@react-three/drei";',
            150,
            "",
          ]}
          repeat={Infinity}
        />
      </div>
      <div className="tagline">
        <TypeAnimation
          sequence={[3500, "Crafting web spaces with style and substance"]}
          cursor="false"
          style={{ animation: "colors 20s ease infinite" }}
        />
      </div>
      <div className="info">
        Hi, I am Harshvardhan Rijhwani. I am a full-stack web and app developer.
        <br />I am well-versed in both front-end and back-end development,
        <br />
        and I have a passion for building beautiful and functional web
        applications.
        <br />
        Explore my portfolio and get in touch.
      </div>
    </div>
  );
};

export default About;
