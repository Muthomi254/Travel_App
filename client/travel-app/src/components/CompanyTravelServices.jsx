// import React, { useContext, useState } from 'react';
// import { CompanyAuthContext } from '../context/company_auth';
// import { TravelingServiceContext } from '../context/travel_service';

// const CompanyTravelServiceForm = () => {
//   const { company } = useContext(CompanyAuthContext);
//   const { services: allTravelServices, updateService } = useContext(
//     TravelingServiceContext
//   );

//   // Filter travel services by company ID
//   const companyTravelServices = allTravelServices.filter(
//     (service) => service.company_id === company.id
//   );

//   const [updatedServiceData, setUpdatedServiceData] = useState({
//     id: '',
//     name: '',
//     destination: '',
//     departure_date: '',
//     return_date: '',
//     price: 0,
//     available_seats: 0,
//   });

//   const handleUpdateClick = (service) => {
//     setUpdatedServiceData({
//       id: service.id,
//       name: service.name,
//       destination: service.destination,
//       departure_date: service.departure_date,
//       return_date: service.return_date,
//       price: service.price,
//       available_seats: service.available_seats,
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedServiceData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateService(updatedServiceData.id, updatedServiceData);
//       // Clear the form data after successful update
//       setUpdatedServiceData({
//         id: '',
//         name: '',
//         destination: '',
//         departure_date: '',
//         return_date: '',
//         price: 0,
//         available_seats: 0,
//       });
//     } catch (error) {
//       console.error('Failed to update service:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-4 rounded-md shadow-md">
//       <h2 className="text-2xl font-bold mb-4">
//         {/* Travel Services offered by {company.name} */}
//       </h2>
//       <ul>
//         {companyTravelServices.map((service) => (
//           <li
//             key={service.id}
//             className="mb-4 p-4 bg-white rounded-md shadow-md"
//           >
//             <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
//             <p className="mb-2">
//               <span className="font-semibold">Destination:</span>
//               {service.destination}
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold">Departure Date:</span>
//               {service.departure_date}
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold">Return Date:</span>
//               {service.return_date}
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold">Price:</span> {service.price}
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold">Available Seats:</span>{' '}
//               {service.available_seats}
//             </p>
//             <button
//               className="bg-blue-500 text-white py-2 px-4 rounded-md"
//               onClick={() => handleUpdateClick(service)}
//             >
//               Update
//             </button>
//           </li>
//         ))}
//       </ul>
//       {/* Update form */}
//       {updatedServiceData.id && (
//         <form onSubmit={handleSubmit} className="mt-4">
//           <h3 className="text-lg font-semibold mb-2">Update Service</h3>
//           {/* Input fields for updating service */}
//           {/* Similar to the CompanyAccommodationServiceForm */}
//         </form>
//       )}
//     </div>
//   );
// };

// export default CompanyTravelServiceForm;



import React, { useContext, useState } from 'react';
import { CompanyAuthContext } from '../context/company_auth';
import { TravelingServiceContext } from '../context/travel_service';
import TravelServiceForm from './TravelServiceForm'; // Import the TravelServiceForm component

const CompanyTravelServiceForm = () => {
  const { company } = useContext(CompanyAuthContext);
  const { services: allTravelServices, updateService } = useContext(
    TravelingServiceContext
  );

  // Filter travel services by company ID
  const companyTravelServices = allTravelServices.filter(
    (service) => service.company_id === company.id
  );

  const [updatedServiceData, setUpdatedServiceData] = useState({
    id: '',
    name: '',
    destination: '',
    departure_date: '',
    return_date: '',
    price: 0,
    available_seats: 0,
  });

  const handleUpdateClick = (service) => {
    setUpdatedServiceData({
      id: service.id,
      name: service.name,
      destination: service.destination,
      departure_date: service.departure_date,
      return_date: service.return_date,
      price: service.price,
      available_seats: service.available_seats,
    });
          console.log(service)

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateService(updatedServiceData.id, updatedServiceData);
      // Clear the form data after successful update
      setUpdatedServiceData({
        id: '',
        name: '',
        destination: '',
        departure_date: '',
        return_date: '',
        price: 0,
        available_seats: 0,
      });
    } catch (error) {
      console.error('Failed to update service:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {/* Travel Services offered by {company.name} */}
      </h2>
      <ul>
        {companyTravelServices.map((service) => (
          <li
            key={service.id}
            className="mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="mb-2">
              <span className="font-semibold">Destination:</span>
              {service.destination}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Departure Date:</span>
              {service.departure_date}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Return Date:</span>
              {service.return_date}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span> {service.price}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Available Seats:</span>{' '}
              {service.available_seats}
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => handleUpdateClick(service)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      {/* Update form */}
      {updatedServiceData.id && (
        <form onSubmit={handleSubmit} className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Update Service</h3>
          {/* Integrate TravelServiceForm component here */}
          <TravelServiceForm
            updatedServiceData={updatedServiceData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </form>
      )}
    </div>
  );
};

export default CompanyTravelServiceForm;
