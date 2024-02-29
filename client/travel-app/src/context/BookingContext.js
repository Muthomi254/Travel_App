import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserIdFromAccessToken } from './utils';

const BookingContext = createContext({
  travelReservations: [],
  accommodationReservations: [],
  userId: null,
  totalPrice: null,
});

export const useBookingContext = () => {
  return useContext(BookingContext);
};

const BookingProvider = ({ children, initialTotalPrice }) => {
  const [travelReservations, setTravelReservations] = useState([]);
  const [accommodationReservations, setAccommodationReservations] = useState([]);
  const [userId, setUserId] = useState(null);
  const [totalPrice, setTotalPrice] = useState(initialTotalPrice || null);

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    const userIdFromToken = getUserIdFromAccessToken(accessToken);

    if (userIdFromToken) {
      setUserId(userIdFromToken);
      fetchTravelReservations(userIdFromToken);
      fetchAccommodationReservations(userIdFromToken);
      fetchTotalPrice(userIdFromToken);
    }
  }, []);


  const fetchTravelReservations = (userId) => {
    fetch(`/bookings/travel/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTravelReservations(data);
      })
      .catch((error) => {
        console.error('Error fetching travel reservations:', error);
      });
  };
  
  const fetchAccommodationReservations = (userId) => {
    fetch(`/bookings/accommodation/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAccommodationReservations(data);
      })
      .catch((error) => {
        console.error('Error fetching accommodation reservations:', error);
      });
  };
  
  const fetchTotalPrice = () => {
    fetch(`/bookings/total-price`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTotalPrice(data.total_price);
      })
      .catch((error) => {
        console.error('Error fetching total price:', error);
      });
  };  
  
  const initiateBooking = async (data) => {
    // You can customize this function to handle the API call to initiate the booking
    try {
      const response = await fetch('/bookings/travel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Handle success
        console.log('Travel booking initiated successfully');
      } else {
        // Handle failure
        console.error('Failed to initiate travel booking');
      }
    } catch (error) {
      console.error('Error initiating travel booking:', error);
    }
  };
  return (
    <BookingContext.Provider value={{ travelReservations, accommodationReservations, userId, totalPrice, initiateBooking }}>
      {children}
    </BookingContext.Provider>
  );
};


export { BookingProvider };
