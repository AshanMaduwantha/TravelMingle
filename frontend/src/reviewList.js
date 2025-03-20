import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/reviewList.css"; // Import CSS

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [editingReview, setEditingReview] = useState(null);
    const [editText, setEditText] = useState("");
    const [editRating, setEditRating] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/reviews");
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };

    // Delete a review
    const deleteReview = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/reviews/${id}`);
            fetchReviews(); // Refresh list
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    // Start editing
    const startEditing = (review) => {
        setEditingReview(review._id);
        setEditText(review.comment);
        setEditRating(review.rating);
    };

    // Update a review
    const updateReview = async (id) => {
        try {
            await axios.put(`http://localhost:5000/api/reviews/${id}`, {
                name: reviews.find((r) => r._id === id).name, // Keep name the same
                rating: editRating,
                comment: editText,
            });
            setEditingReview(null);
            fetchReviews(); // Refresh list
        } catch (error) {
            console.error("Error updating review:", error);
        }
    };

    return (
        <div className="review-list-container"> {/* Apply review-list-container class */}
            <h2>Reviews</h2>
            {reviews.length === 0 ? <p>No reviews yet.</p> : 
                reviews.map((review) => (
                    <div key={review._id} className="review-card"> {/* Apply review-card class */}
                        <h4>{review.name} - {review.rating}★</h4>

                        {editingReview === review._id ? (
                            <div>
                                <label>Rating:</label>
                                <input type="number" value={editRating} onChange={(e) => setEditRating(Number(e.target.value))} min="1" max="5" />
                                <br />
                                <label>Comment:</label>
                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                <br />
                                <button className="btn_save" onClick={() => updateReview(review._id)}>Save</button>
                                <button className="btn_cancel" onClick={() => setEditingReview(null)}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                <p>{review.comment}</p>
                                <button className="btn_edit" onClick={() => startEditing(review)}>Edit</button>
                                <button className="btn_delete" onClick={() => deleteReview(review._id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))
            }
            <button className="btn" onClick={() => navigate("/")}>Back to Home</button>
        </div>
    );
};

export default ReviewList;
