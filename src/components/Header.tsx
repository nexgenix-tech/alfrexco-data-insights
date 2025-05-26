
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Big Data", path: "/big-data" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/4cd33516-ac28-48b2-a6b6-960f47832266.png" 
              alt="Alfrexco" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-[#F37021] border-b-2 border-[#F37021] pb-1"
                    : "text-gray-700 hover:text-[#F37021]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#F37021] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#E5651C] transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#F37021] focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-[#F37021] bg-orange-50"
                      : "text-gray-700 hover:text-[#F37021] hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#F37021] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#E5651C] transition-colors duration-200 mt-3"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
