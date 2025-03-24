import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Hotel name is required")
    .matches(/^[a-zA-Z\s]*$/, "Hotel name cannot contain numbers or special characters"),
  type: yup.string().required("Hotel type is required"),
  city: yup
    .string()
    .required("City is required")
    .matches(/^[a-zA-Z\s]*$/, "City cannot contain numbers or special characters"),
  address: yup.string().required("Address is required"),
  distance: yup.string().required("Distance is required"),
  cheapestPrice: yup
    .number()
    .typeError("Price must be a number")
    .required("Cheapest price is required")
    .positive("Price must be positive"),
  title: yup.string().required("Title is required"),
  desc: yup.string().required("Description is required"),
});

const NewHotel = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const uploadImages = async (files) => {
    return ["https://via.placeholder.com/150"];
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const imageUrls = await uploadImages(files);
    const hotelData = { ...data, photos: imageUrls };

    console.log("Form Data:", hotelData);
    setTimeout(() => {
      alert("Hotel added successfully!");
      navigate("/admin");
    }, 1000);

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-5 text-blue-900">Add New Hotel</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700">Hotel Name</label>
            <input
              type="text"
              placeholder="Hotel Name"
              {...register("name")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Hotel Type</label>
            <select {...register("type")} className="input-field">
              <option value="">Select a type</option>
              <option value="hotel">Hotel</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
            </select>
            <p className="text-red-500 text-sm">{errors.type?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              placeholder="City"
              {...register("city")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.city?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Address"
              {...register("address")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.address?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Distance</label>
            <input
              type="text"
              placeholder="Distance (e.g., 2km from center)"
              {...register("distance")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.distance?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Cheapest Price</label>
            <input
              type="number"
              placeholder="Cheapest Price"
              {...register("cheapestPrice")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.cheapestPrice?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Title"
              {...register("title")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.title?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              placeholder="Description"
              {...register("desc")}
              className="input-field"
            />
            <p className="text-red-500 text-sm">{errors.desc?.message}</p>
          </div>

          <div>
            <label className="block text-gray-700">Images</label>
            <input type="file" multiple onChange={(e) => setFiles(e.target.files)} />
            <p className="text-red-500 text-sm">
              {files.length === 0 && "At least one image is required"}
            </p>
          </div>

          <button
            type="submit"
            disabled={!isValid || loading}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Add Hotel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewHotel;
