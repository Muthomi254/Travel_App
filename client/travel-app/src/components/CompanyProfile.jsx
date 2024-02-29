import React, { useContext } from 'react';
import { CompanyAuthContext } from '../context/company_auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const CompanyProfile = () => {
  const { company, error } = useContext(CompanyAuthContext); // Using company and error states from the authentication context

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border border-gray-300 rounded shadow-md flex items-center">
      <div className="mr-4">
        <FontAwesomeIcon icon={faUserCircle} size="3x" />
      </div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {company && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              {company.name}'s Profile
            </h2>
            <p>
              <span className="font-bold">ID:</span> {company.id}
            </p>
            <p>
              <span className="font-bold">Email:</span> {company.email}
            </p>
            <p>
              <span className="font-bold">Description:</span>{' '}
              {company.description}
            </p>
            <p>
              <span className="font-bold">Category:</span> {company.category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;