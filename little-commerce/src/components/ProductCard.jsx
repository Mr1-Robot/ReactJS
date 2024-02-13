/* eslint-disable react/prop-types */
import classes from "./ProductCard.module.css";

import { motion } from "framer-motion";
import { PRODUCT_CARD_VARIANTS } from "../utils/motion-variants";
import texture from "../assets/texture.svg";
import { Cart } from "./icons/Icons";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  images,
  name,
  price,
  description,
  brand,
  onDispatch,
}) {
  return (
    <motion.div
      variants={PRODUCT_CARD_VARIANTS}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      className={classes["product-card"]}
      style={{ background: `url(${texture}), #fff` }}
    >
      <Link to={`/products/${id}`} className={classes.figure}>
        <img src={images[0]} alt="img" />
      </Link>

      <div className={classes.text}>
        <div className={classes["title-price"]}>
          <div>
            <h2>{name}</h2>
            <strong>${price}</strong>
          </div>
          <p className={classes.brand}>{brand}</p>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgb(255 34 0)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onDispatch(id)}
          >
            <Cart width={16} height={16} color="#fff" /> Add to Cart
          </motion.button>

          <motion.div className={classes.link}>
            <Link to={`/products/${id}`}>See Details</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
