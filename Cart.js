function Cart({ isOpen, toggleCart, items, removeFromCart }) {
    try {
        const total = items.reduce((sum, item) => sum + (item.price || 0), 0);

        return (
            <div data-name="cart" data-file="components/Cart.js" className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart}></div>
                <div className="absolute right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl slide-up">
                    <div className="p-4 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">Your Cart ({items.length})</h2>
                            <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
                                <i className="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto">
                            {items.length === 0 ? (
                                <div className="text-center text-gray-500 mt-8">
                                    <i className="fas fa-shopping-cart text-4xl mb-4"></i>
                                    <p>Your cart is empty</p>
                                    <p className="text-sm mt-2">Add some delicious items!</p>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div 
                                        key={item.cartId || item.id}
                                        className="flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center">
                                            <img 
                                                src={item.image} 
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                            <div className="ml-4">
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <p className="text-green-600 font-medium">${item.price}</p>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item)}
                                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        
                        {items.length > 0 && (
                            <div className="border-t pt-4">
                                <div className="flex justify-between mb-4">
                                    <span className="font-semibold text-lg">Total:</span>
                                    <span className="font-bold text-lg text-green-600">${total.toFixed(2)}</span>
                                </div>
                                <button 
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
        return null;
    }
}
