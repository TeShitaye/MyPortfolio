import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'; // Icons
import emailjs from 'emailjs-com'; // For sending emails

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    // Send the email using EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-200 text-gray-900  dark:text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center relative after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-3"
        >
          Contact Me
        </motion.h2>

        {/* Grid Layout with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 "
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
              Contact Information
            </h3>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="w-6 h-6 text-blue-500" />
              <span>tekushitaye53@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaLinkedin className="w-6 h-6 text-blue-500" />
              <a
                href="https://www.linkedin.com/in/tekalign-shitaye-3918b0337/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                My LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="w-6 h-6 text-blue-500" />
              <span>+251 941 208 343</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 rounded-lg hover:from-green-500 hover:to-blue-600 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;