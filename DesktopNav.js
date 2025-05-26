function DesktopNav() {
    try {
        const navItems = [
            { icon: 'fas fa-home', text: 'Home', href: '#' },
            { icon: 'fas fa-utensils', text: 'Menu', href: '#' },
            { icon: 'fas fa-th-large', text: 'Categories', href: '#' },
            { icon: 'fas fa-info-circle', text: 'About', href: '#' },
            { icon: 'fas fa-phone', text: 'Contact', href: '#' }
        ];

        return (
            <nav data-name="desktop-navigation" className="hidden lg:flex space-x-2">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="nav-link-modern"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                        <div className="nav-link-bg"></div>
                    </a>
                ))}
            </nav>
        );
    } catch (error) {
        console.error('DesktopNav component error:', error);
        reportError(error);
        return null;
    }
}
