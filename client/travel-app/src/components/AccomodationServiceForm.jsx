import React, { useContext, useState } from 'react';
import { AccommodationServiceContext } from './context/accomodataion_service';

const AccommodationServiceForm = () => {
  const { createService } = useContext(AccommodationServiceContext);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    available_rooms: 0,
    images: '',
    price_per_night: 0,
    average_rating: 0,
    company_id: 0,
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createService(formData);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Create New Accommodation Service</h2>
      {error && <p>{error}</p>}
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
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Available Rooms:
          <input
            type="number"
            name="available_rooms"
            value={formData.available_rooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Images:
          <input
            type="text"
            name="images"
            value={formData.images}
            onChange={handleChange}
          />
        </label>
        <label>
          Price per Night:
          <input
            type="number"
            name="price_per_night"
            value={formData.price_per_night}
            onChange={handleChange}
          />
        </label>
        <label>
          Average Rating:
          <input
            type="number"
            name="average_rating"
            value={formData.average_rating}
            onChange={handleChange}
          />
        </label>
        <label>
          Company ID:
          <input
            type="number"
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Service</button>
      </form>
    </div>
  );
};

export default AccommodationServiceForm;
