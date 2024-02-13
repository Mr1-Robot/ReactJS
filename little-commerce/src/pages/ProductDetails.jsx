import classes from "./ProductDetails.module.css";
import { Suspense, useState } from "react";
import { Await, useLoaderData, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addItem } from "../store/products/productsSlice";

import MotionLayout from "../components/MotionLayout";
import PathTracker from "../components/PathTracker";
import Loading from "../components/Loading";

const chevron = (
  <svg
    width={34}
    height={34}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

const cart = (
  <svg
    width={24}
    height={24}
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6262 10.25V5.75C14.6262 4.75544 14.2311 3.80161 13.5279 3.09835C12.8246 2.39509 11.8708 2 10.8762 2C9.88164 2 8.92782 2.39509 8.22456 3.09835C7.52129 3.80161 7.12621 4.75544 7.12621 5.75V10.25M18.4822 8.257L19.7452 20.257C19.8152 20.922 19.2952 21.5 18.6262 21.5H3.12621C2.96841 21.5002 2.81235 21.4671 2.66815 21.4031C2.52396 21.339 2.39485 21.2453 2.28923 21.1281C2.1836 21.0108 2.10382 20.8727 2.05506 20.7226C2.0063 20.5726 1.98966 20.4139 2.00621 20.257L3.27021 8.257C3.29936 7.98056 3.42983 7.7247 3.63646 7.53876C3.84308 7.35281 4.11123 7.24995 4.38921 7.25H17.3632C17.9392 7.25 18.4222 7.685 18.4822 8.257ZM7.50121 10.25C7.50121 10.3495 7.4617 10.4448 7.39137 10.5152C7.32104 10.5855 7.22566 10.625 7.12621 10.625C7.02675 10.625 6.93137 10.5855 6.86104 10.5152C6.79071 10.4448 6.75121 10.3495 6.75121 10.25C6.75121 10.1505 6.79071 10.0552 6.86104 9.98483C6.93137 9.91451 7.02675 9.875 7.12621 9.875C7.22566 9.875 7.32104 9.91451 7.39137 9.98483C7.4617 10.0552 7.50121 10.1505 7.50121 10.25ZM15.0012 10.25C15.0012 10.3495 14.9617 10.4448 14.8914 10.5152C14.821 10.5855 14.7257 10.625 14.6262 10.625C14.5267 10.625 14.4314 10.5855 14.361 10.5152C14.2907 10.4448 14.2512 10.3495 14.2512 10.25C14.2512 10.1505 14.2907 10.0552 14.361 9.98483C14.4314 9.91451 14.5267 9.875 14.6262 9.875C14.7257 9.875 14.821 9.91451 14.8914 9.98483C14.9617 10.0552 15.0012 10.1505 15.0012 10.25Z"
      stroke="#fff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProductDetails() {
  const [imageIndex, setImageIndex] = useState(0);
  const { productId } = useParams();
  const loaderData = useLoaderData();
  const dispatch = useDispatch();

  function increaseImageIndex(productImagesLength) {
    if (imageIndex < productImagesLength - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      return;
    }
  }

  function decreaseImageIndex() {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    } else {
      return;
    }
  }

  return (
    <MotionLayout>
      <section>
        <PathTracker
          path="/products"
          prev="Products"
          current={`Product-${productId}`}
        />
        <Suspense fallback={<Loading />}>
          <Await resolve={loaderData?.product}>
            {(product) => {
              return (
                <div className={classes.container}>
                  <figure className={classes.image}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={imageIndex}
                        src={product.images[imageIndex]}
                        alt={product.title}
                        initial={{ opacity: 0, rotate: 20, scale: 0.9, y: 100 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
                        exit={{ opacity: 0, rotate: -20, scale: 0, y: -100 }}
                      />
                    </AnimatePresence>
                    <div className={classes.buttons}>
                      <button
                        onClick={decreaseImageIndex}
                        disabled={imageIndex === 0}
                      >
                        {chevron}
                      </button>
                      <button
                        onClick={() =>
                          increaseImageIndex(product.images.length)
                        }
                        disabled={imageIndex === product.images.length - 1}
                      >
                        {chevron}
                      </button>
                    </div>
                  </figure>

                  <div className={classes.content}>
                    <div className={classes.text}>
                      <h1>{product.title}</h1>
                      <p className={classes.brand}>{product.brand}</p>
                      <p>{product.description}</p>
                    </div>

                    <h2 className={classes.price}>${product.price}</h2>
                    <button
                      className={classes.cta}
                      onClick={() => dispatch(addItem(product))}
                    >
                      {cart} Add to cart
                    </button>
                  </div>
                </div>
              );
            }}
          </Await>
        </Suspense>
      </section>
    </MotionLayout>
  );
}
