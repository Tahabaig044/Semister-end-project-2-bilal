 // Sample items added to cart
 const sampleItem = { name: "Electroweak Theory", price: 500 };

 // Function to add item to cart
 function addToCart(item) {
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    //  alert(`${item.name} has been added to your cart.`);
     cart.push(item);
     localStorage.setItem('cart', JSON.stringify(cart));
     
     // Show alert confirming item addition
     
     // Render cart if on the cart page
     if (document.getElementById('cart-items')) {
         renderCart();
     }
 }
 
 
 // Function to render cart items and total
 function renderCart() {
     const cart = JSON.parse(localStorage.getItem('cart')) || [];
     const cartItemsContainer = document.getElementById('cart-items');
     cartItemsContainer.innerHTML = ''; // Clear previous content
 
     let total = 0;
     cart.forEach((item, index) => {
         total += item.price;
 
         // Create item div with name, price, and remove button
         const itemDiv = document.createElement('div');
         itemDiv.innerHTML = `
             ${item.name} - $${item.price}
            var btn = <button id="remove-btn" onclick="removeFromCart(${index})">Remove</button>
         `;
         cartItemsContainer.appendChild(itemDiv);
     });
 
     document.getElementById('cart-total').textContent = `Total: $${total}`;
 }
 
 // Function to remove item from cart
 function removeFromCart(index) {
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     cart.splice(index, 1); // Remove item by index
     localStorage.setItem('cart', JSON.stringify(cart));
     renderCart(); // Re-render cart after removal
 }
 
 // Initial add to cart (for testing)
 addToCart(sampleItem);
 addToCart(sampleItem);
 
 // Load cart on page load
 renderCart();