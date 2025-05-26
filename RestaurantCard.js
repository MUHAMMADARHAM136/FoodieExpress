function RestaurantCard({ restaurant }) {
    try {
        return (
            <div data-name="restaurant-card" data-file="components/RestaurantCard.js" className="bg-white rounded-lg shadow-md overflow-hidden restaurant-card-hover">
                <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                        <div className="flex items-center">
                            <i className="fas fa-star text-yellow-400 mr-1"></i>
                            <span className="font-medium">{restaurant.rating}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                    <div className="flex items-center text-sm text-gray-500">
                        <i className="fas fa-clock mr-2"></i>
                        <span>{restaurant.deliveryTime} min</span>
                        <i className="fas fa-circle text-xs mx-2"></i>
                        <span>${restaurant.deliveryFee} delivery fee</span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('RestaurantCard component error:', error);
        reportError(error);
        return null;
    }
}
