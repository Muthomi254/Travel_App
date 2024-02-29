import React, { useState } from 'react';
import AccommodationServiceForm from '../components/AccomodationServiceForm';
import TravelServiceForm from '../components/TravelServiceForm';

// import AccommodationServiceForm from '../context/accomodataion_service';
// import TravelServiceForm from '../context/travel_service';

const ServicePage = () => {
  const [showAccommodationForm, setShowAccommodationForm] = useState(false);
  const [showTravelForm, setShowTravelForm] = useState(false);

  const toggleAccommodationForm = () => {
    setShowAccommodationForm(!showAccommodationForm);
    setShowTravelForm(false); // Close the travel form if it's open
  };

  const toggleTravelForm = () => {
    setShowTravelForm(!showTravelForm);
    setShowAccommodationForm(false); // Close the accommodation form if it's open
  };

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-8">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-3xl font-bold m-4 sm:m-10 mb-8">Service Page</h1>
        <div className="flex flex-col sm:flex-row mb-8 m-4 sm:m-10 p-4 justify-center">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
            <h2
              className="text-xl font-semibold mb-2 cursor-pointer"
              onClick={toggleAccommodationForm}
            >
              Accommodation Service Form
            </h2>
            {showAccommodationForm && <AccommodationServiceForm />}
            <button
              className={`bg-${
                showAccommodationForm ? 'gray' : 'blue'
              }-500 hover:bg-${
                showAccommodationForm ? 'blue' : 'blue'
              }-700 text-white font-bold py-2 px-4 rounded mt-2 w-full sm:w-auto sm:mr-2`}
              onClick={toggleAccommodationForm}
            >
              {showAccommodationForm ? 'Close' : 'Add Accommodation Service'}
            </button>
          </div>
          <div className="w-full sm:w-1/2">
            <h2
              className="text-xl font-semibold mb-2 cursor-pointer"
              onClick={toggleTravelForm}
            >
              Travel Service Form
            </h2>
            {showTravelForm && <TravelServiceForm />}
            <button
              className={`bg-${
                showTravelForm ? 'gray' : 'green'
              }-500 hover:bg-${
                showTravelForm ? 'green' : 'green'
              }-700 text-white font-bold py-2 px-4 rounded mt-2 w-full sm:w-auto`}
              onClick={toggleTravelForm}
            >
              {showTravelForm ? 'Close' : 'Add Travel Service'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;