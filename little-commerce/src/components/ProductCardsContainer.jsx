/* eslint-disable react/prop-types */

import classes from "./ProductCardsContainer.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../store/products/productsSlice";
import { motion } from "framer-motion";
import { STAGGER_VARIANTS } from "../utils/motion-variants";
import ProductCard from "./ProductCard";

export default function ProductCardsContainer({ productsData }) {
  const dispatch = useDispatch();

  function dispatchNewItem(itemId) {
    const item = productsData.find((item) => item.id === itemId);

    dispatch(addItem(item));
  }

  return (
    <motion.div
      className={classes["product-list"]}
      variants={STAGGER_VARIANTS}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true }}
      layout
    >
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onDispatch={dispatchNewItem}
        />
      ))}
    </motion.div>
  );
}
