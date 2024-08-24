// Retrieve cart items from localStorage
function getCartItems() {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
}

// Display cart items on the cart page
function displayCartItems() {
  const cartItems = getCartItems();
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  let totalPrice = 0;

  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("col-12", "mb-4");
    cartItemElement.innerHTML = `
            <div class="card bg-black text-white h-100">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <h3 class="text-warning">₹${item.price}</h3>
                    <button class="btn btn-danger" onclick="removeFromCart('${item.title}')">Remove</button>
                </div>
            </div>
        `;

    cartItemsContainer.appendChild(cartItemElement);
    totalPrice += item.price;
  });

  totalPriceElement.textContent = `Total: ₹${totalPrice}`;
}

// Remove item from the cart
function removeFromCart(itemTitle) {
  let cartItems = getCartItems();
  cartItems = cartItems.filter((item) => item.title !== itemTitle);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCartItems();
}

// Placeholder for checkout function
function checkout() {
  alert("Proceeding to checkout...");
}

// Load cart items when the page is loaded
window.onload = displayCartItems;
