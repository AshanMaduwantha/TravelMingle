import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    checkIn: {
        type: Date,
        required: true,
    },
    checkOut: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value > this.checkIn;
            },
            message: 'Check-out date must be after check-in date.',
        },
    },
    roomType: {
        type: String,
        required: true,
    },
    roomPrice: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        validate: {
            validator: function(value) {
                return /\+?\d{1,3}?\s?\(?\d+\)?\s?\d+\s?\d+/g.test(value); // Phone number validation
            },
            message: 'Please provide a valid phone number.'
        },
    },
    message: {
        type: String,
        maxlength: [500, 'Message cannot exceed 500 characters.'],  // Optional: Add max length validation
    },
}, { timestamps: true });

// Indexing fields for faster queries
reservationSchema.index({ email: 1, checkIn: 1, checkOut: 1 });

export default mongoose.model('Reservation', reservationSchema);  // Use export default
