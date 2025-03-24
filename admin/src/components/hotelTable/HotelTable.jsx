import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelTable = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Grand Palace Hotel",
      type: "hotel",
      city: "New York",
      address: "1234 Broadway St",
      distance: "1 KM",
      cheapestPrice: "Rs.150000",
      title: "Grand Palace Hotel",
      description: "Grand Palace Hotel is a luxurious hotel located in the heart of New York City.",
    },
    {
      id: 2,
      name: "Sea Breeze Resort",
      type: "resort",
      city: "Miami",
      address: "1234 Ocean Dr",
      distance: "1 KM",
      cheapestPrice: "Rs.250000",
      title: "Sea Breeze Resort",
      description: "Sea Breeze Resort is a luxurious beachfront resort located in the heart of Miami.",
    },
    {
      id: 3,
      name: "Mountain View Lodge",
      type: "hotel",
      city: "Denver",
      address: "1234 Mountain Rd",
      distance: "2 KM",
      cheapestPrice: "Rs.150000",
      title: "Mountain View Lodge",
      description: "Mountain View Lodge is a beautiful hotel located in the heart of the Rocky Mountains.",
    },
  ]);

  // Function to handle deleting a hotel
  const handleDelete = (id) => {
    const updatedHotels = hotels.filter((hotel) => hotel.id !== id);
    alert("Hotel details Deleted successfully!");
    setHotels(updatedHotels);
  };

  // Function to handle editing a hotel
  const handleEdit = (id) => {
    const hotelToEdit = hotels.find((hotel) => hotel.id === id);
    navigate("/edit-hotel", { state: { hotel: hotelToEdit } });
  };

  return (
    <div className="w-4/5 mx-auto mt-5 text-center">
      <h2 className="text-2xl font-semibold mb-4">Hotel List</h2>
      <button
        className="px-4 py-2 mb-4 bg-blue-700 text-white rounded-lg hover:bg-blue-900 float-right"
        onClick={() => navigate("/admin/add-hotel")}
      >
        Add Hotel
      </button>
      <table className="w-full border-collapse border border-gray-300 shadow-lg">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 p-3">ID</th>
            <th className="border border-gray-300 p-3">Hotel Name</th>
            <th className="border border-gray-300 p-3">Hotel Type</th>
            <th className="border border-gray-300 p-3">City</th>
            <th className="border border-gray-300 p-3">Address</th>
            <th className="border border-gray-300 p-3">Distance</th>
            <th className="border border-gray-300 p-3">Cheapest Price</th>
            <th className="border border-gray-300 p-3">Title</th>
            <th className="border border-gray-300 p-3">Description</th>
            <th className="border border-gray-300 p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 p-3">{hotel.id}</td>
              <td className="border border-gray-300 p-3">{hotel.name}</td>
              <td className="border border-gray-300 p-3">{hotel.type}</td>
              <td className="border border-gray-300 p-3">{hotel.city}</td>
              <td className="border border-gray-300 p-3">{hotel.address}</td>
              <td className="border border-gray-300 p-3">{hotel.distance}</td>
              <td className="border border-gray-300 p-3">{hotel.cheapestPrice}</td>
              <td className="border border-gray-300 p-3">{hotel.title}</td>
              <td className="border border-gray-300 p-3">{hotel.description}</td>
              <td className="border border-gray-300 p-3 space-x-2">
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => handleEdit(hotel.id)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700"
                  onClick={() => handleDelete(hotel.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelTable;
