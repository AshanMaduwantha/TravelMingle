import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import araliya from "./image/araliya.jpg";
import shangrila from "./image/shangrila.jpg";
import tajsamudra from "./image/tajsamudra.jpg";
import thilanka from "./image/thilanka.jpg";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    { src: araliya },
    { src: shangrila },
    { src: tajsamudra },
    { src: thilanka },
    { src: shangrila },
    { src: tajsamudra }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="flex flex-col items-center mt-5">
        {open && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-50">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="absolute top-5 right-5 text-3xl text-gray-400 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="absolute left-5 text-5xl text-gray-400 cursor-pointer"
              onClick={() => handleMove("l")}
            />
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={photos[slideNumber].src}
                alt=""
                className="w-4/5 h-4/5 object-cover"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="absolute right-5 text-5xl text-gray-400 cursor-pointer"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

        <div className="w-full max-w-4xl flex flex-col gap-3 relative">
          <button className="absolute top-3 right-0 border-none py-2 px-5 bg-blue-700 text-white font-bold rounded-md cursor-pointer">
            Reserve or Book Now!
          </button>

          <h1 className="text-2xl font-semibold">Araliya</h1>

          <div className="text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Colombo</span>
          </div>

          <span className="text-blue-700 font-medium">
            Excellent location – 50m from center
          </span>

          <span className="text-green-800 font-medium">
            Book a stay over Rs.10000 at this property and get a free airport taxi
          </span>

          <div className="flex flex-wrap justify-between gap-3 mt-3">
            {photos.map((photo, i) => (
              <div className="w-1/3" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="w-full h-40 object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-5 mt-5">
            <div className="flex-3">
              <h1 className="text-2xl font-semibold">Araliya Hotel</h1>
              <p className="text-sm mt-5">
                Located in the real heart of Krakow, this property has an excellent location. With amazing views and facilities, it's perfect for a relaxing stay.
              </p>
            </div>

            <div className="flex-1 bg-blue-100 p-5 flex flex-col gap-5">
              <h1 className="text-lg text-gray-700">Perfect for a days-night stay!</h1>
              <span className="text-sm">
                Located in the real heart of Krakow, this property has an excellent location score of 9.8!
              </span>
              <h2 className="font-light text-xl">
                <b>Rs.200000</b> (9 nights)
              </h2>
              <button className="py-2 px-5 bg-blue-700 text-white font-bold rounded-md cursor-pointer">
                Reserve or Book Now!
              </button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
