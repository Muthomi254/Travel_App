import React from 'react';
import AccommodationServiceForm from './context/accomodataion_service';
import TravelServiceForm from './context/travel_service';

const ServicePage = () => {
  return (
    <div>
      <h1>Service Page</h1>
      <AccommodationServiceForm />
      <TravelServiceForm />
    </div>
  );
};

export default ServicePage;
