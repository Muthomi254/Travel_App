import React from 'react';

class HotelDetailPage extends React.Component {
  render() {
    return (
      <div className="hotel-details-page">
        {/* Hero Section */}
        <div className="bg-gray-800 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Image */}
            <img src="hotel-hero-image.jpg" alt="Hotel Hero" className="mx-auto mb-4 rounded-lg" />
            {/* Hotel Name */}
            <h1 className="text-4xl font-bold">Hotel Name</h1>
            {/* Hotel Location */}
            <p className="text-lg">Hotel Location</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto py-8 px-4 flex">
          {/* Hotel Details */}
          <div className="w-2/3 pr-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">About the Hotel</h2>
              <p className="mb-4">Description of the hotel goes here...</p>
              <ul>
                <li>Facility 1</li>
                <li>Facility 2</li>
                <li>Facility 3</li>
                {/* Add more details as needed */}
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="w-1/3 pl-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Book Now</h2>
              <form>
                <label className="block mb-4">
                  Name:
                  <input type="text" name="name" className="block w-full border-gray-300 rounded-md mt-1" />
                </label>
                <label className="block mb-4">
                  Email:
                  <input type="email" name="email" className="block w-full border-gray-300 rounded-md mt-1" />
                </label>
                <label className="block mb-4">
                  Check-in Date:
                  <input type="date" name="checkInDate" className="block w-full border-gray-300 rounded-md mt-1" />
                </label>
                <label className="block mb-4">
                  Check-out Date:
                  <input type="date" name="checkOutDate" className="block w-full border-gray-300 rounded-md mt-1" />
                </label>
                {/* Add more input fields for booking details */}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelDetailPage;
