import React from 'react';
import { motion } from 'framer-motion'; // For animations
import img1 from '../assets/project1.jpg'; // Replace with your images
import img2 from '../assets/project2.jpg';
import img3 from '../assets/project3.jpg';
import img4 from '../assets/project4.jpg';
import img5 from '../assets/project5.jpg';
import img6 from '../assets/project6.jpg';

const projects = [
  {
    id: 1,
    name: "Blog App",
    technologies: "MERN stack",
    image: img1,
    github: "https://github.com/TeShitaye/course-JS-and-the-DOM.git",
  },
  {
    id: 2,
    name: "E-Commerce App",
    technologies: "React, Node.js, MongoDB",
    image: img2,
    github: "https://github.com/TeShitaye/eCommerce.git",
  },
  {
    id: 3,
    name: "Portfolio Website",
    technologies: "React, Tailwind CSS",
    image: img3,
    github: "https://github.com/TeShitaye/MyPortfolio.git",
  },
  {
    id: 4,
    name: "Task Manager",
    technologies: "React, Firebase",
    image: img4,
    github: "https://github.com/TeShitaye/course-JS-and-the-DOM.git",
  },
  {
    id: 5,
    name: "Health insurance website",
    technologies: "React, OpenWeather API",
    image: img5,
    github: "https://github.com/TeShitaye/Tenachin-Insurance.git",
  },
  {
    id: 6,
    name: "Chat Application",
    technologies: "Socket.io, Node.js",
    image: img6,
    github: "https://github.com/TeShitaye/course-JS-and-the-DOM.git",
  },
];

const Projects = () => {
  return (
    <div className='dark:bg-gray-900 bg-gray-200 text-gray-900  dark:text-white py-20'>
      <div className='mx-auto container px-8 md:px-16 lg:px-24'>
        {/* Section Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-3xl font-bold mb-8 text-center relative pb-3 after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-3'
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'
            >
              {/* Project Image */}
              <div className='relative overflow-hidden rounded-lg'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-56 object-cover transform transition-transform duration-300 hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end p-4'>
                  <p className='text-white text-sm'>{project.technologies}</p>
                </div>
              </div>

              {/* Project Details */}
              <h3 className='mt-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                {project.name}
              </h3>
              <p className='mt-2 text-gray-900 dark:text-white'>{project.technologies}</p>

              {/* GitHub Link */}
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4 inline-block bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-full text-white font-semibold transform transition-transform duration-300 hover:scale-105 hover:shadow-lg'
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;