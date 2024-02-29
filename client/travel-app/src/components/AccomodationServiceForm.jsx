import React, { useContext, useState } from 'react';
import { AccommodationServiceContext } from '../context/accomodataion_service';
import { CompanyAuthContext } from '../context/company_auth';

import Swal from 'sweetalert2';


const AccommodationServiceForm = () => {
   const { company} = useContext(CompanyAuthContext);
  const { createService } = useContext(AccommodationServiceContext);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    available_rooms: 0,
    images: '',
    price_per_night: 0,
    average_rating: 0,
    company_id: company.id,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (
      !formData.name ||
      !formData.location ||
      formData.available_rooms <= 0 ||
      formData.price_per_night <= 0
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    try {
      await createService(formData);
      setError(null);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Accommodation service created successfully.',
      });
      // Reset the form fields after successful submission
      setFormData({
        name: '',
        location: '',
        available_rooms: 0,
        images: '',
        price_per_night: 0,
        average_rating: 0,
        company_id: company.id,
      });
    } catch (error) {
      setError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while creating the accommodation service.',
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-md shadow-md bg-gray-300">
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

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-900 focus:outline-none focus:bg-orange-500"
        >
          Create Service
        </button>
      </form>
    </div>
  );
};

export default AccommodationServiceForm;
