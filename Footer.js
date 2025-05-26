function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div data-name="footer-about" className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                                    <i className="fas fa-utensils text-white text-xl"></i>
                                </div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                                    FoodieExpress
                                </span>
                            </div>
                            <p className="text-gray-400">
                                Bringing delicious food right to your doorstep. Fast, fresh, and reliable delivery service.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        <div data-name="footer-links" className="space-y-4">
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Our Menu</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Restaurants</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Delivery Areas</a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Career</a>
                                </li>
                            </ul>
                        </div>

                        <div data-name="footer-contact" className="space-y-4">
                            <h3 className="text-lg font-semibold">Contact Us</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-3 text-gray-400">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>123 Food Street, Cuisine City, FC 12345</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-400">
                                    <i className="fas fa-phone"></i>
                                    <span>+1 234 567 8900</span>
                                </li>
                                <li className="flex items-center space-x-3 text-gray-400">
                                    <i className="fas fa-envelope"></i>
                                    <span>support@foodieexpress.com</span>
                                </li>
                            </ul>
                        </div>

                        <div data-name="footer-newsletter" className="space-y-4">
                            <h3 className="text-lg font-semibold">Newsletter</h3>
                            <p className="text-gray-400">Subscribe to our newsletter for offers and updates.</p>
                            <form className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
                                />
                                <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
