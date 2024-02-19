import React from 'react';
import TravelForm from './TravelForm';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col mx-16 my-12  ">
      <div className="text-slate-100 my-8  font-semibold">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Travel Website</h1>
        <p className="text-xl pt-3">No matter where you’re going to, we’ll take you there</p>
        <p className='text-md pt-2'>Embark on unforgettable journeys with us. Discover new horizons,<br/> experience vibrant cultures, and create lasting memories.<br/> Start your adventure today!"</p>
      </div>
      <TravelForm/>
    </div>
  );
};

export default Hero;
