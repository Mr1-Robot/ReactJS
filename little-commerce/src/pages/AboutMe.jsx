import classes from "./AboutMe.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import PathTracker from "../components/PathTracker";
import MotionLayout from "../components/MotionLayout";

export default function AboutMe() {
  return (
    <MotionLayout>
      <motion.section className={classes["about-me"]}>
        <PathTracker path="/products" prev="Products" current="About Me" />
        <h1>Visit Me Here :{")"}</h1>
        <Link to="https://muammar-jsx.netlify.app">Muammar.jsx</Link>
      </motion.section>
    </MotionLayout>
  );
}
