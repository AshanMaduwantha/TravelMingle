import React from 'react';
import colombo from './image/colombo.jpg';
import kandy from './image/kandy.jpg';
import galle from './image/galle.jpg';

const Featured = () => {
  return (
    <div className="w-full max-w-4xl flex justify-between gap-5 z-10">
      <div className="relative text-white rounded-lg overflow-hidden h-64 flex-1">
        <img src={colombo} alt="Colombo" className="w-full h-full object-cover" />
        <div className="absolute bottom-5 left-5">
          <h1 className="text-xl font-bold">Colombo</h1>
          <h2 className="text-lg">Properties</h2>
        </div>
      </div>
      
      <div className="relative text-white rounded-lg overflow-hidden h-64 flex-1">
        <img src={kandy} alt="Kandy" className="w-full h-full object-cover" />
        <div className="absolute bottom-5 left-5">
          <h1 className="text-xl font-bold">Kandy</h1>
          <h2 className="text-lg">Properties</h2>
        </div>
      </div>

      <div className="relative text-white rounded-lg overflow-hidden h-64 flex-1">
        <img src={galle} alt="Galle" className="w-full h-full object-cover" />
        <div className="absolute bottom-5 left-5">
          <h1 className="text-xl font-bold">Galle</h1>
          <h2 className="text-lg">Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
