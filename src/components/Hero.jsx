import React from 'react'
import Img from '../assets/tekuuu.png'
const Hero = () => {
  return (
    <div className='bg-gray-800 text-white py-16 text-center'>
      <img src={Img} alt='' className='mx-auto mb-8 h-56 rounded-full w-56 transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I am {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Tekalign Shitaye</span>
        , Full stack developer
      </h1>
      <p className='mt-4 text-xl text-gray-300'>
        I specialize in developing modern and responsive web appplcations
      </p>
      <div className='mt-8 space-x-6 '>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-full text-white hidden md:inline transition-transform hover:scale-105 duration-300 transfom'>Contact With Me</button>
        <button className='bg-gradient-to-r from-pink-400 to-yellow-500 py-2 px-4 rounded-full text-white hidden md:inline transition-transform hover:scale-105 duration-300 transfom'>Ressume</button>
      </div>
    </div>
  )
}

export default Hero
