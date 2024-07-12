import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  return (
  <>
  <Navbar/>
    <div className='mt-10 flex h-screen items-center justify-center  '>
      <div className=''>
        <div className="modal-box bg-white w-[900px] overflow-hidden ">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Name</span><br/>
              <input type="text" placeholder="Enter Your Full Name" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("name", { required: true })} /><br/>
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>} 
            </div>
            
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Email</span><br/>
              <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("email", { required: true })} /><br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>} 
            </div>

            {/* Subject */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Subject</span><br/>
              <input type="text" placeholder="Enter Subject" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("subject", { required: true })} /><br/>
              {errors.subject && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            {/* Message */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Message</span><br/>
              <textarea placeholder="Enter Your Message" className="w-80 px-3 py-1 border rounded-md outline-none" rows="4" {...register("message", { required: true })}></textarea><br/>
              {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-6 flex items-center space-x-40'>
              <button type='submit' className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out 
                hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 w-56 text-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
