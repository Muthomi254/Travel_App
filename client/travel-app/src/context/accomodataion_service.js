


import React, { createContext, useState, useEffect } from 'react';


const AccommodationServiceContext = createContext();

const AccommodationServiceContextProvider = (props) => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccommodationServices = async () => {
      try {
        const response = await fetch('/accommodation', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch accommodation services');
        }
        const data = await response.json();
        setServices(data);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAccommodationServices();
  }, []);

  const fetchAccommodationService = async (serviceId) => {
    try {
      const response = await fetch(
        `/accommodation/${serviceId}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch accommodation service');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setError(error.message);
      return null;
    }
  };

  const createService = async (serviceData) => {
    try {
      const response = await fetch('/accommodation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(serviceData),
      });
      if (!response.ok) {
        throw new Error('Failed to create accommodation service');
      }
      const newService = await response.json();
      setServices([...services, newService]);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
    }
  };

  const updateService = async (serviceId, updatedServiceData) => {
    try {
      const response = await fetch(
        `/accommodation/${serviceId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(updatedServiceData),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to update accommodation service');
      }
      const updatedService = await response.json();
      const updatedServices = services.map((service) =>
        service.id === serviceId ? updatedService : service
      );
      setServices(updatedServices);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  const deleteService = async (serviceId) => {
    try {
      const response = await fetch(
        `/accommodation/${serviceId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to delete accommodation service');
      }
      const deletedService = services.find(
        (service) => service.id === serviceId
      );
      const updatedServices = services.filter(
        (service) => service.id !== serviceId
      );
      setServices(updatedServices);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message); // Set error message
    }
  };

  return (
    <AccommodationServiceContext.Provider
      value={{ services, error, createService, updateService, deleteService }}
    >
      {props.children}
    </AccommodationServiceContext.Provider>
  );
};

export { AccommodationServiceContext, AccommodationServiceContextProvider };



// // AccommodationServiceContext.js

// import React, { createContext, useState, useEffect } from 'react';

// const AccommodationServiceContext = createContext();

// const AccommodationServiceContextProvider = (props) => {
//   const [services, setServices] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch all accommodation services on component mount
//   useEffect(() => {
//     const fetchAccommodationServices = async () => {
//       try {
//         const response = await fetch('/accommodation', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch accommodation services');
//         }
//         const data = await response.json();
//         setServices(data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchAccommodationServices();
//   }, []);

//   // Create a new accommodation service
//   const createService = async (serviceData) => {
//     try {
//       const response = await fetch('/accommodation', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//         body: JSON.stringify(serviceData),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to create accommodation service');
//       }
//       const newService = await response.json();
//       setServices([...services, newService]);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Update an existing accommodation service
//   const updateService = async (serviceId, updatedServiceData) => {
//     try {
//       const response = await fetch(`/accommodation/${serviceId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//         body: JSON.stringify(updatedServiceData),
//       });
//       if (!response.ok) {
//         throw new Error('Failed to update accommodation service');
//       }
//       const updatedService = await response.json();
//       const updatedServices = services.map((service) =>
//         service.id === serviceId ? updatedService : service
//       );
//       setServices(updatedServices);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Delete an existing accommodation service
//   const deleteService = async (serviceId) => {
//     try {
//       const response = await fetch(`/accommodation/${serviceId}`, {
//         method: 'DELETE',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Failed to delete accommodation service');
//       }
//       const deletedService = services.find((service) => service.id === serviceId);
//       const updatedServices = services.filter((service) => service.id !== serviceId);
//       setServices(updatedServices);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <AccommodationServiceContext.Provider
//       value={{ services, error, createService, updateService, deleteService }}
//     >
//       {props.children}
//     </AccommodationServiceContext.Provider>
//   );
// };

// export { AccommodationServiceContext, AccommodationServiceContextProvider };