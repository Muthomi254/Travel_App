import React, { useContext, useState, useEffect } from 'react';
import { CompanyAuthContext } from '../context/company_auth'; // Import CompanyAuthContext
import { TravelingServiceContext } from '../context/travel_service'; // Assuming correct import path



const CompanyTravelServiceForm = () => {
  const { company } = useContext(CompanyAuthContext); // Assuming you have a context for company authentication
  const { fetchTravelingService } = useContext(TravelingServiceContext);
  const [companyTravelServices, setCompanyTravelServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyTravelServices = async () => {
      try {
        const companyId = company.id; // Assuming company ID is available in the company object
        const services = await fetchTravelingService(companyId); // Fetch services related to the company
        setCompanyTravelServices(services);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCompanyTravelServices();
  }, [company, fetchTravelingService]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Company Travel Services</h2>
      <ul>
        {companyTravelServices.map((service) => (
          <li key={service.id}>
            <p>Name: {service.name}</p>
            <p>Departure Time: {service.departure_time}</p>
            <p>Arrival Time: {service.arrival_time}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyTravelServiceForm;