import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Pages/NavBar'
import Home from './Pages/Home'
import RegForm from './Pages/RegForm'
import './App.css'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/RegForm' element={<RegForm />} />
      </Routes>
    </div>
  )
}

export default App
