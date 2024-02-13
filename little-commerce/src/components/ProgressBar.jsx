import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);

  const styles = {
    height: ".5rem",
    backgroundColor: "orangered",
    borderRadius: "2rem",
    scaleX: scrollYProgress,
    position: "fixed",
    inset: "0",
    zIndex: 999999999,
    transformOrigin: 0,
  };

  return <motion.div style={styles} />;
}
