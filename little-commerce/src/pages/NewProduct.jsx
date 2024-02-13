import classes from "./NewProduct.module.css";

import MotionLayout from "../components/MotionLayout";
import NewProductForm from "../components/NewProductForm";
import PathTracker from "../components/PathTracker";

export default function NewProduct() {
  return (
    <MotionLayout>
      <section>
        <PathTracker path="/products" prev="Products" current="New Product" />
        <div className={classes.form}>
          <h1>Add New Product</h1>
          <NewProductForm />
        </div>
      </section>
    </MotionLayout>
  );
}
