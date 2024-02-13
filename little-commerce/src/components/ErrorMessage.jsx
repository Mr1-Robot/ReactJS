/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { Warning } from "./icons/Icons";

const STYLES = {
  backgroundColor: "crimson",
  color: "#fff",
  padding: ".5rem",
  borderRadius: ".3rem",
  display: "flex",
  alignItems: "center",
  gap: ".5rem",
};

export default function ErrorMessage({ message }) {
  return (
    <motion.p
      style={STYLES}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
    >
      <Warning color="#fff" />
      {message || "An error occurred."}
    </motion.p>
  );
}
