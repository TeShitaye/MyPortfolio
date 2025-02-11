import React from 'react';
import Img from '../assets/tekuuusds.png';
import { motion } from 'framer-motion'; // For animations
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='min-h-screen flex items-center dark:bg-gray-900 bg-gray-200 text-gray-900 dark:text-white py-20 px-8'>
      <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between'>
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <motion.h1 
            className='text-4xl lg:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer & <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              Embedded System Developer
            </span>
          </motion.h1>

          <motion.p 
            className='text-xl mb-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transforming ideas into exceptional digital experiences through creative development and design.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            className='flex space-x-6 mb-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { Icon: FaGithub, url: 'https://github.com/TeShitaye' },
              { Icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername' },
              { Icon: FaTwitter, url: 'https://twitter.com/yourusername' }
            ].map(({ Icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className='text-2xl hover:text-blue-500 transition-colors duration-300'
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className='flex space-x-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
              >
                Hire Me
              </motion.button>
            </Link>
            <motion.a
              href="/path-to-resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border-2 border-gray-600 dark:border-gray-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300'
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className='lg:w-1/2 mb-12 lg:mb-0'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className='relative'>
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-30'
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <img
              src={Img}
              alt='Tekalign Shitaye'
              className='relative rounded-full w-80 h-80 object-cover mx-auto shadow-2xl'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;