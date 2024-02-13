export const STAGGER_VARIANTS = {
  hidden: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export const TECH_CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24, x: 24 },
  animate: { opacity: 1, y: 0, x: 0, transition: { duration: 0.4 } },
};

export const PRODUCT_CARD_VARIANTS = {
  hidden: { opacity: 0, y: 32, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export const CART_ITEM = {
  hidden: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

export const CART_ITEMS = {
  hidden: {},
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};
