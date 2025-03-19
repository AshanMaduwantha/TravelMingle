import { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    const fetchReviews = async () => {
        const response = await axios.get("http://localhost:5000/api/reviews");
        setReviews(response.data);
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <div key={review._id}>
                    <h4>{review.name} - {review.rating}★</h4>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
