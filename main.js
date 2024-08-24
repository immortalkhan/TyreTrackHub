// Add product to cart
function addToCart(title, price) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ title, price });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${title} added to cart!`);
}
