function MobileMenuButton({ isOpen, toggleMenu }) {
    try {
        return (
            <button 
                data-name="mobile-menu-button"
                onClick={toggleMenu}
                className="lg:hidden hamburger-btn"
            >
                <div className={`hamburger-line ${isOpen ? 'line-1-open' : ''}`}></div>
                <div className={`hamburger-line ${isOpen ? 'line-2-open' : ''}`}></div>
                <div className={`hamburger-line ${isOpen ? 'line-3-open' : ''}`}></div>
            </button>
        );
    } catch (error) {
        console.error('MobileMenuButton component error:', error);
        reportError(error);
        return null;
    }
}
