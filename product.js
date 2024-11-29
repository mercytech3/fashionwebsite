const getProductsAndPrice = function () {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://fakestoreapi.com/products');
  request.send();

  // Event listener for when the data loads
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText); // Parse the JSON response
    console.log(data); // Log the data to check its structure

    // Reference to the product list container
    const productList = document.getElementById('product-list');

    // Loop through each product and display it
    data.forEach(product => {
      // Filter for male, female, and other gadget categories
      if (product.category.toLowerCase().includes('men') || 
          product.category.toLowerCase().includes('women') ||
          product.category.toLowerCase().includes('electronics')) {

        // Convert the price from USD to Naira (rough exchange rate of 1 USD = 800 NGN)
        const priceInNaira = (product.price * 800).toFixed(2);

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Create product name and price
        const productName = document.createElement('h3');
        productName.textContent = product.title;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ₦${priceInNaira}`; // Price in Naira

        // Create product image
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');

        // Create Add to Cart button
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => addToCart(product, priceInNaira));

        // Append elements to the product item
        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(addToCartButton);

        // Append product item to the product list
        productList.appendChild(productItem);
      }
    });
  });
};

// Cart array to store products
let cart = [];

// Function to add products to the cart
function addToCart(product, priceInNaira) {
  // Add product to cart array
  cart.push({ product, priceInNaira });

  // Update the cart UI
  updateCart();
}

// Function to update the cart UI
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  // Clear previous cart items
  cartItems.innerHTML = '';

  // Add all cart items to the list
  let total = 0;
  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.product.title} - ₦${item.priceInNaira}`;
    cartItems.appendChild(cartItem);
    total += parseFloat(item.priceInNaira);
  });

  // Update total price
  cartTotal.textContent = total.toFixed(2);
}

// Call the function to fetch and display the products
getProductsAndPrice();
