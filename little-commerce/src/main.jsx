import React from "react";
import ReactDOM from "react-dom/client";

// COMPONENTS
import App from "./App.jsx";
import ErrorElement from "./components/ErrorElement";
import "./index.css";
import { productsLoader, singleProductLoader } from "./utils/api.js";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails.jsx";
import NewProduct from "./pages/NewProduct";

// ROUTER
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// REACT REDUX
import { Provider } from "react-redux";
import { store } from "./store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
            loader: productsLoader,
          },
          {
            path: ":productId",
            element: <ProductDetails />,
            loader: singleProductLoader,
          },
          {
            path: "add-product",
            element: <NewProduct />,
          },
        ],
      },
      {
        path: "about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
