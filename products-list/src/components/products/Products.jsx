import { useState } from "react";

import ProductCard from "./ProductCard";
import SearchBar from "../search-bar/SearchBar";
import { PRODUCTS } from "../../../utils/data";

export default function Products() {
  const [filterText, setFilterText] = useState("");
  const [stock, setStock] = useState(false);

  function handleFilter(enteredText) {
    setFilterText(enteredText);
  }

  function handleStockFilter() {
    setStock(!stock);
  }

  const filteredProducts = PRODUCTS.filter((product) => {
    const text = filterText.toLowerCase();
    const title = product.title.toLowerCase().includes(text);
    const category = product.category.toLowerCase().includes(text);
    return category || title;
  });

  const stocked = filteredProducts.filter(
    (product) => product.isStocked === stock
  );

  return (
    <>
      <div className="search">
        <SearchBar onFilter={handleFilter} onStockFilter={handleStockFilter} />
      </div>
      <div className="products">
        {stock &&
          stocked.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        {!stock &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </>
  );
}
