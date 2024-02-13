import { useState } from "react";
import classes from "./NewProductForm.module.css";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ImagePicker from "./ImagePicker";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import axios from "axios";

export default function NewProductForm() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    images: [],
    category: "",
    brand: "",
    price: "",
  });
  const [msg, setMsg] = useState("");
  const [isDone, setIsDone] = useState({
    status: null,
    message: "",
  });
  const [resetImages, setResetImages] = useState(false);

  function removeFile(imageUrl) {
    setProductData((prev) => ({
      ...prev,
      images: prev.images.filter((f) => f !== imageUrl),
    }));
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    if (
      productData.name === "" ||
      productData.description === "" ||
      productData.images.length === 0 ||
      productData.category === "" ||
      productData.brand === "" ||
      productData.price === ""
    ) {
      setMsg("Enter a valid data, and one image at least.");
      return;
    }

    setMsg("");

    axios
      .post("http://localhost:3000/products", productData)
      .then(() => {
        setIsDone((prev) => ({
          ...prev,
          status: true,
          message: "Product created successfully.",
        }));

        setProductData({
          name: "",
          description: "",
          images: [],
          category: "",
          brand: "",
          price: "",
        });

        setResetImages(true);

        setTimeout(() => {
          navigate("/products");
        }, 3000);
      })
      .catch(() => {
        setIsDone((prev) => ({
          ...prev,
          status: false,
          message: "Adding new product failed.",
        }));
      });

    setResetImages(false);
    setIsDone("");
  }

  return (
    <form
      className={classes.form}
      method="POST"
      onSubmit={handleFormSubmission}
    >
      <p className={classes.field}>
        <label htmlFor="name">Product name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter product name"
          required
          value={productData.name}
          onChange={(e) =>
            setProductData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </p>

      <p className={classes.field}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter product category"
          required
          value={productData.category}
          onChange={(e) =>
            setProductData((prev) => ({ ...prev, category: e.target.value }))
          }
        />
      </p>

      <p className={classes.field}>
        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          id="brand"
          name="brand"
          placeholder="Enter product brand"
          required
          value={productData.brand}
          onChange={(e) =>
            setProductData((prev) => ({ ...prev, brand: e.target.value }))
          }
        />
      </p>

      <p className={classes.field}>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter product description"
          rows={4}
          maxLength={225}
          name="description"
          required
          value={productData.description}
          onChange={(e) =>
            setProductData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </p>

      <p className={classes.field}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter product $price"
          required
          value={productData.price}
          onChange={(e) =>
            setProductData((prev) => {
              const formattedPrice = Number(e.target.value).toFixed(2);
              return {
                ...prev,
                price: formattedPrice,
              };
            })
          }
        />
      </p>

      <ImagePicker
        label="Image"
        name="images"
        onSetProductData={setProductData}
        productData={productData}
        onRemoveFile={removeFile}
        onSuccess={resetImages}
      />

      <AnimatePresence mode="wait">
        {msg && <ErrorMessage message={msg} />}
        {isDone.status === true && <SuccessMessage message={isDone.message} />}
        {isDone.status === false && <ErrorMessage message={isDone.message} />}
      </AnimatePresence>

      <button type="submit">Add Product</button>
    </form>
  );
}
