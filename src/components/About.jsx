import React from 'react';
import { motion } from 'framer-motion'; // For animations
import aboutUsImg from '../assets/tekalign.jpg';
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Science in Electrical and Computer Engineering",
      school: "Jimma University",
      year: "2020 - 2025",
      description: "Focused on Software Engineering and Embedded Systems"
    }
    // Add more education details if any
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Jimma University AI Center",
      period: "2024 - Present",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Implemented responsive designs and user interfaces",
        "Collaborated with cross-functional teams for project delivery"
      ]
    }
    // Add more experience details
  ];

  const skills = {
    technical: [
      "JavaScript/TypeScript", "React.js", "Node.js", "Python",
      "C/C++", "MongoDB", "PostgreSQL", "Git", "Docker",
      "Embedded Systems", "IoT Development", "REST APIs"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Project Management",
      "Communication", "Time Management", "Adaptability"
    ]
  };

  const certifications = [
    {
      name: "Add Your Certifications",
      issuer: "Issuing Organization",
      year: "Year"
    }
    // Add your certifications
  ];

  return (
    <div className=' dark:bg-gray-900 bg-gray-200 text-gray-900  dark:text-white py-20'>
      <div className='mx-auto container px-8 md:px-16 lg:px-24'>
        {/* Section Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-3xl font-bold mb-8 text-center relative pb-3 after:block after:w-24 after:h-1 after:bg-blue-500 after:mx-auto after:mt-3'
        >
          About Me
        </motion.h2>

        {/* Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col md:flex-row items-center md:space-x-12'
        >
          {/* Image */}
          <img
            src={aboutUsImg}
            alt='Tekalign Shitaye'
            className='h-auto w-80 rounded-2xl mb-8 md:mb-0 object-cover transform transition-transform duration-300 hover:scale-105'
          />

          {/* Text Content */}
          <div className='flex-1'>
            <p className='text-lg'>
              I am a passionate full-stack developer with a strong commitment to creating dynamic and responsive web applications.
              With expertise in both front-end and back-end technologies, I thrive on turning ideas into reality through code.
              My journey in software development has equipped me with a diverse skill set, allowing me to tackle challenges across various domains.

              <br /> <br />
              <strong className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                My Philosophy
              </strong> <br />
              I believe in the power of collaboration and continuous learning.
              Every project is an opportunity to expand my knowledge and improve my skills.
              I am dedicated to writing clean, efficient code and ensuring an exceptional user experience.

              <br /> <br />
              <strong className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                What I Offer
              </strong> <br />
              <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500'>
                Front-end:
              </strong> Crafting engaging user interfaces using HTML, CSS, and JavaScript frameworks like React. <br />
              <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500'>
                Back-end:
              </strong> Building robust server-side applications using Node.js, Express, and various databases.<br />
              <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500'>
                Responsive Design:
              </strong> Ensuring that applications look great on all devices and screen sizes.

              <br /> <br />
              <strong className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                Let us Connect
              </strong> <br />
              I am always excited to collaborate on new projects and explore innovative ideas.
              If you are interested in working together or just want to chat about technology, feel free to reach out!
            </p>
          </div>
        </motion.div>

        {/* Stats with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mx-8 mt-12 flex justify-between text-center'
        >
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              2+
            </h3>
            <p className='text-xl font-semibold'>Years experience</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              10+
            </h3>
            <p className='text-xl font-semibold'>Projects finished</p>
          </div>
          <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
              50+
            </h3>
            <p className='text-xl font-semibold'>Happy clients</p>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Full Stack Developer and Embedded Systems Engineer with a passion for creating innovative solutions.
            Experienced in web development, IoT, and embedded systems, combining technical expertise with
            creative problem-solving skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-3xl text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
                <p className="text-gray-500 dark:text-gray-500">{edu.year}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {edu.description}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <FaBriefcase className="text-3xl text-green-500 mr-4" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {exp.role}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-gray-500 dark:text-gray-500">{exp.period}</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <FaCode className="text-3xl text-purple-500 mr-4" />
            <h3 className="text-2xl font-bold">Skills</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <FaCertificate className="text-3xl text-yellow-500 mr-4" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <h4 className="text-lg font-semibold">{cert.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;