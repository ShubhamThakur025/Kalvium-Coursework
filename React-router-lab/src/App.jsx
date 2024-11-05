import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}