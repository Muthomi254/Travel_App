import React, { useState } from 'react';
import AccommodationServiceForm from '../components/AccomodationServiceForm';
import TravelServiceForm from '../components/TravelServiceForm';
import CompanyProfile from '../components/CompanyProfile'; // Import the CompanyProfile component
import CompanyServicesForm from '../components/CompanyAccomodationServices'; // Import the CompanyServicesForm component
import CompanyTravelServicesForm from '../components/CompanyTravelServices'; // Import the CompanyTravelServicesForm component

import { FaUser } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa'; // Import the FontAwesome close icon

const ServicePage = () => {
  const [showAccommodationForm, setShowAccommodationForm] = useState(false);
  const [showTravelForm, setShowTravelForm] = useState(false);

  const toggleAccommodationForm = () => {
    setShowAccommodationForm(!showAccommodationForm);
    setShowTravelForm(false);
  };

  const toggleTravelForm = () => {
    setShowTravelForm(!showTravelForm);
    setShowAccommodationForm(false);
  };

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-3xl font-bold m-4 sm:m-10 mb-8">Service Page</h1>

        <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300  flex items-center">
          <CompanyProfile />
        </div>

        {/* Add the CompanyServicesForm component */}
        <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300">
          <CompanyServicesForm />
        </div>

        {/* Add the CompanyTravelServicesForm component */}
        <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300">
          <CompanyTravelServicesForm />
        </div>

        <div className="flex flex-col sm:flex-row m-4 sm:m-10 p-4">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <h2
              className="text-xl font-semibold mb-2 cursor-pointer hover:underline"
              onClick={toggleAccommodationForm}
            >
              Accommodation Service Form
            </h2>
            {showAccommodationForm && <AccommodationServiceForm />}
            <button
              className={`bg-${
                showAccommodationForm ? 'gray' : 'blue'
              }-500 text-white font-bold py-2 px-4 rounded mt-2 w-full sm:w-auto flex items-center hover:underline`}
              onClick={toggleAccommodationForm}
            >
              {showAccommodationForm ? (
                <FaTimes />
              ) : (
                'Add Accommodation Service'
              )}
            </button>
          </div>
          <div className="w-full sm:w-1/2">
            <h2
              className="text-xl font-semibold mb-2 cursor-pointer hover:underline"
              onClick={toggleTravelForm}
            >
              Travel Service Form
            </h2>
            {showTravelForm && <TravelServiceForm />}
            <button
              className={`bg-${
                showTravelForm ? 'gray-300' : 'green'
              }-500 text-white font-bold py-2 px-4 rounded mt-2 w-full sm:w-auto flex items-center hover:underline`}
              onClick={toggleTravelForm}
            >
              {showTravelForm ? <FaTimes /> : 'Add Travel Service'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
