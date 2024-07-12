document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Hide all card sections except for the first one
    const cardSections = document.querySelectorAll('.card-section');
    for (let i = 1; i < cardSections.length; i++) {
        cardSections[i].style.display = 'none';
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Hide all card sections
            cardSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target card section
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            // Prevent default link behavior
            event.preventDefault();
        });
    });
});
/****************************************************** */
document.addEventListener("DOMContentLoaded", function() {
    const cartIconLink = document.getElementById('cart-icon-link');
    const cartSection = document.getElementById('cart');

    cartIconLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag

        // Toggle the display of the cart section
        if (cartSection.style.display === 'block') {
            cartSection.style.display = 'none';
        } else {
            cartSection.style.display = 'block';
        }
    });
});

/************************************* cart **************************************/ 
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartSection = document.querySelector('.cart-section');
    const closeButton = document.createElement('button');
    const addedToCartMessage = document.getElementById('added-to-cart-message');

    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    cartSection.appendChild(closeButton);

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior

            const itemName = this.getAttribute('data-name');
            const itemPrice = this.getAttribute('data-price');

            const cartItem = document.createElement('li');
            const itemNameSpan = document.createElement('span');
            const itemPriceSpan = document.createElement('span');
            const itemImage = document.createElement('img');

            cartItem.classList.add('cart-item');
            itemNameSpan.textContent = itemName;
            itemPriceSpan.textContent = itemPrice;
            itemImage.src = this.parentElement.querySelector('img').src;
            itemImage.alt = itemName;

            cartItem.appendChild(itemImage);
            cartItem.appendChild(itemNameSpan);
            cartItem.appendChild(itemPriceSpan);

            cartItemsList.appendChild(cartItem);

            addedToCartMessage.style.display = 'block';
            setTimeout(function() {
                addedToCartMessage.style.display = 'none';
            }, 2000);

            updateTotal();
        });
    });

    closeButton.addEventListener('click', function() {
        cartSection.style.display = 'none';
    });

    function updateTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let totalPrice = 0;

        cartItems.forEach(item => {
            const priceString = item.querySelector('span:nth-child(3)').textContent;
            const price = parseFloat(priceString.replace('₹', '').replace('/-', ''));
            totalPrice += price;
        });

        const totalElement = document.createElement('li');
        totalElement.textContent = 'Total: ₹' + totalPrice.toFixed(2);

        cartItemsList.appendChild(totalElement);
    }
});


