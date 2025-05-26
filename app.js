function App() {
    try {
        const [cartItems, setCartItems] = React.useState([]);
        const [isCartOpen, setIsCartOpen] = React.useState(false);
        const [selectedCategory, setSelectedCategory] = React.useState("All");

        const toggleCart = () => setIsCartOpen(!isCartOpen);

        const addToCart = React.useCallback((item) => {
            if (!item || !item.id) {
                console.error('Invalid item:', item);
                return;
            }
            
            console.log('Adding to cart:', item.name);
            setCartItems(prevItems => [...prevItems, { ...item, cartId: Date.now() }]);
            
            // Show success feedback
            const button = document.querySelector(`[data-food-id="${item.id}"] .add-to-cart-btn`);
            if (button) {
                button.style.background = '#10B981';
                button.innerHTML = '<i class="fas fa-check mr-2"></i>Added!';
                setTimeout(() => {
                    button.style.background = '';
                    button.innerHTML = '<i class="fas fa-plus mr-2"></i>Add to Cart';
                }, 1000);
            }
        }, []);

        const removeFromCart = React.useCallback((item) => {
            setCartItems(prevItems => {
                const index = prevItems.findIndex(cartItem => cartItem.cartId === item.cartId);
                if (index !== -1) {
                    const newItems = [...prevItems];
                    newItems.splice(index, 1);
                    return newItems;
                }
                return prevItems;
            });
        }, []);

        const mainCategories = ["Beef", "Mutton", "Chicken"];

        return (
            <div data-name="app" className="min-h-screen main-background">
                <Header cartItems={cartItems} toggleCart={toggleCart} />
                <Hero />
                
                <main className="container mx-auto px-6 py-16">
                    <section data-name="restaurants-section" className="mb-16">
                        <h2 className="section-title mb-12">Popular Restaurants</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {restaurants.map((restaurant, index) => (
                                <div key={restaurant.id} style={{animationDelay: `${index * 0.1}s`}} className="fade-in">
                                    <RestaurantCard restaurant={restaurant} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {mainCategories.map((category, index) => (
                        <div key={category} style={{animationDelay: `${index * 0.2}s`}} className="slide-in-right mb-16">
                            <FoodCategorySection 
                                category={category} 
                                addToCart={addToCart}
                            />
                        </div>
                    ))}

                    <section data-name="all-foods-section" className="mt-16">
                        <h2 className="section-title mb-12">Explore All Foods</h2>
                        <CategoryFilter 
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {foods
                                .filter(food => selectedCategory === "All" || food.category === selectedCategory)
                                .map((food, index) => (
                                    <div key={food.id} style={{animationDelay: `${index * 0.1}s`}} className="fade-in" data-food-id={food.id}>
                                        <FoodCard food={food} addToCart={addToCart} />
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </main>

                <Cart 
                    isOpen={isCartOpen}
                    toggleCart={toggleCart}
                    items={cartItems}
                    removeFromCart={removeFromCart}
                />
                
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
