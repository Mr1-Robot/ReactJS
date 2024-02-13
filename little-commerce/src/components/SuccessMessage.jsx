/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Check } from "./icons/Icons";

const STYLES = {
  padding: ".5rem",
  backgroundColor: "#4CAF50",
  color: "#fff",
  borderRadius: ".3rem",
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
};

export default function SuccessMessage({ message }) {
  return (
    <motion.p
      style={STYLES}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: 10 }}
    >
      <Check color="#fff" />
      {message}
    </motion.p>
  );
}
