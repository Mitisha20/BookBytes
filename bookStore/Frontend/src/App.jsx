import React from 'react'
import Home from './Home/Home'
import { Route,Routes } from 'react-router-dom'

import Courses from './courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'

function App() {
  return (
    <>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/course" element={<Courses/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    
    </Routes>
  
    </>
  )
}

export default App
