import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Design', path: '/services/web-design' },
      { name: 'Frontend Development', path: '/services/frontend-development' },
      { name: 'Backend Development', path: '/services/backend-development' },
      { name: 'Embedded Systems', path: '/services/embedded-systems' },
      { name: 'AI Applications', path: '/services/ai-applications' }
    ],
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' }
    ],
    contact: [
      { icon: FaEnvelope, info: 'tekalign@example.com', href: 'mailto:tekalign@example.com' },
      { icon: FaPhone, info: '+251 912345678', href: 'tel:+251912345678' },
      { icon: FaMapMarkerAlt, info: 'Addis Ababa, Ethiopia', href: 'https://maps.google.com' }
    ],
    social: [
      { icon: FaGithub, href: 'https://github.com/TeShitaye' },
      { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername' },
      { icon: FaTwitter, href: 'https://twitter.com/yourusername' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Tekalign Shitaye
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming ideas into exceptional digital experiences through creative development and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <item.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <item.icon className="text-xl" />
                    <span>{item.info}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tekalign Shitaye. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm mx-3">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm mx-3">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;