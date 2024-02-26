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

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/hotel/:id" element={<HotelDetailsPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/tour-plan" element={<TourPlanPage />} />
        <Route path="/login" element={<LoginPage />} />  
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
