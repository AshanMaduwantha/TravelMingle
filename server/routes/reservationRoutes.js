import express from 'express';
import Reservation from '../models/Reservation.js'; // Use import instead of require

const router = express.Router();

// POST Route - Create a new reservation
router.post("/", async (req, res) => {
    console.log(req.body); // Log request body to debug incoming data
    const { name, email, checkIn, checkOut, roomType, roomPrice, phone, message } = req.body;

    if (!name || !email || !checkIn || !checkOut || !roomType || !roomPrice || !phone || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const reservation = new Reservation(req.body);

    try {
        await reservation.save();
        res.status(201).json({
            message: "Reservation created successfully",
            reservation,
        });
    } catch (error) {
        res.status(400).json({
            error: "Failed to create reservation",
            details: error.message,
        });
    }
});

export default router;  // Use export default for ES modules
