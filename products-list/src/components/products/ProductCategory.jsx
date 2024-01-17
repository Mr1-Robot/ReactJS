export default function ProductsCategory({ products }) {
  return (
    <div>
      <p>{products?.category || "PRODCUT_CATEGORY"}</p>
    </div>
  );
}
