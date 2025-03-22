import React, { useEffect, useState } from 'react';
import './BookedReservation.css';

const BookedReservations = () => {
    // Hardcoded user and reservations with hotel name
    const userReservations = {
        name: "Ashan Maduwantha",
        email: "Ashan@example.com",
        phone: "078564568",
        location: "New York, USA",
        profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
        reservations: [
            {
                hotelName: "Grand Royale Hotel",
                checkIn: "2025-03-25",
                checkOut: "2025-03-30",
                roomType: "Deluxe Suite",
                roomPrice: 250,
                message: "Looking forward to a relaxing stay!",
                status: "pending"
            },
            {
                hotelName: "Sunset Resort",
                checkIn: "2025-06-10",
                checkOut: "2025-06-15",
                roomType: "Standard Room",
                roomPrice: 150,
                message: "Need an extra pillow, please.",
                status: "completed"
            },
            {
                hotelName: "Oceanview Suites",
                checkIn: "2025-09-05",
                checkOut: "2025-09-10",
                roomType: "Executive Suite",
                roomPrice: 400,
                message: "Anniversary trip, please add some decorations!",
                status: "pending"
            }
        ]
    };

    const [reservations, setReservations] = useState(null);

    useEffect(() => {
        // Simulating API call delay
        setTimeout(() => {
            setReservations(userReservations);
        }, 1000);
    }, []);


    return (
        <div className="booked-reservations-container">
            <div className="booked-reservations-card">
                <h1 className="booked-reservations-title">Booking History</h1>

                {reservations === null ? (
                    <p className="loading-message">Loading reservations...</p>
                ) : (
                    <>
                        {/* User Profile Section */}
                        <div className="user-profile-section">
                            <img
                                src={reservations.profilePicture}
                                alt={`${reservations.name}'s profile`}
                                className="user-profile-picture"
                            />
                            <div className="user-info-box">
                                <h2>{reservations.name}</h2>
                                <p>Email: {reservations.email}</p>
                                <p>Phone: {reservations.phone}</p>
                                <p>Location: {reservations.location}</p>
                            </div>
                        </div>

                        {/* Reservations Table */}
                        <table className="reservations-table">
                            <thead>
                                <tr>
                                    <th>Hotel Name</th>
                                    <th>Check-in</th>
                                    <th>Check-out</th>
                                    <th>Room Type</th>
                                    <th>Price ($)</th>
                                    <th>Message</th>
                                    <th>Status</th> {/* New column for status */}
                                    <th>Actions</th> {/* Column for action buttons */}
                                </tr>
                            </thead>
                            <tbody>
                                {reservations.reservations.map((res, index) => (
                                    <tr key={index}>
                                        <td>{res.hotelName}</td>
                                        <td>{res.checkIn}</td>
                                        <td>{res.checkOut}</td>
                                        <td>{res.roomType}</td>
                                        <td>${res.roomPrice}</td>
                                        <td>{res.message || 'No message'}</td>
                                        <td>
                                            {/* Conditional Button */}
                                            <button
                                                className={`status-button ${res.status === "completed" ? 'completed' : 'pending'}`}
                                            >
                                                {res.status === "completed" ? 'Completed' : 'Pending'}
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="eedit-button"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="ddelete-button"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookedReservations;
