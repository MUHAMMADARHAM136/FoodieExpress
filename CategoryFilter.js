function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
    try {
        return (
            <div data-name="category-filter" className="flex overflow-x-auto py-4 mb-8">
                <div className="flex space-x-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectCategory(category)}
                            className={`category-item whitespace-nowrap px-6 py-2 rounded-full ${
                                selectedCategory === category
                                    ? 'bg-amber-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('CategoryFilter component error:', error);
        reportError(error);
        return null;
    }
}
