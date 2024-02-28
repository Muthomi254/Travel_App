import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2';
import loginImage from '../images/homepage.jpg';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loginAsAdmin: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        loginAsAdmin: name === 'login-as-admin' ? checked : false,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const endpoint = formData.loginAsAdmin ? '/admin_login' : '/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful login, show success message
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in.',
        }).then(() => {
          // Redirect to the home page
          navigate('/');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred during login. Please try again later.',
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto max-w-md p-8 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input type="email" id="email" name="email" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input type="password" id="password" name="password" className="w-full border rounded p-2 mt-1" onChange={handleInputChange} />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="login-as-admin"
              name="login-as-admin"
              className="mr-2"
              checked={formData.loginAsAdmin}
              onChange={handleInputChange}
            />
            <label htmlFor="login-as-admin" className="text-gray-700">
              Login as admin
            </label>
          </div>
          <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
