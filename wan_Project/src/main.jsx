import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Index from './index.jsx'
import Event from './Event.jsx'
import Event_Type2 from './Event_Type2.jsx'
import Event_Type3 from './Event_Type3.jsx'
import Membership_myPage from './Membership_myPage.jsx'
import Membership_myCollection from './Membership_myCollection.jsx'
import Membership_myOrder from './Membership_myOrder.jsx'
import FaqPage from './FaqPage.jsx'
import Modal_SignUp from './component/Modal_Signup.jsx'
import Event_Detail from './Event_Detail.jsx'
import About from './About.jsx'
import Article_Bay from './Article_Bay.jsx'
import Apply_Page1 from './Apply_Page1.jsx'
import Article from './Article.jsx'
import Apply_Page2 from './Apply_Page2.jsx'
import Filter_Modal from './component/Filter_Modal.jsx'
import MobileWarning from './component/MobileWarning';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MobileWarning />
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Event_Type2" element={<Event_Type2 />} />
        <Route path="/Event_Type3" element={<Event_Type3 />} />
        <Route path="/Membership_myPage" element={<Membership_myPage />} />
        <Route path="/Membership_myCollection" element={<Membership_myCollection />} />
        <Route path="/Membership_myOrder" element={<Membership_myOrder />} />
        <Route path="/FaqPage" element={<FaqPage />} />
        <Route path="/Modal_SignUp" element={<Modal_SignUp />} />
        <Route path="/Event_Detail" element={<Event_Detail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Article_Bay" element={<Article_Bay />} />
        <Route path="/Apply_Page1" element={<Apply_Page1 />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Apply_Page2" element={<Apply_Page2 />} />
        <Route path="/Filter_Modal" element={<Filter_Modal />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
