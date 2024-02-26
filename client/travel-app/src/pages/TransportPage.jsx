import React from 'react';
import heroimage from '../images/hero.jpg';
import planeImage1 from '../images/plane_image_1.jpg';
import planeImage2 from '../images/plane_image_2.jpg';
import busImage1 from '../images/bus_image_1.jpg';
import busImage2 from '../images/bus_image_2.jpg';
import carImage from '../images/car_image.jpg';
import fillerImage from '../images/filler.png'; 
import fillerImage2 from '../images/filler2.png';
import { FaStar } from 'react-icons/fa';

const TransportPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="hero-section" className="relative">
        <img src={heroimage} alt="Travel with us" className="w-full absolute top-0" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-serif text-4xl p-4">Travel with Us</div> 
      </div>

      {/* Main Content */}
      <div className="flex justify-between mt-8">
        {/* Left side (Planes, Buses, Car) */}
        <div id="transport-options" className="w-2/3 flex flex-col justify-between pr-8 pl-10"> 
          {/* Plane Section */}
          <h2 className="text-3xl font-bold mb-4">Planes</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              {/* Plane 1 */}
              <div id="plane1" className="transport-container w-1/3 flex flex-col items-center">
                {/* Plane 1 Image */}
                <img src={planeImage1} alt="Plane" className="w-12 h-12 mb-2 rounded-full" />
                <div>
                  {/* Plane 1 Title */}
                  <h3 className="text-xl font-bold font-serif">Emirates</h3> 
                  {/* Plane 1 Description */}
                  <p className="text-sm">Experience luxury travel with Emirates, offering top-notch service and comfort for your journey.</p>  
                  <div className="flex items-center">
                    {/* Plane 1 Price */}
                    <p className="text-lg">$1,100</p> 
                    <div className="flex items-center ml-2">
                      {/* Plane 1 Rating */}
                      <FaStar className="text-orange-500" />
                      <p className="ml-1 text-lg">5.0</p> 
                    </div>
                  </div>
                </div>
              </div>
              {/* Plane 2 */}
              <div id="plane2" className="transport-container w-1/3 flex flex-col items-center">
                {/* Plane 2 Image */}
                <img src={planeImage2} alt="Plane" className="w-12 h-12 mb-2" />
                <div>
                  {/* Plane 2 Title */}
                  <h3 className="text-xl font-bold font-serif">Delta Airlines</h3> 
                  {/* Plane 2 Description */}
                  <p className="text-sm">Travel with Delta Airlines for a reliable and comfortable flying experience.</p> 
                  <div className="flex items-center">
                    {/* Plane 2 Price */}
                    <p className="text-lg">$1,200</p> 
                    <div className="flex items-center ml-2">
                      {/* Plane 2 Rating */}
                      <FaStar className="text-orange-500" />
                      <p className="ml-1 text-lg">4.5</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bus Section */}
          <h2 className="text-3xl font-bold mb-4">Buses</h2>
          <div className="mb-">
            <div className="flex justify-between mb-4">
              {/* Bus 1 */}
              <div id="bus1" className="transport-container w-1/3 flex flex-col items-center">
                {/* Bus 1 Image */}
                <img src={busImage1} alt="Bus" className="w-12 h-12 mb-2" />
                <div>
                  {/* Bus 1 Title */}
                  <h3 className="text-xl font-bold font-serif">Greyhound</h3> 
                  {/* Bus 1 Description */}
                  <p className="text-sm">Experience convenient travel with Greyhound, offering bus routes across the country.</p> 
                  <div className="flex items-center">
                    {/* Bus 1 Price */}
                    <p className="text-lg">$500</p> 
                    <div className="flex items-center ml-2">
                      {/* Bus 1 Rating */}
                      <FaStar className="text-orange-500" />
                      <p className="ml-1 text-lg">4.0</p> 
                    </div>
                  </div>
                </div>
              </div>
              {/* Bus 2 */}
              <div id="bus2" className="transport-container w-1/3 flex flex-col items-center">
                {/* Bus 2 Image */}
                <img src={busImage2} alt="Bus" className="w-12 h-12 mb-2" />
                <div>
                  {/* Bus 2 Title */}
                  <h3 className="text-xl font-bold font-serif">Megabus</h3> 
                  {/* Bus 2 Description */}
                  <p className="text-sm">Travel affordably with Megabus, offering low-cost bus tickets to various destinations.</p> 
                  <div className="flex items-center">
                    {/* Bus 2 Price */}
                    <p className="text-lg">$400</p> 
                    <div className="flex items-center ml-2">
                      {/* Bus 2 Rating */}
                      <FaStar className="text-orange-500" />
                      <p className="ml-1 text-lg">4.2</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Car Section */}
          <h2 className="text-3xl font-bold mb-2">Cars</h2>
          <div id="car" className="transport-container w-1/3 flex flex-col items-center mx-auto"> 
            {/* Car Image */}
            <img src={carImage} alt="Car" className="w-12 h-12 mb-2" />
            <div>
              {/* Car Title */}
              <h3 className="text-xl font-bold font-serif">Budget Rent a Car</h3> 
              {/* Car Description */}
              <p className="text-sm">Rent a car from Budget for flexible and convenient travel options.</p> 
              <div className="flex items-center">
                {/* Car Price */}
                <p className="text-lg">$800</p> 
                <div className="flex items-center ml-2">
                  {/* Car Rating */}
                  <FaStar className="text-orange-500" />
                  <p className="ml-1 text-lg">4.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Booking Form) */}
        <div className="w-1/3 bg-gray-200 p-4 rounded booking-form mr-10">
          <h2 className="text-2xl font-bold mb-4">Book a Trip</h2>
          <p className="text-lg text-gray-600 mb-4 font-serif">Plan your next adventure with ease! Fill out the form below to check availability and book your trip.</p> 
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Name" className="w-full border rounded p-3" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" className="w-full border rounded p-3" />
            </div>
            <div className="mb-4">
              <input type="tel" placeholder="Phone" className="w-full border rounded p-3" />
            </div>
            <div className="mb-4">
              <input type="date" className="w-full border rounded p-3" />
            </div>
            <div className="mb-4">
              <input type="number" placeholder="Number of People" className="w-full border rounded p-3" />
            </div>
            
            <div className="flex justify-between">
              <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">Availability</button>
              <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">Book</button>
            </div>
          </form>
        </div>
      </div>

      {/* Filler Images */}
      <div className="flex justify-between mt-4">
        <img src={fillerImage} alt="Filler" className="w-full max-w-sm h-auto order-2" />
        <img src={fillerImage2} alt="Filler" className="w-full max-w-sm h-auto order-1" />
      </div>
    </div>
  );
};

export default TransportPage;
