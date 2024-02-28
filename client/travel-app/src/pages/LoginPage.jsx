import React from 'react';
import loginImage from '../images/homepage.jpg'; // Path to your login image

const LoginPage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${loginImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="container mx-auto max-w-md p-8 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700">Username :</label>
            <input type="text" id="username" name="username" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email :</label>
            <input type="email" id="email" name="email" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password :</label>
            <input type="password" id="password" name="password" className="w-full border rounded p-2 mt-1" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="login-as-user" name="login-as-user" className="mr-2" />
            <label htmlFor="login-as-user" className="text-gray-700">Login as user</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="login-as-company" name="login-as-company" className="mr-2" />
            <label htmlFor="login-as-company" className="text-gray-700">Login as company</label>
          </div>
          <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
