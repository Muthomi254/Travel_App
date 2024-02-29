// TravelingServiceContext.js

import React, { createContext, useState, useEffect } from 'react';

const TravelingServiceContext = createContext();

const TravelingServiceContextProvider = (props) => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all travel services on component mount
  useEffect(() => {
    const fetchTravelServices = async () => {
      try {
        console.log('Fetching travel services...');
        const response = await fetch('/travel');
        if (!response.ok) {
          throw new Error('Failed to fetch travel services');
        }
        const data = await response.json();
        console.log('Fetched travel services:', data.data);
        setServices(data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTravelServices();
  }, []);

  // Function to fetch traveling services by service ID
  const fetchTravelingService = async (serviceId) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('Access token not found in localStorage');
      }

      const response = await fetch(
        `/travel/${serviceId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch traveling service');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  // Create a new travel service
  const createService = async (serviceData) => {
    try {
      console.log('Creating new travel service:', serviceData);
      const response = await fetch('/travel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceData),
      });
      if (!response.ok) {
        throw new Error('Failed to create travel service');
      }
      const newData = await response.json();
      console.log('New travel service created:', newData.data);
      setServices([...services, newData.data]);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  // Update an existing travel service
  const updateService = async (serviceId, updatedServiceData) => {
    try {
      console.log('Updating travel service:', serviceId, updatedServiceData);
      const response = await fetch(
        `/travel/${serviceId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedServiceData),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to update travel service');
      }
      const updatedData = await response.json();
      console.log('Updated travel service:', updatedData.data);
      const updatedServices = services.map((service) =>
        service.id === serviceId ? updatedData.data : service
      );
      setServices(updatedServices);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  // Delete an existing travel service
  const deleteService = async (serviceId) => {
    try {
      console.log('Deleting travel service:', serviceId);
      const response = await fetch(
        `/travel/${serviceId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete travel service');
      }
      const deletedService = services.find(
        (service) => service.id === serviceId
      );
      const updatedServices = services.filter(
        (service) => service.id !== serviceId
      );
      setServices(updatedServices);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <TravelingServiceContext.Provider
      value={{
        services,
        error,
        createService,
        updateService,
        deleteService,
        fetchTravelingService,
      }}
    >
      {props.children}
    </TravelingServiceContext.Provider>
  );
};

export { TravelingServiceContext, TravelingServiceContextProvider };
