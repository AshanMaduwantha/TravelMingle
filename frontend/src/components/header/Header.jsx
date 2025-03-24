import React from 'react';
import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="bg-[#003580] text-white flex justify-center relative">
      <div className={`w-full max-w-4xl my-5 ${type === "list" ? "mb-0" : "mb-24"}`}>
        <div className="flex gap-10 mb-12">
          <div className="flex items-center gap-2 py-2 px-4 border-2 border-white rounded-full">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="text-3xl font-bold">A lifetime of discounts? It's Genius.</h1>
            <p className="my-5 text-lg">Get rewarded for your travels – unlock instant savings of 10% or more with a free Travel Mingle account</p>
            <button className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded-md cursor-pointer">
              Sign in / Register
            </button>

            <div className="absolute bottom-[-25px] w-full max-w-4xl flex items-center justify-around bg-white border-3 border-[#febb02] py-2 px-4 rounded-md">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBed} className="text-gray-300" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="border-none outline-none"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarDays} className="text-gray-300" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-gray-300 cursor-pointer"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="absolute top-14 z-10"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPerson} className="text-gray-300" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="text-gray-300 cursor-pointer"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="absolute top-14 bg-white text-gray-600 rounded-md shadow-lg w-[200px] z-10">
                    <div className="flex justify-between m-2">
                      <span className="text-sm">Adult</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options.adult <= 1}
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] cursor-pointer"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="text-xs">{options.adult}</span>
                        <button
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] cursor-pointer"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between m-2">
                      <span className="text-sm">Children</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options.children <= 0}
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] cursor-pointer"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="text-xs">{options.children}</span>
                        <button
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] cursor-pointer"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between m-2">
                      <span className="text-sm">Room</span>
                      <div className="flex items-center gap-2">
                        <button
                          disabled={options.room <= 1}
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] cursor-pointer"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="text-xs">{options.room}</span>
                        <button
                          className="w-8 h-8 border border-[#0071c2] text-[#0071c2] cursor-pointer"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="bg-[#0071c2] text-white font-medium py-2 px-4 rounded-md cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
