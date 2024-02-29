import React from "react";
import accommodationImage from "../images/homepage.jpg";
import imageUnderForm from "../images/formimage1.jpeg";
import { useBookingContext } from "../context/BookingContext";

const CheckoutPage = () => {
  const { travelReservations, accommodationReservations,initiateBooking } = useBookingContext();

  return(
  <div>
    <div className="hotel-details-page">
      {/* Hero Section with background image */}
      <div className="bg-gray-900 text-white py-48 px-4 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={accommodationImage}
            alt="Hotel Hero"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Content */}
      </div>

      {/* Transport Details Section */}
      <div className="relative max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-lg mt-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Reservation Table Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Your Reservations</h2>

            {/* Travel Reservations */}
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Travel Reservations
              </h3>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Travel Reservation ID</th>
                    <th className="border px-4 py-2">Service name</th>
                    <th className="border px-4 py-2">User Email</th>
                    <th className="border px-4 py-2">User ID</th>
                  </tr>
                </thead>
                <tbody>
                  {travelReservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td className="border px-4 py-2">{reservation.id}</td>
                      <td className="border px-4 py-2">
                        {reservation.travelling_reservation_id}
                      </td>
                      <td className="border px-4 py-2">
                        {reservation.travelling_service.name}
                      </td>
                      <td className="border px-4 py-2">
                        {reservation.user.email}
                      </td>
                      <td className="border px-4 py-2">
                        {reservation.user.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Button to update Travel Reservation */}
            </div>

            {/* Accommodation Reservations */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Accommodation Reservations
              </h3>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">
                      Accommodation Reservation ID
                    </th>
                    <th className="border px-4 py-2">Service Name</th>
                    <th className="border px-4 py-2">User Email</th>
                    <th className="border px-4 py-2">Net Price</th>
                  </tr>
                </thead>
                <tbody>
                  {accommodationReservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td className="border px-4 py-2">{reservation.id}</td>
                      <td className="border px-4 py-2">
                        {reservation.accomodation_reservation_id}
                      </td>
                      <td className="border px-4 py-2">
                        {reservation.accomodation_service.name}
                      </td>
                      <td className="border px-4 py-2">
                        {reservation.user.email}
                      </td>
                      <td className="border px-4 py-2">
                        {reservation.net_price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Button to update Accommodation Reservation */}
            </div>
            {/* Button to initiate booking */}
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={initiateBooking} // Corrected: Removed "this."
              >
                Book Now
              </button>
          </div>
        </div>
      </div>

      {/* Rectangle Container for Form Image */}
      <div className="relative max-w-4xl mx-auto py-8 px-4 bg-white rounded-lg shadow-lg -mt-6">
        {/* Main Content */}
        <div className="flex justify-center"></div>
        <div className="mt-8">
          <img
            src={imageUnderForm}
            alt="form"
            className="w-full h-auto rounded-lg"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </div>
  </div>
  );
};


export default CheckoutPage;
