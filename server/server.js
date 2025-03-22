import express from 'express';
import 'dotenv/config';
import cors from 'cors';  // Import the cors package
import connectDB from './config/mongodb.js';
import reservationRoutes from './routes/reservationRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

// Call connectDB only once
connectDB();

// Enable CORS for all origins (you can specify origins as needed)
app.use(cors());  // This enables CORS for all routes

app.use(express.json());
app.use('/api/reservations', reservationRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
