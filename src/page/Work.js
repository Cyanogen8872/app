import React, { Component } from 'react'
import { AnimatePresence, motion } from "framer-motion";

function Work() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      >
      <h1>About</h1>
      <p>
        Let's animate transitions between React Router routes with Framer Motion
      </p>
      <h2>Framer Motion</h2>
      <p>
        Framer Motion is a great library for animations in React easily and
        quickly.
      </p>
      <h2>React Router</h2>
      <p>One of the most well known routers in the React ecosystem.</p>
    </motion.div>
  );
}

const pageVariants = {
  initial: {
    clipPath: "circle(0px at 40px 40px)",
    transition: { duration: 0 }
  },
  in: {
    clipPath: "circle(5000px at 40px 40px)",
    transition: { duration: 1, delay: 1 }
  },
  out: {
    clipPath: "circle(0px at 40px 40px)",
    transition: { duration: 1 }
  }
};

export default Work