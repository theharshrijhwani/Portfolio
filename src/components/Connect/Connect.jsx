import React from "react";

import "./connect.css";
import { SocialIcon } from "react-social-icons";

const Connect = () => {
  return (
    <div className="connect-container" id="Connect">
      <div className="connect-heading">Connect with me!</div>
      <div className="connect-options">
        <div className="form-section">
          <form action="https://formspree.io/f/moqoynlq" method="POST">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email Address" />
            <textarea name="message" placeholder="Your Message"></textarea>
            <button className="button-50" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="social-media">
          <div className="linked-in">
            <SocialIcon url="https://www.linkedin.com/in/harshrijhwani4/" />
          </div>
          <div className="github">
            <SocialIcon url="https://github.com/theharshrijhwani" />
          </div>
          <div className="resume">
            <a href="https://rb.gy/xa8kw">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
