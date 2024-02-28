import React, { useContext, useState } from 'react';
import { TravelingServiceContext } from '../context/travel_service'; // Adjust import path
import moment from 'moment'; // Import Moment.js library


const TravelServiceForm = () => {
  const { createService } = useContext(TravelingServiceContext);
  const [formData, setFormData] = useState({
    name: '',
    seats: 0,
    departure_time: '',
    arrival_time: '',
    description: '',
    price: 0,
    departure_city: '',
    arrival_city: '',
    registration_number: '',
    image: '',
    vehicle_type: 'Planes',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submission
    if (
      !formData.name ||
      !formData.departure_city ||
      !formData.arrival_city ||
      !formData.registration_number
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.seats <= 0 || formData.price <= 0) {
      setError('Seats and price must be greater than 0.');
      return;
    }

    if (!formData.departure_time || !formData.arrival_time) {
      setError('Please select departure and arrival times.');
      return;
    }

    try {
      // Format datetime strings to match backend expectations using moment library
      const formattedData = {
        ...formData,
        departure_time: moment(formData.departure_time).format(
          'YYYY-MM-DDTHH:mm:ss'
        ),
        arrival_time: moment(formData.arrival_time).format(
          'YYYY-MM-DDTHH:mm:ss'
        ),
      };

      console.log('Creating new travel service:', formattedData);
      await createService(formattedData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create New Travel Service</h2>
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
          <span className="text-gray-700">Seats:</span>
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Departure Time:</span>
          <input
            type="datetime-local"
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Arrival Time:</span>
          <input
            type="datetime-local"
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Description:</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Price:</span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Departure City:</span>
          <input
            type="text"
            name="departure_city"
            value={formData.departure_city}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Arrival City:</span>
          <input
            type="text"
            name="arrival_city"
            value={formData.arrival_city}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Registration Number:</span>
          <input
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Image:</span>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Vehicle Type:</span>
          <select
            name="vehicle_type"
            value={formData.vehicle_type}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Planes">Planes</option>
            <option value="Buses">Buses</option>
            <option value="Cars">Cars</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Service
        </button>
      </form>
    </div>
  );
};

export default TravelServiceForm;
