import React, { useState } from 'react';
import axios from 'axios';

const AccommodationServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    available_rooms: 0,
    images: '',
    price_per_night: 0,
    average_rating: 0,
    company_id: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming the JWT token is stored in localStorage
      const response = await axios.post('/api/accommodation', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,

        },
      });
      console.log(response.data);
      // Reset form data after successful submission
      setFormData({
        name: '',
        location: '',
        available_rooms: 0,
        images: '',
        price_per_night: 0,
        average_rating: 0,
        company_id: 0,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-4">Create Accommodation Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="available_rooms" className="block text-sm font-medium text-gray-700">
            Available Rooms
          </label>
          <input
            type="number"
            id="available_rooms"
            name="available_rooms"
            value={formData.available_rooms}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            Images
          </label>
          <input
            type="text"
            id="images"
            name="images"
            value={formData.images}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price_per_night" className="block text-sm font-medium text-gray-700">
            Price per Night
          </label>
          <input
            type="number"
            id="price_per_night"
            name="price_per_night"
            value={formData.price_per_night}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="average_rating" className="block text-sm font-medium text-gray-700">
            Average Rating
          </label>
          <input
            type="number"
            id="average_rating"
            name="average_rating"
            value={formData.average_rating}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="company_id" className="block text-sm font-medium text-gray-700">
            Company ID
          </label>
          <input
            type="number"
            id="company_id"
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Service
        </button>
      </form>
    </div>
  );
};

export default AccommodationServiceForm;