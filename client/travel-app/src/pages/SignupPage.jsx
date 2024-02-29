import React, { useState } from 'react';
import Swal from 'sweetalert2';
import signupImage from '../images/homepage.jpg'; // Path to your signup image

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    role: 'user',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If it's a checkbox, update state accordingly
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      // If it's not a checkbox, update the state normally
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any required fields are empty
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone_number) {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please fill in all required fields.',
      });
      return;
    }
  
    // Check if password and confirmPassword match
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match. Please try again.',
      });
      return;
    }
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Registration successful
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'You have successfully registered.',
        }).then(() => {
          // Redirect to login page (replace '/login' with the actual path)
          window.location.href = '/login';
        });
      } else {
        // Handle registration failure
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'An error occurred during registration. Please try again.',
        });
      }
    } catch (error) {
      // Show generic error message
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again later.',
      });
    }
  };
  

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${signupImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div id='glass' className="container mx-auto max-w-md p-8 bg-opacity-75 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            {/* Add name input */}
            <label htmlFor="name" className="block text-gray-700">Name :</label>
            <input type="text" id="name" name="name" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email :</label>
            <input type="email" id="email" name="email" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password :</label>
            <input type="password" id="password" name="password" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password :</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          <div>
            {/* Add phone number input */}
            <label htmlFor="phone_number" className="block text-gray-700">Phone Number :</label>
            <input type="tel" id="phone_number" name="phone_number" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          {/* Add a checkbox for role selection */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is-admin"
              name="role"
              className="mr-2"
              checked={formData.role === 'admin'}
              onChange={() => handleInputChange({ target: { name: 'role', value: formData.role === 'admin' ? 'user' : 'admin', type: 'checkbox', checked: !formData.role }})}
            />
            <label htmlFor="is-admin" className="text-gray-700">Sign up as admin</label>
          </div>
          <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
