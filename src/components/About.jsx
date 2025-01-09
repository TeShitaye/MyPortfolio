import React from 'react'
import aboutUsImg from '../assets/tekalign.jpg'
const About = () => {
  return (
    <div className='bg-gray-800 text-white py-20 '>
      <div className='mx-auto container px-8 md:px-16 lg:px-24 '>
        <h2 className='text-3xl font-bold mb-8 text-center'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={aboutUsImg} alt='' className='h-auto w-80 rounded-2xl mb-8 object-cover' />
          <p className=''>
            I am a passionate full-stack developer with a strong commitment to creating dynamic and responsive web applications.
            With expertise in both front-end and back-end technologies, I thrive on turning ideas into reality through code.
            My journey in software development has equipped me with a diverse skill set, allowing me to tackle challenges across various domains.

            <br /> <br /><strong className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>My Philosophy</strong> <br />
            I believe in the power of collaboration and continuous learning.
            Every project is an opportunity to expand my knowledge and improve my skills.
            I am dedicated to writing clean, efficient code and ensuring an exceptional user experience.

            <br /> <br /><strong className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>What I Offer </strong> <br />
            <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 '>Front-end:</strong> Crafting engaging user interfaces using HTML, CSS, and JavaScript frameworks like React. <br/>
            <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 '> Back-end: </strong> Building robust server-side applications using Node.js, Express, and various databases.<br/>
            <strong className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-500 '> Responsive Design: </strong> Ensuring that applications look great on all devices and screen sizes.
            <br /> <br /> <strong className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 '>  Let us Connect</strong> <br />
            I am always excited to collaborate on new projects and explore innovative ideas.
            If you are interested in working together or just want to chat about technology, feel free to reach out!
          </p>
        </div>
        <div className='mx-8 mt-12 flex justify-between text-center'>
          <div>
            <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>2+</h3>
            <p>Years experience</p>
          </div>
          <div>
          <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>10+</h3>
          <p>Projects finished</p>
          </div>
          <div>
          <h3 className=' text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>50+</h3>
          <p>Happy clients</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
