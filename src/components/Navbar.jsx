import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation
import { Link as ScrollLink } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);
  const location = useLocation(); // Get current location
  const isHomePage = location.pathname === '/';

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos.current > currentScrollPos + 10) {
        setIsNavbarVisible(true);
      } else if (prevScrollPos.current < currentScrollPos - 10) {
        setIsNavbarVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  // Navigation items with their paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const renderNavLink = (item) => {
    // Always use React Router Link for navigation
    return (
      <Link
        key={item.name}
        to={item.path}
        className="hover:text-gray-400 font-semibold transition-colors duration-300"
        onClick={() => {
          setIsMobileMenuOpen(false);
          // If we're on the home page and clicking home, scroll to top
          if (isHomePage && item.path === '/') {
            scrollToTop();
          }
        }}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-lg bg-gray-200/80 dark:bg-gray-900/80 text-gray-900 dark:text-white px-8 md:px-16 lg:px-24 shadow-md`}
    >
      <div className="container py-4 flex justify-between items-center">
        {/* Logo with animation */}
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="font-bold text-3xl cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text"
          >
            Tekalign Shitaye
          </motion.div>
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => renderNavLink(item))}
        </div>

        {/* Dark Mode Toggle and Connect Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
          </button>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-2xl text-white transition-transform hover:scale-105 duration-300 transform">
              Connect Me
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            {navItems.map(item => renderNavLink(item))}
          </div>

          {/* Dark Mode Toggle and Connect Button (Mobile) */}
          <div className="mt-6 flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
            </button>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-2xl text-white transition-transform hover:scale-105 duration-300 transform">
                Connect Me
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
