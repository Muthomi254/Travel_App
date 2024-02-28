import React, { useContext, useState } from 'react';
import { TravelingServiceContext } from './context/travel_service';

const TravelServiceForm = () => {
  const { createService } = useContext(TravelingServiceContext);
  const [formData, setFormData] = useState({
    name: '',
    seats: 1,
    departure_time: '',
    arrival_time: '',
    description: '',
    price: 0,
    departure_city: '',
    arrival_city: '',
    registration_number: '',
    image: '',
    vehicle_type: 'Planes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createService(formData);
  };

  return (
    <div>
      <h2>Create New Travel Service</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Seats:
          <input
            type="number"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          />
        </label>
        <label>
          Departure Time:
          <input
            type="datetime-local"
            name="departure_time"
            value={formData.departure_time}
            onChange={handleChange}
          />
        </label>
        <label>
          Arrival Time:
          <input
            type="datetime-local"
            name="arrival_time"
            value={formData.arrival_time}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Departure City:
          <input
            type="text"
            name="departure_city"
            value={formData.departure_city}
            onChange={handleChange}
          />
        </label>
        <label>
          Arrival City:
          <input
            type="text"
            name="arrival_city"
            value={formData.arrival_city}
            onChange={handleChange}
          />
        </label>
        <label>
          Registration Number:
          <input
            type="text"
            name="registration_number"
            value={formData.registration_number}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Vehicle Type:
          <select
            name="vehicle_type"
            value={formData.vehicle_type}
            onChange={handleChange}
          >
            <option value="Planes">Planes</option>
            <option value="Buses">Buses</option>
            <option value="Cars">Cars</option>
          </select>
        </label>
        <button type="submit">Create Service</button>
      </form>
    </div>
  );
};

export default TravelServiceForm;
