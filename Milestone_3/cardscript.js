document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const product = event.target.parentElement;
        const productName = product.querySelector('h3').textContent;
        const cartItems = document.getElementById('cart-items');
        
        const listItem = document.createElement('li');
        listItem.textContent = productName;

        // Adding a class for animation
        listItem.classList.add('cart-item');
        cartItems.appendChild(listItem);
    });
});
