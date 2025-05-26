function Hero() {
    try {
        const foodIcons = [
            "🍕", "🍔", "🍟", "🌮", "🍜", "🍣", "🍱", "🥘", "🥗", "🍖",
            "🍗", "🥩", "🌯", "🥪", "🥨", "🥐", "🧀", "🥙", "🥚", "🥞"
        ];

        return (
            <section data-name="hero" className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
                {/* Animated Food Background */}
                {foodIcons.map((icon, index) => (
                    <span
                        key={index}
                        className="floating-food text-4xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    >
                        {icon}
                    </span>
                ))}
                
                <div className="container mx-auto px-6 py-24">
                    <div className="flex flex-col items-center justify-center text-center">
                        <div data-name="hero-content" className="max-w-3xl text-white z-10">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Delicious Food,
                                <br />
                                <span className="text-yellow-300">Delivered Fast</span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 text-white/90">
                                Experience the best food delivery service in town.
                                <br />
                                Fresh, quick, and always delicious.
                            </p>
                            <div className="mt-8 flex justify-center">
                                <form className="w-full max-w-lg">
                                    <div className="flex items-center bg-white rounded-full p-2 shadow-xl">
                                        <i className="fas fa-map-marker-alt text-gray-400 mx-3"></i>
                                        <input
                                            type="text"
                                            placeholder="Enter your delivery address"
                                            className="w-full bg-transparent outline-none text-gray-700 px-4"
                                        />
                                        <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                                            Order Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="custom-shape">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                    </svg>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
