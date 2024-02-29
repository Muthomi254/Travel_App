import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TravelServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    seats: 1,
    depurture_time: '',
    arrival_time: '',
    description: '',
    price: 0,
    depurture_city: '',
    arrival_city: '',
    registration_number: '',
    company_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/travel', formData);
      Swal.fire('Success!', 'Travel service added successfully.', 'success');
      setFormData({
        name: '',
        seats: 1,
        depurture_time: '',
        arrival_time: '',
        description: '',
        price: 0,
        depurture_city: '',
        arrival_city: '',
        registration_number: '',
        company_id: ''
      });
    } catch (error) {
      Swal.fire('Error!', 'Failed to add travel service.', 'error');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Travel Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="seats" className="block text-gray-700">Seats:</label>
          <input type="number" id="seats" name="seats" value={formData.seats} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="depurture_time" className="block text-gray-700">Depurture Time:</label>
          <input type="datetime-local" id="depurture_time" name="depurture_time" value={formData.depurture_time} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="arrival_time" className="block text-gray-700">Arrival Time:</label>
          <input type="datetime-local" id="arrival_time" name="arrival_time" value={formData.arrival_time} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description:</label>
          <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="depurture_city" className="block text-gray-700">Depurture City:</label>
          <input type="text" id="depurture_city" name="depurture_city" value={formData.depurture_city} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="arrival_city" className="block text-gray-700">Arrival City:</label>
          <input type="text" id="arrival_city" name="arrival_city" value={formData.arrival_city} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="registration_number" className="block text-gray-700">Registration Number:</label>
          <input type="text" id="registration_number" name="registration_number" value={formData.registration_number} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="company_id" className="block text-gray-700">Company ID:</label>
          <input type="text" id="company_id" name="company_id" value={formData.company_id} onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Service</button>
      </form>
    </div>
  );
};

export default TravelServiceForm;
