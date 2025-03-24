import React from 'react'
import hotel from './image/hotel.jpg'
import vila from './image/vila.jpg'
import kabana from './image/kabana.jpg'
import resort from './image/resort.jpg'
import apartment from './image/apartment.jpg'

function PropertyList() {
  return (
    <div className="w-full max-w-screen-lg mx-auto flex justify-between gap-5">
      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img src={hotel} alt="Hotel" className="w-full h-38 object-cover" />
        <div className="p-3">
          <h1 className="text-lg text-gray-700 capitalize">Hotels</h1>
        </div>
      </div>

      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img src={vila} alt="Villas" className="w-full h-38 object-cover" />
        <div className="p-3">
          <h1 className="text-lg text-gray-700 capitalize">Villas</h1>
        </div>
      </div>

      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img src={kabana} alt="Kabana" className="w-full h-38 object-cover" />
        <div className="p-3">
          <h1 className="text-lg text-gray-700 capitalize">Kabana</h1>
        </div>
      </div>

      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img src={resort} alt="Resorts" className="w-full h-38 object-cover" />
        <div className="p-3">
          <h1 className="text-lg text-gray-700 capitalize">Resorts</h1>
        </div>
      </div>

      <div className="flex-1 rounded-lg overflow-hidden cursor-pointer">
        <img src={apartment} alt="Apartments" className="w-full h-38 object-cover" />
        <div className="p-3">
          <h1 className="text-lg text-gray-700 capitalize">Apartments</h1>
        </div>
      </div>
    </div>
  )
}

export default PropertyList
