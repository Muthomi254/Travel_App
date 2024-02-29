
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CheckoutPage from './pages/CheckOutPage';
import HotelDetailsPage from './pages/HotelDetailPage';
import TransportPage from './pages/TransportPage';
import TourPlanPage from './pages/TourPlanPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ServicePage from './pages/ServicePage'; // Import the ServicePage component
import CompanyLoginForm from './pages/CompanyLoginForm';
import CompanyRegistrationForm from './pages/CompanyRegistrationForm';


import { CompanyAuthContextProvider } from './context/company_auth';

import { TravelingServiceContextProvider } from './context/travel_service';
import { AccommodationServiceContextProvider } from './context/accomodataion_service';
import AboutUsPage from './pages/AboutUsPage';
import BookWithUs from './pages/BookWithUs';

ReactDOM.render(
  <React.StrictMode>
    <TravelingServiceContextProvider>
      <AccommodationServiceContextProvider>
        <CompanyAuthContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/hotel/:id" element={<HotelDetailsPage />} />
              <Route path="/transport" element={<TransportPage />} />
              <Route path="/tour-plan" element={<TourPlanPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/services" element={<ServicePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/book-us" element={<BookWithUs />} />
              <Route
                path="/company-registration"
                element={<CompanyRegistrationForm />}
              />
              <Route path="/company-login" element={<CompanyLoginForm />} />

              {/* Add the ServicePage route */}
            </Routes>
          </Router>
        </CompanyAuthContextProvider>
      </AccommodationServiceContextProvider>
    </TravelingServiceContextProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
