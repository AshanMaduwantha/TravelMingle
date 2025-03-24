import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditHotel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel } = location.state;

  const [updatedHotel, setUpdatedHotel] = useState(hotel);

  const handleChange = (e) => {
    setUpdatedHotel({ ...updatedHotel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Hotel:", updatedHotel);
    alert("Hotel details updated successfully!");
    navigate("/"); // Navigate back to table
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-5 text-blue-900">Edit Hotel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Hotel Name</label>
            <input
              type="text"
              name="name"
              value={updatedHotel.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700">Hotel Type</label>
            <select name="type" value={updatedHotel.type} onChange={handleChange} className="input-field">
              <option value="Hotel">Hotel</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={updatedHotel.city}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={updatedHotel.address}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700">Distance</label>
            <input
              type="text"
              name="distance"
              value={updatedHotel.distance}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700">Cheapest Price</label>
            <input
              type="number"
              name="cheapestPrice"
              value={updatedHotel.cheapestPrice}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={updatedHotel.title}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="desc"
              value={updatedHotel.desc}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditHotel;
