export function formatPrice(
  price,
  options = { currency: "USD", notation: "compact" }
) {
  const { currency, notation } = options;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(price);
}
