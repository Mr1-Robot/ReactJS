import { useState, Suspense } from "react";
import classes from "./Products.module.css";

import { Await, Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { STAGGER_VARIANTS } from "../utils/motion-variants";
import MotionLayout from "../components/MotionLayout";
import PathTracker from "../components/PathTracker";
import { CirclePlus } from "../components/icons/Icons";
import SearchBar from "../components/SearchBar";
import ErrorElement from "../components/ErrorElement";
import Loading from "../components/Loading";
import ProductCardsContainer from "../components/ProductCardsContainer";

export default function Products() {
  const [search, setSearch] = useState("");
  const loaderData = useLoaderData();

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <MotionLayout>
      <section>
        <div className={classes.header}>
          <PathTracker path="/" prev="Home" current="Products" />
          <Link className={classes.link} to="add-product">
            <CirclePlus />
            Add new product
          </Link>
        </div>
        <SearchBar onSearch={handleSearch} />

        <Suspense fallback={<Loading />}>
          <Await resolve={loaderData?.products}>
            {(loadedProducts) => {
              if (loadedProducts.message) {
                return <ErrorElement message={loadedProducts.message} />;
              } else {
                const filterProducts = loadedProducts.filter(
                  (item) =>
                    item.name?.toLowerCase().includes(search.toLowerCase()) ||
                    item.category
                      ?.toLowerCase()
                      .includes(search.toLowerCase()) ||
                    item.brand?.toLowerCase().includes(search.toLowerCase())
                );
                return (
                  <>
                    <motion.div
                      variants={STAGGER_VARIANTS}
                      initial="hidden"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >
                      <ProductCardsContainer productsData={filterProducts} />
                    </motion.div>
                  </>
                );
              }
            }}
          </Await>
        </Suspense>
      </section>
    </MotionLayout>
  );
}
