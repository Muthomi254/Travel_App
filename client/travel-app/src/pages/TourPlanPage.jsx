import React from 'react';
import heroImage from '../images/tour_hero.jpg'; 
import beachImage from '../images/beach_vacation.jpg';
import mountainImage from '../images/mountain_retreat.jpg';
import cityImage from '../images/city_exploration.jpg';
import historicalImage from '../images/historical_tour.jpg';
import cruiseImage from '../images/cruise_experience.jpg';
import carImage from '../images/car_image.jpg';
import busImage from '../images/bus_image.jpg';
import planeImage from '../images/plane_image.jpg';
import { FaCar, FaBus, FaPlane } from 'react-icons/fa'; 

function TourPlanPage() {
  return (
    <div> 
      {/* Hero Section */}
      <div className="hero-section relative">
        <img src={heroImage} alt="Tour Plan" className="w-full h-64 sm:h-96 rounded-t-lg object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl p-4 text-center">
          Tour Plan
        </div>
      </div>

      <div className="px-20"> 
        {/* Tour Plan */}
        <div className="tour-plan-container grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {/* Car Tour */}
          <div className="tour-item bg-white rounded-lg shadow-md p-6">
            <img src={carImage} alt="Car" className="w-32 h-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-bold text-center">Car Tour</h3>
            <p className="text-center">Rent a car for flexible and convenient travel options.</p>
            <div className="flex items-center justify-center mt-2">
              <FaCar className="text-orange-500" />
              <p className="ml-1 font-semibold text-sm">Starting from $800</p>
            </div>
          </div>

          {/* Bus Tour */}
          <div className="tour-item bg-white rounded-lg shadow-md p-6">
            <img src={busImage} alt="Bus" className="w-32 h-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-bold text-center">Bus Tour</h3>
            <p className="text-center">Experience convenient travel with bus routes across various destinations.</p>
            <div className="flex items-center justify-center mt-2">
              <FaBus className="text-orange-500" />
              <p className="ml-1 font-semibold text-sm">Starting from $500</p>
            </div>
          </div>

          {/* Plane Tour */}
          <div className="tour-item bg-white rounded-lg shadow-md p-6">
            <img src={planeImage} alt="Plane" className="w-32 h-32 mx-auto mb-4 rounded-full" />
            <h3 className="text-lg font-bold text-center">Plane Tour</h3>
            <p className="text-center">Travel to exotic destinations with comfortable and reliable airlines.</p>
            <div className="flex items-center justify-center mt-2">
              <FaPlane className="text-orange-500" />
              <p className="ml-1 font-semibold text-sm">Starting from $1200</p>
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="explore-section mt-8 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Explore</h2>
          <div className="tour-packages grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tour Package 1 */}
            <div className="tour-package bg-white rounded-lg shadow-md p-6">
              <img src={beachImage} alt="Beach Vacation" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-lg font-bold mb-2">Beach Vacation</h3>
              <p className="mb-4">Enjoy sun, sand, and relaxation on some of the world's most beautiful beaches.</p>
              <p className="text-orange-500 font-semibold">$1200</p>
            </div>

            {/* Tour Package 2 */}
            <div className="tour-package bg-white rounded-lg shadow-md p-6">
              <img src={mountainImage} alt="Mountain Retreat" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-lg font-bold mb-2">Mountain Retreat</h3>
              <p className="mb-4">Experience the serenity of the mountains with breathtaking views and outdoor adventures.</p>
              <p className="text-orange-500 font-semibold">$1500</p>
            </div>

            {/* Tour Package 3 */}
            <div className="tour-package bg-white rounded-lg shadow-md p-6">
              <img src={cityImage} alt="City Exploration" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-lg font-bold mb-2">City Exploration</h3>
              <p className="mb-4">Immerse yourself in the culture and vibrancy of bustling cities around the globe.</p>
              <p className="text-orange-500 font-semibold">$1000</p>
            </div>

            {/* Tour Package 4 */}
            <div className="tour-package bg-white rounded-lg shadow-md p-6">
              <img src={historicalImage} alt="Historical Tour" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-lg font-bold mb-2">Historical Tour</h3>
              <p className="mb-4">Discover the rich history and heritage of ancient civilizations with expert guides.</p>
              <p className="text-orange-500 font-semibold">$1800</p>
            </div>

            {/* Tour Package 5 */}
            <div className="tour-package bg-white rounded-lg shadow-md p-6">
              <img src={cruiseImage} alt="Cruise Experience" className="w-full h-48 object-cover mb-4 rounded-t-lg" />
              <h3 className="text-lg font-bold mb-2">Cruise Experience</h3>
              <p className="mb-4">Sail across the seas and explore different destinations while enjoying luxury amenities.</p>
              <p className="text-orange-500 font-semibold">$2500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPlanPage;
