function FoodCard({ food, addToCart }) {
    try {
        const handleAddToCart = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (addToCart && food) {
                addToCart(food);
            }
        };

        return (
            <div data-name="food-card" data-file="components/FoodCard.js" className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                    src={food.image} 
                    alt={food.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{food.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">${food.price}</span>
                        <button 
                            onClick={handleAddToCart}
                            className="add-to-cart-btn"
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('FoodCard component error:', error);
        reportError(error);
        return null;
    }
}
