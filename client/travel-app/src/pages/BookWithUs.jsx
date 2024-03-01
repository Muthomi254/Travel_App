import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import hilton from '../images/Rectangle 19377.png';
import four from '../images/Rectangle 19377 (6).png';
import radisson from '../images/Rectangle 19377 (5).png';
import villa from '../images/Rectangle 19377 (3).png';
import atlantic from '../images/Rectangle 19377 (2).png';
import jemeirah from '../images/Rectangle 19377 (1).png';

// Define TripPlanner component
const TripPlanner = () => {
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    days_in_room: '',
    rooms: '',
    people_included: '',
    user_id: 0, // Assuming user_id is required and not provided by the user
  });
  // eslint-disable-next-line
  const [selectedHotel, setSelectedHotel] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [priceFilter, setPriceFilter] = useState(''); // Define priceFilter state variable

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleBookNow = async () => {
    if (selectedHotel) {
      try {
        const response = await axios.post('/reservations/accommodation', {
          ...formData,
          service_id: selectedHotel.id,
        });
        console.log(response.data.message); // Log success message
        // Optionally, you can redirect the user or show a success message here
      } catch (error) {
        console.error('Error creating accommodation reservation:', error);
      }
    } else {
      console.log('No hotel selected for booking');
    }
  };

  return (
    <div id="trip-planner" className="trip-planner text-center py-8" style={{ paddingBottom: '100px' }}>
      <h2 className="text-2xl font-semibold mb-4">Plan Your Trip</h2>
      <div className="md:inline-flex">
        <div className="md:flex-auto md:flex-row md:flex-wrap md:justify-center md:content-start">
          <div className="search-section mb-4">
            <input type="text" name="people_included" placeholder="People included" value={formData.people_included} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" name="checkin" placeholder="Checkin" value={formData.checkin} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" name="checkout" placeholder="Checkout" value={formData.checkout} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" name="days_in_room" placeholder="Days in room" value={formData.days_in_room} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" name="rooms" placeholder="Rooms" value={formData.rooms} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="search-section mb-4">
            <input type="text" name="user_id" placeholder="User id" value={formData.user_id} onChange={handleInputChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="price-filter mb-4">
            <label htmlFor="price-filter" className="block text-gray-700">Filter by Price:</label>
            <select id="price-filter" value={priceFilter} onChange={handlePriceFilterChange} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500">
              <option value="">All</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>
        </div>
        <div className="md:flex-auto">
          <button className="bg-orange-500 text-black px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors" onClick={handleBookNow}>Book Now</button>
        </div>
      </div>
      {/* Display additional hotel information */}
      {selectedHotel && (
        <div className="selected-hotel-info">
          <h3>{selectedHotel.name}</h3>
          <p>{selectedHotel.description}</p>
          <p>Price: {selectedHotel.price}</p>
          {/* Add more information as needed */}
        </div>
      )}
    </div>
  );
};

// Define BookWithUs component
const BookWithUs = () => {
  const [hotelsData, setHotelsData] = useState([]); // State for storing hotel data
  // eslint-disable-next-line
  const [selectedHotel, setSelectedHotel] = useState(null);
  const fetchHotelsData = async () => {
    try {
      const response = await axios.get('/accommodation');
      setHotelsData(response.data);
    } catch (error) {
      console.error('Error fetching hotels data:', error);
    }
  };

  useEffect(() => {
    fetchHotelsData();
  }, []); // Run only once on component mount

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="hero-section text-center py-16" style={{ backgroundImage: `url(${require('../images/maldives-island.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Book With Us</h1>
          <p className="text-lg mb-6">Discover amazing destinations with our carefully curated packages. Whether you're seeking adventure, romance, or relaxation, we have the perfect getaway for you.</p>
          <a href="#trip-planner" className="bg-orange-500 text-black py-3 px-8 rounded-full uppercase">Explore Packages</a>
        </div>
      </section>

      {/* Images Section */}
      <section className="images-section grid grid-cols-3 gap-4 py-8">
        {hotelsData.map((hotel, index) => (
          <a key={index} href="#trip-planner" onClick={() => setSelectedHotel(hotel)}>
            <div className="hotel-card bg-white p-4 rounded-lg shadow-md mb-4">
              <img src={hotel.images} alt={hotel.name} className="mb-2" />
              <h3 className="text-xl font-semibold">{hotel.name}</h3>
              <p className="text-gray-600 mb-2">Location: {hotel.location}</p>
              <p className="text-gray-600 mb-2">Rating: {hotel.average_rating}</p>
              <p className="text-gray-700">{hotel.description}</p>
            </div>
          </a>
        ))}
      </section>

      {/* Render TripPlanner component */}
      <TripPlanner />
    </div>
  );
};

export default BookWithUs;
