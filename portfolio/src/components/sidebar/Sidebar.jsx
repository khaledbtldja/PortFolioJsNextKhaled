"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Links } from "./links/links.jsx";
import "./sidebar.scss";
import { ToggleButton } from "./toggleButton/ToggleButton";

function Sidebar() {
  const [open, setOpen] = useState(false);

  const variante = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(40px at 100px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variante}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
