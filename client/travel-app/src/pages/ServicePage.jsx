import React, { useState } from 'react';
import AccommodationServiceForm from '../components/AccomodationServiceForm';
import TravelServiceForm from '../components/TravelServiceForm';
import CompanyProfile from '../components/CompanyProfile';
import CompanyServicesForm from '../components/CompanyAccomodationServices';
import CompanyTravelServicesForm from '../components/CompanyTravelServices';
import { FaUser } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Navbar from '../components/Navbar';

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
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <Navbar/>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Service Page</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Company Profile</h2>
            <CompanyProfile />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Accommodation Services
            </h2>
            <CompanyServicesForm />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Travel Services</h2>
            <CompanyTravelServicesForm />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col sm:flex-row m-4 sm:m-10 p-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
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
              <h2 className="text-xl font-semibold mb-2 cursor-pointer hover:underline">
                Travel Service Form
              </h2>
              {showTravelForm && <TravelServiceForm />}
              <button
                className={`bg-${
                  showTravelForm ? 'gray' : 'green'
                }-500 text-white font-bold py-2 px-4 rounded mt-2 w-full sm:w-auto flex items-center hover:underline`}
                onClick={toggleTravelForm}
              >
                {showTravelForm ? <FaTimes /> : 'Add Travel Service'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
