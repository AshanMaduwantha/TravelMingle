import React from 'react';
import araliya from './image/araliya.jpg';
import tajsamudra from './image/tajsamudra.jpg';
import shangrila from './image/shangrila.jpg';
import thilanka from './image/thilanka.jpg';

function FeaturedProperties() {
  return (
    <div className="w-full max-w-4xl flex justify-between gap-5">
      <div className="flex-1 gap-2 flex flex-col">
        <img src={araliya} alt="" className="w-full h-64 object-cover" />
        <span className="font-bold text-gray-800">Araliya Beach Resort</span>
        <span className="font-light">Unawatuna</span>
        <span className="font-medium">Starting from Rs.10000.00</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white px-2 py-1 font-bold">8.9</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>

      <div className="flex-1 gap-2 flex flex-col">
        <img src={tajsamudra} alt="" className="w-full h-64 object-cover" />
        <span className="font-bold text-gray-800">Taj Samudra Hotel</span>
        <span className="font-light">Colombo</span>
        <span className="font-medium">Starting from Rs.10000.00</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white px-2 py-1 font-bold">8.9</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>

      <div className="flex-1 gap-2 flex flex-col">
        <img src={shangrila} alt="" className="w-full h-64 object-cover" />
        <span className="font-bold text-gray-800">Shangri-La Hotel</span>
        <span className="font-light">Colombo</span>
        <span className="font-medium">Starting from Rs.10000.00</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white px-2 py-1 font-bold">8.9</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>

      <div className="flex-1 gap-2 flex flex-col">
        <img src={thilanka} alt="" className="w-full h-64 object-cover" />
        <span className="font-bold text-gray-800">Thilanka Hotel</span>
        <span className="font-light">Kandy</span>
        <span className="font-medium">Starting from Rs.10000.00</span>
        <div className="flex items-center gap-2">
          <button className="bg-[#003580] text-white px-2 py-1 font-bold">8.9</button>
          <span className="text-sm">Excellent</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
