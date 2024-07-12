import React from 'react'

function Banner() {
  return (
    <>
    <div style={{ backgroundColor: 'white', }} className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
    
    
    <div className='order-2 md:order-1 w-full md:w-1/2'>
    
    <div className='space-y-12 mt-12 md:mt-32 mb-32'>
    
    <h1 className='text-4xl font-bold' style={{color:'#434342'}} >Welcome to BookBytes : <span style={{
      backgroundImage: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }}>Your Gateway to Endless Stories!</span></h1>
    
    <p className='text-l' style={{color:'#292928'}}>
Welcome to BookBytes! Dive into our vast collection of ebooks and discover your next favorite read. From classic tales to the latest bestsellers, we have something for everyone. Enjoy an easy and immersive reading experience, right at your fingertips. Explore, download, and start your next adventure with BookBytes.</p>
    
    
    
<div className="flex flex-col space-y-3">
  <label className="input input-bordered flex items-center gap-2 bg-white border-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="black"
      className="h-4 w-4 opacity-70">
      <path
        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path
        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
    <input type="text" className="grow" placeholder="Email" />
  </label>

  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out
  hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 items-center">
    Get Started
  </button>
</div>

    </div>
    
    
    
    
    </div>
    <div className='md:order-1 w-full md:w-1/2 flex md:justify-center md:items-center  '>
    <img src="banner.webp" className='mt-8 md:mt-0 '></img>
    
    </div>
    </div>
    </>
  )
}

export default Banner
