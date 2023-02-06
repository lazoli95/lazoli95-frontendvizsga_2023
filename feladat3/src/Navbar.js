import React from 'react'
import "./Navbar.css"
import Home from './components/Home'
import Scifi from './components/Scifi'
import Humor from './components/Humor'
import { Link, Route, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <Routes>

            <Route path="/" element={<Home />}>Főoldal</Route>
            <Route path="/scifi" element={<Scifi />}>Scifi</Route>
            <Route path="/humor" element={<Humor />}>Humor</Route>
            
        </Routes>
    </div>
  )
}

export default Navbar