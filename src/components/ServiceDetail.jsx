import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const serviceDetails = {
  'web-design': {
    title: 'Web Design',
    description: 'Comprehensive web design services that focus on both aesthetics and functionality.',
    features: [
      'Custom website design and development',
      'Responsive design for all devices',
      'User experience (UX) optimization',
      'Website redesign and modernization',
      'Landing page design',
      'E-commerce website design'
    ],
    tools: ['Figma', 'Adobe XD', 'HTML5', 'CSS3', 'JavaScript'],
    process: [
      'Requirements gathering',
      'Wireframing',
      'Design mockups',
      'Development',
      'Testing',
      'Deployment'
    ]
  },
  'frontend-development': {
    title: 'Frontend Development',
    description: 'Modern frontend development using the latest technologies and best practices.',
    features: [
      'React.js application development',
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Performance optimization',
      'Cross-browser compatibility',
      'Modern UI implementation'
    ],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
    process: [
      'Architecture planning',
      'Component development',
      'State management',
      'Testing',
      'Optimization',
      'Deployment'
    ]
  },
  // Add similar detailed objects for other services...
  'embedded-systems': {
    title: 'Embedded System Development',
    description: 'Custom embedded system solutions for various applications and industries.',
    features: [
      'Microcontroller programming',
      'IoT device development',
      'Sensor integration',
      'Real-time systems',
      'Hardware-software integration',
      'Custom firmware development'
    ],
    tools: ['Arduino', 'Raspberry Pi', 'C/C++', 'Python', 'ESP32/ESP8266'],
    process: [
      'Requirements analysis',
      'Hardware selection',
      'Prototyping',
      'Firmware development',
      'Testing and validation',
      'Deployment and support'
    ]
  },
  'ai-applications': {
    title: 'AI-Based Applications',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    features: [
      'Machine learning models',
      'Natural Language Processing',
      'Computer Vision applications',
      'Predictive analytics',
      'AI-powered chatbots',
      'Data analysis and visualization'
    ],
    tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'scikit-learn'],
    process: [
      'Data collection and analysis',
      'Model selection and training',
      'Algorithm development',
      'Integration testing',
      'Performance optimization',
      'Deployment and monitoring'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className='min-h-screen dark:bg-gray-900 bg-gray-200 text-gray-900 dark:text-white py-20 px-8'>
      <div className='container mx-auto max-w-4xl'>
        <Link to="/services" className='inline-flex items-center space-x-2 text-blue-500 hover:text-green-500 mb-8'>
          <FaArrowLeft />
          <span>Back to Services</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='dark:bg-gray-800 bg-white rounded-lg p-8 shadow-xl'
        >
          <h1 className='text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
            {service.title}
          </h1>
          
          <p className='text-xl mb-8'>{service.description}</p>

          <div className='grid gap-8 md:grid-cols-2'>
            <div>
              <h2 className='text-2xl font-bold mb-4'>Features</h2>
              <ul className='space-y-2'>
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center space-x-2'
                  >
                    <span className='text-green-500'>•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-4'>Tools & Technologies</h2>
              <div className='flex flex-wrap gap-2'>
                {service.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className='px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full text-white'
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              <h2 className='text-2xl font-bold mt-8 mb-4'>Development Process</h2>
              <ol className='space-y-2'>
                {service.process.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='flex items-center space-x-2'
                  >
                    <span className='text-blue-500'>{index + 1}.</span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail; 