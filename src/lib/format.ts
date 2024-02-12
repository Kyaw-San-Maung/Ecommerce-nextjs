export function formatPrice(price: number) {
  return (price / 100).toLocaleString("eng-US", {
    style: "currency",
    currency: "USD",
  });
}
