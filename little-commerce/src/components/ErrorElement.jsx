/* eslint-disable react/prop-types */

import { Link, useRouteError } from "react-router-dom";
import { motion } from "framer-motion";

export default function ErrorElement({ message }) {
  const error = useRouteError();

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h2 style={{ color: "crimson" }}>An Error Occurred!</h2>
        <motion.h1
          style={{ fontSize: "20rem" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {error.status}
        </motion.h1>
        <p>{message || error.data}</p>
        <Link
          to="/"
          style={{
            backgroundColor: "#fff",
            padding: ".5rem",
            marginTop: "1rem",
            borderRadius: ".3rem",
          }}
        >
          Get Found
        </Link>
      </div>
    </div>
  );
}
