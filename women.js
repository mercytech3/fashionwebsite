
const getProductsAndPrice = function () {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://fakestoreapi.com/products');
  request.send();

  // Event listener for when the data loads
  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText); // Parse the JSON response
    console.log(data); // Log the data to check its structure

    // Reference to the product list container and cart container
    const productList = document.getElementById('product-list');
    const cartContainer = document.getElementById('cart');

    // Define categories or keywords for women's wear, shoes, bags, jewelry, and clothes
    const targetCategories = ["women's clothing", "jewelery"];
    const targetKeywords = ["shoe", "bag"];

    // Conversion rate for USD to Naira
    const exchangeRate = 770;

    // Array to store cart items
    let cartItems = [];

    // Function to update cart display
    const updateCart = () => {
      if (cartItems.length === 0) {
        cartContainer.innerHTML = '<h2>Your cart is empty.</h2>';
      } else {
        cartContainer.innerHTML = `
          <h2>Your Cart</h2>
          ${cartItems.map(item => `
            <div class="cart-item">
              <p>${item.title}</p>
              <p>₦${item.price}</p>
            </div>
          `).join('')}
          <p><strong>Total: ₦${cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</strong></p>
        `;
      }
    };

    // Loop through the products and display matching items
    data.forEach(product => {
      if (
        targetCategories.includes(product.category) || // Filter by category
        targetKeywords.some(keyword => product.title.toLowerCase().includes(keyword)) // Filter by keywords
      ) {
        // Create a product item container
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        // Convert price to Naira
        const priceInNaira = (product.price * exchangeRate).toFixed(2);

        // Populate the product item with data
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h3>${product.title}</h3>
          <p>Price: ₦${priceInNaira}</p>
          <button class="add-to-cart">Add to Cart</button>
        `;

        // Add click event for the "Add to Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', () => {
          cartItems.push({ title: product.title, price: priceInNaira });
          updateCart();
        });

        // Append the product item to the product list
        productList.appendChild(productItem);
      }
    });
  });
};

// Call the function to fetch and display products
getProductsAndPrice();
