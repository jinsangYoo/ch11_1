import React from 'react'
import './App.css'
import { Home, About, Events, Products, Contact, Whoops404, Services, History, Location } from './pages'
import { Route, Routes } from 'react-router'
import { Navigate } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Navigate to="/about/services" />} />

        <Route path="about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  )
}

export default App
