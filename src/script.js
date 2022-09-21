const addProductToCart = () => {
    alert('Product added to cart');

    const button = document.querySelector('.sale__buy-button');
    button.innerHTML = 'In Cart';
    
   
    button.className = 'sale__buy-button sale__buy-button_in-cart';

    const quantityInput = document.querySelector('.sale__buy-quantity');
    const quantity = Number(quantityInput.value) || 1;
    const buttonLabel = quantity + (quantity === 1 ? ' piece' : ' pieces') + ' in cart';
    button.innerHTML = buttonLabel;
}