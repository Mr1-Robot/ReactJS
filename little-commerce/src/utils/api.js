import axios from "axios";
import { defer } from "react-router-dom";

// Fake delay to response
async function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Fetch all products
export async function getAllProducts() {
  await sleep(500);

  try {
    const response = await axios.get("http://localhost:3000/products");

    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Fetch a single product
export async function getProduct(productId) {
  try {
    const data = await getAllProducts();
    const product = data.find((product) => product.id.toString() === productId);

    return product;
  } catch (err) {
    return Error(err.message);
  }
}

// Products Router Loader
export async function productsLoader() {
  const products = getAllProducts();
  return defer({ products });
}

// Single Product Router Loader
export async function singleProductLoader({ params }) {
  const { productId } = params;
  const product = getProduct(productId);

  return defer({ product });
}
