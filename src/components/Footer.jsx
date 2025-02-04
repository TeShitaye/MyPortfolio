import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='bg-gray-800 dark:bg-gray-900 text-white py-12'
    >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        {/* Social Media Links */}
        <div className='flex justify-center space-x-8 mb-8'>
          <motion.a
            href='https://github.com/TeShitaye'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            <FaGithub className='w-8 h-8' />
          </motion.a>
          <motion.a
            href='https://linkedin.com/in/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            <FaLinkedin className='w-8 h-8' />
          </motion.a>
          <motion.a
            href='https://twitter.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            <FaTwitter className='w-8 h-8' />
          </motion.a>
          <motion.a
            href='mailto:youremail@example.com'
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            <FaEnvelope className='w-8 h-8' />
          </motion.a>
        </div>

        {/* Footer Navigation */}
        <div className='flex justify-center space-x-6 mb-8'>
          <motion.a
            href='#about'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            About
          </motion.a>
          <motion.a
            href='#services'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            Services
          </motion.a>
          <motion.a
            href='#projects'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            Projects
          </motion.a>
          <motion.a
            href='#contact'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='text-gray-400 hover:text-white transition-colors duration-300'
          >
            Contact
          </motion.a>
        </div>

        {/* Copyright Notice */}
        <div className='text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()} Tekalign Shitaye. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;