// ServiceDetailsModal.js
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ServiceDetailsModal = ({ service, onClose, scrollToBottom }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    onClose();
    scrollToBottom(); // Call the scrollToBottom callback passed from TransportPage
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={handleClickOutside}>
      <div className="modal-container bg-white rounded-lg shadow-lg p-4">
        <img src={service.image} alt={service.name} className="w-40 h-24 rounded-md mx-auto mb-2" />
        <h3 className="text-xl font-bold font-serif text-center">{service.name}</h3>
        <p className="text-sm text-center">{service.description}</p>
        <div className="flex items-center justify-center">
          <p className="text-lg font-bold">${service.price}</p>
          <div className="flex items-center ml-2">
            <FaStar className="text-orange-500" /> {/* Use FaStar icon */}
            <p className="ml-1 text-lg">{service.rating}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div>
            <p className="font-semibold">Seats:</p>
            <p>{service.seats}</p>
          </div>
          <div>
            <p className="font-semibold">Departure Time:</p>
            <p>{service.departure_time}</p>
          </div>
          <div>
            <p className="font-semibold">Arrival Time:</p>
            <p>{service.arrival_time}</p>
          </div>
          <div>
            <p className="font-semibold">Departure City:</p>
            <p>{service.departure_city}</p>
          </div>
          <div>
            <p className="font-semibold">Arrival City:</p>
            <p>{service.arrival_city}</p>
          </div>
          <div>
            <p className="font-semibold">Registration Number:</p>
            <p>{service.registration_number}</p>
          </div>
          <div>
            <p className="font-semibold">Vehicle Type:</p>
            <p>{service.vehicle_type}</p>
          </div>
        </div>
        <button onClick={handleBookClick} className="bg-orange-500 text-white py-3 px-6 rounded mt-4 w-full">
          Book
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailsModal;
