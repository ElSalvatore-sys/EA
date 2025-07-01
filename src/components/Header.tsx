import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onBookingClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookingClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-bold text-gray-900">EA Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              Home
            </Link>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
              onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isSolutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                  <Link to="/solutions/gastronomy-hospitality" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Gastronomy & Hospitality
                  </Link>
                  <Link to="/solutions/industrial-manufacturing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Industrial & Manufacturing
                  </Link>
                  <Link to="/solutions/finance-security" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Finance & Security
                  </Link>
                  <Link to="/solutions/smart-living" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Smart Living & Personal AI
                  </Link>
                  <Link to="/solutions/healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Healthcare & Life Sciences
                  </Link>
                  <Link to="/solutions/retail" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900">
                    Retail & E-commerce
                  </Link>
                </div>
              )}
            </div>

            <Link to="/ea-method" className="text-gray-700 hover:text-blue-900 transition-colors">
              The EA Method
            </Link>
            <Link to="/why-ea" className="text-gray-700 hover:text-blue-900 transition-colors">
              Why EA Solutions?
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={onBookingClick}
            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-800 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Your AI Strategy Call
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
                Home
              </Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
                Solutions
              </Link>
              <Link to="/ea-method" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
                The EA Method
              </Link>
              <Link to="/why-ea" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
                Why EA Solutions?
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">
                Contact
              </Link>
              <button
                onClick={onBookingClick}
                className="w-full text-left px-3 py-2 text-blue-900 font-semibold hover:bg-blue-50"
              >
                Book Your AI Strategy Call
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;