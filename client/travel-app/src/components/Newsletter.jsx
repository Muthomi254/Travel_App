import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    setTimeout(() => {
      toast.success('Subscribed successfully!', {
        position: 'top-center',
        autoClose: 2000,
      });
      setEmail('');
    }, 1000);
  };

  return (
    <div className="relative mx-4 md:mx-auto md:max-w-xl bg-white shadow-xl p-8 rounded-lg flex justify-center flex-col items-center my-6 py-6">
      <h2 className="text-2xl font-bold mb-4 py-4">Subscribe to our Newsletter</h2>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Your email address"
          className="border bg-gray-100 border-black text-black rounded-md py-2 px-4 md:py-4 md:px-8 w-full md:w-auto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded-md md:ml-2"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <p className="text-gray-600 text-sm mt-2 md:text-orange-800 md:mt-4">
        Subscribe to receive updates on our latest travel deals and promotions.
      </p>
      <ToastContainer />
    </div>
  );
};

export default Newsletter;
