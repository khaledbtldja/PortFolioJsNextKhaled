import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';

export const Links = () => {

  const variante = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariante = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const items = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Comment", path: "/Comment" },
    { name: "Services", path: "/Services" },
  ];

  return (
    <motion.div className="links" variants={variante}>
      {items.map(item => (
        <Link href={item.path} key={item.name} passHref>
          <motion.div
            variants={itemVariante}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a>{item.name}</a>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};
