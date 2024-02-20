

import React from "react";

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-gideonroman items-center justify-center mx-auto w-full">
        {/* Hero Section */}
        <div
          className="h-1/4 screen-top bg-cover bg-center relative"
          style={{
            backgroundImage: `url("./images/img_rectangle19290_767x1920.png")`,
            backgroundAttachment: `fixed`,
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Placeholder text */}
            <h1 className="text-white-A700 text-5xl md:text-6xl">
              Check Out
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-100 flex flex-col items-center justify-start py-10 w-full">
          {/* Checkout Form */}
          <div className="bg-gray-200 rounded-lg border border-gray-300 p-8  md:w-[90%]">
            {/* Placeholder text */}
            <h2 className="mb-6 text-4xl md:text-5xl text-center">
              Check Out Form
            </h2>
            {/* Placeholder text */}
            <p className="mb-6 text-lg text-center">
              Please fill out the form below to complete your booking.
            </p>
            <form className="flex flex-col gap-4 items-center w-full">
              {/* Placeholder input fields */}
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="block w-full border-gray-300 rounded-md mt-1"
              />
              {/* Placeholder input fields */}
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="block w-full border-gray-300 rounded-md mt-1"
              />
              {/* Placeholder input fields */}
              <input
                name="confirmEmail"
                placeholder="Confirm Email"
                type="email"
                className="block w-full border-gray-300 rounded-md mt-1"
              />
              {/* Placeholder input fields */}
              <input
                name="phone"
                placeholder="Phone"
                type="number"
                className="block w-full border-gray-300 rounded-md mt-1"
              />
              {/* Placeholder input fields */}
              <input
                name="date"
                placeholder="dd-mm-yy"
                className="block w-full border-gray-300 rounded-md mt-1"
              />
              {/* Placeholder input fields */}
              <input
                name="serviceType"
                placeholder="Service Type"
                className="block w-full border-gray-300 rounded-md mt-1"
              />
              {/* Placeholder button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Check Out
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default CheckoutPage;
