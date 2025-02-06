import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // For page navigation
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // Icons

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const prevScrollPos = useRef(window.pageYOffset);

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
        setIsNavbarVisible(true); // Show when scrolling up
      } else if (prevScrollPos.current < currentScrollPos - 10) {
        setIsNavbarVisible(false); // Hide when scrolling down
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      } bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white px-8 md:px-16 lg:px-24 shadow-md`}
    >
      <div className="container py-4 flex justify-between items-center">
        {/* Logo or Name */}
        <Link to="/" className="font-bold text-3xl hover:text-gray-400">
          Tekalign Shitaye
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
          <ScrollLink to="/" smooth={true} duration={500} className="hover:text-gray-400 font-semibold cursor-pointer">
            Home
          </ScrollLink>
          <Link to="/about" className="hover:text-gray-400 font-semibold">
            About Me
          </Link>
          <Link to="/services" className="hover:text-gray-400 font-semibold">
            Services
          </Link>
          <Link to="/projects" className="hover:text-gray-400 font-semibold">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-gray-400 font-semibold">
            Contact Me
          </Link>
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
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <ScrollLink to="/" smooth={true} duration={500} onClick={toggleMobileMenu} className="hover:text-gray-400 font-semibold cursor-pointer">
              Home
            </ScrollLink>
            <Link to="/about" onClick={toggleMobileMenu} className="hover:text-gray-400 font-semibold">
              About Me
            </Link>
            <Link to="/services" onClick={toggleMobileMenu} className="hover:text-gray-400 font-semibold">
              Services
            </Link>
            <Link to="/projects" onClick={toggleMobileMenu} className="hover:text-gray-400 font-semibold">
              Projects
            </Link>
            <Link to="/contact" onClick={toggleMobileMenu} className="hover:text-gray-400 font-semibold">
              Contact Me
            </Link>
          </div>

          {/* Dark Mode Toggle and Connect Button (Mobile) */}
          <div className="mt-6 flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-white" />}
            </button>
            <Link to="/contact" onClick={toggleMobileMenu}>
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
