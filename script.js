<script>
document.addEventListener('DOMContentLoaded', () => {
    function updateCartTotal() {
        const cartItems = document.querySelectorAll('.cart-item');
        let totalCost = 0;

        cartItems.forEach(item => {
            const priceElement = item.querySelector('.product-price');
            const quantityElement = item.querySelector('input');
            const totalElement = item.querySelector('.product-total');
            const price = parseFloat(priceElement.textContent.replace('₦', '').replace(',', ''));
            const quantity = parseInt(quantityElement.value);
            const total = price * quantity;
            totalElement.textContent = '₦ ' + total.toLocaleString();

            totalCost += total;
        });

        document.querySelector('.total-cost span:last-child').textContent = '₦ ' + totalCost.toLocaleString();
    }

    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const isIncrease = event.target.textContent === '+';
            const quantityInput = event.target.closest('.product-quantity').querySelector('input');
            let quantity = parseInt(quantityInput.value);

            if (isIncrease) {
                quantity += 1;
            } else {
                quantity = Math.max(1, quantity - 1); // Ensure quantity doesn't go below 1
            }

            quantityInput.value = quantity;
            updateCartTotal();
        });
    });

    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const cartItem = event.target.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();
        });
    });

    updateCartTotal(); // Initial calculation
});
</script>
