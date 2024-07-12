document.addEventListener("DOMContentLoaded", function() {
    const cartItemsTable = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    const payButton = document.getElementById('pay-button');

    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items in the table
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><button class="remove-item">Remove</button></td>
            <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><input type="number" class="quantity" value="1" min="1"></td>
            <td class="subtotal">$${item.price.toFixed(2)}</td>
        `;
        cartItemsTable.appendChild(row);
    });

    // Calculate total price and display
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;

    // Event listener for removing items
    cartItemsTable.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-item')) {
            const row = event.target.parentElement.parentElement;
            const productName = row.querySelector('td:nth-child(3)').textContent;
            
            // Remove the item from cart array
            const updatedCart = cart.filter(item => item.name !== productName);
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            // Remove the row from the table
            row.remove();

            // Recalculate total price and update display
            totalPrice = updatedCart.reduce((total, item) => total + item.price, 0);
            totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        }
    });

    // Event listener for pay button
    payButton.addEventListener('click', function() {
        // Implement payment logic here
        alert('Payment processed successfully!');
        // Optionally, you can clear the cart after successful payment
        localStorage.removeItem('cart');
        cartItemsTable.innerHTML = '';
        totalPriceDisplay.textContent = '$0.00';
    });
});
