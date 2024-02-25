import React from 'react';
import TravelForm from './TravelForm';
import Brands from '../components/Brands';
import '../index.css';

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-auto flex flex-col mx-16 my-12  ">
      <div id='glass' className="text-slate-100 my-8  font-semibold  w-[50%] py-8 px-2 rounde-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Travel Website</h1>
        <p className="text-xl pt-3 text-orange-700">No matter where you’re going to, we’ll take you there</p>
        <p className='text-md pt-2 font-thin'>Embark on unforgettable journeys with us. Discover new horizons,<br/> experience vibrant cultures, and create lasting memories.<br/> Start your adventure today!"</p>
      </div>
      <TravelForm/>
      <Brands/>
    </div>
  );
};

export default Hero;
