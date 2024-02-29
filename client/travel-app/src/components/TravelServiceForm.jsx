import React, { useContext, useState } from 'react';
import { TravelingServiceContext } from '../context/travel_service';
import moment from 'moment';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CompanyAuthContext } from '../context/company_auth';


const MySwal = withReactContent(Swal);

const TravelServiceForm = () => {
  const { company } = useContext(CompanyAuthContext);
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
    company_id: company.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.departure_city ||
      !formData.arrival_city ||
      !formData.registration_number
    ) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    if (formData.seats <= 0 || formData.price <= 0) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seats and price must be greater than 0.',
      });
      return;
    }

    if (!formData.departure_time || !formData.arrival_time) {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select departure and arrival times.',
      });
      return;
    }

    try {
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
      setFormData({
        // Reset form fields to initial state
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
      MySwal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Travel service created successfully.',
      });
    } catch (error) {
      console.log(error); // Log the error response
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data &&
        error.response.data.error === 'Registration number already exists'
      ) {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration number already exists.',
        });
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while creating the travel service.',
        });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-300 text-whiterounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create New Travel Service</h2>
      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
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
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Service
        </button>
      </form>
    </div>
  );
};

export default TravelServiceForm;
