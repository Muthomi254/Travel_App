// import React, { useContext, useState } from 'react';
// import { CompanyAuthContext } from '../context/company_auth';
// import { AccommodationServiceContext } from '../context/accomodataion_service';

// const CompanyAccommodationServiceForm = () => {
//   const { company } = useContext(CompanyAuthContext);
//   const { services: allAccommodationServices, updateService } = useContext(
//     AccommodationServiceContext
//   );

//   // Filter accommodation services by company ID
//   const companyAccommodationServices = allAccommodationServices.filter(
//     (service) => service.company_id === company.id
//   );

//   const [updatedServiceData, setUpdatedServiceData] = useState({
//     id: '',
//     name: '',
//     location: '',
//     available_rooms: 0,
//     images: '',
//     price_per_night: 0,
//     average_rating: 0,
//   });

//   const handleUpdateClick = (service) => {
//     setUpdatedServiceData({
//       id: service.id,
//       name: service.name,
//       location: service.location,
//       available_rooms: service.available_rooms,
//       images: service.images,
//       price_per_night: service.price_per_night,
//       average_rating: service.average_rating,
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
//         location: '',
//         available_rooms: 0,
//         images: '',
//         price_per_night: 0,
//         average_rating: 0,
//       });
//     } catch (error) {
//       console.error('Failed to update service:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-4 rounded-md shadow-md">
//       <h2 className="text-2xl font-bold mb-4">
//         {/* Accommodation Services offered by {company.name} */}
//       </h2>
//       <ul>
//         {companyAccommodationServices.map((service) => (
//           <li
//             key={service.id}
//             className="mb-4 p-4 bg-white rounded-md shadow-md"
//           >
//             <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
//             <p className="mb-2">
//               <span className="font-semibold">Location:</span>
//               {service.location}
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold">Available Rooms:</span>
//               {service.available_rooms}
//             </p>
//             <img
//               src={service.images}
//               alt={service.name}
//               className="w-full rounded-md mb-2"
//             />{' '}
//             {/* Apply Tailwind classes to image */}
//             <p className="mb-2">
//               <span className="font-semibold">Price per Night:</span>{' '}
//               {service.price_per_night}
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold">Average Rating:</span>{' '}
//               {service.average_rating}
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
//           <div className="mb-2">
//             <label htmlFor="name" className="block">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={updatedServiceData.name}
//               onChange={handleInputChange}
//               className="border border-gray-400 rounded-md p-1 w-full"
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="location" className="block">
//               Location:
//             </label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={updatedServiceData.location}
//               onChange={handleInputChange}
//               className="border border-gray-400 rounded-md p-1 w-full"
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="available_rooms" className="block">
//               Available Rooms:
//             </label>
//             <input
//               type="number"
//               id="available_rooms"
//               name="available_rooms"
//               value={updatedServiceData.available_rooms}
//               onChange={handleInputChange}
//               className="border border-gray-400 rounded-md p-1 w-full"
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="images" className="block">
//               Images:
//             </label>
//             <input
//               type="text"
//               id="images"
//               name="images"
//               value={updatedServiceData.images}
//               onChange={handleInputChange}
//               className="border border-gray-400 rounded-md p-1 w-full"
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="price_per_night" className="block">
//               Price per Night:
//             </label>
//             <input
//               type="number"
//               id="price_per_night"
//               name="price_per_night"
//               value={updatedServiceData.price_per_night}
//               onChange={handleInputChange}
//               className="border border-gray-400 rounded-md p-1 w-full"
//             />
//           </div>
//           <div className="mb-2">
//             <label htmlFor="average_rating" className="block">
//               Average Rating:
//             </label>
//             <input
//               type="number"
//               id="average_rating"
//               name="average_rating"
//               value={updatedServiceData.average_rating}
//               onChange={handleInputChange}
//               className="border border-gray-400 rounded-md p-1 w-full"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-4 rounded-md"
//           >
//             Save
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default CompanyAccommodationServiceForm;



import React, { useContext, useState } from 'react';
import { CompanyAuthContext } from '../context/company_auth';
import { AccommodationServiceContext } from '../context/accomodataion_service';

const CompanyAccommodationServiceForm = () => {
  const { company } = useContext(CompanyAuthContext);
  const {
    services: allAccommodationServices,
    updateService,
    deleteService,
  } = useContext(AccommodationServiceContext);

  // Filter accommodation services by company ID
  const companyAccommodationServices = allAccommodationServices.filter(
    (service) => service.company_id === company.id
  );

  const [updatedServiceData, setUpdatedServiceData] = useState({
    id: '',
    name: '',
    location: '',
    available_rooms: 0,
    images: '',
    price_per_night: 0,
    average_rating: 0,
  });

  const handleUpdateClick = (service) => {
    setUpdatedServiceData({
      id: service.id,
      name: service.name,
      location: service.location,
      available_rooms: service.available_rooms,
      images: service.images,
      price_per_night: service.price_per_night,
      average_rating: service.average_rating,
    });
  };

  const handleDeleteClick = async (serviceId) => {
    try {
      await deleteService(serviceId);
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
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
        location: '',
        available_rooms: 0,
        images: '',
        price_per_night: 0,
        average_rating: 0,
      });
    } catch (error) {
      console.error('Failed to update service:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        {/* Accommodation Services offered by {company.name} */}
      </h2>
      <ul>
        {companyAccommodationServices.map((service) => (
          <li
            key={service.id}
            className="mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="mb-2">
              <span className="font-semibold">Location:</span>
              {service.location}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Available Rooms:</span>
              {service.available_rooms}
            </p>
            <img
              src={service.images}
              alt={service.name}
              className="w-full rounded-md mb-2"
            />{' '}
            {/* Apply Tailwind classes to image */}
            <p className="mb-2">
              <span className="font-semibold">Price per Night:</span>{' '}
              {service.price_per_night}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Average Rating:</span>{' '}
              {service.average_rating}
            </p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2"
              onClick={() => handleUpdateClick(service)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={() => handleDeleteClick(service.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {/* Update form */}
      {updatedServiceData.id && (
        <form onSubmit={handleSubmit} className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Update Service</h3>
          <div className="mb-2">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={updatedServiceData.name}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="location" className="block">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={updatedServiceData.location}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="available_rooms" className="block">
              Available Rooms:
            </label>
            <input
              type="number"
              id="available_rooms"
              name="available_rooms"
              value={updatedServiceData.available_rooms}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="images" className="block">
              Images:
            </label>
            <input
              type="text"
              id="images"
              name="images"
              value={updatedServiceData.images}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price_per_night" className="block">
              Price per Night:
            </label>
            <input
              type="number"
              id="price_per_night"
              name="price_per_night"
              value={updatedServiceData.price_per_night}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="average_rating" className="block">
              Average Rating:
            </label>
            <input
              type="number"
              id="average_rating"
              name="average_rating"
              value={updatedServiceData.average_rating}
              onChange={handleInputChange}
              className="border border-gray-400 rounded-md p-1 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default CompanyAccommodationServiceForm;