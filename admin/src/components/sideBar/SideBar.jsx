import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-40 h-screen bg-blue-900 text-white fixed left-0 top-0 flex flex-col p-5">
      <h2 className="text-lg font-bold text-center mb-5 text-white">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="block py-2 px-3 rounded-md hover:bg-blue-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/hotels" className="block py-2 px-3 rounded-md hover:bg-blue-700">
            Manage Hotels
          </Link>
        </li>
        <li>
          <Link to="/bookings" className="block py-2 px-3 rounded-md hover:bg-blue-700">
            Manage Bookings
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="block py-2 px-3 rounded-md hover:bg-blue-700">
            Manage Reviews
          </Link>
        </li>
        <li className="mt-auto border-t border-gray-500 pt-3">
          <Link to="/logout" className="block py-2 px-3 rounded-md hover:bg-red-700">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
