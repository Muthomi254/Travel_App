import React from 'react'
import TravelServiceForm from './TravelServiceForm'
import AddAccommodationServiceForm from './AddAccommodationServiceForm'
import AddCompanyForm from '../components/ AddCompanyForm'
import CompanyLoginForm from './CompanyLoginForm'
import CompanyRegistrationForm from './CompanyRegistrationForm'
import AddAccommodationForm from './AddAccommodationServiceForm'

const superuser = () => {
  return (
    <div>
      <CompanyRegistrationForm/>
      <CompanyLoginForm/>
      <AddCompanyForm/>
      <TravelServiceForm/>
      <AddAccommodationForm/>
    </div>
  )
}

export default superuser
