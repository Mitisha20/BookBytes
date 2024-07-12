import React, { useEffect , useState } from 'react'
import Login from './Login'

function Navbar() {

const [sticky,SetSticky]=useState(false)
useEffect(()=>{
const handleScroll=()=>{
if(window.scrollY>0){
SetSticky(true);
}
else{
SetSticky(false);
}
}
window.addEventListener('scroll',handleScroll);
return()=>{
window.removeEventListener('scroll',handleScroll);
}
})

const navItems =(
<>
      <li className='text-white md:text-black' ><a href="/">Home</a></li>
      <li className='text-white md:text-black' ><a href="/course">Course</a></li>
      <li className='text-white md:text-black' ><a href="/contact">Contact</a></li>
      <li className='text-white md:text-black' ><a href="/about" >About</a></li>

</>
)
  return (
   <>
   <div style={{ backgroundColor: 'white' }} className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 dark:bg-black dark:text-white
   ${sticky? "z-50 sticky-Navbar shadow-md  duration-300 transition-all ease-in-out":""}`}>
   
   
   <div style={{ backgroundColor: 'white'}} className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-gradient-to-r from-blue-500 to-purple-600 text-white  ">
        {navItems}
      </ul>
    </div>
    
    {/* Logo */}
    <a className="text-2xl md:text-3xl font-bold cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out">BookBytes</a>

  </div>
  
  <div className="navbar-end space-x-3">
  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
                                        {/* Search bar */}
                                        
    <div className="hidden md:block">
    <label className="px-3 py-2 border border-black rounded-md flex items-center gap-2 ">
  <input type="text" className="grow outline-none bg-white" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="black"
    className="h-6 w-6 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>
  
                                              {/* Theme controller */}
  
  
  
  
                                              {/* Login button */}
                                              
  
  <div className="">
  <a className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out 
              hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 " onClick={()=>document.getElementById("my_modal_3").showModal()}>
    Login
  </a>
  <Login />
</div>


</div>
</div>
   </div>
   
   </>
  )
}

export default Navbar
