import React from 'react';
import signupImage from '../images/homepage.jpg'; // Path to your signup image

const SignupPage = () => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundImage: `url(${signupImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="container mx-auto max-w-md p-8 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">Username :</label>
            <input type="text" id="fullName" name="fullName" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email :</label>
            <input type="email" id="email" name="email" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password :</label>
            <input type="password" id="password" name="password" className="w-full border rounded p-2 mt-1" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password :</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full border rounded p-2 mt-1" />
          </div>
          <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded">Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
