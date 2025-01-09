import React from 'react'

const services = [
    {
        id:1,
        title:"Web Design",
        Description: "Creating visually appealing and user-friendly web design"
    },
    {
        id:2,
        title:"Frontend Development",
        Description: "Building Responsive and Interactive user interface"
    },
    {
        id:3,
        title:"Backend Development",
        Description: "Developing robust server-side logic and database"
    },
    {
        id:4,
        title:"Web Design",
        Description: "Creating visually appealing and user-friendly web design"
    },
    {
        id:5,
        title:"Frontend Development",
        Description: "Building Responsive and Interactive user interface"
    },
    {
        id:6,
        title:"Backend Development",
        Description: "Developing robust server-side logic and database"
    }
]
const Services = () => {
  return (
    <div className='bg-gray-800 text-white py-20 '>
      <div className='mx-auto container px-8 md:px-16 lg:px-24 '>
      <h2 className='text-3xl font-bold mb-8 text-center'>My Services</h2>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer'>
        {services.map(service => (
                 <div key={service.id} className='rounded-lg px-6 pb-6 bg-gray-700 hover:shadow-lg transform
                  transition-transform duration-300 hover:scale-105'>
                     <div className='text-right text-2xl font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-transparent'>
                    {service.id}
                  </div>
                  <h3 className='pt-2 text-2xl font-bold bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 text-transparent'>
                    {service.title}
                  </h3>
                  <p className='pt-2'>
                    {service.Description}
                  </p>
                  <a href='#' className='mt-6 inline-block text-green-400 hover:text-blue-500'>Read More</a>
                  </div>
                 
        ))}
      </div>
      </div>
    </div>
  )
}

export default Services
