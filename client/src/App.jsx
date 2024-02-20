import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HotelDetailsPage from './pages/HotelDetailPage';
import CheckoutPage from './pages/CheckOutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/hoteldetails" element={<HotelDetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> {/* Ensure CheckoutPage is imported and provided as the element */}
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
