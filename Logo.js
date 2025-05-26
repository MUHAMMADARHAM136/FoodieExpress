function Logo() {
    try {
        return (
            <div data-name="logo" className="flex items-center space-x-3 logo-container">
                <div className="logo-icon">
                    <i className="fas fa-utensils text-white text-xl"></i>
                </div>
                <span className="logo-text">
                    FoodieExpress
                </span>
            </div>
        );
    } catch (error) {
        console.error('Logo component error:', error);
        reportError(error);
        return null;
    }
}
