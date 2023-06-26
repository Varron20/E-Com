// script.js

// Get the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Get the cart items and cart total elements
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.querySelector('#cart-total .price');

// Initialize cart items and total
let cartItems = [];
let cartTotal = 0;

// Function to update the cart total
function updateCartTotal() {
  cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Function to render the cart items
function renderCartItems() {
  cartItemsElement.innerHTML = '';

  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item.name;
    cartItemsElement.appendChild(li);
  });
}

// Function to handle adding an item to the cart
function addToCart(event) {
  const productCard = event.target.closest('.product-card');
  const productName = productCard.querySelector('h3').textContent;
  const productPrice = parseFloat(productCard.querySelector('.price').textContent.slice(1));

  const newItem = { name: productName, price: productPrice };
  cartItems.push(newItem);
  cartTotal += productPrice;

  renderCartItems();
  updateCartTotal();
}

// Attach event listeners to "Add to Cart" buttons
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});
// script.js

// ...

// script.js

// ...

// Function to remove an item from the cart
function removeFromCart(event) {
    const button = event.target;
    const listItem = button.closest('li');
    const itemName = listItem.dataset.name;
    const itemPrice = parseFloat(listItem.dataset.price);
    
    listItem.remove();
    
    // Find the item in the cartItems array
    const itemIndex = cartItems.findIndex(item => item.name === itemName && item.price === itemPrice);
    if (itemIndex > -1) {
      cartItems.splice(itemIndex, 1);
      cartTotal -= itemPrice;
      updateCartTotal();
    }
  }
  
  // Function to create a cart item element
  function createCartItemElement(item) {
    const li = document.createElement('li');
    li.textContent = item.name;
    li.dataset.name = item.name;
    li.dataset.price = item.price.toFixed(2);
  
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', removeFromCart);
  
    li.appendChild(removeButton);
    return li;
  }
  
  // Function to render the cart items
  function renderCartItems() {
    cartItemsElement.innerHTML = '';
  
    cartItems.forEach((item) => {
      const cartItemElement = createCartItemElement(item);
      cartItemsElement.appendChild(cartItemElement);
    });
  }
  
  // ...
// script.js

// script.js

// ...

// Function to handle navigation scroll
function handleNavigationScroll(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    const targetOffset = targetElement.offsetTop;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  }
}

// Attach event listener to navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', handleNavigationScroll);
})
;
// script.js

// ...

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Retrieve form data
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const addressInput = document.getElementById('address');

  const name = nameInput.value;
  const email = emailInput.value;
  const address = addressInput.value;

  // Perform validation
  if (!name || !email || !address) {
    alert('Please fill in all fields');
    return;
  }

  // Process the checkout
  // You can perform further actions here, such as sending the order details to a server, updating the database, etc.

  // Reset the form
  nameInput.value = '';
  emailInput.value = '';
  addressInput.value = '';

  alert('Thank you for your order!');
}

// Attach event listener to the checkout form
const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', handleFormSubmit);
// script.js

// ...

// Function to handle checkout button click
function handleCheckoutButtonClick() {
  const formContainer = document.getElementById('checkout-form-container');
  const isFormVisible = formContainer.style.display !== 'none';

  if (isFormVisible) {
    formContainer.style.display = 'none';
  } else {
    formContainer.style.display = 'block';
  }
}

// Attach event listener to the checkout button
const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', handleCheckoutButtonClick);
// script.js

// ...


