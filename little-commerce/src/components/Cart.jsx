/* eslint-disable react/prop-types */

import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
} from "../store/products/productsSlice";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CART_ITEMS } from "../utils/motion-variants";
import { Close } from "./icons/Icons";
import EmptyCart from "../assets/empty-cart.svg";
import Overlay from "./Overlay";
import CartItem from "./CartItem";

export default function Cart({ onClose }) {
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  return (
    <>
      <Overlay onClose={onClose} />
      <motion.div
        className={classes.container}
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 100, delay: 0.2 },
        }}
        exit={{ x: "100%", opacity: 0 }}
      >
        <header className={classes.header}>
          <h1>My Cart ({products?.length})</h1>
          <button onClick={onClose}>
            <Close color="#000" />
          </button>
        </header>
        <motion.ul
          className={classes.items}
          variants={CART_ITEMS}
          initial="hidden"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  {...product}
                  onDispatch={dispatch}
                  onIncreaseQuantity={increaseItemQuantity}
                  onDecreaseQuantity={decreaseItemQuantity}
                  onRemoveItem={removeItem}
                  productQty={product.quantity}
                />
              );
            })}

          {!products ||
            (products.length === 0 && (
              <li className={classes["empty-cart"]}>
                <img src={EmptyCart} width={24} height={24} />
                Cart is empty.
                <Link to="/products" onClick={onClose}>
                  Let&apos;s add some
                </Link>
              </li>
            ))}
        </motion.ul>
        <motion.button
          className={classes.checkout}
          whileHover={{ scale: 1.03 }}
          disabled={products.length === 0}
        >
          <Link to="/order-done">Checkout</Link>
        </motion.button>
      </motion.div>
    </>
  );
}
