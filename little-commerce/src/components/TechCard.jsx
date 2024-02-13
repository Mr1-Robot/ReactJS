import classes from "./TechCard.module.css";
import { motion } from "framer-motion";
import { TECH_CARD_VARIANTS } from "../utils/motion-variants";

export default function TechCard({ image, title, description, color }) {
  return (
    <motion.div
      className={classes.card}
      style={{ backgroundColor: color }}
      variants={TECH_CARD_VARIANTS}
      whileHover={{ scale: 1.05, filter: "drop-shadow(-6px -6px 0 #444444)" }}
    >
      <figure>
        <img src={image} alt={`Logo of ${title}`} />
      </figure>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}
