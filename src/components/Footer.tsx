import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onBookingClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookingClick }) => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">EA Solutions</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-md">
              We architect bespoke AI infrastructures that eradicate repetitive work, 
              amplify human potential, and unlock unprecedented levels of efficiency for your enterprise.
            </p>
            <button
              onClick={onBookingClick}
              className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-500 hover:to-blue-400 dark:hover:from-blue-400 dark:hover:to-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Solutions</Link></li>
              <li><Link to="/ea-method" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">The EA Method</Link></li>
              <li><Link to="/why-ea" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Why EA Solutions?</Link></li>
              <li><Link to="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:ali.h@easolutions.de" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors">
                  ali.h@easolutions.de
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 dark:text-gray-400">Wiesbaden, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 EA Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;