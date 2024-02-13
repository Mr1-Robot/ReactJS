import classes from "./Home.module.css";
import { motion } from "framer-motion";
import { TECH_CARDS } from "../utils/data";
import { STAGGER_VARIANTS } from "../utils/motion-variants";

import TechCard from "../components/TechCard";
import MotionLayout from "../components/MotionLayout";

export default function Home() {
  return (
    <MotionLayout>
      <motion.section className={classes.home}>
        <header>
          <h1>Hello Friend, i&apos;m just practicing.</h1>
          <p>
            It&apos;s a small commerce app that showcases state management,
            demonstrating the technologies I have utilized here.
          </p>
        </header>

        <motion.article
          className={classes["cards-container"]}
          variants={STAGGER_VARIANTS}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[...TECH_CARDS].map((item) => (
            <TechCard key={item.id} {...item} />
          ))}
        </motion.article>
      </motion.section>
    </MotionLayout>
  );
}
