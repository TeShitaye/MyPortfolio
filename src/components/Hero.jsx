import React from 'react';
import Img from '../assets/tekuuusds.png';
import { motion } from 'framer-motion'; // For animations

const Hero = () => {
  return (
    <div className='dark:bg-gray-900 bg-gray-200 text-gray-900  dark:text-white py-20 text-center'>
      {/* Image with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={Img}
          alt='Tekalign Shitaye'
          className='mx-auto mb-8 h-64 w-64 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border-4 border-transparent hover:border-gradient-to-r hover:border-gradient-from-green-400 hover:border-gradient-to-blue-500'
        />
      </motion.div>

      {/* Text with Gradient Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='text-4xl font-bold'
      >
        I am{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-gradient'>
          Tekalign Shitaye
        </span>
        , Full Stack Developer
      </motion.h1>

      {/* Subtitle with Fade Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='mt-4 text-xl text-gray-800 dark:text-white'
      >
        I specialize in developing modern and responsive web applications.
      </motion.p>

      {/* Buttons with Hover Effects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className='mt-8 space-x-6'
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-gradient-to-r from-green-400 to-blue-500 py-2 px-6 rounded-full text-white font-semibold transform transition-transform duration-300 hover:shadow-lg'
        >
          Contact With Me
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-gradient-to-r from-pink-400 to-yellow-500 py-2 px-6 rounded-full text-white font-semibold transform transition-transform duration-300 hover:shadow-lg'
        >
          Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;