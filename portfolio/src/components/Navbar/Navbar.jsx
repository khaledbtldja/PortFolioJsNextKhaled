"use client";

import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PortFolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <img src="/G.png" alt="Github" />
          </a>
          <a href="/contact">
            <img src="/P.png" alt="contact" />
          </a>
          <a href="/Comment">
            <img src="/chat.png" alt="Comment" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;