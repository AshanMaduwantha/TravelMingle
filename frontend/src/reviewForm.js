import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/reviewForm.css"; // Import CSS


const ReviewForm = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/reviews", { name, rating, comment });

        // Redirect to reviews page after submission
        navigate("/reviews");
    };

    return (
        <div className="form-container"> {/* Add form-container class */}
        <h2>Add a Review</h2>
        <form onSubmit={handleSubmit}>
            <input
                className="input-field" // Add input field class for custom styles
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
            />
            <input
                className="input-field" // Add input field class for custom styles
                type="number"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                min="1"
                max="5"
                required
            />
            <textarea
                className="input-field" // Add input field class for custom styles
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Your Review"
                required
            />
            <button type="submit" className="btn">Submit Review</button> {/* Apply .btn class */}
        </form>
        <button onClick={() => navigate("/")} className="btn back">Back to Home</button> {/* Apply .btn and .back class */}
    </div>
    );
};

export default ReviewForm;
