import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const FloatingContact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link to="contact" smooth={true} duration={500}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <FaEnvelope className="text-white text-2xl" />
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default FloatingContact; 