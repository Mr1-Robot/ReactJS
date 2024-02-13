/* eslint-disable react/prop-types */

import classes from "./CartItem.module.css";
import { motion } from "framer-motion";
import { CART_ITEM } from "../utils/motion-variants";
import { Close, Minus, Plus } from "./icons/Icons";

export default function CartItem({
  id,
  name,
  images,
  totalPrice,
  onDispatch,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
  productQty,
}) {
  return (
    <motion.li className={classes.item} variants={CART_ITEM}>
      <img src={images[0]} width={96} height={96} />
      <h2>{name}</h2>
      <p className={classes.actions}>
        <motion.button
          whileHover={{
            backgroundColor: "rgb(255, 69, 0)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDispatch(onDecreaseQuantity(id))}
        >
          <Minus />
        </motion.button>
        <span>({productQty})</span>
        <motion.button
          whileHover={{
            backgroundColor: "rgb(255, 69, 0)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDispatch(onIncreaseQuantity(id))}
        >
          <Plus />
        </motion.button>
      </p>
      <span>${Number(totalPrice).toFixed(2)}</span>
      <button
        onClick={() => onDispatch(onRemoveItem(id))}
        style={{ color: "crimson" }}
      >
        <Close color="crimson" />
      </button>
    </motion.li>
  );
}
