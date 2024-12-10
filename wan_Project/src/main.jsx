import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './index.jsx'
import Event from './Event.jsx'
import Membership_myPage from './Membership_myPage.jsx'
import Membership_collection from './Membership_collection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Membership" element={<Membership_myPage />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
