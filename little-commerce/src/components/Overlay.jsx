/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

const STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(50, 50, 50, 0.5)",
  backdropFilter: "blur(1rem)",
  zIndex: 1,
  pointerEvent: "none",
};

export default function Overlay({ onClose }) {
  return (
    <motion.div
      style={STYLES}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0, transition: { delay: 0.2 } }}
      onClick={onClose}
    />
  );
}
