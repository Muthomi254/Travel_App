import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import heroimage from '../images/hero.jpg';
import ServiceDetailsModal from './ServiceDetailsModal';

const TransportPage = () => {
  const [transportServices, setTransportServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    numberOfPeople: 0,
    service_id: '', // Change to service_id
    // Other form fields
  });
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchTransportServices = async () => {
      try {
        const response = await axios.get('/travel');
        setTransportServices(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching transport services.');
        setLoading(false);
      }
    };

    fetchTransportServices();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/reservations/travel', {
        people_included: formData.numberOfPeople,
        service_id: formData.service_id, // Use service_id instead of transportType
        // Add other fields if needed
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data.message); // Success message
      // Optionally, you can update state or perform other actions upon successful reservation creation
    } catch (error) {
      console.error('Error creating travel reservation:', error.response.data.error);
      // Handle error, show error message to user, etc.
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={heroimage} alt="Travel with us" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-serif">
          Travel with Us
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left side (Planes, Buses, Car) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Loop through transport services */}
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              transportServices.map(service => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-4" onClick={() => handleServiceClick(service)}>
                  <img src={service.image} alt={service.name} className="w-40 h-24 rounded-md mx-auto mb-2" />
                  <h3 className="text-xl font-bold font-serif text-center">{service.name}</h3>
                  <p className="text-sm text-center">{service.description}</p>
                  <div className="flex items-center justify-center">
                    <p className="text-lg font-bold">${service.price}</p>
                    <div className="flex items-center ml-2">
                      <FaStar className="text-orange-500" />
                      <p className="ml-1 text-lg">{service.rating}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div> 

     {/* Form at the bottom */}
<div className="container mx-auto px-4 lg:px-8 py-8">
  <h2 className="text-2xl font-bold mb-4">Book a Trip</h2>
  <p className="text-lg text-gray-600 mb-4 font-serif">
    Plan your next adventure with ease! Fill out the form below to check availability and book your trip.
  </p>
  <form onSubmit={handleFormSubmit} className="space-y-4">
    <select name="service_id" value={formData.service_id} onChange={handleInputChange} className="w-full border rounded p-3 bg-white">
      {/* Assuming the transport service ID is a number */}
      {transportServices.map(service => (
        <option key={service.id} value={service.id}>{service.name}</option>
      ))}
    </select>
    <input type="datetime-local" name="dateTime" className="w-full border rounded p-3 bg-white" />
    <input type="number" name="people_included" placeholder="Number of People" onChange={handleInputChange} className="w-full border rounded p-3 bg-white" /> {/* Changed name to match backend */}
    <div className="flex justify-between">
      <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">
        Availability
      </button>
      <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded" onClick={handleScrollToBottom}>
        Book
      </button>
    </div>
  </form>
</div>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <ServiceDetailsModal service={selectedService} onClose={() => setIsModalOpen(false)} scrollToBottom={handleScrollToBottom} />
      )}
    </div>
  );
};

export default TransportPage;
