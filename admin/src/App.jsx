import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import AdminHome from './pages/home/AdminHome';
import NewHotel from './pages/newHotel/NewHotel';
import EditHotel from './pages/updateHotel/EditHotel';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/add-hotel' element={<NewHotel />} />
          <Route path='/admin/edit-hotel' element={< EditHotel/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
