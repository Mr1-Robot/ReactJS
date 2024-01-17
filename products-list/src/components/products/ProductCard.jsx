export default function ProductCard({
  image,
  category,
  title,
  description,
  price,
  isStocked,
}) {
  const fixedPrice = Number(price).toFixed(2);
  return (
    <div className="product-card">
      <img
        src={image}
        alt={`Photo of ${title} product.`}
        width={400}
        height={300}
      />
      <div className="card-text">
        <div>
          <div className="heading">
            <p>{category}</p>
            <h1>{title}</h1>
          </div>
          <p className="description">{description}</p>
          {!isStocked && <p className="stock">Out of stock!</p>}
        </div>
        <div className="price">
          ${fixedPrice !== "NaN" ? fixedPrice : price}
        </div>
      </div>
    </div>
  );
}
