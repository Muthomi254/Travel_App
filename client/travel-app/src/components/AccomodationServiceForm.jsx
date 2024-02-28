import React, { useContext, useState } from 'react';
import { AccommodationServiceContext } from '../context/accomodataion_service';

const AccommodationServiceForm = () => {
  const { createService } = useContext(AccommodationServiceContext);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    available_rooms: 0,
    images: '',
    price_per_night: 0,
    average_rating: 0,
    company_id: 0,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createService(formData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Create New Accommodation Service
      </h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Location:</span>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Available Rooms:</span>
          <input
            type="number"
            name="available_rooms"
            value={formData.available_rooms}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Images:</span>
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Price per Night:</span>
          <input
            type="number"
            name="price_per_night"
            value={formData.price_per_night}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Average Rating:</span>
          <input
            type="number"
            name="average_rating"
            value={formData.average_rating}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        {/* <label className="block mb-2">
          <span className="text-gray-700">Company ID:</span>
          <input
            type="number"
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label> */}
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Create Service
        </button>
      </form>
    </div>
  );

};

export default AccommodationServiceForm;
