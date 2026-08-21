// Destructuring
const product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
};

function getProductInfo({ name, price, inStock }) {
  return `${name} costs $${price} - ${inStock ? "In Stock" : "Not In Stock"}`;
}
console.log(getProductInfo(product));
