import React from 'react'

const Navbar = () => {
  return (
<nav className='bg-black text-white px-8 md:px-16 lg:px-24 '>
<div className='container py-2 flex justify-center items-center md:justify-between'>
        <div className='font-bold hidden text-3xl md:inline sm:flex-col '>Tekalign Shitaye</div>
        <div className='space-x-6 '>
            <a href='#home' className='hover:text-gray-400 font-semibold'>Home</a>
            <a href='#about'className='hover:text-gray-400 font-semibold'>About Me</a>
            <a href='#services'className='hover:text-gray-400 font-semibold'>Services</a>
            <a href='#projects'className='hover:text-gray-400 font-semibold'>Projects</a>
            <a href='#contact'className='hover:text-gray-400 font-semibold'>Contact Me</a>
        </div>
      <button className='bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-2xl text-white hidden md:inline transition-transform hover:scale-105 duration-300 transfom'>Connect Me </button>
      </div>
</nav>
  )
}

export default Navbar
