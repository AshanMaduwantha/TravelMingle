import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-4xl flex gap-5">
          <div className="flex-1 bg-yellow-400 p-5 rounded-lg sticky top-10">
            <h1 className="text-lg text-gray-700 mb-5">Search</h1>

            <div className="flex flex-col gap-3 mb-5">
              <label className="text-sm">Destination</label>
              <input
                type="text"
                placeholder={destination}
                className="h-8 p-2 border-none"
              />
            </div>

            <div className="flex flex-col gap-3 mb-5">
              <label className="text-sm">Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="h-8 p-2 bg-white flex items-center cursor-pointer"
              >
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>

            <div className="flex flex-col gap-5 mb-5">
              <label className="text-sm">Options</label>
              <div className="p-2">
                <div className="flex justify-between text-sm text-gray-700 mb-3">
                  <span>Min price <small>per night</small></span>
                  <input type="number" className="w-16" />
                </div>

                <div className="flex justify-between text-sm text-gray-700 mb-3">
                  <span>Max price <small>per night</small></span>
                  <input type="number" className="w-16" />
                </div>

                <div className="flex justify-between text-sm text-gray-700 mb-3">
                  <span>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="w-16"
                    placeholder={options.adult}
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-700 mb-3">
                  <span>Children</span>
                  <input
                    type="number"
                    min={0}
                    className="w-16"
                    placeholder={options.children}
                  />
                </div>

                <div className="flex justify-between text-sm text-gray-700 mb-3">
                  <span>Room</span>
                  <input
                    type="number"
                    min={1}
                    className="w-16"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-2 bg-blue-700 text-white font-medium cursor-pointer rounded-md">
              Search
            </button>
          </div>

          <div className="flex-3">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
