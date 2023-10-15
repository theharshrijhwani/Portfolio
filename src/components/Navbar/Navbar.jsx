import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { links } from "./links";
import "./navbar.css";

const Navbar = () => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const [PC, setPC] = useState(true);

  return (
    <header className="header">
      <div className="logo-name">
        <span className="name">Harshvardhan Rijhwani</span>
      </div>
      <nav className="links-div">
        <ul>
          {links.map((itm, idx) => (
            <motion.li
              variants={item}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.2, color: "#dc143c" }}
              key={idx}
            >
              <a href={`#${itm}`}>&lt;{itm} /&gt;</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
