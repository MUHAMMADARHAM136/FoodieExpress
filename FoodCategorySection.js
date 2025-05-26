function FoodCategorySection({ category, addToCart }) {
    try {
        const categoryFoods = foods.filter(food => food.category === category);
        
        return (
            <section data-name={`${category.toLowerCase()}-section`} className="food-category-section py-12">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-3xl font-bold mb-8">{category} Specialties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryFoods.map((food, index) => (
                            <div key={food.id} style={{animationDelay: `${index * 0.1}s`}} className="fade-in">
                                <FoodCard 
                                    food={food} 
                                    addToCart={addToCart}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('FoodCategorySection component error:', error);
        reportError(error);
        return null;
    }
}
