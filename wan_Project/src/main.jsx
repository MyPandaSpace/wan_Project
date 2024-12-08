import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './index.jsx'
import Event from './Event.jsx'
import Membership from './Membership.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
