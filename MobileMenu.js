function MobileMenu({ isOpen }) {
    try {
        const navItems = [
            { icon: 'fas fa-home', text: 'Home', href: '#' },
            { icon: 'fas fa-utensils', text: 'Menu', href: '#' },
            { icon: 'fas fa-th-large', text: 'Categories', href: '#' },
            { icon: 'fas fa-info-circle', text: 'About', href: '#' },
            { icon: 'fas fa-phone', text: 'Contact', href: '#' }
        ];

        return (
            <div 
                data-name="mobile-menu"
                className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`}
            >
                <nav className="mobile-nav">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="mobile-nav-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <i className={item.icon}></i>
                            <span>{item.text}</span>
                        </a>
                    ))}
                </nav>
            </div>
        );
    } catch (error) {
        console.error('MobileMenu component error:', error);
        reportError(error);
        return null;
    }
}
