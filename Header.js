function Header({ cartItems, toggleCart }) {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

        return (
            <header 
                data-name="header" 
                className={`fixed w-full z-50 transition-all duration-500 ${
                    isScrolled ? 'header-scrolled py-2' : 'py-4'
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <DesktopNav />
                        <div className="flex items-center space-x-4">
                            <CartButton cartItems={cartItems} toggleCart={toggleCart} />
                            <MobileMenuButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                        </div>
                    </div>
                </div>
                <MobileMenu isOpen={isMenuOpen} />
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
