export function Header() {
  return (
    <header className="w-full px-8 py-6" style={{ backgroundColor: '#2E5077' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div 
            className="px-4 py-2 rounded" 
            style={{ backgroundColor: '#4DA1A9' }}
          >
            <span className="text-white">Logo</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a 
            href="#" 
            className="text-white hover:opacity-80 transition-opacity"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-white hover:opacity-80 transition-opacity"
          >
            About
          </a>
          <a 
            href="#" 
            className="text-white hover:opacity-80 transition-opacity"
          >
            Services
          </a>
          <a 
            href="#" 
            className="text-white hover:opacity-80 transition-opacity"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
