import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './index.jsx'
import Event from './Event.jsx'
import Event_Type2 from './Event_Type2.jsx'
import Event_Type3 from './Event_Type3.jsx'
import Membership_myPage from './Membership_myPage.jsx'
import Membership_myCollection from './Membership_myCollection.jsx'
import Membership_myOrder from './Membership_myOrder.jsx'
import FaqPage from './FaqPage.jsx'
import Modal_SignUp from './component/Modal_Signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Event_Type2" element={<Event_Type2 />} />
        <Route path="/Event_Type3" element={<Event_Type3 />} />
        <Route path="/Membership_myPage" element={<Membership_myPage />} />
        <Route path="/Membership_myCollection" element={<Membership_myCollection />} />
        <Route path="/Membership_myOrder" element={<Membership_myOrder />} />
        <Route path="/Faq" element={<FaqPage />} />
        <Route path="/Modal_SignUp" element={<Modal_SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
