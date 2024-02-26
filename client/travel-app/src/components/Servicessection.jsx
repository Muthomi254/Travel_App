import React from "react";
import {
  FaPlane,
  FaHotel,
  FaUsers,
  FaMapMarked,
  FaCalendarCheck,
  FaArrowRight,
} from "react-icons/fa";
import sideimg from "../images/sideimg.jpg";
import sideimg2 from "../images/sideimg2.jpg";

const Servicessection = () => {
  return (
    <div className="my-4 py-4 mx-4 bg-slate-50">
      <div id="sec" className="relative w-full py-48 mt-6 h-auto ">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <h2 className="text-white text-4xl mx-6 font-bold bg-black/50 py-2 px-2 ">
            Let’s make your next holiday amazing
          </h2>
        </div>
      </div>
      <hr />
      <div className="flex items-center flex-col">
        <h3 className="font-bold text-[#DF6951] mt-6 text-xl">category</h3>
        <h1 className="text-4xl">We Offer Best Services</h1>
      </div>
      <div id="navbg" className="flex flex-wrap justify-center mt-8 gap-10">
        {[
          {
            icon: <FaPlane className="text-red-600" size={64} />,
            title: "Guided Tours",
            description: "Explore new destinations with our guided tours.",
          },
          {
            icon: <FaHotel className="text-orange-600" size={64} />,
            title: "Best Flights Options",
            description: "Find the best flight options for your journey.",
          },
          {
            icon: <FaUsers size={64} />,
            title: "Home away from Home",
            description: "Experience the comfort of home while traveling.",
          },
          {
            icon: <FaUsers className="text-blue-500" size={64} />,
            title: "fun with fam and friends",
            description:
              " Discover new horizons, experience vibrant cultures.",
          },
          // Add more services as needed
        ].map((service, index) => (
          <div
            key={index}
            className="w-72 mx-4 my-4 rounded-lg overflow-hidden transform transition-transform hover:scale-110"
          >
            <div className="h-24 flex items-center justify-center rounded-t-lg">
              {service.icon}
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold">{service.title}</h2>
              <p className="mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex items-center flex-row-reverse mt-4 mx-auto gap-10 my-4">
        <div className="w-full py-10">
          <h2 className="text-xl font-bold text-blue-300 ">Honeymoon Specials</h2>
          <h1 className="text-6xl ">Our Romantic Tropical <br /> Destinations</h1>
          <p className="mt-6 font-thin">
            Experience the allure of our exotic, sun-kissed locales, where lush
            landscapes and azure waters await. Indulge in intimate getaways
            designed for two, where every moment is infused with romance. From
            secluded beachfront retreats to luxurious island hideaways, our
            destinations offer the perfect setting for creating unforgettable
            memories with your loved one.
          </p>
          <div className="mt-8">
            <button className="bg-[#DF6951] py-2 px-4 rounded-full text-white">
              view packages
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={sideimg}
            alt="Sample"
            className="rounded-t-full"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse   mx-6 lg:flex-row-reverse lg:items-center py-8 px-4 lg:px-16 shadow-sm gap-8">
        <div className="lg:w-full">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Get Your Favourite Resort Bookings
          </h2>
          <div className="flex items-center mt-6 py-5">
            <FaMapMarked className="text-3xl text-red-200 mr-2" />
            <p className="text-lg font-thin">Choose Destination</p>
          </div>
          <div className="flex items-center mb-4 ">
            <FaCalendarCheck className="text-3xl text-blue-200 mr-2" />
            <p className="text-lg font-thin">Check Availability</p>
          </div>
          <div className="flex items-center mb-4">
            <FaArrowRight className="text-3xl text-black mr-2" />
            <p className="text-md font-bold">Let’s Go</p>
          </div>
        </div>
        <div className="">
          <img
            src={sideimg2}
            alt="Resort Mockup"
            className="rounded-lg shadow-xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="flex gap-8">
            <div className="relative max-w-xs rounded-xl overflow-hidden shadow-lg m-2">
              <img
                className="w-[500px] h-48 object-cover"
                src="https://images.unsplash.com/photo-1540280369237-dea08361593a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"
                alt="Restaurant"
              />
              <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 m-2 rounded-tr">
                $4500
              </div>
            </div>
            <div className="relative max-w-xs rounded-xl overflow-hidden shadow-lg m-2">
              <img
                className="w-[500px] h-48 object-cover"
                src="https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Restaurant"
              />
              <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 m-2 rounded-tr">
                $4500
              </div>
            </div>
            <div className="relative max-w-xs rounded-xl overflow-hidden shadow-lg m-2">
              <img
                className="w-[500px] h-48 object-cover"
                src="https://images.unsplash.com/photo-1661954864180-e61dea14208a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJpdmF0ZSUyMGpldCUyMGludGVyaW9yfGVufDB8fDB8fHww"
                alt="Restaurant"
              />
              <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 m-2 rounded-tr">
                $4500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicessection;
