import React, { useState } from 'react';
import hilton from '../images/Rectangle 19377.png';
import four from '../images/Rectangle 19377 (6).png';
import radisson from '../images/Rectangle 19377 (5).png';
import villa from '../images/Rectangle 19377 (3).png';
import atlantic from '../images/Rectangle 19377 (2).png';
import jemeirah from '../images/Rectangle 19377 (1).png';

const hotelsData = [
  {
    name: 'Hilton Hotel',
    image: hilton,
    rating: 4.5,
    description: 'A cozy hotel located in the heart of the city. Perfect for a weekend getaway.',
    location: 'Paris'
  },
  {
    name: 'Four Seasons',
    image: four,
    rating: 4.2,
    description: 'Experience luxury at its finest with breathtaking views of the surrounding mountains.',
    location: 'Nairobi'
  },
  {
    name: 'Radisson Blu',
    image: radisson,
    rating: 4.8,
    description: 'Indulge in the ultimate beachfront experience with world-class amenities.',
    location: 'Maasai Mara'
  },
  {
    name: 'Villa Rosa',
    image: villa,
    rating: 4.6,
    description: 'Discover the charm of this historic hotel nestled in the heart of a bustling metropolis.',
    location: 'Dubai'
  },
  {
    name: 'Atlantic City',
    image: atlantic,
    rating: 4.0,
    description: 'A charming seaside retreat, our hotel offers breathtaking ocean views and luxurious accommodations.',
    location: 'Toronto'
  },
  {
    name: 'Jumeirah',
    image: jemeirah,
    rating: 4.2,
    description: 'Nestled in the heart of the city, our boutique hotel blends modern elegance with historic charm for an unforgettable urban escape.',
    location: 'Cameroon'
  },
];

const BookWithUs = () => {
  const [priceFilter, setPriceFilter] = useState('');

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-center py-16" style={{ backgroundImage: `url(${require('../images/maldives-island.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-white">Book With Us</h1>
          <p className="text-lg mb-6 text-white">Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
          <button className="bg-orange-500 text-black py-3 px-8 rounded-full uppercase">Explore Packages</button>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 md:flex md:justify-between">
        {/* Pairing Images */}
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
          {hotelsData.map((hotel, index) => (
            <div key={index} className="hotel-card bg-white p-4 rounded-lg shadow-md mb-4">
              <img src={hotel.image} alt={hotel.name} className="mb-2" />
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p className="text-gray-600 mb-2">Location: {hotel.location}</p>
              <p className="text-gray-600 mb-2">Rating: {hotel.rating}</p>
              <p className="text-gray-700">{hotel.description}</p>
            </div>
          ))}
        </div>
        
        {/* Trip Planner */}
        <div className="trip-planner md:w-1/3 md:ml-8">
          <h2 className="text-2xl font-semibold mb-4">Plan Your Trip</h2>
          <div className="search-section mb-4">
            <input type="text" placeholder="Search Hotels" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" placeholder="Search Locations" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" placeholder="Search Dates" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="price-filter mb-4">
            <label htmlFor="price-filter" className="block text-gray-700">Filter by Price:</label>
            <select id="price-filter" value={priceFilter} onChange={handlePriceFilterChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
              <option value="">All</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
          <button className="bg-orange-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookWithUs;
