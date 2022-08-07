import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import PlantIndex from './components/PlantIndex'
import HiveMind from './components/HiveMind'
import ShowPlant from './components/ShowPlant'
// import Plant from './components/Plant'
// import HomePlants from './components/HomePlants'




function App() {
  // ! Add your routes in here!
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/plants" element={<PlantIndex />} /> 
        <Route path="/plants/:plantId" element={<ShowPlant />} /> 
        <Route path="/hivemind" element={<HiveMind />} />     
      </Routes>
    </Router>
  )
}

export default App
