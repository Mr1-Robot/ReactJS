import { useState } from "react";
import classes from "./Navbar.module.css";

import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../utils/data";
import { NavLink } from "react-router-dom";
import { Cart as CartIcon } from "./icons/Icons";
import Logo from "./Logo";
import Cart from "./Cart";

export default function Navbar() {
  const [isNav, setIsNav] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Products items from redux store.
  const productsLength = useSelector((state) => state.products.items.length);

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <NavLink to="/">
              <Logo />
            </NavLink>

            <motion.ul
              className={`${classes.list} ${isNav ? classes.active : ""}`}
            >
              {NAV_LINKS.map((item) => (
                <motion.li key={item.id}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive ? classes.active : ""
                    }
                    onClick={() => setIsNav(false)}
                  >
                    {item.title}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className={classes.actions}>
            <figure
              className={classes.cart}
              onClick={() => setIsCartOpen(true)}
            >
              <CartIcon width={32} height={32} color="#2c2c2c" />
              <motion.span
                className={classes.badge}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {productsLength}
              </motion.span>
            </figure>

            <figure className={classes.burger} onClick={() => setIsNav(!isNav)}>
              {!isNav && (
                <motion.svg
                  width={32}
                  height={32}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </motion.svg>
              )}
              {isNav && (
                <motion.svg
                  width={32}
                  height={32}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <motion.path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              )}
            </figure>
          </div>
        </nav>
      </header>

      {/* CART CONDITIONAL RENDERING  */}
      <AnimatePresence mode="wait">
        {isCartOpen && <Cart onClose={handleCloseCart} />}
      </AnimatePresence>
    </>
  );
}
