import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="relative">
      {/* dialog should be at the top level of the component */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Login</h3>
            
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
              <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out 
                hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 ">
                Login
              </button>
              <p className='mt-2 text-black'>Not Registered? <Link to="/signup" className='text-blue-500 underline cursor-pointer' >SignUp</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
