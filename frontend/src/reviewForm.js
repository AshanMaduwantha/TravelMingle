
import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ fetchReviews }) => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/reviews", { name, rating, comment });
        fetchReviews();
        setName("");
        setRating(5);
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Your Review" required />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
