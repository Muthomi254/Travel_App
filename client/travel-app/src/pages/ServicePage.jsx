import React from 'react';
import AccommodationServiceForm from '../components/AccomodationServiceForm';
import TravelServiceForm from '../components/TravelServiceForm';

// import AccommodationServiceForm from '../context/accomodataion_service';
// import TravelServiceForm from '../context/travel_service';

const ServicePage = () => {
  return (
    <div>
      <h1>Service Page</h1>
      <div>
        <h2>Accommodation Service Form</h2>
        <AccommodationServiceForm />
      </div>
      <div>
        <h2>Travel Service Form</h2>
        <TravelServiceForm />
      </div>
    </div>
  );
};

export default ServicePage;