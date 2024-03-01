import React, { useContext } from 'react';
import { CompanyAuthContext } from '../context/company_auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const CompanyProfile = () => {
  const { company, error } = useContext(CompanyAuthContext);

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border shadow-xl rounded shadow-md flex items-center bg-white">
      <div className="mr-4">
        <FontAwesomeIcon
          className="text-slate-400"
          icon={faUserCircle}
          size="3x"
        />
      </div>
      <div>
        {error && <p className="text-red-500">{error}</p>}
        {company && (
          <div className="py-4 px-2">
            <h2 className="text-lg mb-4">{company.name}'s Profile</h2>
            <p className="text-md">
              <span className="font-semibold">ID:</span> {company.id}
            </p>
            <p className="text-md">
              <span className="font-semibold">Email:</span> {company.email}
            </p>
            <p className="text-md">
              <span className="font-semibold">Description:</span>{' '}
              {company.description}
            </p>
            <p className="text-md">
              <span className="font-semibold">Category:</span>{' '}
              {company.category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfile;
