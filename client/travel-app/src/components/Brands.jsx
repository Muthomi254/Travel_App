import React from 'react';
import flyemiratesLogo from '../images/flyemirates.png';
import trivagoLogo from '../images/trivago.png';
import airbnbLogo from '../images/airbnb.png';
import turkishAirlinesLogo from '../images/turkish-airlines.png';
import swissLogo from '../images/swiss.png';

const Brands = () => {
  return (
    <div className="flex flex-wrap justify-around items-center py-4 mt-[100px] bg-white shadow-lg">
      <img src={flyemiratesLogo} alt="flyemirates" className="h-12 mb-4 sm:mb-0" />
      <img src={trivagoLogo} alt="trivago" className="h-12 mb-4 sm:mb-0" />
      <img src={airbnbLogo} alt="airbnb" className="h-12 mb-4 sm:mb-0" />
      <img src={turkishAirlinesLogo} alt="turkish airlines" className="h-12 mb-4 sm:mb-0" />
      <img src={swissLogo} alt="swiss" className="h-12 mb-4 sm:mb-0" />
    </div>
  );
};

export default Brands;
