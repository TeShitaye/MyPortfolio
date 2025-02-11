import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Crafting visually stunning and user-friendly websites that captivate your audience and reflect your brand identity.",
    path: "web-design"
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive, interactive, and high-performance user interfaces using modern frameworks like React and Tailwind CSS.",
    path: "frontend-development"
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust and scalable server-side applications with Node.js, Express, and databases like MongoDB or PostgreSQL.",
    path: "backend-development"
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications with React Native, ensuring a seamless experience on both iOS and Android.",
    path: "mobile-development"
  },
  {
    id: 5,
    title: "Embedded System Development",
    description: "Designing and implementing embedded systems with Arduino, Raspberry Pi, and other microcontrollers for IoT and automation solutions.",
    path: "embedded-systems"
  },
  {
    id: 6,
    title: "AI-Based Applications",
    description: "Developing intelligent applications using machine learning, natural language processing, and computer vision technologies.",
    path: "ai-applications"
  },
];

const Services = () => {
  return (
    <div className='dark:bg-gray-900 bg-gray-200 text-gray-900  dark:text-white py-20'>
      <div className='mx-auto container px-8 md:px-16 lg:px-24'>
      <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className='text-3xl font-bold mb-8 text-center relative pb-3 after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-3'
>
  My Services
</motion.h2>

        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className='dark:bg-gray-800 bg-gray-100  p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'
            >
              <div className='text-right text-2xl font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-transparent'>
                {service.id}
              </div>
              <h3 className='pt-2 text-2xl font-bold bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 text-transparent'>
                {service.title}
              </h3>
              <p className='pt-2 dark:text-white text-gray-900'>{service.description}</p>
              <Link
                to={`/services/${service.path}`}
                className='mt-6 inline-block text-green-400 hover:text-blue-500 transition-colors duration-300'
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;