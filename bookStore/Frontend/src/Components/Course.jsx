import React from 'react'
import list from '../../public/list.json' 
import Cards from './Cards'
import {Link} from 'react-router-dom';
function Course() {
  return (
   <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
  <div className=' py-20 items-center justify-center text-center'>
  <h1 className='text-2xl font-bold md:text-4xl  bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text p-5'>Thank you for joining us!</h1>
  <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste soluta perferendis natus omnis vel quaerat repellat, quibusdam quas, possimus, quos dolor tempora accusantium! Temporibus aliquam ipsa nemo optio nostrum aperiam!</p>
  
  <div className='mt-10'>
  <Link to="/">
  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 ">
    Back
  </button>
  </Link>
  </div>
  
  <div className='mt-5 grid grid-cols-1 md:grid-cols-3'>
  {
  list.map((item)=>
  <Cards key={item.id} item={item}/>
  )
  }
  </div>
  
  </div>
  </div>
   </>
  )
}

export default Course
