import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-14 mt-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl text-slate-500 font-mono mb-4">About Us</h3>
            <p className="text-black text-2xl font-thin">Discover the world with our travel services. We offer the best hotel and transport options for your journey.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-600">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-orange-500 hover:text-orange-700"><FaFacebook size={24} /></a>
              <a href="#" className="text-[#DF6951] hover:text-orange-700"><FaTwitter size={24} /></a>
              <a href="#" className="text-orange-500 hover:text-orange-700"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2024 Travel Co. All Rights Reserved.</p>
          <p>Designed with <span className="text-orange-500">&hearts;</span> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
