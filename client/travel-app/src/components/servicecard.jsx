import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const ServiceCard = () => {
  const [ratings, setRatings] = useState([0, 0, 0]); // Initial ratings for each card
  const [bookings, setBookings] = useState([120, 230, 150]); // Initial bookings for each card

  const handleRatingClick = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 my-8">      {/* Card 1 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/4425765/pexels-photo-4425765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Travel"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-white text-4xl font-bold text-center">Explore Paris</h2>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-2xl cursor-pointer ${
                  i < ratings[0] ? 'fill-current' : 'fill-none'
                }`}
                onClick={() => handleRatingClick(0, i + 1)}
              >
                {i < ratings[0] ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
            <span className="ml-2 text-white">({bookings[0]} bookings)</span>
          </div>
          <p className="text-white mt-2 font-thin px-2">
            Enjoy the beauty of Paris with our exclusive travel package. Explore iconic landmarks
            such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.
          </p>
          <p className="text-white">Location: Paris, France</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
      {/* Card 2 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Travel"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div id='glass' className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-white text-4xl font-bold text-center">Discover New York</h2>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-2xl cursor-pointer ${
                  i < ratings[1] ? 'fill-current' : 'fill-none'
                }`}
                onClick={() => handleRatingClick(1, i + 1)}
              >
                {i < ratings[1] ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
            <span className="ml-2 text-white">({bookings[1]} bookings)</span>
          </div>
          <p className="text-white mt-2 font-thin px-2">
            Experience the vibrant energy of New York City with our exclusive travel package. Visit
            famous attractions such as Times Square, Central Park, and the Statue of Liberty.
          </p>
          <p className="text-white">Location: New York City, USA</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
      {/* Card 3 */}
      <div className="relative group">
        <img
          src="https://images.pexels.com/photos/1386603/pexels-photo-1386603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Travel"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="text-white text-4xl font-bold text-center">Experience Adventure</h2>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`text-yellow-400 text-2xl cursor-pointer ${
                  i < ratings[2] ? 'fill-current' : 'fill-none'
                }`}
                onClick={() => handleRatingClick(2, i + 1)}
              >
                {i < ratings[2] ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
            <span className="ml-2 text-white">({bookings[2]} bookings)</span>
          </div>
          <p className="text-white mt-2 font-thin px-2">
            Embark on an unforgettable adventure with our travel package. Explore breathtaking
            landscapes, engage in thrilling activities, and create lasting memories.
          </p>
          <p className="text-white">Location: Various destinations</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
