import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className=''>
          <div className="modal-box bg-white w-[900px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              
              <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Sign Up</h3>

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

              {/* Password */}
              <div className="mt-4 space-y-2">
                <span className="text-black">Password</span><br/>
                <input type="password" placeholder="Enter Your Password" className="w-80 px-3 py-1 border rounded-md outline-none" {...register("password", { required: true })} /><br/>
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-6 flex items-center space-x-40'>
                <button type='submit' className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out 
                  hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 w-56 text-center">
                  Sign Up
                </button>
                <p className='mt-2 text-black'>
                  Already have an account? <a className='text-blue-500 underline cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()} >Login</a><Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
