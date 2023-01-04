import React from 'react'

import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';  
import './App.css'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Errorpage from './components/Errorpage'
import Logout from './components/Logout'

const App = () => {
  return (
    <>
    <Routes>

        <Route exact path="/" element={<Home/>} />
    
        <Route path="/about" element={<About/>} />
        
        <Route path="/contact" element={<Contact/>} />
       
        <Route path="/login" element={<Login/>} />
       
        <Route path="/signup" element={<Signup/>} />

        <Route path="/logout" element={<Logout/>} />

        <Route path="*" element={<Errorpage/>}/>

        
      
        </Routes>
        
    </>
  )
}

export default App