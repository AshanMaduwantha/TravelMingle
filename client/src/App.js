// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // No need for <Router> here
import HomePage from './pages/HomePage/HomePage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import BookedReservations from './pages/BookedReservation/BookedReservation';
import Navbar from './pages/Navbar/Navbar';
function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/bookedReservation" element={<BookedReservations/>}/>
            </Routes>
        </div>
    );
}

export default App;