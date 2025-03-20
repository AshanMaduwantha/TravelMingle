import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";
import "./styles/home.css"; // Import home page CSS

function Home() {
    return (
        <div className="home-container"> {/* Add home-container class */}
            <h1>Welcome to Reviews</h1>
            <div className="buttons"> {/* Add buttons class */}
                <button className="btn"> {/* Add btn class */}
                    <Link to="/add-review" className="btn">Add Review</Link>
                </button>
                <button className="btn"> {/* Add btn class */}
                    <Link to="/reviews" className="btn">View Reviews</Link>
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-review" element={<ReviewForm />} />
                <Route path="/reviews" element={<ReviewList />} />
            </Routes>
        </Router>
    );
}

export default App;
