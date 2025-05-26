function CartButton({ cartItems, toggleCart }) {
    try {
        return (
            <button 
                data-name="cart-button"
                onClick={toggleCart}
                className="cart-btn"
            >
                <div className="cart-icon-wrapper">
                    <i className="fas fa-shopping-cart"></i>
                    {cartItems.length > 0 && (
                        <span className="cart-badge">
                            {cartItems.length}
                        </span>
                    )}
                </div>
                <span className="cart-text">Cart</span>
            </button>
        );
    } catch (error) {
        console.error('CartButton component error:', error);
        reportError(error);
        return null;
    }
}
