import React, { useState } from 'react';
import axios from 'axios';
import './ReservationPage.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReservationPage = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        checkIn: '',
        checkOut: '',
        roomType: 'SINGLE',
        roomPrice: 695,
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        // Check-in date validation
        if (formData.checkIn < today) {
            newErrors.checkIn = "Check-in date cannot be in the past.";
        }

        // Check-out date validation
        if (formData.checkOut && formData.checkOut <= formData.checkIn) {
            newErrors.checkOut = "Check-out date must be after check-in.";
        }

        // Email validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }

        // Phone validation (only digits allowed)
        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain only digits (10 characters).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        try {
            await axios.post('http://localhost:4000/api/reservations/', formData);
            toast.success('Reservation submitted successfully!');
            resetForm();  // Reset the form after successful submission
        } catch (error) {
            toast.error('Error submitting reservation');
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            checkIn: '',
            checkOut: '',
            roomType: 'SINGLE',
            roomPrice: 695,
            phone: '',
            message: '',
        });
        setErrors({});
    };

    return (
        <div className='rBody'>
            <div className="reservation-page">
                <h1>Hotel_Name Reservation Form</h1>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />

                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                    <label>Check In:</label>
                    <input 
                        type="date" 
                        name="checkIn" 
                        value={formData.checkIn} 
                        onChange={handleChange} 
                        required 
                        min={today}  // Disable previous dates
                    />
                    {errors.checkIn && <p className="error">{errors.checkIn}</p>}

                    <label>Check Out:</label>
                    <input 
                        type="date" 
                        name="checkOut" 
                        value={formData.checkOut} 
                        onChange={handleChange} 
                        required 
                        min={formData.checkIn ? formData.checkIn : today} // Ensure check-out is after check-in
                    />
                    {errors.checkOut && <p className="error">{errors.checkOut}</p>}

                    <label>Room Type:</label>
                    <select name="roomType" value={formData.roomType} onChange={handleChange}>
                        <option value="SINGLE">Deluxe Suite</option>
                        <option value="DOUBLE">Standard Room</option>
                        <option value="SUITE">Executive Suite</option>
                    </select>

                    <label>Room Price:</label>
                    <input 
                        type="number" 
                        name="roomPrice" 
                        value={formData.roomPrice} 
                        onChange={handleChange} 
                        required 
                    />

                    <label>Phone:</label>
                    <input 
                        type="text" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}

                    <label>Message:</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                    ></textarea>

                    <button className='rbutton' type="submit">Submit Reservation</button>
                    <button className='rbutton' type="button" onClick={resetForm}>Reset All Fields</button>
                </form>
            </div>
        </div>
    );
};

export default ReservationPage;
