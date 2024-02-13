/* eslint-disable react/prop-types */

import classes from "./MotionLayout.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function MotionLayout({ children }) {
  function anime(variants) {
    return {
      initial: "hidden",
      animate: "animate",
      exit: "exit",
      variants,
    };
  }

  const opacity = {
    hidden: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main className={classes.container} {...anime(opacity)}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
